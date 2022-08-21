"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLogs = exports.fetchJobs = exports.getClient = void 0;
const http_client_1 = require("@actions/http-client");
const githubAPIUrl = "https://api.github.com";
function getClient(ghToken) {
    return new http_client_1.HttpClient("gh-http-client", [], {
        headers: {
            Authorization: `token ${ghToken}`,
            "Content-Type": "application/json",
        },
    });
}
exports.getClient = getClient;
async function fetchJobs(httpClient, repo, runId, allowList) {
    const url = `${githubAPIUrl}/repos/${repo}/actions/runs/${runId}/jobs`;
    const res = await httpClient.get(url);
    if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
        throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
    }
    const body = await res.readBody();
    const jobs = [];
    const all = allowList.length === 0;
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
exports.fetchJobs = fetchJobs;
async function fetchLogs(httpClient, repo, job) {
    const url = `${githubAPIUrl}/repos/${repo}/actions/jobs/${job.id}/logs`;
    const res = await httpClient.get(url);
    if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
        throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
    }
    const body = await res.readBody();
    return body.split("\n");
}
exports.fetchLogs = fetchLogs;
