"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.getCommaSeparatedInput = void 0;
const core = __importStar(require("@actions/core"));
const process = __importStar(require("process"));
const gh = __importStar(require("./github"));
const defaultIndex = "logs-generic-default";
// Split comma separated inputs into an array of trimmed values
function getCommaSeparatedInput(value) {
    let retVal = [];
    if (value !== "") {
        retVal = value.split(",");
        // trim array items
        retVal = retVal.map((s) => s.trim());
    }
    return retVal;
}
exports.getCommaSeparatedInput = getCommaSeparatedInput;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // retrieve config params
            // Github repo token
            const repoToken = core.getInput("repo-token", { required: true });
            // List of jobs to collect logs from (all jobs when empty)
            const jobNames = core.getInput("job-names", { required: false }) || "";
            const allowList = getCommaSeparatedInput(jobNames);
            // LogQL Push endpoint
            const endpoint = core.getInput("endpoint", { required: false }) || "";
            // LogQL endpoints (when endpoint is not present)
            const addrValue = core.getInput("addresses", { required: false }) || "";
            const addresses = getCommaSeparatedInput(addrValue);
            // LogQL partition ID
            const partitionId = core.getInput("partition", { required: false });
            // logql user
            const username = core.getInput("username", { required: false });
            // logql pass
            const password = core.getInput("password", { required: false });
            // Ensure either endpoint or addresses are set
            if (endpoint === "" && addresses.length === 0) {
                throw new Error("invalid configuration: please set either endpoint or addresses");
            }
            // get an authenticated HTTP client for the GitHub API
            const client = gh.getClient(repoToken);
            // get all the jobs for the current workflow
            const workflowId = process.env["GITHUB_RUN_ID"] || "";
            const repo = process.env["GITHUB_REPOSITORY"] || "";
            core.debug(`Allow listing ${allowList.length} jobs in repo ${repo}`);
            const jobs = yield gh.fetchJobs(client, repo, workflowId, allowList);
            // Initialize LogQL sender [TODO]
            // get the logs for each job
            core.debug(`Getting logs for ${jobs.length} jobs`);
            for (const j of jobs) {
                const lines = yield gh.fetchLogs(client, repo, j);
                core.debug(`Fetched ${lines.length} lines for job ${j.name}`);
                for (const l of lines) {
                    console.log(l);
                }
            }
        }
        catch (e) {
            core.setFailed(`Run failed: ${e}`);
        }
    });
}
exports.run = run;
