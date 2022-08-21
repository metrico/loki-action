"use strict";
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
function fetchJobs(httpClient, repo, runId, allowList) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${githubAPIUrl}/repos/${repo}/actions/runs/${runId}/jobs`;
        const res = yield httpClient.get(url);
        if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
            throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
        }
        const body = yield res.readBody();
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
    });
}
exports.fetchJobs = fetchJobs;
function fetchLogs(httpClient, repo, job) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${githubAPIUrl}/repos/${repo}/actions/jobs/${job.id}/logs`;
        const res = yield httpClient.get(url);
        if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
            throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
        }
        const body = yield res.readBody();
        return body.split("\n");
    });
}
exports.fetchLogs = fetchLogs;
