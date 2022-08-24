import * as process from "process";
import { anything, capture, spy, when } from "ts-mockito";
import * as gh from "../src/index";
import { run } from "../src/index";

const spiedGH = spy(gh);

describe("Test config params", () => {
  beforeEach(() => {
    // put here required config inputs
    process.env["INPUT_REPO-TOKEN"] = "qwerty";
    process.env["INPUT_CLOUD-ID"] = "asdfgh";
    when(
      spiedGH.fetchJobs(anything(), anything(), anything(), anything())
    ).thenResolve([]); // resolve with an empty array to avoid the subsequent API call
  });

  afterEach(() => {});

  test("Process job-names param", async () => {
    // configure
    process.env["INPUT_JOB-NAMES"] = "foo, bar, baz, foo bar baz";
    // run
    await run();
    // assert
    const [, , , allowList] = capture(spiedGH.fetchJobs).last();
    expect(allowList).toEqual(["foo", "bar", "baz", "foo bar baz"]);
  });

  test("Missing config params", async () => {
    // run
    process.env["INPUT_CLOUD-ID"] = "";
    process.env["INPUT_ADDRESSES"] = "";
    try {
      await run();
    } catch (e) {
      expect(String(e)).toBe(
        "invalid configuration: please set either endpoint or addresses"
      );
    }
  });
});
