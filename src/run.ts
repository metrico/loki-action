/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as core from "@actions/core";
import { HttpClient } from "@actions/http-client";
import * as process from "process";
import * as gh from "./github";
import pino from "pino";
import { LogWorkerOptions } from "pino-loki-transport";
import path = require('path')
// Split comma separated inputs into an array of trimmed values
export function getCommaSeparatedInput(value: string): string[] {
  let retVal: string[] = [];
  if (value !== "") {
    retVal = value.split(",");
    // trim array items
    retVal = retVal.map((s) => s.trim());
  }

  return retVal;
}

export async function run(): Promise<void> {
  try {
    // retrieve config params

    // Github repo token
    const repoToken: string = core.getInput("repo-token", { required: true });
    // List of jobs to collect logs from (all jobs when empty)
    const jobNames: string =
      core.getInput("job-names", { required: false }) || "";
    const allowList = getCommaSeparatedInput(jobNames);
    // LogQL Push endpoint
    const endpoint: string =
      core.getInput("endpoint", { required: false }) || "";
    // LogQL endpoints (when endpoint is not present)
    const addrValue: string =
      core.getInput("addresses", { required: false }) || "";
    const addresses = getCommaSeparatedInput(addrValue);
    // LogQL partition ID
    const partitionId: string = core.getInput("partition", { required: false });
    // logql user
    const username: string = core.getInput("username", { required: false });
    // logql pass
    const password: string = core.getInput("password", { required: false });

    // Ensure either endpoint or addresses are set
    if (endpoint === "" && addresses.length === 0) {
      throw new Error(
        "invalid configuration: please set either endpoint or addresses"
      );
    }

    // get an authenticated HTTP client for the GitHub API
    const client: HttpClient = gh.getClient(repoToken);

    // get all the jobs for the current workflow
    const workflowId: string = process.env["GITHUB_RUN_ID"] || "";
    const repo: string = process.env["GITHUB_REPOSITORY"] || "";
    core.debug(`Allow listing ${allowList.length} jobs in repo ${repo}`);
    const jobs: gh.Job[] = await gh.fetchJobs(
      client,
      repo,
      workflowId,
      allowList
    );
    
    const target = path.resolve(__dirname,'./dist/worker.js');

    // Initialize LogQL sender [TODO]
    const logger = pino({
      transport: {
        target,
        options: {
          lokiUrl: "http://{{loki server ip address}}",
        } as LogWorkerOptions,
      },
    });

    // get the logs for each job
    core.debug(`Getting logs for ${jobs.length} jobs`);
    for (const j of jobs) {
      const lines: string[] = await gh.fetchLogs(client, repo, j);
      core.debug(`Fetched ${lines.length} lines for job ${j.name}`);
      for (const l of lines) {
        // Ship logs to LogQL
        // core.debug(`${l}`);
        logger.info(l);
      }
    }
  } catch (e) {
    core.setFailed(`Run failed: ${e}`);
  }
}
