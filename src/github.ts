import { HttpClient, HttpClientResponse } from "@actions/http-client";

const githubAPIUrl = "https://api.github.com";

export interface Job {
  id: number;
  name: string;
}

export function getClient(ghToken: string): HttpClient {
  return new HttpClient("gh-http-client", [], {
    headers: {
      Authorization: `token ${ghToken}`,
      "Content-Type": "application/json",
    },
  });
}

export async function fetchJobs(
  httpClient: HttpClient,
  repo: string,
  runId: string,
  allowList: string[]
): Promise<Job[]> {
  const url = `${githubAPIUrl}/repos/${repo}/actions/runs/${runId}/jobs`;
  const res: HttpClientResponse = await httpClient.get(url);

  if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
    throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
  }

  const body: string = await res.readBody();
  const jobs: Job[] = [];
  const all: boolean = allowList.length === 0;
  for (const j of JSON.parse(body).jobs) {
    // if there's an allow list, skip job accordingly
    if (!all && !allowList.includes(j.name)) {
      continue;
    }

    jobs.push({
      id: j.id,
      name: j.name,
    });
  }

  return jobs;
}

export async function fetchLogs(
  httpClient: HttpClient,
  repo: string,
  job: Job
): Promise<string[]> {
  const url = `${githubAPIUrl}/repos/${repo}/actions/jobs/${job.id}/logs`;
  const res: HttpClientResponse = await httpClient.get(url);

  if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
    throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
  }

  const body: string = await res.readBody();
  return body.split("\n");
}
