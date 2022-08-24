import { expect, test } from "@jest/globals";
import { Job, fetchJobs, fetchLogs } from "../src/github";
import { HttpClient, HttpClientResponse } from "@actions/http-client";
import { IncomingMessage } from "http";
import { mock, instance, when, anything, reset, capture } from "ts-mockito";
import jobsJson from "./jobs.json";

let mockedHttpClient = mock(HttpClient);
let mockedResponse = mock(HttpClientResponse);
let mockedMessage = mock(IncomingMessage);

describe("Test jobs list retrieval", () => {
  beforeEach(() => {
    reset(mockedHttpClient);
    reset(mockedResponse);
    reset(mockedMessage);
  });

  afterEach(() => {});

  test("Retrieve the list of jobs", async () => {
    when(mockedMessage.statusCode).thenReturn(200);
    when(mockedResponse.message).thenReturn(instance(mockedMessage));
    when(mockedResponse.readBody()).thenResolve(JSON.stringify(jobsJson));
    when(mockedHttpClient.get(anything())).thenResolve(
      instance(mockedResponse)
    );

    let jobs = await fetchJobs(
      instance(mockedHttpClient),
      "masci/foo",
      "123",
      []
    );
    const expected = [
      {
        id: 3734144061,
        name: "test",
      },
      {
        id: 3734144148,
        name: "e2e",
      },
    ];
    expect(jobs).toEqual(expected);

    // also verify the url used in the HTTP request (first param passed to get)
    const url = capture(mockedHttpClient.get).last()[0];
    expect(url).toEqual(
      "https://api.github.com/repos/masci/foo/actions/runs/123/jobs"
    );
  });

  test("Cannot retrieve the list of jobs", async () => {
    when(mockedMessage.statusCode).thenReturn(404);
    when(mockedMessage.statusMessage).thenReturn("foo has baz");
    when(mockedResponse.message).thenReturn(instance(mockedMessage));
    when(mockedHttpClient.get(anything())).thenResolve(
      instance(mockedResponse)
    );

    try {
      await fetchJobs(instance(mockedHttpClient), "masci/foo", "123", []);
    } catch (error) {
      expect(String(error)).toMatch("HTTP request failed: foo has baz");
    }
  });

  test("Filter jobs by name", async () => {
    when(mockedMessage.statusCode).thenReturn(200);
    when(mockedResponse.message).thenReturn(instance(mockedMessage));
    when(mockedResponse.readBody()).thenResolve(JSON.stringify(jobsJson));
    when(mockedHttpClient.get(anything())).thenResolve(
      instance(mockedResponse)
    );

    let jobs = await fetchJobs(instance(mockedHttpClient), "masci/foo", "123", [
      "e2e",
    ]);
    const expected = [
      {
        id: 3734144148,
        name: "e2e",
      },
    ];
    expect(jobs).toEqual(expected);
  });
});

describe("Test logs retrieval", () => {
  beforeEach(() => {
    reset(mockedHttpClient);
    reset(mockedResponse);
    reset(mockedMessage);
  });

  afterEach(() => {});

  test("Retrieve the logs", async () => {
    const output = `2021-09-28T15:02:00.3780475Z ##[group]Virtual Environment
2021-09-28T15:02:00.3781127Z Environment: ubuntu-20.04
2021-09-28T15:02:00.3781638Z Version: 20210919.1`;
    when(mockedMessage.statusCode).thenReturn(200);
    when(mockedResponse.message).thenReturn(instance(mockedMessage));
    when(mockedResponse.readBody()).thenResolve(output);
    when(mockedHttpClient.get(anything())).thenResolve(
      instance(mockedResponse)
    );

    const lines = await fetchLogs(instance(mockedHttpClient), "masci/foo", {
      id: 3734144061,
      name: "test",
    });
    expect(lines.length).toBe(3);
    expect(lines[2]).toMatch(
      `2021-09-28T15:02:00.3781638Z Version: 20210919.1`
    );
  });

  test("Cannot retrieve the logs", async () => {
    when(mockedMessage.statusCode).thenReturn(404);
    when(mockedMessage.statusMessage).thenReturn("foo has baz");
    when(mockedResponse.message).thenReturn(instance(mockedMessage));
    when(mockedHttpClient.get(anything())).thenResolve(
      instance(mockedResponse)
    );

    try {
      await fetchLogs(instance(mockedHttpClient), "masci/foo", {
        id: 3734144061,
        name: "test",
      });
    } catch (error) {
      expect(String(error)).toMatch("HTTP request failed: foo has baz");
    }
  });
});
