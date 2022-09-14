/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3364:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = require(__nccwpck_require__.ab + "snappy.linux-x64-gnu.node")

/***/ }),

/***/ 9524:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = require(__nccwpck_require__.ab + "snappy.linux-x64-musl.node")

/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
const uuid_1 = __nccwpck_require__(5840);
const oidc_utils_1 = __nccwpck_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = `ghadelimiter_${uuid_1.v4()}`;
        // These should realistically never happen, but just in case someone finds a way to exploit uuid generation let's not allow keys or values that contain the delimiter.
        if (name.includes(delimiter)) {
            throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
        }
        if (convertedVal.includes(delimiter)) {
            throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
        }
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(1404);
const auth_1 = __nccwpck_require__(6758);
const core_1 = __nccwpck_require__(2186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(5622));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2087);
const fs_1 = __nccwpck_require__(5747);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 6758:
/***/ (function(__unused_webpack_module, exports) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 1404:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8605));
const https = __importStar(__nccwpck_require__(7211));
const pm = __importStar(__nccwpck_require__(2843));
const tunnel = __importStar(__nccwpck_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2843:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 9925:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const pm = __nccwpck_require__(6443);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.o8 || (exports.o8 = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.PM || (exports.PM = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.Tr || (exports.Tr = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
__webpack_unused_export__ = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
__webpack_unused_export__ = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
__webpack_unused_export__ = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
__webpack_unused_export__ = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __nccwpck_require__(4294);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.eN = HttpClient;


/***/ }),

/***/ 6443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 4175:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __nccwpck_require__(1669);
var ansiStyles = colors.styles = __nccwpck_require__(5691);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = __nccwpck_require__(1959).supportsColor;

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if (!styleMap && style in colors) {
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __nccwpck_require__(9493);
colors.zalgo = __nccwpck_require__(90);

// maps
colors.maps = {};
colors.maps.america = __nccwpck_require__(9337)(colors);
colors.maps.zebra = __nccwpck_require__(3792)(colors);
colors.maps.rainbow = __nccwpck_require__(9565)(colors);
colors.maps.random = __nccwpck_require__(8212)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ 9493:
/***/ ((module) => {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ 90:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ 9337:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ 9565:
/***/ ((module) => {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ 8212:
/***/ ((module) => {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ 3792:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ 5691:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ 3680:
/***/ ((module) => {

"use strict";
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 1959:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __nccwpck_require__(2087);
var hasFlag = __nccwpck_require__(3680);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};


/***/ }),

/***/ 9256:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API,
// which will not touch String.prototype.
//
//   var colors = require('colors/safe');
//   colors.red("foo")
//
//
var colors = __nccwpck_require__(4175);
module['exports'] = colors;


/***/ }),

/***/ 4235:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var enabled = __nccwpck_require__(3495);

/**
 * Creates a new Adapter.
 *
 * @param {Function} fn Function that returns the value.
 * @returns {Function} The adapter logic.
 * @public
 */
module.exports = function create(fn) {
  return function adapter(namespace) {
    try {
      return enabled(namespace, fn());
    } catch (e) { /* Any failure means that we found nothing */ }

    return false;
  };
}


/***/ }),

/***/ 1009:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var adapter = __nccwpck_require__(4235);

/**
 * Extracts the values from process.env.
 *
 * @type {Function}
 * @public
 */
module.exports = adapter(function processenv() {
  return process.env.DEBUG || process.env.DIAGNOSTICS;
});


/***/ }),

/***/ 3201:
/***/ ((module) => {

/**
 * Contains all configured adapters for the given environment.
 *
 * @type {Array}
 * @public
 */
var adapters = [];

/**
 * Contains all modifier functions.
 *
 * @typs {Array}
 * @public
 */
var modifiers = [];

/**
 * Our default logger.
 *
 * @public
 */
var logger = function devnull() {};

/**
 * Register a new adapter that will used to find environments.
 *
 * @param {Function} adapter A function that will return the possible env.
 * @returns {Boolean} Indication of a successful add.
 * @public
 */
function use(adapter) {
  if (~adapters.indexOf(adapter)) return false;

  adapters.push(adapter);
  return true;
}

/**
 * Assign a new log method.
 *
 * @param {Function} custom The log method.
 * @public
 */
function set(custom) {
  logger = custom;
}

/**
 * Check if the namespace is allowed by any of our adapters.
 *
 * @param {String} namespace The namespace that needs to be enabled
 * @returns {Boolean|Promise} Indication if the namespace is enabled by our adapters.
 * @public
 */
function enabled(namespace) {
  var async = [];

  for (var i = 0; i < adapters.length; i++) {
    if (adapters[i].async) {
      async.push(adapters[i]);
      continue;
    }

    if (adapters[i](namespace)) return true;
  }

  if (!async.length) return false;

  //
  // Now that we know that we Async functions, we know we run in an ES6
  // environment and can use all the API's that they offer, in this case
  // we want to return a Promise so that we can `await` in React-Native
  // for an async adapter.
  //
  return new Promise(function pinky(resolve) {
    Promise.all(
      async.map(function prebind(fn) {
        return fn(namespace);
      })
    ).then(function resolved(values) {
      resolve(values.some(Boolean));
    });
  });
}

/**
 * Add a new message modifier to the debugger.
 *
 * @param {Function} fn Modification function.
 * @returns {Boolean} Indication of a successful add.
 * @public
 */
function modify(fn) {
  if (~modifiers.indexOf(fn)) return false;

  modifiers.push(fn);
  return true;
}

/**
 * Write data to the supplied logger.
 *
 * @param {Object} meta Meta information about the log.
 * @param {Array} args Arguments for console.log.
 * @public
 */
function write() {
  logger.apply(logger, arguments);
}

/**
 * Process the message with the modifiers.
 *
 * @param {Mixed} message The message to be transformed by modifers.
 * @returns {String} Transformed message.
 * @public
 */
function process(message) {
  for (var i = 0; i < modifiers.length; i++) {
    message = modifiers[i].apply(modifiers[i], arguments);
  }

  return message;
}

/**
 * Introduce options to the logger function.
 *
 * @param {Function} fn Calback function.
 * @param {Object} options Properties to introduce on fn.
 * @returns {Function} The passed function
 * @public
 */
function introduce(fn, options) {
  var has = Object.prototype.hasOwnProperty;

  for (var key in options) {
    if (has.call(options, key)) {
      fn[key] = options[key];
    }
  }

  return fn;
}

/**
 * Nope, we're not allowed to write messages.
 *
 * @returns {Boolean} false
 * @public
 */
function nope(options) {
  options.enabled = false;
  options.modify = modify;
  options.set = set;
  options.use = use;

  return introduce(function diagnopes() {
    return false;
  }, options);
}

/**
 * Yep, we're allowed to write debug messages.
 *
 * @param {Object} options The options for the process.
 * @returns {Function} The function that does the logging.
 * @public
 */
function yep(options) {
  /**
   * The function that receives the actual debug information.
   *
   * @returns {Boolean} indication that we're logging.
   * @public
   */
  function diagnostics() {
    var args = Array.prototype.slice.call(arguments, 0);

    write.call(write, options, process(args, options));
    return true;
  }

  options.enabled = true;
  options.modify = modify;
  options.set = set;
  options.use = use;

  return introduce(diagnostics, options);
}

/**
 * Simple helper function to introduce various of helper methods to our given
 * diagnostics function.
 *
 * @param {Function} diagnostics The diagnostics function.
 * @returns {Function} diagnostics
 * @public
 */
module.exports = function create(diagnostics) {
  diagnostics.introduce = introduce;
  diagnostics.enabled = enabled;
  diagnostics.process = process;
  diagnostics.modify = modify;
  diagnostics.write = write;
  diagnostics.nope = nope;
  diagnostics.yep = yep;
  diagnostics.set = set;
  diagnostics.use = use;

  return diagnostics;
}


/***/ }),

/***/ 1238:
/***/ ((module) => {

/**
 * An idiot proof logger to be used as default. We've wrapped it in a try/catch
 * statement to ensure the environments without the `console` API do not crash
 * as well as an additional fix for ancient browsers like IE8 where the
 * `console.log` API doesn't have an `apply`, so we need to use the Function's
 * apply functionality to apply the arguments.
 *
 * @param {Object} meta Options of the logger.
 * @param {Array} messages The actuall message that needs to be logged.
 * @public
 */
module.exports = function (meta, messages) {
  //
  // So yea. IE8 doesn't have an apply so we need a work around to puke the
  // arguments in place.
  //
  try { Function.prototype.apply.call(console.log, console, messages); }
  catch (e) {}
}


/***/ }),

/***/ 5037:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var colorspace = __nccwpck_require__(5917);
var kuler = __nccwpck_require__(6287);

/**
 * Prefix the messages with a colored namespace.
 *
 * @param {Array} args The messages array that is getting written.
 * @param {Object} options Options for diagnostics.
 * @returns {Array} Altered messages array.
 * @public
 */
module.exports = function ansiModifier(args, options) {
  var namespace = options.namespace;
  var ansi = options.colors !== false
  ? kuler(namespace +':', colorspace(namespace))
  : namespace +':';

  args[0] = ansi +' '+ args[0];
  return args;
};


/***/ }),

/***/ 611:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var create = __nccwpck_require__(3201);
var tty = __nccwpck_require__(3867).isatty(1);

/**
 * Create a new diagnostics logger.
 *
 * @param {String} namespace The namespace it should enable.
 * @param {Object} options Additional options.
 * @returns {Function} The logger.
 * @public
 */
var diagnostics = create(function dev(namespace, options) {
  options = options || {};
  options.colors = 'colors' in options ? options.colors : tty;
  options.namespace = namespace;
  options.prod = false;
  options.dev = true;

  if (!dev.enabled(namespace) && !(options.force || dev.force)) {
    return dev.nope(options);
  }
  
  return dev.yep(options);
});

//
// Configure the logger for the given environment.
//
diagnostics.modify(__nccwpck_require__(5037));
diagnostics.use(__nccwpck_require__(1009));
diagnostics.set(__nccwpck_require__(1238));

//
// Expose the diagnostics logger.
//
module.exports = diagnostics;


/***/ }),

/***/ 3170:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

//
// Select the correct build version depending on the environment.
//
if (process.env.NODE_ENV === 'production') {
  module.exports = __nccwpck_require__(9827);
} else {
  module.exports = __nccwpck_require__(611);
}


/***/ }),

/***/ 9827:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var create = __nccwpck_require__(3201);

/**
 * Create a new diagnostics logger.
 *
 * @param {String} namespace The namespace it should enable.
 * @param {Object} options Additional options.
 * @returns {Function} The logger.
 * @public
 */
var diagnostics = create(function prod(namespace, options) {
  options = options || {};
  options.namespace = namespace;
  options.prod = true;
  options.dev = false;

  if (!(options.force || prod.force)) return prod.nope(options);
  return prod.yep(options);
});

//
// Expose the diagnostics logger.
//
module.exports = diagnostics;


/***/ }),

/***/ 252:
/***/ ((module) => {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ 6850:
/***/ ((module) => {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ 3182:
/***/ ((module) => {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ 94:
/***/ ((module) => {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ 7743:
/***/ ((module) => {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ 9049:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ 4649:
/***/ ((module) => {

"use strict";


const hooks = [];
const errHooks = [];
let called = false;
let waitingFor = 0;
let asyncTimeoutMs = 10000;

const events = {};
const filters = {};

function exit(exit, code, err) {
	// Helper functions
	let doExitDone = false;

	function doExit() {
		if (doExitDone) {
			return;
		}
		doExitDone = true;

		if (exit === true) {
			// All handlers should be called even if the exit-hook handler was registered first
			process.nextTick(process.exit.bind(null, code));
		}
	}

	// Async hook callback, decrements waiting counter
	function stepTowardExit() {
		process.nextTick(() => {
			if (--waitingFor === 0) {
				doExit();
			}
		});
	}

	// Runs a single hook
	function runHook(syncArgCount, err, hook) {
		// Cannot perform async hooks in `exit` event
		if (exit && hook.length > syncArgCount) {
			// Hook is async, expects a finish callback
			waitingFor++;

			if (err) {
				// Pass error, calling uncaught exception handlers
				return hook(err, stepTowardExit);
			}
			return hook(stepTowardExit);
		}

		// Hook is synchronous
		if (err) {
			// Pass error, calling uncaught exception handlers
			return hook(err);
		}
		return hook();
	}

	// Only execute hooks once
	if (called) {
		return;
	}

	called = true;

	// Run hooks
	if (err) {
		// Uncaught exception, run error hooks
		errHooks.map(runHook.bind(null, 1, err));
	}
	hooks.map(runHook.bind(null, 0, null));

	if (waitingFor) {
		// Force exit after x ms (10000 by default), even if async hooks in progress
		setTimeout(() => {
			doExit();
		}, asyncTimeoutMs);
	} else {
		// No asynchronous hooks, exit immediately
		doExit();
	}
}

// Add a hook
function add(hook) {
	hooks.push(hook);

	if (hooks.length === 1) {
		add.hookEvent('exit');
		add.hookEvent('beforeExit', 0);
		add.hookEvent('SIGHUP', 128 + 1);
		add.hookEvent('SIGINT', 128 + 2);
		add.hookEvent('SIGTERM', 128 + 15);
		add.hookEvent('SIGBREAK', 128 + 21);

		// PM2 Cluster shutdown message. Caught to support async handlers with pm2, needed because
		// explicitly calling process.exit() doesn't trigger the beforeExit event, and the exit
		// event cannot support async handlers, since the event loop is never called after it.
		add.hookEvent('message', 0, function (msg) { // eslint-disable-line prefer-arrow-callback
			if (msg !== 'shutdown') {
				return true;
			}
		});
	}
}

// New signal / event to hook
add.hookEvent = function (event, code, filter) {
	events[event] = function () {
		const eventFilters = filters[event];
		for (let i = 0; i < eventFilters.length; i++) {
			if (eventFilters[i].apply(this, arguments)) {
				return;
			}
		}
		exit(code !== undefined && code !== null, code);
	};

	if (!filters[event]) {
		filters[event] = [];
	}

	if (filter) {
		filters[event].push(filter);
	}
	process.on(event, events[event]);
};

// Unhook signal / event
add.unhookEvent = function (event) {
	process.removeListener(event, events[event]);
	delete events[event];
	delete filters[event];
};

// List hooked events
add.hookedEvents = function () {
	const ret = [];
	for (const name in events) {
		if ({}.hasOwnProperty.call(events, name)) {
			ret.push(name);
		}
	}
	return ret;
};

// Add an uncaught exception handler
add.uncaughtExceptionHandler = function (hook) {
	errHooks.push(hook);

	if (errHooks.length === 1) {
		process.once('uncaughtException', exit.bind(null, true, 1));
	}
};

// Add an unhandled rejection handler
add.unhandledRejectionHandler = function (hook) {
	errHooks.push(hook);

	if (errHooks.length === 1) {
		process.once('unhandledRejection', exit.bind(null, true, 1));
	}
};

// Configure async force exit timeout
add.forceExitTimeout = function (ms) {
	asyncTimeoutMs = ms;
};

// Export
module.exports = add;


/***/ }),

/***/ 991:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = asyncify;

var _initialParams = __nccwpck_require__(9658);

var _initialParams2 = _interopRequireDefault(_initialParams);

var _setImmediate = __nccwpck_require__(729);

var _setImmediate2 = _interopRequireDefault(_setImmediate);

var _wrapAsync = __nccwpck_require__(7456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    if ((0, _wrapAsync.isAsync)(func)) {
        return function (...args /*, callback*/) {
            const callback = args.pop();
            const promise = func.apply(this, args);
            return handlePromise(promise, callback);
        };
    }

    return (0, _initialParams2.default)(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (result && typeof result.then === 'function') {
            return handlePromise(result, callback);
        } else {
            callback(null, result);
        }
    });
}

function handlePromise(promise, callback) {
    return promise.then(value => {
        invokeCallback(callback, null, value);
    }, err => {
        invokeCallback(callback, err && err.message ? err : new Error(err));
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (err) {
        (0, _setImmediate2.default)(e => {
            throw e;
        }, err);
    }
}
module.exports = exports['default'];

/***/ }),

/***/ 5460:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _isArrayLike = __nccwpck_require__(7157);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _breakLoop = __nccwpck_require__(8810);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

var _eachOfLimit = __nccwpck_require__(9342);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _once = __nccwpck_require__(7260);

var _once2 = _interopRequireDefault(_once);

var _onlyOnce = __nccwpck_require__(1990);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __nccwpck_require__(7456);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _awaitify = __nccwpck_require__(3887);

var _awaitify2 = _interopRequireDefault(_awaitify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = (0, _once2.default)(callback);
    var index = 0,
        completed = 0,
        { length } = coll,
        canceled = false;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err === false) {
            canceled = true;
        }
        if (canceled === true) return;
        if (err) {
            callback(err);
        } else if (++completed === length || value === _breakLoop2.default) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, (0, _onlyOnce2.default)(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
function eachOfGeneric(coll, iteratee, callback) {
    return (0, _eachOfLimit2.default)(coll, Infinity, iteratee, callback);
}

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // dev.json is a file containing a valid json object config for dev environment
 * // dev.json is a file containing a valid json object config for test environment
 * // prod.json is a file containing a valid json object config for prod environment
 * // invalid.json is a file with a malformed json object
 *
 * let configs = {}; //global variable
 * let validConfigFileMap = {dev: 'dev.json', test: 'test.json', prod: 'prod.json'};
 * let invalidConfigFileMap = {dev: 'dev.json', test: 'test.json', invalid: 'invalid.json'};
 *
 * // asynchronous function that reads a json file and parses the contents as json object
 * function parseFile(file, key, callback) {
 *     fs.readFile(file, "utf8", function(err, data) {
 *         if (err) return calback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }
 *
 * // Using callbacks
 * async.forEachOf(validConfigFileMap, parseFile, function (err) {
 *     if (err) {
 *         console.error(err);
 *     } else {
 *         console.log(configs);
 *         // configs is now a map of JSON data, e.g.
 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 *     }
 * });
 *
 * //Error handing
 * async.forEachOf(invalidConfigFileMap, parseFile, function (err) {
 *     if (err) {
 *         console.error(err);
 *         // JSON parse error exception
 *     } else {
 *         console.log(configs);
 *     }
 * });
 *
 * // Using Promises
 * async.forEachOf(validConfigFileMap, parseFile)
 * .then( () => {
 *     console.log(configs);
 *     // configs is now a map of JSON data, e.g.
 *     // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 * }).catch( err => {
 *     console.error(err);
 * });
 *
 * //Error handing
 * async.forEachOf(invalidConfigFileMap, parseFile)
 * .then( () => {
 *     console.log(configs);
 * }).catch( err => {
 *     console.error(err);
 *     // JSON parse error exception
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.forEachOf(validConfigFileMap, parseFile);
 *         console.log(configs);
 *         // configs is now a map of JSON data, e.g.
 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * //Error handing
 * async () => {
 *     try {
 *         let result = await async.forEachOf(invalidConfigFileMap, parseFile);
 *         console.log(configs);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // JSON parse error exception
 *     }
 * }
 *
 */
function eachOf(coll, iteratee, callback) {
    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
    return eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
}

exports.default = (0, _awaitify2.default)(eachOf, 3);
module.exports = exports['default'];

/***/ }),

/***/ 9342:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _eachOfLimit2 = __nccwpck_require__(6658);

var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);

var _wrapAsync = __nccwpck_require__(7456);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _awaitify = __nccwpck_require__(3887);

var _awaitify2 = _interopRequireDefault(_awaitify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */
function eachOfLimit(coll, limit, iteratee, callback) {
  return (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
}

exports.default = (0, _awaitify2.default)(eachOfLimit, 4);
module.exports = exports['default'];

/***/ }),

/***/ 1336:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _eachOfLimit = __nccwpck_require__(9342);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _awaitify = __nccwpck_require__(3887);

var _awaitify2 = _interopRequireDefault(_awaitify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */
function eachOfSeries(coll, iteratee, callback) {
  return (0, _eachOfLimit2.default)(coll, 1, iteratee, callback);
}
exports.default = (0, _awaitify2.default)(eachOfSeries, 3);
module.exports = exports['default'];

/***/ }),

/***/ 1216:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _eachOf = __nccwpck_require__(5460);

var _eachOf2 = _interopRequireDefault(_eachOf);

var _withoutIndex = __nccwpck_require__(4674);

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

var _wrapAsync = __nccwpck_require__(7456);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _awaitify = __nccwpck_require__(3887);

var _awaitify2 = _interopRequireDefault(_awaitify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * const fileList = [ 'dir1/file2.txt', 'dir2/file3.txt', 'dir/file5.txt'];
 * const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];
 *
 * // asynchronous function that deletes a file
 * const deleteFile = function(file, callback) {
 *     fs.unlink(file, callback);
 * };
 *
 * // Using callbacks
 * async.each(fileList, deleteFile, function(err) {
 *     if( err ) {
 *         console.log(err);
 *     } else {
 *         console.log('All files have been deleted successfully');
 *     }
 * });
 *
 * // Error Handling
 * async.each(withMissingFileList, deleteFile, function(err){
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 *     // since dir4/file2.txt does not exist
 *     // dir1/file1.txt could have been deleted
 * });
 *
 * // Using Promises
 * async.each(fileList, deleteFile)
 * .then( () => {
 *     console.log('All files have been deleted successfully');
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Error Handling
 * async.each(fileList, deleteFile)
 * .then( () => {
 *     console.log('All files have been deleted successfully');
 * }).catch( err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 *     // since dir4/file2.txt does not exist
 *     // dir1/file1.txt could have been deleted
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         await async.each(files, deleteFile);
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         await async.each(withMissingFileList, deleteFile);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *         // since dir4/file2.txt does not exist
 *         // dir1/file1.txt could have been deleted
 *     }
 * }
 *
 */
function eachLimit(coll, iteratee, callback) {
  return (0, _eachOf2.default)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
}

exports.default = (0, _awaitify2.default)(eachLimit, 3);
module.exports = exports['default'];

/***/ }),

/***/ 2718:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = asyncEachOfLimit;

var _breakLoop = __nccwpck_require__(8810);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for async generators
function asyncEachOfLimit(generator, limit, iteratee, callback) {
    let done = false;
    let canceled = false;
    let awaiting = false;
    let running = 0;
    let idx = 0;

    function replenish() {
        //console.log('replenish')
        if (running >= limit || awaiting || done) return;
        //console.log('replenish awaiting')
        awaiting = true;
        generator.next().then(({ value, done: iterDone }) => {
            //console.log('got value', value)
            if (canceled || done) return;
            awaiting = false;
            if (iterDone) {
                done = true;
                if (running <= 0) {
                    //console.log('done nextCb')
                    callback(null);
                }
                return;
            }
            running++;
            iteratee(value, idx, iterateeCallback);
            idx++;
            replenish();
        }).catch(handleError);
    }

    function iterateeCallback(err, result) {
        //console.log('iterateeCallback')
        running -= 1;
        if (canceled) return;
        if (err) return handleError(err);

        if (err === false) {
            done = true;
            canceled = true;
            return;
        }

        if (result === _breakLoop2.default || done && running <= 0) {
            done = true;
            //console.log('done iterCb')
            return callback(null);
        }
        replenish();
    }

    function handleError(err) {
        if (canceled) return;
        awaiting = false;
        done = true;
        callback(err);
    }

    replenish();
}
module.exports = exports['default'];

/***/ }),

/***/ 3887:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = awaitify;
// conditionally promisify a function.
// only return a promise if a callback is omitted
function awaitify(asyncFn, arity = asyncFn.length) {
    if (!arity) throw new Error('arity is undefined');
    function awaitable(...args) {
        if (typeof args[arity - 1] === 'function') {
            return asyncFn.apply(this, args);
        }

        return new Promise((resolve, reject) => {
            args[arity - 1] = (err, ...cbArgs) => {
                if (err) return reject(err);
                resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
            };
            asyncFn.apply(this, args);
        });
    }

    return awaitable;
}
module.exports = exports['default'];

/***/ }),

/***/ 8810:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
const breakLoop = {};
exports.default = breakLoop;
module.exports = exports["default"];

/***/ }),

/***/ 6658:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _once = __nccwpck_require__(7260);

var _once2 = _interopRequireDefault(_once);

var _iterator = __nccwpck_require__(1420);

var _iterator2 = _interopRequireDefault(_iterator);

var _onlyOnce = __nccwpck_require__(1990);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __nccwpck_require__(7456);

var _asyncEachOfLimit = __nccwpck_require__(2718);

var _asyncEachOfLimit2 = _interopRequireDefault(_asyncEachOfLimit);

var _breakLoop = __nccwpck_require__(8810);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = limit => {
    return (obj, iteratee, callback) => {
        callback = (0, _once2.default)(callback);
        if (limit <= 0) {
            throw new RangeError('concurrency limit cannot be less than 1');
        }
        if (!obj) {
            return callback(null);
        }
        if ((0, _wrapAsync.isAsyncGenerator)(obj)) {
            return (0, _asyncEachOfLimit2.default)(obj, limit, iteratee, callback);
        }
        if ((0, _wrapAsync.isAsyncIterable)(obj)) {
            return (0, _asyncEachOfLimit2.default)(obj[Symbol.asyncIterator](), limit, iteratee, callback);
        }
        var nextElem = (0, _iterator2.default)(obj);
        var done = false;
        var canceled = false;
        var running = 0;
        var looping = false;

        function iterateeCallback(err, value) {
            if (canceled) return;
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (err === false) {
                done = true;
                canceled = true;
            } else if (value === _breakLoop2.default || done && running <= 0) {
                done = true;
                return callback(null);
            } else if (!looping) {
                replenish();
            }
        }

        function replenish() {
            looping = true;
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
            }
            looping = false;
        }

        replenish();
    };
};

module.exports = exports['default'];

/***/ }),

/***/ 7645:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

exports.default = function (coll) {
    return coll[Symbol.iterator] && coll[Symbol.iterator]();
};

module.exports = exports["default"];

/***/ }),

/***/ 9658:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

exports.default = function (fn) {
    return function (...args /*, callback*/) {
        var callback = args.pop();
        return fn.call(this, args, callback);
    };
};

module.exports = exports["default"];

/***/ }),

/***/ 7157:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = isArrayLike;
function isArrayLike(value) {
    return value && typeof value.length === 'number' && value.length >= 0 && value.length % 1 === 0;
}
module.exports = exports['default'];

/***/ }),

/***/ 1420:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = createIterator;

var _isArrayLike = __nccwpck_require__(7157);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _getIterator = __nccwpck_require__(7645);

var _getIterator2 = _interopRequireDefault(_getIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? { value: coll[i], key: i } : null;
    };
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return { value: item.value, key: i };
    };
}

function createObjectIterator(obj) {
    var okeys = obj ? Object.keys(obj) : [];
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        if (key === '__proto__') {
            return next();
        }
        return i < len ? { value: obj[key], key } : null;
    };
}

function createIterator(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = (0, _getIterator2.default)(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}
module.exports = exports['default'];

/***/ }),

/***/ 7260:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = once;
function once(fn) {
    function wrapper(...args) {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, args);
    }
    Object.assign(wrapper, fn);
    return wrapper;
}
module.exports = exports["default"];

/***/ }),

/***/ 1990:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = onlyOnce;
function onlyOnce(fn) {
    return function (...args) {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, args);
    };
}
module.exports = exports["default"];

/***/ }),

/***/ 3221:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _isArrayLike = __nccwpck_require__(7157);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _wrapAsync = __nccwpck_require__(7456);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _awaitify = __nccwpck_require__(3887);

var _awaitify2 = _interopRequireDefault(_awaitify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _awaitify2.default)((eachfn, tasks, callback) => {
    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};

    eachfn(tasks, (task, key, taskCb) => {
        (0, _wrapAsync2.default)(task)((err, ...result) => {
            if (result.length < 2) {
                [result] = result;
            }
            results[key] = result;
            taskCb(err);
        });
    }, err => callback(err, results));
}, 3);
module.exports = exports['default'];

/***/ }),

/***/ 729:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fallback = fallback;
exports.wrap = wrap;
/* istanbul ignore file */

var hasQueueMicrotask = exports.hasQueueMicrotask = typeof queueMicrotask === 'function' && queueMicrotask;
var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = exports.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return (fn, ...args) => defer(() => fn(...args));
}

var _defer;

if (hasQueueMicrotask) {
    _defer = queueMicrotask;
} else if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

exports.default = wrap(_defer);

/***/ }),

/***/ 4674:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return (value, index, callback) => iteratee(value, callback);
}
module.exports = exports["default"];

/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAsyncIterable = exports.isAsyncGenerator = exports.isAsync = undefined;

var _asyncify = __nccwpck_require__(991);

var _asyncify2 = _interopRequireDefault(_asyncify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAsync(fn) {
    return fn[Symbol.toStringTag] === 'AsyncFunction';
}

function isAsyncGenerator(fn) {
    return fn[Symbol.toStringTag] === 'AsyncGenerator';
}

function isAsyncIterable(obj) {
    return typeof obj[Symbol.asyncIterator] === 'function';
}

function wrapAsync(asyncFn) {
    if (typeof asyncFn !== 'function') throw new Error('expected a function');
    return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
}

exports.default = wrapAsync;
exports.isAsync = isAsync;
exports.isAsyncGenerator = isAsyncGenerator;
exports.isAsyncIterable = isAsyncIterable;

/***/ }),

/***/ 9619:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = series;

var _parallel2 = __nccwpck_require__(3221);

var _parallel3 = _interopRequireDefault(_parallel2);

var _eachOfSeries = __nccwpck_require__(1336);

var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @return {Promise} a promise, if no callback is passed
 * @example
 *
 * //Using Callbacks
 * async.series([
 *     function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ], function(err, results) {
 *     console.log(results);
 *     // results is equal to ['one','two']
 * });
 *
 * // an example using objects instead of arrays
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * });
 *
 * //Using Promises
 * async.series([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ]).then(results => {
 *     console.log(results);
 *     // results is equal to ['one','two']
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // an example using an object instead of an array
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }).then(results => {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * //Using async/await
 * async () => {
 *     try {
 *         let results = await async.series([
 *             function(callback) {
 *                 setTimeout(function() {
 *                     // do some async task
 *                     callback(null, 'one');
 *                 }, 200);
 *             },
 *             function(callback) {
 *                 setTimeout(function() {
 *                     // then do another async task
 *                     callback(null, 'two');
 *                 }, 100);
 *             }
 *         ]);
 *         console.log(results);
 *         // results is equal to ['one','two']
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // an example using an object instead of an array
 * async () => {
 *     try {
 *         let results = await async.parallel({
 *             one: function(callback) {
 *                 setTimeout(function() {
 *                     // do some async task
 *                     callback(null, 1);
 *                 }, 200);
 *             },
 *            two: function(callback) {
 *                 setTimeout(function() {
 *                     // then do another async task
 *                     callback(null, 2);
 *                 }, 100);
 *            }
 *         });
 *         console.log(results);
 *         // results is equal to: { one: 1, two: 2 }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */
function series(tasks, callback) {
  return (0, _parallel3.default)(_eachOfSeries2.default, tasks, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 2738:
/***/ ((module) => {

(function () {
  "use strict";

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());


/***/ }),

/***/ 8510:
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ 1069:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* MIT license */
var colorNames = __nccwpck_require__(8510);
var swizzle = __nccwpck_require__(8679);
var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = Object.create(null);

// create a list of reverse color names
for (var name in colorNames) {
	if (hasOwnProperty.call(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ 7177:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var colorString = __nccwpck_require__(1069);
var convert = __nccwpck_require__(241);

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ 5479:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* MIT license */
var cssKeywords = __nccwpck_require__(74);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ 241:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var conversions = __nccwpck_require__(5479);
var route = __nccwpck_require__(8110);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var conversions = __nccwpck_require__(5479);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ 74:
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ 5917:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var color = __nccwpck_require__(7177)
  , hex = __nccwpck_require__(7014);

/**
 * Generate a color for a given name. But be reasonably smart about it by
 * understanding name spaces and coloring each namespace a bit lighter so they
 * still have the same base color as the root.
 *
 * @param {string} namespace The namespace
 * @param {string} [delimiter] The delimiter
 * @returns {string} color
 */
module.exports = function colorspace(namespace, delimiter) {
  var split = namespace.split(delimiter || ':');
  var base = hex(split[0]);

  if (!split.length) return base;

  for (var i = 0, l = split.length - 1; i < l; i++) {
    base = color(base)
    .mix(color(hex(split[i + 1])))
    .saturate(1)
    .hex();
  }

  return base;
};


/***/ }),

/***/ 3495:
/***/ ((module) => {

"use strict";


/**
 * Checks if a given namespace is allowed by the given variable.
 *
 * @param {String} name namespace that should be included.
 * @param {String} variable Value that needs to be tested.
 * @returns {Boolean} Indication if namespace is enabled.
 * @public
 */
module.exports = function enabled(name, variable) {
  if (!variable) return false;

  var variables = variable.split(/[\s,]+/)
    , i = 0;

  for (; i < variables.length; i++) {
    variable = variables[i].replace('*', '.*?');

    if ('-' === variable.charAt(0)) {
      if ((new RegExp('^'+ variable.substr(1) +'$')).test(name)) {
        return false;
      }

      continue;
    }

    if ((new RegExp('^'+ variable +'$')).test(name)) {
      return true;
    }
  }

  return false;
};


/***/ }),

/***/ 4513:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigitsOptional = "\\d\\d?";
  var twoDigits = "\\d\\d";
  var threeDigits = "\\d{3}";
  var fourDigits = "\\d{4}";
  var word = "[^\\s]+";
  var literal = /\[([^]*?)\]/gm;
  function shorten(arr, sLen) {
      var newArr = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          newArr.push(arr[i].substr(0, sLen));
      }
      return newArr;
  }
  var monthUpdate = function (arrName) { return function (v, i18n) {
      var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
      var index = lowerCaseArr.indexOf(v.toLowerCase());
      if (index > -1) {
          return index;
      }
      return null;
  }; };
  function assign(origObj) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
          var obj = args_1[_a];
          for (var key in obj) {
              // @ts-ignore ex
              origObj[key] = obj[key];
          }
      }
      return origObj;
  }
  var dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ];
  var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  var defaultI18n = {
      dayNamesShort: dayNamesShort,
      dayNames: dayNames,
      monthNamesShort: monthNamesShort,
      monthNames: monthNames,
      amPm: ["am", "pm"],
      DoFn: function (dayOfMonth) {
          return (dayOfMonth +
              ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3
                  ? 0
                  : ((dayOfMonth - (dayOfMonth % 10) !== 10 ? 1 : 0) * dayOfMonth) % 10]);
      }
  };
  var globalI18n = assign({}, defaultI18n);
  var setGlobalDateI18n = function (i18n) {
      return (globalI18n = assign(globalI18n, i18n));
  };
  var regexEscape = function (str) {
      return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
  };
  var pad = function (val, len) {
      if (len === void 0) { len = 2; }
      val = String(val);
      while (val.length < len) {
          val = "0" + val;
      }
      return val;
  };
  var formatFlags = {
      D: function (dateObj) { return String(dateObj.getDate()); },
      DD: function (dateObj) { return pad(dateObj.getDate()); },
      Do: function (dateObj, i18n) {
          return i18n.DoFn(dateObj.getDate());
      },
      d: function (dateObj) { return String(dateObj.getDay()); },
      dd: function (dateObj) { return pad(dateObj.getDay()); },
      ddd: function (dateObj, i18n) {
          return i18n.dayNamesShort[dateObj.getDay()];
      },
      dddd: function (dateObj, i18n) {
          return i18n.dayNames[dateObj.getDay()];
      },
      M: function (dateObj) { return String(dateObj.getMonth() + 1); },
      MM: function (dateObj) { return pad(dateObj.getMonth() + 1); },
      MMM: function (dateObj, i18n) {
          return i18n.monthNamesShort[dateObj.getMonth()];
      },
      MMMM: function (dateObj, i18n) {
          return i18n.monthNames[dateObj.getMonth()];
      },
      YY: function (dateObj) {
          return pad(String(dateObj.getFullYear()), 4).substr(2);
      },
      YYYY: function (dateObj) { return pad(dateObj.getFullYear(), 4); },
      h: function (dateObj) { return String(dateObj.getHours() % 12 || 12); },
      hh: function (dateObj) { return pad(dateObj.getHours() % 12 || 12); },
      H: function (dateObj) { return String(dateObj.getHours()); },
      HH: function (dateObj) { return pad(dateObj.getHours()); },
      m: function (dateObj) { return String(dateObj.getMinutes()); },
      mm: function (dateObj) { return pad(dateObj.getMinutes()); },
      s: function (dateObj) { return String(dateObj.getSeconds()); },
      ss: function (dateObj) { return pad(dateObj.getSeconds()); },
      S: function (dateObj) {
          return String(Math.round(dateObj.getMilliseconds() / 100));
      },
      SS: function (dateObj) {
          return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
      },
      SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), 3); },
      a: function (dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
      },
      A: function (dateObj, i18n) {
          return dateObj.getHours() < 12
              ? i18n.amPm[0].toUpperCase()
              : i18n.amPm[1].toUpperCase();
      },
      ZZ: function (dateObj) {
          var offset = dateObj.getTimezoneOffset();
          return ((offset > 0 ? "-" : "+") +
              pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4));
      },
      Z: function (dateObj) {
          var offset = dateObj.getTimezoneOffset();
          return ((offset > 0 ? "-" : "+") +
              pad(Math.floor(Math.abs(offset) / 60), 2) +
              ":" +
              pad(Math.abs(offset) % 60, 2));
      }
  };
  var monthParse = function (v) { return +v - 1; };
  var emptyDigits = [null, twoDigitsOptional];
  var emptyWord = [null, word];
  var amPm = [
      "isPm",
      word,
      function (v, i18n) {
          var val = v.toLowerCase();
          if (val === i18n.amPm[0]) {
              return 0;
          }
          else if (val === i18n.amPm[1]) {
              return 1;
          }
          return null;
      }
  ];
  var timezoneOffset = [
      "timezoneOffset",
      "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
      function (v) {
          var parts = (v + "").match(/([+-]|\d\d)/gi);
          if (parts) {
              var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
              return parts[0] === "+" ? minutes : -minutes;
          }
          return 0;
      }
  ];
  var parseFlags = {
      D: ["day", twoDigitsOptional],
      DD: ["day", twoDigits],
      Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, 10); }],
      M: ["month", twoDigitsOptional, monthParse],
      MM: ["month", twoDigits, monthParse],
      YY: [
          "year",
          twoDigits,
          function (v) {
              var now = new Date();
              var cent = +("" + now.getFullYear()).substr(0, 2);
              return +("" + (+v > 68 ? cent - 1 : cent) + v);
          }
      ],
      h: ["hour", twoDigitsOptional, undefined, "isPm"],
      hh: ["hour", twoDigits, undefined, "isPm"],
      H: ["hour", twoDigitsOptional],
      HH: ["hour", twoDigits],
      m: ["minute", twoDigitsOptional],
      mm: ["minute", twoDigits],
      s: ["second", twoDigitsOptional],
      ss: ["second", twoDigits],
      YYYY: ["year", fourDigits],
      S: ["millisecond", "\\d", function (v) { return +v * 100; }],
      SS: ["millisecond", twoDigits, function (v) { return +v * 10; }],
      SSS: ["millisecond", threeDigits],
      d: emptyDigits,
      dd: emptyDigits,
      ddd: emptyWord,
      dddd: emptyWord,
      MMM: ["month", word, monthUpdate("monthNamesShort")],
      MMMM: ["month", word, monthUpdate("monthNames")],
      a: amPm,
      A: amPm,
      ZZ: timezoneOffset,
      Z: timezoneOffset
  };
  // Some common format strings
  var globalMasks = {
      default: "ddd MMM DD YYYY HH:mm:ss",
      shortDate: "M/D/YY",
      mediumDate: "MMM D, YYYY",
      longDate: "MMMM D, YYYY",
      fullDate: "dddd, MMMM D, YYYY",
      isoDate: "YYYY-MM-DD",
      isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
  };
  var setGlobalDateMasks = function (masks) { return assign(globalMasks, masks); };
  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   * @returns {string} Formatted date string
   */
  var format = function (dateObj, mask, i18n) {
      if (mask === void 0) { mask = globalMasks["default"]; }
      if (i18n === void 0) { i18n = {}; }
      if (typeof dateObj === "number") {
          dateObj = new Date(dateObj);
      }
      if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
          isNaN(dateObj.getTime())) {
          throw new Error("Invalid Date pass to format");
      }
      mask = globalMasks[mask] || mask;
      var literals = [];
      // Make literals inactive by replacing them with @@@
      mask = mask.replace(literal, function ($0, $1) {
          literals.push($1);
          return "@@@";
      });
      var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
      // Apply formatting rules
      mask = mask.replace(token, function ($0) {
          return formatFlags[$0](dateObj, combinedI18nSettings);
      });
      // Inline literal values back into the formatted value
      return mask.replace(/@@@/g, function () { return literals.shift(); });
  };
  /**
   * Parse a date string into a Javascript Date object /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
   * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
   */
  function parse(dateStr, format, i18n) {
      if (i18n === void 0) { i18n = {}; }
      if (typeof format !== "string") {
          throw new Error("Invalid format in fecha parse");
      }
      // Check to see if the format is actually a mask
      format = globalMasks[format] || format;
      // Avoid regular expression denial of service, fail early for really long strings
      // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
      if (dateStr.length > 1000) {
          return null;
      }
      // Default to the beginning of the year.
      var today = new Date();
      var dateInfo = {
          year: today.getFullYear(),
          month: 0,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
          isPm: null,
          timezoneOffset: null
      };
      var parseInfo = [];
      var literals = [];
      // Replace all the literals with @@@. Hopefully a string that won't exist in the format
      var newFormat = format.replace(literal, function ($0, $1) {
          literals.push(regexEscape($1));
          return "@@@";
      });
      var specifiedFields = {};
      var requiredFields = {};
      // Change every token that we find into the correct regex
      newFormat = regexEscape(newFormat).replace(token, function ($0) {
          var info = parseFlags[$0];
          var field = info[0], regex = info[1], requiredField = info[3];
          // Check if the person has specified the same field twice. This will lead to confusing results.
          if (specifiedFields[field]) {
              throw new Error("Invalid format. " + field + " specified twice in format");
          }
          specifiedFields[field] = true;
          // Check if there are any required fields. For instance, 12 hour time requires AM/PM specified
          if (requiredField) {
              requiredFields[requiredField] = true;
          }
          parseInfo.push(info);
          return "(" + regex + ")";
      });
      // Check all the required fields are present
      Object.keys(requiredFields).forEach(function (field) {
          if (!specifiedFields[field]) {
              throw new Error("Invalid format. " + field + " is required in specified format");
          }
      });
      // Add back all the literals after
      newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
      // Check if the date string matches the format. If it doesn't return null
      var matches = dateStr.match(new RegExp(newFormat, "i"));
      if (!matches) {
          return null;
      }
      var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
      // For each match, call the parser function for that date part
      for (var i = 1; i < matches.length; i++) {
          var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
          var value = parser
              ? parser(matches[i], combinedI18nSettings)
              : +matches[i];
          // If the parser can't make sense of the value, return null
          if (value == null) {
              return null;
          }
          dateInfo[field] = value;
      }
      if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
          dateInfo.hour = +dateInfo.hour + 12;
      }
      else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
          dateInfo.hour = 0;
      }
      var dateTZ;
      if (dateInfo.timezoneOffset == null) {
          dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
          var validateFields = [
              ["month", "getMonth"],
              ["day", "getDate"],
              ["hour", "getHours"],
              ["minute", "getMinutes"],
              ["second", "getSeconds"]
          ];
          for (var i = 0, len = validateFields.length; i < len; i++) {
              // Check to make sure the date field is within the allowed range. Javascript dates allows values
              // outside the allowed range. If the values don't match the value was invalid
              if (specifiedFields[validateFields[i][0]] &&
                  dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
                  return null;
              }
          }
      }
      else {
          dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
          // We can't validate dates in another timezone unfortunately. Do a basic check instead
          if (dateInfo.month > 11 ||
              dateInfo.month < 0 ||
              dateInfo.day > 31 ||
              dateInfo.day < 1 ||
              dateInfo.hour > 23 ||
              dateInfo.hour < 0 ||
              dateInfo.minute > 59 ||
              dateInfo.minute < 0 ||
              dateInfo.second > 59 ||
              dateInfo.second < 0) {
              return null;
          }
      }
      // Don't allow invalid dates
      return dateTZ;
  }
  var fecha = {
      format: format,
      parse: parse,
      defaultI18n: defaultI18n,
      setGlobalDateI18n: setGlobalDateI18n,
      setGlobalDateMasks: setGlobalDateMasks
  };

  exports.assign = assign;
  exports.default = fecha;
  exports.format = format;
  exports.parse = parse;
  exports.defaultI18n = defaultI18n;
  exports.setGlobalDateI18n = setGlobalDateI18n;
  exports.setGlobalDateMasks = setGlobalDateMasks;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fecha.umd.js.map


/***/ }),

/***/ 2743:
/***/ ((module) => {

"use strict";


var toString = Object.prototype.toString;

/**
 * Extract names from functions.
 *
 * @param {Function} fn The function who's name we need to extract.
 * @returns {String} The name of the function.
 * @public
 */
module.exports = function name(fn) {
  if ('string' === typeof fn.displayName && fn.constructor.name) {
    return fn.displayName;
  } else if ('string' === typeof fn.name && fn.name) {
    return fn.name;
  }

  //
  // Check to see if the constructor has a name.
  //
  if (
       'object' === typeof fn
    && fn.constructor
    && 'string' === typeof fn.constructor.name
  ) return fn.constructor.name;

  //
  // toString the given function and attempt to parse it out of it, or determine
  // the class.
  //
  var named = fn.toString()
    , type = toString.call(fn).slice(8, -1);

  if ('Function' === type) {
    named = named.substring(named.indexOf('(') + 1, named.indexOf(')'));
  } else {
    named = type;
  }

  return named || 'anonymous';
};


/***/ }),

/***/ 4124:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

try {
  var util = __nccwpck_require__(1669);
  /* istanbul ignore next */
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = __nccwpck_require__(8544);
}


/***/ }),

/***/ 8544:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 1554:
/***/ ((module) => {

"use strict";


const isStream = stream =>
	stream !== null &&
	typeof stream === 'object' &&
	typeof stream.pipe === 'function';

isStream.writable = stream =>
	isStream(stream) &&
	stream.writable !== false &&
	typeof stream._write === 'function' &&
	typeof stream._writableState === 'object';

isStream.readable = stream =>
	isStream(stream) &&
	stream.readable !== false &&
	typeof stream._read === 'function' &&
	typeof stream._readableState === 'object';

isStream.duplex = stream =>
	isStream.writable(stream) &&
	isStream.readable(stream);

isStream.transform = stream =>
	isStream.duplex(stream) &&
	typeof stream._transform === 'function';

module.exports = isStream;


/***/ }),

/***/ 6287:
/***/ ((module) => {

"use strict";


/**
 * Kuler: Color text using CSS colors
 *
 * @constructor
 * @param {String} text The text that needs to be styled
 * @param {String} color Optional color for alternate API.
 * @api public
 */
function Kuler(text, color) {
  if (color) return (new Kuler(text)).style(color);
  if (!(this instanceof Kuler)) return new Kuler(text);

  this.text = text;
}

/**
 * ANSI color codes.
 *
 * @type {String}
 * @private
 */
Kuler.prototype.prefix = '\x1b[';
Kuler.prototype.suffix = 'm';

/**
 * Parse a hex color string and parse it to it's RGB equiv.
 *
 * @param {String} color
 * @returns {Array}
 * @api private
 */
Kuler.prototype.hex = function hex(color) {
  color = color[0] === '#' ? color.substring(1) : color;

  //
  // Pre-parse for shorthand hex colors.
  //
  if (color.length === 3) {
    color = color.split('');

    color[5] = color[2]; // F60##0
    color[4] = color[2]; // F60#00
    color[3] = color[1]; // F60600
    color[2] = color[1]; // F66600
    color[1] = color[0]; // FF6600

    color = color.join('');
  }

  var r = color.substring(0, 2)
    , g = color.substring(2, 4)
    , b = color.substring(4, 6);

  return [ parseInt(r, 16), parseInt(g, 16), parseInt(b, 16) ];
};

/**
 * Transform a 255 RGB value to an RGV code.
 *
 * @param {Number} r Red color channel.
 * @param {Number} g Green color channel.
 * @param {Number} b Blue color channel.
 * @returns {String}
 * @api public
 */
Kuler.prototype.rgb = function rgb(r, g, b) {
  var red = r / 255 * 5
    , green = g / 255 * 5
    , blue = b / 255 * 5;

  return this.ansi(red, green, blue);
};

/**
 * Turns RGB 0-5 values into a single ANSI code.
 *
 * @param {Number} r Red color channel.
 * @param {Number} g Green color channel.
 * @param {Number} b Blue color channel.
 * @returns {String}
 * @api public
 */
Kuler.prototype.ansi = function ansi(r, g, b) {
  var red = Math.round(r)
    , green = Math.round(g)
    , blue = Math.round(b);

  return 16 + (red * 36) + (green * 6) + blue;
};

/**
 * Marks an end of color sequence.
 *
 * @returns {String} Reset sequence.
 * @api public
 */
Kuler.prototype.reset = function reset() {
  return this.prefix +'39;49'+ this.suffix;
};

/**
 * Colour the terminal using CSS.
 *
 * @param {String} color The HEX color code.
 * @returns {String} the escape code.
 * @api public
 */
Kuler.prototype.style = function style(color) {
  return this.prefix +'38;5;'+ this.rgb.apply(this, this.hex(color)) + this.suffix + this.text + this.reset();
};


//
// Expose the actual interface.
//
module.exports = Kuler;


/***/ }),

/***/ 9748:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);

/*
 * function align (info)
 * Returns a new instance of the align Format which adds a `\t`
 * delimiter before the message to properly align it in the same place.
 * It was previously { align: true } in winston < 3.0.0
 */
module.exports = format(info => {
  info.message = `\t${info.message}`;
  return info;
});


/***/ }),

/***/ 6811:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const { Colorizer } = __nccwpck_require__(3848);
const { Padder } = __nccwpck_require__(7033);
const { configs, MESSAGE } = __nccwpck_require__(3937);


/**
 * Cli format class that handles initial state for a a separate
 * Colorizer and Padder instance.
 */
class CliFormat {
  constructor(opts = {}) {
    if (!opts.levels) {
      opts.levels = configs.cli.levels;
    }

    this.colorizer = new Colorizer(opts);
    this.padder = new Padder(opts);
    this.options = opts;
  }

  /*
   * function transform (info, opts)
   * Attempts to both:
   * 1. Pad the { level }
   * 2. Colorize the { level, message }
   * of the given `logform` info object depending on the `opts`.
   */
  transform(info, opts) {
    this.colorizer.transform(
      this.padder.transform(info, opts),
      opts
    );

    info[MESSAGE] = `${info.level}:${info.message}`;
    return info;
  }
}

/*
 * function cli (opts)
 * Returns a new instance of the CLI format that turns a log
 * `info` object into the same format previously available
 * in `winston.cli()` in `winston < 3.0.0`.
 */
module.exports = opts => new CliFormat(opts);

//
// Attach the CliFormat for registration purposes
//
module.exports.Format = CliFormat;


/***/ }),

/***/ 3848:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const colors = __nccwpck_require__(9256);
const { LEVEL, MESSAGE } = __nccwpck_require__(3937);

//
// Fix colors not appearing in non-tty environments
//
colors.enabled = true;

/**
 * @property {RegExp} hasSpace
 * Simple regex to check for presence of spaces.
 */
const hasSpace = /\s+/;

/*
 * Colorizer format. Wraps the `level` and/or `message` properties
 * of the `info` objects with ANSI color codes based on a few options.
 */
class Colorizer {
  constructor(opts = {}) {
    if (opts.colors) {
      this.addColors(opts.colors);
    }

    this.options = opts;
  }

  /*
   * Adds the colors Object to the set of allColors
   * known by the Colorizer
   *
   * @param {Object} colors Set of color mappings to add.
   */
  static addColors(clrs) {
    const nextColors = Object.keys(clrs).reduce((acc, level) => {
      acc[level] = hasSpace.test(clrs[level])
        ? clrs[level].split(hasSpace)
        : clrs[level];

      return acc;
    }, {});

    Colorizer.allColors = Object.assign({}, Colorizer.allColors || {}, nextColors);
    return Colorizer.allColors;
  }

  /*
   * Adds the colors Object to the set of allColors
   * known by the Colorizer
   *
   * @param {Object} colors Set of color mappings to add.
   */
  addColors(clrs) {
    return Colorizer.addColors(clrs);
  }

  /*
   * function colorize (lookup, level, message)
   * Performs multi-step colorization using @colors/colors/safe
   */
  colorize(lookup, level, message) {
    if (typeof message === 'undefined') {
      message = level;
    }

    //
    // If the color for the level is just a string
    // then attempt to colorize the message with it.
    //
    if (!Array.isArray(Colorizer.allColors[lookup])) {
      return colors[Colorizer.allColors[lookup]](message);
    }

    //
    // If it is an Array then iterate over that Array, applying
    // the colors function for each item.
    //
    for (let i = 0, len = Colorizer.allColors[lookup].length; i < len; i++) {
      message = colors[Colorizer.allColors[lookup][i]](message);
    }

    return message;
  }

  /*
   * function transform (info, opts)
   * Attempts to colorize the { level, message } of the given
   * `logform` info object.
   */
  transform(info, opts) {
    if (opts.all && typeof info[MESSAGE] === 'string') {
      info[MESSAGE] = this.colorize(info[LEVEL], info.level, info[MESSAGE]);
    }

    if (opts.level || opts.all || !opts.message) {
      info.level = this.colorize(info[LEVEL], info.level);
    }

    if (opts.all || opts.message) {
      info.message = this.colorize(info[LEVEL], info.level, info.message);
    }

    return info;
  }
}

/*
 * function colorize (info)
 * Returns a new instance of the colorize Format that applies
 * level colors to `info` objects. This was previously exposed
 * as { colorize: true } to transports in `winston < 3.0.0`.
 */
module.exports = opts => new Colorizer(opts);

//
// Attach the Colorizer for registration purposes
//
module.exports.Colorizer
  = module.exports.Format
  = Colorizer;


/***/ }),

/***/ 7315:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);

/*
 * function cascade(formats)
 * Returns a function that invokes the `._format` function in-order
 * for the specified set of `formats`. In this manner we say that Formats
 * are "pipe-like", but not a pure pumpify implementation. Since there is no back
 * pressure we can remove all of the "readable" plumbing in Node streams.
 */
function cascade(formats) {
  if (!formats.every(isValidFormat)) {
    return;
  }

  return info => {
    let obj = info;
    for (let i = 0; i < formats.length; i++) {
      obj = formats[i].transform(obj, formats[i].options);
      if (!obj) {
        return false;
      }
    }

    return obj;
  };
}

/*
 * function isValidFormat(format)
 * If the format does not define a `transform` function throw an error
 * with more detailed usage.
 */
function isValidFormat(fmt) {
  if (typeof fmt.transform !== 'function') {
    throw new Error([
      'No transform function found on format. Did you create a format instance?',
      'const myFormat = format(formatFn);',
      'const instance = myFormat();'
    ].join('\n'));
  }

  return true;
}

/*
 * function combine (info)
 * Returns a new instance of the combine Format which combines the specified
 * formats into a new format. This is similar to a pipe-chain in transform streams.
 * We choose to combine the prototypes this way because there is no back pressure in
 * an in-memory transform chain.
 */
module.exports = (...formats) => {
  const combinedFormat = format(cascade(formats));
  const instance = combinedFormat();
  instance.Format = combinedFormat.Format;
  return instance;
};

//
// Export the cascade method for use in cli and other
// combined formats that should not be assumed to be
// singletons.
//
module.exports.cascade = cascade;


/***/ }),

/***/ 2397:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint no-undefined: 0 */


const format = __nccwpck_require__(3791);
const { LEVEL, MESSAGE } = __nccwpck_require__(3937);

/*
 * function errors (info)
 * If the `message` property of the `info` object is an instance of `Error`,
 * replace the `Error` object its own `message` property.
 *
 * Optionally, the Error's `stack` property can also be appended to the `info` object.
 */
module.exports = format((einfo, { stack }) => {
  if (einfo instanceof Error) {
    const info = Object.assign({}, einfo, {
      level: einfo.level,
      [LEVEL]: einfo[LEVEL] || einfo.level,
      message: einfo.message,
      [MESSAGE]: einfo[MESSAGE] || einfo.message
    });

    if (stack) info.stack = einfo.stack;
    return info;
  }

  if (!(einfo.message instanceof Error)) return einfo;

  // Assign all enumerable properties and the
  // message property from the error provided.
  const err = einfo.message;
  Object.assign(einfo, err);
  einfo.message = err.message;
  einfo[MESSAGE] = err.message;

  // Assign the stack if requested.
  if (stack) einfo.stack = err.stack;
  return einfo;
});


/***/ }),

/***/ 3791:
/***/ ((module) => {

"use strict";


/*
 * Displays a helpful message and the source of
 * the format when it is invalid.
 */
class InvalidFormatError extends Error {
  constructor(formatFn) {
    super(`Format functions must be synchronous taking a two arguments: (info, opts)
Found: ${formatFn.toString().split('\n')[0]}\n`);

    Error.captureStackTrace(this, InvalidFormatError);
  }
}

/*
 * function format (formatFn)
 * Returns a create function for the `formatFn`.
 */
module.exports = formatFn => {
  if (formatFn.length > 2) {
    throw new InvalidFormatError(formatFn);
  }

  /*
   * function Format (options)
   * Base prototype which calls a `_format`
   * function and pushes the result.
   */
  function Format(options = {}) {
    this.options = options;
  }

  Format.prototype.transform = formatFn;

  //
  // Create a function which returns new instances of
  // FormatWrap for simple syntax like:
  //
  // require('winston').formats.json();
  //
  function createFormatWrap(opts) {
    return new Format(opts);
  }

  //
  // Expose the FormatWrap through the create function
  // for testability.
  //
  createFormatWrap.Format = Format;
  return createFormatWrap;
};


/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


/*
 * @api public
 * @property {function} format
 * Both the construction method and set of exposed
 * formats.
 */
const format = exports.format = __nccwpck_require__(3791);

/*
 * @api public
 * @method {function} levels
 * Registers the specified levels with logform.
 */
exports.levels = __nccwpck_require__(3180);

/*
 * @api private
 * method {function} exposeFormat
 * Exposes a sub-format on the main format object
 * as a lazy-loaded getter.
 */
function exposeFormat(name, requireFormat) {
  Object.defineProperty(format, name, {
    get() {
      return requireFormat();
    },
    configurable: true
  });
}

//
// Setup all transports as lazy-loaded getters.
//
exposeFormat('align', function () { return __nccwpck_require__(9748); });
exposeFormat('errors', function () { return __nccwpck_require__(2397); });
exposeFormat('cli', function () { return __nccwpck_require__(6811); });
exposeFormat('combine', function () { return __nccwpck_require__(7315); });
exposeFormat('colorize', function () { return __nccwpck_require__(3848); });
exposeFormat('json', function () { return __nccwpck_require__(5669); });
exposeFormat('label', function () { return __nccwpck_require__(6941); });
exposeFormat('logstash', function () { return __nccwpck_require__(4772); });
exposeFormat('metadata', function () { return __nccwpck_require__(9760); });
exposeFormat('ms', function () { return __nccwpck_require__(4734); });
exposeFormat('padLevels', function () { return __nccwpck_require__(7033); });
exposeFormat('prettyPrint', function () { return __nccwpck_require__(6182); });
exposeFormat('printf', function () { return __nccwpck_require__(1843); });
exposeFormat('simple', function () { return __nccwpck_require__(5313); });
exposeFormat('splat', function () { return __nccwpck_require__(7081); });
exposeFormat('timestamp', function () { return __nccwpck_require__(8381); });
exposeFormat('uncolorize', function () { return __nccwpck_require__(6420); });


/***/ }),

/***/ 5669:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);
const { MESSAGE } = __nccwpck_require__(3937);
const stringify = __nccwpck_require__(7560);

/*
 * function replacer (key, value)
 * Handles proper stringification of Buffer and bigint output.
 */
function replacer(key, value) {
  // safe-stable-stringify does support BigInt, however, it doesn't wrap the value in quotes.
  // Leading to a loss in fidelity if the resulting string is parsed.
  // It would also be a breaking change for logform.
  if (typeof value === 'bigint')
    return value.toString();
  return value;
}

/*
 * function json (info)
 * Returns a new instance of the JSON format that turns a log `info`
 * object into pure JSON. This was previously exposed as { json: true }
 * to transports in `winston < 3.0.0`.
 */
module.exports = format((info, opts) => {
  const jsonStringify = stringify.configure(opts);
  info[MESSAGE] = jsonStringify(info, opts.replacer || replacer, opts.space);
  return info;
});


/***/ }),

/***/ 6941:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);

/*
 * function label (info)
 * Returns a new instance of the label Format which adds the specified
 * `opts.label` before the message. This was previously exposed as
 * { label: 'my label' } to transports in `winston < 3.0.0`.
 */
module.exports = format((info, opts) => {
  if (opts.message) {
    info.message = `[${opts.label}] ${info.message}`;
    return info;
  }

  info.label = opts.label;
  return info;
});


/***/ }),

/***/ 3180:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const { Colorizer } = __nccwpck_require__(3848);

/*
 * Simple method to register colors with a simpler require
 * path within the module.
 */
module.exports = config => {
  Colorizer.addColors(config.colors || config);
  return config;
};


/***/ }),

/***/ 4772:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);
const { MESSAGE } = __nccwpck_require__(3937);
const jsonStringify = __nccwpck_require__(7560);

/*
 * function logstash (info)
 * Returns a new instance of the LogStash Format that turns a
 * log `info` object into pure JSON with the appropriate logstash
 * options. This was previously exposed as { logstash: true }
 * to transports in `winston < 3.0.0`.
 */
module.exports = format(info => {
  const logstash = {};
  if (info.message) {
    logstash['@message'] = info.message;
    delete info.message;
  }

  if (info.timestamp) {
    logstash['@timestamp'] = info.timestamp;
    delete info.timestamp;
  }

  logstash['@fields'] = info;
  info[MESSAGE] = jsonStringify(logstash);
  return info;
});


/***/ }),

/***/ 9760:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const format = __nccwpck_require__(3791);

function fillExcept(info, fillExceptKeys, metadataKey) {
  const savedKeys = fillExceptKeys.reduce((acc, key) => {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});
  const metadata = Object.keys(info).reduce((acc, key) => {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});

  Object.assign(info, savedKeys, {
    [metadataKey]: metadata
  });
  return info;
}

function fillWith(info, fillWithKeys, metadataKey) {
  info[metadataKey] = fillWithKeys.reduce((acc, key) => {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});
  return info;
}

/**
 * Adds in a "metadata" object to collect extraneous data, similar to the metadata
 * object in winston 2.x.
 */
module.exports = format((info, opts = {}) => {
  let metadataKey = 'metadata';
  if (opts.key) {
    metadataKey = opts.key;
  }

  let fillExceptKeys = [];
  if (!opts.fillExcept && !opts.fillWith) {
    fillExceptKeys.push('level');
    fillExceptKeys.push('message');
  }

  if (opts.fillExcept) {
    fillExceptKeys = opts.fillExcept;
  }

  if (fillExceptKeys.length > 0) {
    return fillExcept(info, fillExceptKeys, metadataKey);
  }

  if (opts.fillWith) {
    return fillWith(info, opts.fillWith, metadataKey);
  }

  return info;
});


/***/ }),

/***/ 4734:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

"use strict";


const format = __nccwpck_require__(3791);
const ms = __nccwpck_require__(900);

/*
 * function ms (info)
 * Returns an `info` with a `ms` property. The `ms` property holds the Value
 * of the time difference between two calls in milliseconds.
 */
module.exports = format(info => {
  const curr = +new Date();
  this.diff = curr - (this.prevTime || curr);
  this.prevTime = curr;
  info.ms = `+${ms(this.diff)}`;

  return info;
});


/***/ }),

/***/ 7033:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint no-unused-vars: 0 */


const { configs, LEVEL, MESSAGE } = __nccwpck_require__(3937);

class Padder {
  constructor(opts = { levels: configs.npm.levels }) {
    this.paddings = Padder.paddingForLevels(opts.levels, opts.filler);
    this.options = opts;
  }

  /**
   * Returns the maximum length of keys in the specified `levels` Object.
   * @param  {Object} levels Set of all levels to calculate longest level against.
   * @returns {Number} Maximum length of the longest level string.
   */
  static getLongestLevel(levels) {
    const lvls = Object.keys(levels).map(level => level.length);
    return Math.max(...lvls);
  }

  /**
   * Returns the padding for the specified `level` assuming that the
   * maximum length of all levels it's associated with is `maxLength`.
   * @param  {String} level Level to calculate padding for.
   * @param  {String} filler Repeatable text to use for padding.
   * @param  {Number} maxLength Length of the longest level
   * @returns {String} Padding string for the `level`
   */
  static paddingForLevel(level, filler, maxLength) {
    const targetLen = maxLength + 1 - level.length;
    const rep = Math.floor(targetLen / filler.length);
    const padding = `${filler}${filler.repeat(rep)}`;
    return padding.slice(0, targetLen);
  }

  /**
   * Returns an object with the string paddings for the given `levels`
   * using the specified `filler`.
   * @param  {Object} levels Set of all levels to calculate padding for.
   * @param  {String} filler Repeatable text to use for padding.
   * @returns {Object} Mapping of level to desired padding.
   */
  static paddingForLevels(levels, filler = ' ') {
    const maxLength = Padder.getLongestLevel(levels);
    return Object.keys(levels).reduce((acc, level) => {
      acc[level] = Padder.paddingForLevel(level, filler, maxLength);
      return acc;
    }, {});
  }

  /**
   * Prepends the padding onto the `message` based on the `LEVEL` of
   * the `info`. This is based on the behavior of `winston@2` which also
   * prepended the level onto the message.
   *
   * See: https://github.com/winstonjs/winston/blob/2.x/lib/winston/logger.js#L198-L201
   *
   * @param  {Info} info Logform info object
   * @param  {Object} opts Options passed along to this instance.
   * @returns {Info} Modified logform info object.
   */
  transform(info, opts) {
    info.message = `${this.paddings[info[LEVEL]]}${info.message}`;
    if (info[MESSAGE]) {
      info[MESSAGE] = `${this.paddings[info[LEVEL]]}${info[MESSAGE]}`;
    }

    return info;
  }
}

/*
 * function padLevels (info)
 * Returns a new instance of the padLevels Format which pads
 * levels to be the same length. This was previously exposed as
 * { padLevels: true } to transports in `winston < 3.0.0`.
 */
module.exports = opts => new Padder(opts);

module.exports.Padder
  = module.exports.Format
  = Padder;


/***/ }),

/***/ 6182:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const inspect = __nccwpck_require__(1669).inspect;
const format = __nccwpck_require__(3791);
const { LEVEL, MESSAGE, SPLAT } = __nccwpck_require__(3937);

/*
 * function prettyPrint (info)
 * Returns a new instance of the prettyPrint Format that "prettyPrint"
 * serializes `info` objects. This was previously exposed as
 * { prettyPrint: true } to transports in `winston < 3.0.0`.
 */
module.exports = format((info, opts = {}) => {
  //
  // info[{LEVEL, MESSAGE, SPLAT}] are enumerable here. Since they
  // are internal, we remove them before util.inspect so they
  // are not printed.
  //
  const stripped = Object.assign({}, info);

  // Remark (indexzero): update this technique in April 2019
  // when node@6 is EOL
  delete stripped[LEVEL];
  delete stripped[MESSAGE];
  delete stripped[SPLAT];

  info[MESSAGE] = inspect(stripped, false, opts.depth || null, opts.colorize);
  return info;
});


/***/ }),

/***/ 1843:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const { MESSAGE } = __nccwpck_require__(3937);

class Printf {
  constructor(templateFn) {
    this.template = templateFn;
  }

  transform(info) {
    info[MESSAGE] = this.template(info);
    return info;
  }
}

/*
 * function printf (templateFn)
 * Returns a new instance of the printf Format that creates an
 * intermediate prototype to store the template string-based formatter
 * function.
 */
module.exports = opts => new Printf(opts);

module.exports.Printf
  = module.exports.Format
  = Printf;


/***/ }),

/***/ 5313:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint no-undefined: 0 */


const format = __nccwpck_require__(3791);
const { MESSAGE } = __nccwpck_require__(3937);
const jsonStringify = __nccwpck_require__(7560);

/*
 * function simple (info)
 * Returns a new instance of the simple format TransformStream
 * which writes a simple representation of logs.
 *
 *    const { level, message, splat, ...rest } = info;
 *
 *    ${level}: ${message}                            if rest is empty
 *    ${level}: ${message} ${JSON.stringify(rest)}    otherwise
 */
module.exports = format(info => {
  const stringifiedRest = jsonStringify(Object.assign({}, info, {
    level: undefined,
    message: undefined,
    splat: undefined
  }));

  const padding = info.padding && info.padding[info.level] || '';
  if (stringifiedRest !== '{}') {
    info[MESSAGE] = `${info.level}:${padding} ${info.message} ${stringifiedRest}`;
  } else {
    info[MESSAGE] = `${info.level}:${padding} ${info.message}`;
  }

  return info;
});


/***/ }),

/***/ 7081:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(1669);
const { SPLAT } = __nccwpck_require__(3937);

/**
 * Captures the number of format (i.e. %s strings) in a given string.
 * Based on `util.format`, see Node.js source:
 * https://github.com/nodejs/node/blob/b1c8f15c5f169e021f7c46eb7b219de95fe97603/lib/util.js#L201-L230
 * @type {RegExp}
 */
const formatRegExp = /%[scdjifoO%]/g;

/**
 * Captures the number of escaped % signs in a format string (i.e. %s strings).
 * @type {RegExp}
 */
const escapedPercent = /%%/g;

class Splatter {
  constructor(opts) {
    this.options = opts;
  }

  /**
     * Check to see if tokens <= splat.length, assign { splat, meta } into the
     * `info` accordingly, and write to this instance.
     *
     * @param  {Info} info Logform info message.
     * @param  {String[]} tokens Set of string interpolation tokens.
     * @returns {Info} Modified info message
     * @private
     */
  _splat(info, tokens) {
    const msg = info.message;
    const splat = info[SPLAT] || info.splat || [];
    const percents = msg.match(escapedPercent);
    const escapes = percents && percents.length || 0;

    // The expected splat is the number of tokens minus the number of escapes
    // e.g.
    // - { expectedSplat: 3 } '%d %s %j'
    // - { expectedSplat: 5 } '[%s] %d%% %d%% %s %j'
    //
    // Any "meta" will be arugments in addition to the expected splat size
    // regardless of type. e.g.
    //
    // logger.log('info', '%d%% %s %j', 100, 'wow', { such: 'js' }, { thisIsMeta: true });
    // would result in splat of four (4), but only three (3) are expected. Therefore:
    //
    // extraSplat = 3 - 4 = -1
    // metas = [100, 'wow', { such: 'js' }, { thisIsMeta: true }].splice(-1, -1 * -1);
    // splat = [100, 'wow', { such: 'js' }]
    const expectedSplat = tokens.length - escapes;
    const extraSplat = expectedSplat - splat.length;
    const metas = extraSplat < 0
      ? splat.splice(extraSplat, -1 * extraSplat)
      : [];

    // Now that { splat } has been separated from any potential { meta }. we
    // can assign this to the `info` object and write it to our format stream.
    // If the additional metas are **NOT** objects or **LACK** enumerable properties
    // you are going to have a bad time.
    const metalen = metas.length;
    if (metalen) {
      for (let i = 0; i < metalen; i++) {
        Object.assign(info, metas[i]);
      }
    }

    info.message = util.format(msg, ...splat);
    return info;
  }

  /**
    * Transforms the `info` message by using `util.format` to complete
    * any `info.message` provided it has string interpolation tokens.
    * If no tokens exist then `info` is immutable.
    *
    * @param  {Info} info Logform info message.
    * @param  {Object} opts Options for this instance.
    * @returns {Info} Modified info message
    */
  transform(info) {
    const msg = info.message;
    const splat = info[SPLAT] || info.splat;

    // No need to process anything if splat is undefined
    if (!splat || !splat.length) {
      return info;
    }

    // Extract tokens, if none available default to empty array to
    // ensure consistancy in expected results
    const tokens = msg && msg.match && msg.match(formatRegExp);

    // This condition will take care of inputs with info[SPLAT]
    // but no tokens present
    if (!tokens && (splat || splat.length)) {
      const metas = splat.length > 1
        ? splat.splice(0)
        : splat;

      // Now that { splat } has been separated from any potential { meta }. we
      // can assign this to the `info` object and write it to our format stream.
      // If the additional metas are **NOT** objects or **LACK** enumerable properties
      // you are going to have a bad time.
      const metalen = metas.length;
      if (metalen) {
        for (let i = 0; i < metalen; i++) {
          Object.assign(info, metas[i]);
        }
      }

      return info;
    }

    if (tokens) {
      return this._splat(info, tokens);
    }

    return info;
  }
}

/*
 * function splat (info)
 * Returns a new instance of the splat format TransformStream
 * which performs string interpolation from `info` objects. This was
 * previously exposed implicitly in `winston < 3.0.0`.
 */
module.exports = opts => new Splatter(opts);


/***/ }),

/***/ 8381:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const fecha = __nccwpck_require__(4513);
const format = __nccwpck_require__(3791);

/*
 * function timestamp (info)
 * Returns a new instance of the timestamp Format which adds a timestamp
 * to the info. It was previously available in winston < 3.0.0 as:
 *
 * - { timestamp: true }             // `new Date.toISOString()`
 * - { timestamp: function:String }  // Value returned by `timestamp()`
 */
module.exports = format((info, opts = {}) => {
  if (opts.format) {
    info.timestamp = typeof opts.format === 'function'
      ? opts.format()
      : fecha.format(new Date(), opts.format);
  }

  if (!info.timestamp) {
    info.timestamp = new Date().toISOString();
  }

  if (opts.alias) {
    info[opts.alias] = info.timestamp;
  }

  return info;
});


/***/ }),

/***/ 6420:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const colors = __nccwpck_require__(9256);
const format = __nccwpck_require__(3791);
const { MESSAGE } = __nccwpck_require__(3937);

/*
 * function uncolorize (info)
 * Returns a new instance of the uncolorize Format that strips colors
 * from `info` objects. This was previously exposed as { stripColors: true }
 * to transports in `winston < 3.0.0`.
 */
module.exports = format((info, opts) => {
  if (opts.level !== false) {
    info.level = colors.strip(info.level);
  }

  if (opts.message !== false) {
    info.message = colors.strip(String(info.message));
  }

  if (opts.raw !== false && info[MESSAGE]) {
    info[MESSAGE] = colors.strip(String(info[MESSAGE]));
  }

  return info;
});


/***/ }),

/***/ 900:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 4118:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var name = __nccwpck_require__(2743);

/**
 * Wrap callbacks to prevent double execution.
 *
 * @param {Function} fn Function that should only be called once.
 * @returns {Function} A wrapped callback which prevents multiple executions.
 * @public
 */
module.exports = function one(fn) {
  var called = 0
    , value;

  /**
   * The function that prevents double execution.
   *
   * @private
   */
  function onetime() {
    if (called) return value;

    called = 1;
    value = fn.apply(this, arguments);
    fn = null;

    return value;
  }

  //
  // To make debugging more easy we want to use the name of the supplied
  // function. So when you look at the functions that are assigned to event
  // listeners you don't see a load of `onetime` functions but actually the
  // names of the functions that this module will call.
  //
  // NOTE: We cannot override the `name` property, as that is `readOnly`
  // property, so displayName will have to do.
  //
  onetime.displayName = name(fn);
  return onetime;
};


/***/ }),

/***/ 6916:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// minimal library entry point.


module.exports = __nccwpck_require__(3242);


/***/ }),

/***/ 3242:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __nccwpck_require__(3098);
protobuf.BufferWriter = __nccwpck_require__(1863);
protobuf.Reader       = __nccwpck_require__(1011);
protobuf.BufferReader = __nccwpck_require__(339);

// Utility
protobuf.util         = __nccwpck_require__(1241);
protobuf.rpc          = __nccwpck_require__(6444);
protobuf.roots        = __nccwpck_require__(73);
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ 1011:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = Reader;

var util      = __nccwpck_require__(1241);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ 339:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __nccwpck_require__(1011);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __nccwpck_require__(1241);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ 73:
/***/ ((module) => {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __nccwpck_require__(2439);


/***/ }),

/***/ 2439:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = Service;

var util = __nccwpck_require__(1241);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ 8374:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = LongBits;

var util = __nccwpck_require__(1241);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ 1241:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __nccwpck_require__(252);

// converts to / from base64 encoded strings
util.base64 = __nccwpck_require__(6718);

// base class of rpc.Service
util.EventEmitter = __nccwpck_require__(6850);

// float handling accross browsers
util.float = __nccwpck_require__(3182);

// requires modules optionally and hides the call from bundlers
util.inquire = __nccwpck_require__(94);

// converts to / from utf8 encoded strings
util.utf8 = __nccwpck_require__(9049);

// provides a node-like buffer pool in the browser
util.pool = __nccwpck_require__(7743);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __nccwpck_require__(8374);

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */
util.isNode = Boolean(typeof global !== "undefined"
                   && global
                   && global.process
                   && global.process.versions
                   && global.process.versions.node);

/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */
util.global = util.isNode && global
           || typeof window !== "undefined" && window
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};


/***/ }),

/***/ 3098:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = Writer;

var util      = __nccwpck_require__(1241);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ 1863:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __nccwpck_require__(3098);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __nccwpck_require__(1241);

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ }),

/***/ 7214:
/***/ ((module) => {

"use strict";


const codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error
  }

  function getMessage (arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message
    } else {
      return message(arg1, arg2, arg3)
    }
  }

  class NodeError extends Base {
    constructor (arg1, arg2, arg3) {
      super(getMessage(arg1, arg2, arg3));
    }
  }

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;

  codes[code] = NodeError;
}

// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    const len = expected.length;
    expected = expected.map((i) => String(i));
    if (len > 2) {
      return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` +
             expected[len - 1];
    } else if (len === 2) {
      return `one of ${thing} ${expected[0]} or ${expected[1]}`;
    } else {
      return `of ${thing} ${expected[0]}`;
    }
  } else {
    return `of ${thing} ${String(expected)}`;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
	return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
	if (this_len === undefined || this_len > str.length) {
		this_len = str.length;
	}
	return str.substring(this_len - search.length, this_len) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"'
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  let determiner;
  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  let msg;
  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
  } else {
    const type = includes(name, '.') ? 'property' : 'argument';
    msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
  }

  msg += `. Received type ${typeof actual}`;
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented'
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');

module.exports.q = codes;


/***/ }),

/***/ 1359:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __nccwpck_require__(1433);

var Writable = __nccwpck_require__(6993);

__nccwpck_require__(4124)(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

/***/ }),

/***/ 1542:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __nccwpck_require__(4415);

__nccwpck_require__(4124)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ 1433:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __nccwpck_require__(8614).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __nccwpck_require__(2387);
/*</replacement>*/


var Buffer = __nccwpck_require__(4293).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __nccwpck_require__(1669);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __nccwpck_require__(6522);

var destroyImpl = __nccwpck_require__(7049);

var _require = __nccwpck_require__(9948),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __nccwpck_require__(7214)/* .codes */ .q,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__nccwpck_require__(4124)(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __nccwpck_require__(1359);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __nccwpck_require__(4841)/* .StringDecoder */ .s;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __nccwpck_require__(1359);
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __nccwpck_require__(4841)/* .StringDecoder */ .s;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __nccwpck_require__(3306);
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __nccwpck_require__(9082);
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

/***/ }),

/***/ 4415:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __nccwpck_require__(7214)/* .codes */ .q,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __nccwpck_require__(1359);

__nccwpck_require__(4124)(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),

/***/ 6993:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __nccwpck_require__(7127)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __nccwpck_require__(2387);
/*</replacement>*/


var Buffer = __nccwpck_require__(4293).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __nccwpck_require__(7049);

var _require = __nccwpck_require__(9948),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __nccwpck_require__(7214)/* .codes */ .q,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__nccwpck_require__(4124)(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __nccwpck_require__(1359);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __nccwpck_require__(1359); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};

/***/ }),

/***/ 3306:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __nccwpck_require__(6080);

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;

/***/ }),

/***/ 6522:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __nccwpck_require__(4293),
    Buffer = _require.Buffer;

var _require2 = __nccwpck_require__(1669),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),

/***/ 7049:
/***/ ((module) => {

"use strict";
 // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};

/***/ }),

/***/ 6080:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __nccwpck_require__(7214)/* .codes.ERR_STREAM_PREMATURE_CLOSE */ .q.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),

/***/ 9082:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ERR_INVALID_ARG_TYPE = __nccwpck_require__(7214)/* .codes.ERR_INVALID_ARG_TYPE */ .q.ERR_INVALID_ARG_TYPE;

function from(Readable, iterable, opts) {
  var iterator;

  if (iterable && typeof iterable.next === 'function') {
    iterator = iterable;
  } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();else throw new ERR_INVALID_ARG_TYPE('iterable', ['Iterable'], iterable);

  var readable = new Readable(_objectSpread({
    objectMode: true
  }, opts)); // Reading boolean to protect against _read
  // being called before last iteration completion.

  var reading = false;

  readable._read = function () {
    if (!reading) {
      reading = true;
      next();
    }
  };

  function next() {
    return _next2.apply(this, arguments);
  }

  function _next2() {
    _next2 = _asyncToGenerator(function* () {
      try {
        var _ref = yield iterator.next(),
            value = _ref.value,
            done = _ref.done;

        if (done) {
          readable.push(null);
        } else if (readable.push((yield value))) {
          next();
        } else {
          reading = false;
        }
      } catch (err) {
        readable.destroy(err);
      }
    });
    return _next2.apply(this, arguments);
  }

  return readable;
}

module.exports = from;

/***/ }),

/***/ 6989:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __nccwpck_require__(7214)/* .codes */ .q,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __nccwpck_require__(6080);
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),

/***/ 9948:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var ERR_INVALID_OPT_VALUE = __nccwpck_require__(7214)/* .codes.ERR_INVALID_OPT_VALUE */ .q.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),

/***/ 2387:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(2413);


/***/ }),

/***/ 1642:
/***/ ((module, exports, __nccwpck_require__) => {

var Stream = __nccwpck_require__(2413);
if (process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream.Readable;
  Object.assign(module.exports, Stream);
  module.exports.Stream = Stream;
} else {
  exports = module.exports = __nccwpck_require__(1433);
  exports.Stream = Stream || exports;
  exports.Readable = exports;
  exports.Writable = __nccwpck_require__(6993);
  exports.Duplex = __nccwpck_require__(1359);
  exports.Transform = __nccwpck_require__(4415);
  exports.PassThrough = __nccwpck_require__(1542);
  exports.finished = __nccwpck_require__(6080);
  exports.pipeline = __nccwpck_require__(6989);
}


/***/ }),

/***/ 7560:
/***/ ((module, exports) => {

"use strict";


const stringify = configure()

// @ts-expect-error
stringify.configure = configure
// @ts-expect-error
stringify.stringify = stringify

// @ts-expect-error
stringify.default = stringify

// @ts-expect-error used for named export
exports.stringify = stringify
// @ts-expect-error used for named export
exports.configure = configure

module.exports = stringify

// eslint-disable-next-line
const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/
// eslint-disable-next-line
const strEscapeSequencesReplacer = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/g

// Escaped special characters. Use empty strings to fill up unused entries.
const meta = [
  '\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004',
  '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t',
  '\\n', '\\u000b', '\\f', '\\r', '\\u000e',
  '\\u000f', '\\u0010', '\\u0011', '\\u0012', '\\u0013',
  '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018',
  '\\u0019', '\\u001a', '\\u001b', '\\u001c', '\\u001d',
  '\\u001e', '\\u001f', '', '', '\\"',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '\\\\'
]

function escapeFn (str) {
  if (str.length === 2) {
    const charCode = str.charCodeAt(1)
    return `${str[0]}\\u${charCode.toString(16)}`
  }
  const charCode = str.charCodeAt(0)
  return meta.length > charCode
    ? meta[charCode]
    : `\\u${charCode.toString(16)}`
}

// Escape C0 control characters, double quotes, the backslash and every code
// unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
function strEscape (str) {
  // Some magic numbers that worked out fine while benchmarking with v8 8.0
  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
    return str
  }
  if (str.length > 100) {
    return str.replace(strEscapeSequencesReplacer, escapeFn)
  }
  let result = ''
  let last = 0
  for (let i = 0; i < str.length; i++) {
    const point = str.charCodeAt(i)
    if (point === 34 || point === 92 || point < 32) {
      result += `${str.slice(last, i)}${meta[point]}`
      last = i + 1
    } else if (point >= 0xd800 && point <= 0xdfff) {
      if (point <= 0xdbff && i + 1 < str.length) {
        const point = str.charCodeAt(i + 1)
        if (point >= 0xdc00 && point <= 0xdfff) {
          i++
          continue
        }
      }
      result += `${str.slice(last, i)}${`\\u${point.toString(16)}`}`
      last = i + 1
    }
  }
  result += str.slice(last)
  return result
}

function insertSort (array) {
  // Insertion sort is very efficient for small input sizes but it has a bad
  // worst case complexity. Thus, use native array sort for bigger values.
  if (array.length > 2e2) {
    return array.sort()
  }
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i]
    let position = i
    while (position !== 0 && array[position - 1] > currentValue) {
      array[position] = array[position - 1]
      position--
    }
    array[position] = currentValue
  }
  return array
}

const typedArrayPrototypeGetSymbolToStringTag =
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(
      Object.getPrototypeOf(
        new Uint8Array()
      )
    ),
    Symbol.toStringTag
  ).get

function isTypedArrayWithEntries (value) {
  return typedArrayPrototypeGetSymbolToStringTag.call(value) !== undefined && value.length !== 0
}

function stringifyTypedArray (array, separator, maximumBreadth) {
  if (array.length < maximumBreadth) {
    maximumBreadth = array.length
  }
  const whitespace = separator === ',' ? '' : ' '
  let res = `"0":${whitespace}${array[0]}`
  for (let i = 1; i < maximumBreadth; i++) {
    res += `${separator}"${i}":${whitespace}${array[i]}`
  }
  return res
}

function getCircularValueOption (options) {
  if (options && Object.prototype.hasOwnProperty.call(options, 'circularValue')) {
    var circularValue = options.circularValue
    if (typeof circularValue === 'string') {
      return `"${circularValue}"`
    }
    if (circularValue == null) {
      return circularValue
    }
    if (circularValue === Error || circularValue === TypeError) {
      return {
        toString () {
          throw new TypeError('Converting circular structure to JSON')
        }
      }
    }
    throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
  }
  return '"[Circular]"'
}

function getBooleanOption (options, key) {
  if (options && Object.prototype.hasOwnProperty.call(options, key)) {
    var value = options[key]
    if (typeof value !== 'boolean') {
      throw new TypeError(`The "${key}" argument must be of type boolean`)
    }
  }
  return value === undefined ? true : value
}

function getPositiveIntegerOption (options, key) {
  if (options && Object.prototype.hasOwnProperty.call(options, key)) {
    var value = options[key]
    if (typeof value !== 'number') {
      throw new TypeError(`The "${key}" argument must be of type number`)
    }
    if (!Number.isInteger(value)) {
      throw new TypeError(`The "${key}" argument must be an integer`)
    }
    if (value < 1) {
      throw new RangeError(`The "${key}" argument must be >= 1`)
    }
  }
  return value === undefined ? Infinity : value
}

function getItemCount (number) {
  if (number === 1) {
    return '1 item'
  }
  return `${number} items`
}

function getUniqueReplacerSet (replacerArray) {
  const replacerSet = new Set()
  for (const value of replacerArray) {
    if (typeof value === 'string') {
      replacerSet.add(value)
    } else if (typeof value === 'number') {
      replacerSet.add(String(value))
    }
  }
  return replacerSet
}

function configure (options) {
  const circularValue = getCircularValueOption(options)
  const bigint = getBooleanOption(options, 'bigint')
  const deterministic = getBooleanOption(options, 'deterministic')
  const maximumDepth = getPositiveIntegerOption(options, 'maximumDepth')
  const maximumBreadth = getPositiveIntegerOption(options, 'maximumBreadth')

  function stringifyFnReplacer (key, parent, stack, replacer, spacer, indentation) {
    let value = parent[key]

    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
      value = value.toJSON(key)
    }
    value = replacer.call(parent, key, value)

    switch (typeof value) {
      case 'string':
        return `"${strEscape(value)}"`
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        let res = ''
        let join = ','
        const originalIndentation = indentation

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          if (spacer !== '') {
            indentation += spacer
            res += `\n${indentation}`
            join = `,\n${indentation}`
          }
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyFnReplacer(i, value, stack, replacer, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyFnReplacer(i, value, stack, replacer, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          if (spacer !== '') {
            res += `\n${originalIndentation}`
          }
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        let whitespace = ''
        let separator = ''
        if (spacer !== '') {
          indentation += spacer
          join = `,\n${indentation}`
          whitespace = ' '
        }
        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, join, maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = join
        }
        if (deterministic) {
          keys = insertSort(keys)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifyFnReplacer(key, value, stack, replacer, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}"${strEscape(key)}":${whitespace}${tmp}`
            separator = join
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`
          separator = join
        }
        if (spacer !== '' && separator.length > 1) {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'bigint':
        return bigint ? String(value) : undefined
    }
  }

  function stringifyArrayReplacer (key, value, stack, replacer, spacer, indentation) {
    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
      value = value.toJSON(key)
    }

    switch (typeof value) {
      case 'string':
        return `"${strEscape(value)}"`
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        const originalIndentation = indentation
        let res = ''
        let join = ','

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          if (spacer !== '') {
            indentation += spacer
            res += `\n${indentation}`
            join = `,\n${indentation}`
          }
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyArrayReplacer(i, value[i], stack, replacer, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyArrayReplacer(i, value[i], stack, replacer, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          if (spacer !== '') {
            res += `\n${originalIndentation}`
          }
          stack.pop()
          return `[${res}]`
        }
        if (replacer.size === 0) {
          return '{}'
        }
        stack.push(value)
        let whitespace = ''
        if (spacer !== '') {
          indentation += spacer
          join = `,\n${indentation}`
          whitespace = ' '
        }
        let separator = ''
        for (const key of replacer) {
          const tmp = stringifyArrayReplacer(key, value[key], stack, replacer, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}"${strEscape(key)}":${whitespace}${tmp}`
            separator = join
          }
        }
        if (spacer !== '' && separator.length > 1) {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'bigint':
        return bigint ? String(value) : undefined
    }
  }

  function stringifyIndent (key, value, stack, spacer, indentation) {
    switch (typeof value) {
      case 'string':
        return `"${strEscape(value)}"`
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (typeof value.toJSON === 'function') {
          value = value.toJSON(key)
          // Prevent calling `toJSON` again.
          if (typeof value !== 'object') {
            return stringifyIndent(key, value, stack, spacer, indentation)
          }
          if (value === null) {
            return 'null'
          }
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }
        const originalIndentation = indentation

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          indentation += spacer
          let res = `\n${indentation}`
          const join = `,\n${indentation}`
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyIndent(i, value[i], stack, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyIndent(i, value[i], stack, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          res += `\n${originalIndentation}`
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        indentation += spacer
        const join = `,\n${indentation}`
        let res = ''
        let separator = ''
        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, join, maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = join
        }
        if (deterministic) {
          keys = insertSort(keys)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifyIndent(key, value[key], stack, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}"${strEscape(key)}": ${tmp}`
            separator = join
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`
          separator = join
        }
        if (separator !== '') {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'bigint':
        return bigint ? String(value) : undefined
    }
  }

  function stringifySimple (key, value, stack) {
    switch (typeof value) {
      case 'string':
        return `"${strEscape(value)}"`
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (typeof value.toJSON === 'function') {
          value = value.toJSON(key)
          // Prevent calling `toJSON` again
          if (typeof value !== 'object') {
            return stringifySimple(key, value, stack)
          }
          if (value === null) {
            return 'null'
          }
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        let res = ''

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifySimple(i, value[i], stack)
            res += tmp !== undefined ? tmp : 'null'
            res += ','
          }
          const tmp = stringifySimple(i, value[i], stack)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `,"... ${getItemCount(removedKeys)} not stringified"`
          }
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        let separator = ''
        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, ',', maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = ','
        }
        if (deterministic) {
          keys = insertSort(keys)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifySimple(key, value[key], stack)
          if (tmp !== undefined) {
            res += `${separator}"${strEscape(key)}":${tmp}`
            separator = ','
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'bigint':
        return bigint ? String(value) : undefined
    }
  }

  function stringify (value, replacer, space) {
    if (arguments.length > 1) {
      let spacer = ''
      if (typeof space === 'number') {
        spacer = ' '.repeat(Math.min(space, 10))
      } else if (typeof space === 'string') {
        spacer = space.slice(0, 10)
      }
      if (replacer != null) {
        if (typeof replacer === 'function') {
          return stringifyFnReplacer('', { '': value }, [], replacer, spacer, '')
        }
        if (Array.isArray(replacer)) {
          return stringifyArrayReplacer('', value, [], getUniqueReplacerSet(replacer), spacer, '')
        }
      }
      if (spacer.length !== 0) {
        return stringifyIndent('', value, [], spacer, '')
      }
    }
    return stringifySimple('', value, [])
  }

  return stringify
}


/***/ }),

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var isArrayish = __nccwpck_require__(8542);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ 8542:
/***/ ((module) => {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ 315:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const{existsSync,readFileSync}=__nccwpck_require__(5747),{join}=__nccwpck_require__(5622),{platform,arch}=process;let nativeBinding=null,localFileExisted=!1,isMusl=!1,loadError=null;switch(platform){case"android":if(arch!=="arm64")throw new Error(`Unsupported architecture on Android ${arch}`);localFileExisted=existsSync(join(__dirname,"snappy.android-arm64.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(1607):nativeBinding=__nccwpck_require__(8935)}catch(e){loadError=e}break;case"win32":switch(arch){case"x64":localFileExisted=existsSync(join(__dirname,"snappy.win32-x64-msvc.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(5102):nativeBinding=__nccwpck_require__(9679)}catch(e){loadError=e}break;case"ia32":localFileExisted=existsSync(join(__dirname,"snappy.win32-ia32-msvc.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(3199):nativeBinding=__nccwpck_require__(9965)}catch(e){loadError=e}break;case"arm64":localFileExisted=existsSync(join(__dirname,"snappy.win32-arm64-msvc.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(4403):nativeBinding=__nccwpck_require__(8897)}catch(e){loadError=e}break;default:throw new Error(`Unsupported architecture on Windows: ${arch}`)}break;case"darwin":switch(arch){case"x64":localFileExisted=existsSync(join(__dirname,"snappy.darwin-x64.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(8220):nativeBinding=__nccwpck_require__(2511)}catch(e){loadError=e}break;case"arm64":localFileExisted=existsSync(join(__dirname,"snappy.darwin-arm64.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(6262):nativeBinding=__nccwpck_require__(7850)}catch(e){loadError=e}break;default:throw new Error(`Unsupported architecture on macOS: ${arch}`)}break;case"freebsd":if(arch!=="x64")throw new Error(`Unsupported architecture on FreeBSD: ${arch}`);localFileExisted=existsSync(join(__dirname,"snappy.freebsd-x64.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(6366):nativeBinding=__nccwpck_require__(7798)}catch(e){loadError=e}break;case"linux":switch(arch){case"x64":if(isMusl=readFileSync("/usr/bin/ldd","utf8").includes("musl"),isMusl){localFileExisted=existsSync(join(__dirname,"snappy.linux-x64-musl.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(5095):nativeBinding=__nccwpck_require__(9524)}catch(e){loadError=e}}else{localFileExisted=existsSync(join(__dirname,"snappy.linux-x64-gnu.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(1110):nativeBinding=__nccwpck_require__(3364)}catch(e){loadError=e}}break;case"arm64":if(isMusl=readFileSync("/usr/bin/ldd","utf8").includes("musl"),isMusl){localFileExisted=existsSync(join(__dirname,"snappy.linux-arm64-musl.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(1026):nativeBinding=__nccwpck_require__(7925)}catch(e){loadError=e}}else{localFileExisted=existsSync(join(__dirname,"snappy.linux-arm64-gnu.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(5972):nativeBinding=__nccwpck_require__(5305)}catch(e){loadError=e}}break;case"arm":localFileExisted=existsSync(join(__dirname,"snappy.linux-arm-gnueabihf.node"));try{localFileExisted?nativeBinding=__nccwpck_require__(4707):nativeBinding=__nccwpck_require__(7144)}catch(e){loadError=e}break;default:throw new Error(`Unsupported architecture on Linux: ${arch}`)}break;default:throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)}if(!nativeBinding)throw loadError||new Error("Failed to load native binding");const{compressSync,compress,uncompressSync,uncompress}=nativeBinding;module.exports.compressSync=compressSync,module.exports.compress=compress,module.exports.uncompressSync=uncompressSync,module.exports.uncompress=uncompress;


/***/ }),

/***/ 5315:
/***/ ((__unused_webpack_module, exports) => {

exports.get = function(belowFn) {
  var oldLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;

  var dummyObject = {};

  var v8Handler = Error.prepareStackTrace;
  Error.prepareStackTrace = function(dummyObject, v8StackTrace) {
    return v8StackTrace;
  };
  Error.captureStackTrace(dummyObject, belowFn || exports.get);

  var v8StackTrace = dummyObject.stack;
  Error.prepareStackTrace = v8Handler;
  Error.stackTraceLimit = oldLimit;

  return v8StackTrace;
};

exports.parse = function(err) {
  if (!err.stack) {
    return [];
  }

  var self = this;
  var lines = err.stack.split('\n').slice(1);

  return lines
    .map(function(line) {
      if (line.match(/^\s*[-]{4,}$/)) {
        return self._createParsedCallSite({
          fileName: line,
          lineNumber: null,
          functionName: null,
          typeName: null,
          methodName: null,
          columnNumber: null,
          'native': null,
        });
      }

      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!lineMatch) {
        return;
      }

      var object = null;
      var method = null;
      var functionName = null;
      var typeName = null;
      var methodName = null;
      var isNative = (lineMatch[5] === 'native');

      if (lineMatch[1]) {
        functionName = lineMatch[1];
        var methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart-1] == '.')
          methodStart--;
        if (methodStart > 0) {
          object = functionName.substr(0, methodStart);
          method = functionName.substr(methodStart + 1);
          var objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.substr(objectEnd + 1);
            object = object.substr(0, objectEnd);
          }
        }
        typeName = null;
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === '<anonymous>') {
        methodName = null;
        functionName = null;
      }

      var properties = {
        fileName: lineMatch[2] || null,
        lineNumber: parseInt(lineMatch[3], 10) || null,
        functionName: functionName,
        typeName: typeName,
        methodName: methodName,
        columnNumber: parseInt(lineMatch[4], 10) || null,
        'native': isNative,
      };

      return self._createParsedCallSite(properties);
    })
    .filter(function(callSite) {
      return !!callSite;
    });
};

function CallSite(properties) {
  for (var property in properties) {
    this[property] = properties[property];
  }
}

var strProperties = [
  'this',
  'typeName',
  'functionName',
  'methodName',
  'fileName',
  'lineNumber',
  'columnNumber',
  'function',
  'evalOrigin'
];
var boolProperties = [
  'topLevel',
  'eval',
  'native',
  'constructor'
];
strProperties.forEach(function (property) {
  CallSite.prototype[property] = null;
  CallSite.prototype['get' + property[0].toUpperCase() + property.substr(1)] = function () {
    return this[property];
  }
});
boolProperties.forEach(function (property) {
  CallSite.prototype[property] = false;
  CallSite.prototype['is' + property[0].toUpperCase() + property.substr(1)] = function () {
    return this[property];
  }
});

exports._createParsedCallSite = function(properties) {
  return new CallSite(properties);
};


/***/ }),

/***/ 4841:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __nccwpck_require__(2279).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.s = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ 2279:
/***/ ((module, exports, __nccwpck_require__) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __nccwpck_require__(4293)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ 7014:
/***/ ((module) => {

"use strict";


/***
 * Convert string to hex color.
 *
 * @param {String} str Text to hash and convert to hex.
 * @returns {String}
 * @api public
 */
module.exports = function hex(str) {
  for (
    var i = 0, hash = 0;
    i < str.length;
    hash = str.charCodeAt(i++) + ((hash << 5) - hash)
  );

  var color = Math.floor(
    Math.abs(
      (Math.sin(hash) * 10000) % 1 * 16777216
    )
  ).toString(16);

  return '#' + Array(6 - color.length + 1).join('0') + color;
};


/***/ }),

/***/ 1416:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * cli.js: Config that conform to commonly used CLI logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * Default levels for the CLI configuration.
 * @type {Object}
 */
exports.levels = {
  error: 0,
  warn: 1,
  help: 2,
  data: 3,
  info: 4,
  debug: 5,
  prompt: 6,
  verbose: 7,
  input: 8,
  silly: 9
};

/**
 * Default colors for the CLI configuration.
 * @type {Object}
 */
exports.colors = {
  error: 'red',
  warn: 'yellow',
  help: 'cyan',
  data: 'grey',
  info: 'green',
  debug: 'blue',
  prompt: 'grey',
  verbose: 'cyan',
  input: 'grey',
  silly: 'magenta'
};


/***/ }),

/***/ 7113:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * Export config set for the CLI.
 * @type {Object}
 */
Object.defineProperty(exports, "cli", ({
  value: __nccwpck_require__(1416)
}));

/**
 * Export config set for npm.
 * @type {Object}
 */
Object.defineProperty(exports, "npm", ({
  value: __nccwpck_require__(3568)
}));

/**
 * Export config set for the syslog.
 * @type {Object}
 */
Object.defineProperty(exports, "syslog", ({
  value: __nccwpck_require__(6990)
}));


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * npm.js: Config that conform to npm logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * Default levels for the npm configuration.
 * @type {Object}
 */
exports.levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

/**
 * Default levels for the npm configuration.
 * @type {Object}
 */
exports.colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'green',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'magenta'
};


/***/ }),

/***/ 6990:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * syslog.js: Config that conform to syslog logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * Default levels for the syslog configuration.
 * @type {Object}
 */
exports.levels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
};

/**
 * Default levels for the syslog configuration.
 * @type {Object}
 */
exports.colors = {
  emerg: 'red',
  alert: 'yellow',
  crit: 'red',
  error: 'red',
  warning: 'red',
  notice: 'yellow',
  info: 'green',
  debug: 'blue'
};


/***/ }),

/***/ 3937:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


/**
 * A shareable symbol constant that can be used
 * as a non-enumerable / semi-hidden level identifier
 * to allow the readable level property to be mutable for
 * operations like colorization
 *
 * @type {Symbol}
 */
Object.defineProperty(exports, "LEVEL", ({
  value: Symbol.for('level')
}));

/**
 * A shareable symbol constant that can be used
 * as a non-enumerable / semi-hidden message identifier
 * to allow the final message property to not have
 * side effects on another.
 *
 * @type {Symbol}
 */
Object.defineProperty(exports, "MESSAGE", ({
  value: Symbol.for('message')
}));

/**
 * A shareable symbol constant that can be used
 * as a non-enumerable / semi-hidden message identifier
 * to allow the extracted splat property be hidden
 *
 * @type {Symbol}
 */
Object.defineProperty(exports, "SPLAT", ({
  value: Symbol.for('splat')
}));

/**
 * A shareable object constant  that can be used
 * as a standard configuration for winston@3.
 *
 * @type {Object}
 */
Object.defineProperty(exports, "configs", ({
  value: __nccwpck_require__(7113)
}));


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 7127:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

module.exports = __nccwpck_require__(1669).deprecate;


/***/ }),

/***/ 5840:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(8628));

var _v2 = _interopRequireDefault(__nccwpck_require__(6409));

var _v3 = _interopRequireDefault(__nccwpck_require__(5122));

var _v4 = _interopRequireDefault(__nccwpck_require__(9120));

var _nil = _interopRequireDefault(__nccwpck_require__(5332));

var _version = _interopRequireDefault(__nccwpck_require__(1595));

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports.default = _default;

/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(6417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 5274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6417));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports.default = _default;

/***/ }),

/***/ 8950:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _md = _interopRequireDefault(__nccwpck_require__(4569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;

/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _sha = _interopRequireDefault(__nccwpck_require__(5274));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(814));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;

/***/ }),

/***/ 1595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;

/***/ }),

/***/ 4490:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const Transport = __nccwpck_require__(7281)
const Batcher = __nccwpck_require__(9241)
const { MESSAGE } = __nccwpck_require__(3937)

/**
 * A Winston transport for Grafana Loki.
 *
 * @class LokiTransport
 * @extends {Transport}
 */
class LokiTransport extends Transport {
  /**
   * Creates an instance of LokiTransport.
   * @param {*} options
   * @memberof LokiTransport
   */
  constructor (options) {
    super(options)

    // Pass all the given options to batcher
    this.batcher = new Batcher({
      host: options.host,
      basicAuth: options.basicAuth,
      headers: options.headers || {},
      interval: options.interval,
      json: options.json,
      batching: options.batching !== false,
      clearOnError: options.clearOnError,
      onConnectionError: options.onConnectionError,
      replaceTimestamp: options.replaceTimestamp,
      gracefulShutdown: options.gracefulShutdown !== false,
      timeout: options.timeout
    })

    this.useCustomFormat = options.format !== undefined
    this.labels = options.labels
  }

  /**
   * An overwrite of winston-transport's log(),
   * which the Winston logging library uses
   * when pushing logs to a transport.
   *
   * @param {*} info
   * @param {*} callback
   * @memberof LokiTransport
   */
  log (info, callback) {
    // Immediately tell Winston that this transport has received the log.
    setImmediate(() => {
      this.emit('logged', info)
    })

    // Deconstruct the log
    const { label, labels, timestamp, level, message, ...rest } = info

    // build custom labels if provided
    let lokiLabels = { level: level }

    if (this.labels) {
      lokiLabels = Object.assign(lokiLabels, this.labels)
    } else {
      lokiLabels.job = label
    }

    lokiLabels = Object.assign(lokiLabels, labels)

    // follow the format provided
    const line = this.useCustomFormat
      ? info[MESSAGE]
      : `${message} ${
      rest && Object.keys(rest).length > 0 ? JSON.stringify(rest) : ''
    }`

    // Make sure all label values are strings
    lokiLabels = Object.fromEntries(Object.entries(lokiLabels).map(([key, value]) => [key, value ? value.toString() : value]))

    // Construct the log to fit Grafana Loki's accepted format
    let ts
    if (timestamp) {
      ts = new Date(timestamp)
      ts = isNaN(ts) ? Date.now() : ts.valueOf()
    } else {
      ts = Date.now()
    }

    const logEntry = {
      labels: lokiLabels,
      entries: [
        {
          ts,
          line
        }
      ]
    }

    // Pushes the log to the batcher
    this.batcher.pushLogEntry(logEntry).catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })

    // Trigger the optional callback
    callback()
  }

  /**
   * Send batch to loki when clean up
   */
  close () {
    this.batcher.close()
  }
}

module.exports = LokiTransport


/***/ }),

/***/ 9241:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const url = __nccwpck_require__(8835)
const exitHook = __nccwpck_require__(4649)

const { logproto } = __nccwpck_require__(2253)
const protoHelpers = __nccwpck_require__(8057)
const req = __nccwpck_require__(3931)
let snappy = false

/**
 * A batching transport layer for Grafana Loki
 *
 * @class Batcher
 */
class Batcher {
  loadSnappy () {
    return __nccwpck_require__(315)
  }

  /**
   * Creates an instance of Batcher.
   * Starts the batching loop if enabled.
   * @param {*} options
   * @memberof Batcher
   */
  constructor (options) {
    // Load given options to the object
    this.options = options

    // Construct Grafana Loki push API url
    this.url = new url.URL(this.options.host + '/loki/api/v1/push')

    // Parse basic auth parameters if given
    if (options.basicAuth) {
      const btoa = __nccwpck_require__(2738)
      const basicAuth = 'Basic ' + btoa(options.basicAuth)
      this.options.headers = Object.assign(this.options.headers, { Authorization: basicAuth })
    }

    // Define the batching intervals
    this.interval = this.options.interval
      ? Number(this.options.interval) * 1000
      : 5000
    this.circuitBreakerInterval = 60000

    // Initialize the log batch
    this.batch = {
      streams: []
    }

    // If snappy binaries have not been built, fallback to JSON transport
    if (!this.options.json) {
      try {
        snappy = this.loadSnappy()
      } catch (error) {
        this.options.json = true
      }
      if (!snappy) {
        this.options.json = true
      }
    }

    // Define the content type headers for the POST request based on the data type
    this.contentType = 'application/x-protobuf'
    if (this.options.json) {
      this.contentType = 'application/json'
    }

    // If batching is enabled, run the loop
    this.options.batching && this.run()

    if (this.options.gracefulShutdown) {
      exitHook(callback => {
        this.close(() => callback())
      })
    }
  }

  /**
   * Returns a promise that resolves after the given duration.
   *
   * @param {*} duration
   * @returns {Promise}
   */
  wait (duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration)
    })
  }

  /**
   * Pushes logs into the batch.
   * If logEntry is given, pushes it straight to this.sendBatchToLoki()
   *
   * @param {*} logEntry
   */
  async pushLogEntry (logEntry) {
    const noTimestamp =
      logEntry && logEntry.entries && logEntry.entries[0].ts === undefined
    // If user has decided to replace the given timestamps with a generated one, generate it
    if (this.options.replaceTimestamp || noTimestamp) {
      logEntry.entries[0].ts = Date.now()
    }

    // If protobuf is the used data type, construct the timestamps
    if (!this.options.json) {
      logEntry = protoHelpers.createProtoTimestamps(logEntry)
    }

    // If batching is not enabled, push the log immediately to Loki API
    if (this.options.batching !== undefined && !this.options.batching) {
      await this.sendBatchToLoki(logEntry)
    } else {
      const { streams } = this.batch

      // Find if there's already a log with identical labels in the batch
      const match = streams.findIndex(
        stream => JSON.stringify(stream.labels) === JSON.stringify(logEntry.labels)
      )

      if (match > -1) {
        // If there's a match, push the log under the same label
        logEntry.entries.forEach(entry => {
          streams[match].entries.push(entry)
        })
      } else {
        // Otherwise, create a new label under streams
        streams.push(logEntry)
      }
    }
  }

  /**
   * Clears the batch.
   */
  clearBatch () {
    this.batch.streams = []
  }

  /**
   * Sends a batch to Grafana Loki push endpoint.
   * If a single logEntry is given, creates a batch first around it.
   *
   * @param {*} logEntry
   * @returns {Promise}
   */
  sendBatchToLoki (logEntry) {
    return new Promise((resolve, reject) => {
      // If the batch is empty, do nothing
      if (this.batch.streams.length === 0 && !logEntry) {
        resolve()
      } else {
        let reqBody

        // If the data format is JSON, there's no need to construct a buffer
        if (this.options.json) {
          let preparedJSONBatch
          if (logEntry !== undefined) {
            // If a single logEntry is given, wrap it according to the batch format
            preparedJSONBatch = protoHelpers.prepareJSONBatch({ streams: [logEntry] })
          } else {
            // Stringify the JSON ready for transport
            preparedJSONBatch = protoHelpers.prepareJSONBatch(this.batch)
          }
          reqBody = JSON.stringify(preparedJSONBatch)
        } else {
          try {
            let batch
            if (logEntry !== undefined) {
              // If a single logEntry is given, wrap it according to the batch format
              batch = { streams: [logEntry] }
            } else {
              batch = this.batch
            }

            const preparedBatch = protoHelpers.prepareProtoBatch(batch)

            // Check if the batch can be encoded in Protobuf and is correct format
            const err = logproto.PushRequest.verify(preparedBatch)

            // Reject the promise if the batch is not of correct format
            if (err) reject(err)

            // Create the PushRequest object
            const message = logproto.PushRequest.create(preparedBatch)
            // Encode the PushRequest object and create the binary buffer
            const buffer = logproto.PushRequest.encode(message).finish()
            // Compress the buffer with snappy
            reqBody = snappy.compressSync(buffer)
          } catch (err) {
            reject(err)
          }
        }

        // Send the data to Grafana Loki
        req.post(this.url, this.contentType, this.options.headers, reqBody, this.options.timeout)
          .then(() => {
            // No need to clear the batch if batching is disabled
            logEntry === undefined && this.clearBatch()
            resolve()
          })
          .catch(err => {
            // Clear the batch on error if enabled
            this.options.clearOnError && this.clearBatch()

            this.options.onConnectionError !== undefined && this.options.onConnectionError(err)

            reject(err)
          })
      }
    })
  }

  /**
   * Runs the batch push loop.
   *
   * Sends the batch to Loki and waits for
   * the amount of this.interval between requests.
   */
  async run () {
    this.runLoop = true
    while (this.runLoop) {
      try {
        await this.sendBatchToLoki()
        if (this.interval === this.circuitBreakerInterval) {
          if (this.options.interval !== undefined) {
            this.interval = Number(this.options.interval) * 1000
          } else {
            this.interval = 5000
          }
        }
      } catch (e) {
        this.interval = this.circuitBreakerInterval
      }
      await this.wait(this.interval)
    }
  }

  /**
   * Stops the batch push loop
   *
   * @param {() => void} [callback]
   */
  close (callback) {
    this.runLoop = false
    this.sendBatchToLoki()
      .then(() => { if (callback) { callback() } }) // maybe should emit something here
      .catch(() => { if (callback) { callback() } }) // maybe should emit something here
  }
}

module.exports = Batcher


/***/ }),

/***/ 8057:
/***/ ((module) => {

module.exports = {
  createProtoTimestamps: logEntry => {
    if (logEntry && logEntry.entries && logEntry.entries.length > 0) {
      logEntry.entries = logEntry.entries.map(entry => {
        return {
          timestamp: {
            seconds: Math.floor(entry.ts / 1000),
            nanos: (entry.ts % 1000) * 1000000
          },
          line: entry.line
        }
      })
    }
    return logEntry
  },
  prepareJSONBatch: batch => {
    const streams = batch.streams.map(logStream => ({
      stream: logStream.labels,
      values: logStream.entries.map(entry => [JSON.stringify(entry.ts * 1000 * 1000), entry.line])
    }))
    return { streams }
  },
  prepareProtoBatch: batch => {
    batch.streams = batch.streams.map(logEntry => {
      // Skip preparation when the batch has been prepared already
      // TODO: The patch blocks new labels to be added, although the situation is better than before
      if (typeof logEntry.labels === 'string') {
        return logEntry
      }
      let protoLabels = `{level="${logEntry.labels.level}"`
      delete logEntry.labels.level
      for (const key in logEntry.labels) {
        protoLabels += `,${key}="${logEntry.labels[key]}"`
      }
      protoLabels += '}'
      logEntry.labels = protoLabels
      return logEntry
    })
    return batch
  }
}


/***/ }),

/***/ 2253:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */


var $protobuf = __nccwpck_require__(6916)

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.logproto = (function () {
  /**
     * Namespace logproto.
     * @exports logproto
     * @namespace
     */
  var logproto = {}

  logproto.Pusher = (function () {
    /**
         * Constructs a new Pusher service.
         * @memberof logproto
         * @classdesc Represents a Pusher
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Pusher (rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Pusher.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Pusher

    /**
         * Creates new Pusher service using the specified rpc implementation.
         * @function create
         * @memberof logproto.Pusher
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Pusher} RPC service. Useful where requests and/or responses are streamed.
         */
    Pusher.create = function create (rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link logproto.Pusher#push}.
         * @memberof logproto.Pusher
         * @typedef PushCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.PushResponse} [response] PushResponse
         */

    /**
         * Calls Push.
         * @function push
         * @memberof logproto.Pusher
         * @instance
         * @param {logproto.IPushRequest} request PushRequest message or plain object
         * @param {logproto.Pusher.PushCallback} callback Node-style callback called with the error, if any, and PushResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Pusher.prototype.push = function push (request, callback) {
      return this.rpcCall(push, $root.logproto.PushRequest, $root.logproto.PushResponse, request, callback)
    }, 'name', { value: 'Push' })

    /**
         * Calls Push.
         * @function push
         * @memberof logproto.Pusher
         * @instance
         * @param {logproto.IPushRequest} request PushRequest message or plain object
         * @returns {Promise<logproto.PushResponse>} Promise
         * @variation 2
         */

    return Pusher
  })()

  logproto.Querier = (function () {
    /**
         * Constructs a new Querier service.
         * @memberof logproto
         * @classdesc Represents a Querier
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Querier (rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Querier.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Querier

    /**
         * Creates new Querier service using the specified rpc implementation.
         * @function create
         * @memberof logproto.Querier
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Querier} RPC service. Useful where requests and/or responses are streamed.
         */
    Querier.create = function create (rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link logproto.Querier#query}.
         * @memberof logproto.Querier
         * @typedef QueryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.QueryResponse} [response] QueryResponse
         */

    /**
         * Calls Query.
         * @function query
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.IQueryRequest} request QueryRequest message or plain object
         * @param {logproto.Querier.QueryCallback} callback Node-style callback called with the error, if any, and QueryResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Querier.prototype.query = function query (request, callback) {
      return this.rpcCall(query, $root.logproto.QueryRequest, $root.logproto.QueryResponse, request, callback)
    }, 'name', { value: 'Query' })

    /**
         * Calls Query.
         * @function query
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.IQueryRequest} request QueryRequest message or plain object
         * @returns {Promise<logproto.QueryResponse>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link logproto.Querier#label}.
         * @memberof logproto.Querier
         * @typedef LabelCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.LabelResponse} [response] LabelResponse
         */

    /**
         * Calls Label.
         * @function label
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ILabelRequest} request LabelRequest message or plain object
         * @param {logproto.Querier.LabelCallback} callback Node-style callback called with the error, if any, and LabelResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Querier.prototype.label = function label (request, callback) {
      return this.rpcCall(label, $root.logproto.LabelRequest, $root.logproto.LabelResponse, request, callback)
    }, 'name', { value: 'Label' })

    /**
         * Calls Label.
         * @function label
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ILabelRequest} request LabelRequest message or plain object
         * @returns {Promise<logproto.LabelResponse>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link logproto.Querier#tail}.
         * @memberof logproto.Querier
         * @typedef TailCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.TailResponse} [response] TailResponse
         */

    /**
         * Calls Tail.
         * @function tail
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ITailRequest} request TailRequest message or plain object
         * @param {logproto.Querier.TailCallback} callback Node-style callback called with the error, if any, and TailResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Querier.prototype.tail = function tail (request, callback) {
      return this.rpcCall(tail, $root.logproto.TailRequest, $root.logproto.TailResponse, request, callback)
    }, 'name', { value: 'Tail' })

    /**
         * Calls Tail.
         * @function tail
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ITailRequest} request TailRequest message or plain object
         * @returns {Promise<logproto.TailResponse>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link logproto.Querier#series}.
         * @memberof logproto.Querier
         * @typedef SeriesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.SeriesResponse} [response] SeriesResponse
         */

    /**
         * Calls Series.
         * @function series
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ISeriesRequest} request SeriesRequest message or plain object
         * @param {logproto.Querier.SeriesCallback} callback Node-style callback called with the error, if any, and SeriesResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Querier.prototype.series = function series (request, callback) {
      return this.rpcCall(series, $root.logproto.SeriesRequest, $root.logproto.SeriesResponse, request, callback)
    }, 'name', { value: 'Series' })

    /**
         * Calls Series.
         * @function series
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ISeriesRequest} request SeriesRequest message or plain object
         * @returns {Promise<logproto.SeriesResponse>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link logproto.Querier#tailersCount}.
         * @memberof logproto.Querier
         * @typedef TailersCountCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.TailersCountResponse} [response] TailersCountResponse
         */

    /**
         * Calls TailersCount.
         * @function tailersCount
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ITailersCountRequest} request TailersCountRequest message or plain object
         * @param {logproto.Querier.TailersCountCallback} callback Node-style callback called with the error, if any, and TailersCountResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Querier.prototype.tailersCount = function tailersCount (request, callback) {
      return this.rpcCall(tailersCount, $root.logproto.TailersCountRequest, $root.logproto.TailersCountResponse, request, callback)
    }, 'name', { value: 'TailersCount' })

    /**
         * Calls TailersCount.
         * @function tailersCount
         * @memberof logproto.Querier
         * @instance
         * @param {logproto.ITailersCountRequest} request TailersCountRequest message or plain object
         * @returns {Promise<logproto.TailersCountResponse>} Promise
         * @variation 2
         */

    return Querier
  })()

  logproto.Ingester = (function () {
    /**
         * Constructs a new Ingester service.
         * @memberof logproto
         * @classdesc Represents an Ingester
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Ingester (rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Ingester.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Ingester

    /**
         * Creates new Ingester service using the specified rpc implementation.
         * @function create
         * @memberof logproto.Ingester
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Ingester} RPC service. Useful where requests and/or responses are streamed.
         */
    Ingester.create = function create (rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link logproto.Ingester#transferChunks}.
         * @memberof logproto.Ingester
         * @typedef TransferChunksCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {logproto.TransferChunksResponse} [response] TransferChunksResponse
         */

    /**
         * Calls TransferChunks.
         * @function transferChunks
         * @memberof logproto.Ingester
         * @instance
         * @param {logproto.ITimeSeriesChunk} request TimeSeriesChunk message or plain object
         * @param {logproto.Ingester.TransferChunksCallback} callback Node-style callback called with the error, if any, and TransferChunksResponse
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Ingester.prototype.transferChunks = function transferChunks (request, callback) {
      return this.rpcCall(transferChunks, $root.logproto.TimeSeriesChunk, $root.logproto.TransferChunksResponse, request, callback)
    }, 'name', { value: 'TransferChunks' })

    /**
         * Calls TransferChunks.
         * @function transferChunks
         * @memberof logproto.Ingester
         * @instance
         * @param {logproto.ITimeSeriesChunk} request TimeSeriesChunk message or plain object
         * @returns {Promise<logproto.TransferChunksResponse>} Promise
         * @variation 2
         */

    return Ingester
  })()

  logproto.PushRequest = (function () {
    /**
         * Properties of a PushRequest.
         * @memberof logproto
         * @interface IPushRequest
         * @property {Array.<logproto.IStream>|null} [streams] PushRequest streams
         */

    /**
         * Constructs a new PushRequest.
         * @memberof logproto
         * @classdesc Represents a PushRequest.
         * @implements IPushRequest
         * @constructor
         * @param {logproto.IPushRequest=} [properties] Properties to set
         */
    function PushRequest (properties) {
      this.streams = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * PushRequest streams.
         * @member {Array.<logproto.IStream>} streams
         * @memberof logproto.PushRequest
         * @instance
         */
    PushRequest.prototype.streams = $util.emptyArray

    /**
         * Creates a new PushRequest instance using the specified properties.
         * @function create
         * @memberof logproto.PushRequest
         * @static
         * @param {logproto.IPushRequest=} [properties] Properties to set
         * @returns {logproto.PushRequest} PushRequest instance
         */
    PushRequest.create = function create (properties) {
      return new PushRequest(properties)
    }

    /**
         * Encodes the specified PushRequest message. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.PushRequest
         * @static
         * @param {logproto.IPushRequest} message PushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PushRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.streams != null && message.streams.length) {
        for (var i = 0; i < message.streams.length; ++i) { $root.logproto.Stream.encode(message.streams[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified PushRequest message, length delimited. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.PushRequest
         * @static
         * @param {logproto.IPushRequest} message PushRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PushRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a PushRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.PushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.PushRequest} PushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PushRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.PushRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.streams && message.streams.length)) { message.streams = [] }
            message.streams.push($root.logproto.Stream.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a PushRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.PushRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.PushRequest} PushRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PushRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a PushRequest message.
         * @function verify
         * @memberof logproto.PushRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    PushRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.streams != null && message.hasOwnProperty('streams')) {
        if (!Array.isArray(message.streams)) { return 'streams: array expected' }
        for (var i = 0; i < message.streams.length; ++i) {
          var error = $root.logproto.Stream.verify(message.streams[i])
          if (error) { return 'streams.' + error }
        }
      }
      return null
    }

    /**
         * Creates a PushRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.PushRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.PushRequest} PushRequest
         */
    PushRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.PushRequest) { return object }
      var message = new $root.logproto.PushRequest()
      if (object.streams) {
        if (!Array.isArray(object.streams)) { throw TypeError('.logproto.PushRequest.streams: array expected') }
        message.streams = []
        for (var i = 0; i < object.streams.length; ++i) {
          if (typeof object.streams[i] !== 'object') { throw TypeError('.logproto.PushRequest.streams: object expected') }
          message.streams[i] = $root.logproto.Stream.fromObject(object.streams[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a PushRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.PushRequest
         * @static
         * @param {logproto.PushRequest} message PushRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    PushRequest.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.streams = [] }
      if (message.streams && message.streams.length) {
        object.streams = []
        for (var j = 0; j < message.streams.length; ++j) { object.streams[j] = $root.logproto.Stream.toObject(message.streams[j], options) }
      }
      return object
    }

    /**
         * Converts this PushRequest to JSON.
         * @function toJSON
         * @memberof logproto.PushRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    PushRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PushRequest
  })()

  logproto.PushResponse = (function () {
    /**
         * Properties of a PushResponse.
         * @memberof logproto
         * @interface IPushResponse
         */

    /**
         * Constructs a new PushResponse.
         * @memberof logproto
         * @classdesc Represents a PushResponse.
         * @implements IPushResponse
         * @constructor
         * @param {logproto.IPushResponse=} [properties] Properties to set
         */
    function PushResponse (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Creates a new PushResponse instance using the specified properties.
         * @function create
         * @memberof logproto.PushResponse
         * @static
         * @param {logproto.IPushResponse=} [properties] Properties to set
         * @returns {logproto.PushResponse} PushResponse instance
         */
    PushResponse.create = function create (properties) {
      return new PushResponse(properties)
    }

    /**
         * Encodes the specified PushResponse message. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.PushResponse
         * @static
         * @param {logproto.IPushResponse} message PushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PushResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      return writer
    }

    /**
         * Encodes the specified PushResponse message, length delimited. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.PushResponse
         * @static
         * @param {logproto.IPushResponse} message PushResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PushResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a PushResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.PushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.PushResponse} PushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PushResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.PushResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a PushResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.PushResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.PushResponse} PushResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PushResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a PushResponse message.
         * @function verify
         * @memberof logproto.PushResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    PushResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      return null
    }

    /**
         * Creates a PushResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.PushResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.PushResponse} PushResponse
         */
    PushResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.PushResponse) { return object }
      return new $root.logproto.PushResponse()
    }

    /**
         * Creates a plain object from a PushResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.PushResponse
         * @static
         * @param {logproto.PushResponse} message PushResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    PushResponse.toObject = function toObject () {
      return {}
    }

    /**
         * Converts this PushResponse to JSON.
         * @function toJSON
         * @memberof logproto.PushResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    PushResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PushResponse
  })()

  logproto.QueryRequest = (function () {
    /**
         * Properties of a QueryRequest.
         * @memberof logproto
         * @interface IQueryRequest
         * @property {string|null} [selector] QueryRequest selector
         * @property {number|null} [limit] QueryRequest limit
         * @property {google.protobuf.ITimestamp|null} [start] QueryRequest start
         * @property {google.protobuf.ITimestamp|null} [end] QueryRequest end
         * @property {logproto.Direction|null} [direction] QueryRequest direction
         */

    /**
         * Constructs a new QueryRequest.
         * @memberof logproto
         * @classdesc Represents a QueryRequest.
         * @implements IQueryRequest
         * @constructor
         * @param {logproto.IQueryRequest=} [properties] Properties to set
         */
    function QueryRequest (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * QueryRequest selector.
         * @member {string} selector
         * @memberof logproto.QueryRequest
         * @instance
         */
    QueryRequest.prototype.selector = ''

    /**
         * QueryRequest limit.
         * @member {number} limit
         * @memberof logproto.QueryRequest
         * @instance
         */
    QueryRequest.prototype.limit = 0

    /**
         * QueryRequest start.
         * @member {google.protobuf.ITimestamp|null|undefined} start
         * @memberof logproto.QueryRequest
         * @instance
         */
    QueryRequest.prototype.start = null

    /**
         * QueryRequest end.
         * @member {google.protobuf.ITimestamp|null|undefined} end
         * @memberof logproto.QueryRequest
         * @instance
         */
    QueryRequest.prototype.end = null

    /**
         * QueryRequest direction.
         * @member {logproto.Direction} direction
         * @memberof logproto.QueryRequest
         * @instance
         */
    QueryRequest.prototype.direction = 0

    /**
         * Creates a new QueryRequest instance using the specified properties.
         * @function create
         * @memberof logproto.QueryRequest
         * @static
         * @param {logproto.IQueryRequest=} [properties] Properties to set
         * @returns {logproto.QueryRequest} QueryRequest instance
         */
    QueryRequest.create = function create (properties) {
      return new QueryRequest(properties)
    }

    /**
         * Encodes the specified QueryRequest message. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.QueryRequest
         * @static
         * @param {logproto.IQueryRequest} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    QueryRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.selector != null && message.hasOwnProperty('selector')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.selector) }
      if (message.limit != null && message.hasOwnProperty('limit')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.limit) }
      if (message.start != null && message.hasOwnProperty('start')) { $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
      if (message.end != null && message.hasOwnProperty('end')) { $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim() }
      if (message.direction != null && message.hasOwnProperty('direction')) { writer.uint32(/* id 5, wireType 0 = */40).int32(message.direction) }
      return writer
    }

    /**
         * Encodes the specified QueryRequest message, length delimited. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.QueryRequest
         * @static
         * @param {logproto.IQueryRequest} message QueryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    QueryRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a QueryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.QueryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    QueryRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.QueryRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.selector = reader.string()
            break
          case 2:
            message.limit = reader.uint32()
            break
          case 3:
            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 4:
            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 5:
            message.direction = reader.int32()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a QueryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.QueryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.QueryRequest} QueryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    QueryRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a QueryRequest message.
         * @function verify
         * @memberof logproto.QueryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    QueryRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.selector != null && message.hasOwnProperty('selector')) {
        if (!$util.isString(message.selector)) { return 'selector: string expected' }
      }
      if (message.limit != null && message.hasOwnProperty('limit')) {
        if (!$util.isInteger(message.limit)) { return 'limit: integer expected' }
      }
      if (message.start != null && message.hasOwnProperty('start')) {
        var error = $root.google.protobuf.Timestamp.verify(message.start)
        if (error) { return 'start.' + error }
      }
      if (message.end != null && message.hasOwnProperty('end')) {
        var error = $root.google.protobuf.Timestamp.verify(message.end)
        if (error) { return 'end.' + error }
      }
      if (message.direction != null && message.hasOwnProperty('direction')) {
        switch (message.direction) {
          default:
            return 'direction: enum value expected'
          case 0:
          case 1:
            break
        }
      }
      return null
    }

    /**
         * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.QueryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.QueryRequest} QueryRequest
         */
    QueryRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.QueryRequest) { return object }
      var message = new $root.logproto.QueryRequest()
      if (object.selector != null) { message.selector = String(object.selector) }
      if (object.limit != null) { message.limit = object.limit >>> 0 }
      if (object.start != null) {
        if (typeof object.start !== 'object') { throw TypeError('.logproto.QueryRequest.start: object expected') }
        message.start = $root.google.protobuf.Timestamp.fromObject(object.start)
      }
      if (object.end != null) {
        if (typeof object.end !== 'object') { throw TypeError('.logproto.QueryRequest.end: object expected') }
        message.end = $root.google.protobuf.Timestamp.fromObject(object.end)
      }
      switch (object.direction) {
        case 'FORWARD':
        case 0:
          message.direction = 0
          break
        case 'BACKWARD':
        case 1:
          message.direction = 1
          break
      }
      return message
    }

    /**
         * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.QueryRequest
         * @static
         * @param {logproto.QueryRequest} message QueryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    QueryRequest.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.selector = ''
        object.limit = 0
        object.start = null
        object.end = null
        object.direction = options.enums === String ? 'FORWARD' : 0
      }
      if (message.selector != null && message.hasOwnProperty('selector')) { object.selector = message.selector }
      if (message.limit != null && message.hasOwnProperty('limit')) { object.limit = message.limit }
      if (message.start != null && message.hasOwnProperty('start')) { object.start = $root.google.protobuf.Timestamp.toObject(message.start, options) }
      if (message.end != null && message.hasOwnProperty('end')) { object.end = $root.google.protobuf.Timestamp.toObject(message.end, options) }
      if (message.direction != null && message.hasOwnProperty('direction')) { object.direction = options.enums === String ? $root.logproto.Direction[message.direction] : message.direction }
      return object
    }

    /**
         * Converts this QueryRequest to JSON.
         * @function toJSON
         * @memberof logproto.QueryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    QueryRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return QueryRequest
  })()

  /**
     * Direction enum.
     * @name logproto.Direction
     * @enum {string}
     * @property {number} FORWARD=0 FORWARD value
     * @property {number} BACKWARD=1 BACKWARD value
     */
  logproto.Direction = (function () {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'FORWARD'] = 0
    values[valuesById[1] = 'BACKWARD'] = 1
    return values
  })()

  logproto.QueryResponse = (function () {
    /**
         * Properties of a QueryResponse.
         * @memberof logproto
         * @interface IQueryResponse
         * @property {Array.<logproto.IStream>|null} [streams] QueryResponse streams
         */

    /**
         * Constructs a new QueryResponse.
         * @memberof logproto
         * @classdesc Represents a QueryResponse.
         * @implements IQueryResponse
         * @constructor
         * @param {logproto.IQueryResponse=} [properties] Properties to set
         */
    function QueryResponse (properties) {
      this.streams = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * QueryResponse streams.
         * @member {Array.<logproto.IStream>} streams
         * @memberof logproto.QueryResponse
         * @instance
         */
    QueryResponse.prototype.streams = $util.emptyArray

    /**
         * Creates a new QueryResponse instance using the specified properties.
         * @function create
         * @memberof logproto.QueryResponse
         * @static
         * @param {logproto.IQueryResponse=} [properties] Properties to set
         * @returns {logproto.QueryResponse} QueryResponse instance
         */
    QueryResponse.create = function create (properties) {
      return new QueryResponse(properties)
    }

    /**
         * Encodes the specified QueryResponse message. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.QueryResponse
         * @static
         * @param {logproto.IQueryResponse} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    QueryResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.streams != null && message.streams.length) {
        for (var i = 0; i < message.streams.length; ++i) { $root.logproto.Stream.encode(message.streams[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.QueryResponse
         * @static
         * @param {logproto.IQueryResponse} message QueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    QueryResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a QueryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.QueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    QueryResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.QueryResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.streams && message.streams.length)) { message.streams = [] }
            message.streams.push($root.logproto.Stream.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.QueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.QueryResponse} QueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    QueryResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a QueryResponse message.
         * @function verify
         * @memberof logproto.QueryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    QueryResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.streams != null && message.hasOwnProperty('streams')) {
        if (!Array.isArray(message.streams)) { return 'streams: array expected' }
        for (var i = 0; i < message.streams.length; ++i) {
          var error = $root.logproto.Stream.verify(message.streams[i])
          if (error) { return 'streams.' + error }
        }
      }
      return null
    }

    /**
         * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.QueryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.QueryResponse} QueryResponse
         */
    QueryResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.QueryResponse) { return object }
      var message = new $root.logproto.QueryResponse()
      if (object.streams) {
        if (!Array.isArray(object.streams)) { throw TypeError('.logproto.QueryResponse.streams: array expected') }
        message.streams = []
        for (var i = 0; i < object.streams.length; ++i) {
          if (typeof object.streams[i] !== 'object') { throw TypeError('.logproto.QueryResponse.streams: object expected') }
          message.streams[i] = $root.logproto.Stream.fromObject(object.streams[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.QueryResponse
         * @static
         * @param {logproto.QueryResponse} message QueryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    QueryResponse.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.streams = [] }
      if (message.streams && message.streams.length) {
        object.streams = []
        for (var j = 0; j < message.streams.length; ++j) { object.streams[j] = $root.logproto.Stream.toObject(message.streams[j], options) }
      }
      return object
    }

    /**
         * Converts this QueryResponse to JSON.
         * @function toJSON
         * @memberof logproto.QueryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    QueryResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return QueryResponse
  })()

  logproto.LabelRequest = (function () {
    /**
         * Properties of a LabelRequest.
         * @memberof logproto
         * @interface ILabelRequest
         * @property {string|null} [name] LabelRequest name
         * @property {boolean|null} [values] LabelRequest values
         * @property {google.protobuf.ITimestamp|null} [start] LabelRequest start
         * @property {google.protobuf.ITimestamp|null} [end] LabelRequest end
         */

    /**
         * Constructs a new LabelRequest.
         * @memberof logproto
         * @classdesc Represents a LabelRequest.
         * @implements ILabelRequest
         * @constructor
         * @param {logproto.ILabelRequest=} [properties] Properties to set
         */
    function LabelRequest (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * LabelRequest name.
         * @member {string} name
         * @memberof logproto.LabelRequest
         * @instance
         */
    LabelRequest.prototype.name = ''

    /**
         * LabelRequest values.
         * @member {boolean} values
         * @memberof logproto.LabelRequest
         * @instance
         */
    LabelRequest.prototype.values = false

    /**
         * LabelRequest start.
         * @member {google.protobuf.ITimestamp|null|undefined} start
         * @memberof logproto.LabelRequest
         * @instance
         */
    LabelRequest.prototype.start = null

    /**
         * LabelRequest end.
         * @member {google.protobuf.ITimestamp|null|undefined} end
         * @memberof logproto.LabelRequest
         * @instance
         */
    LabelRequest.prototype.end = null

    /**
         * Creates a new LabelRequest instance using the specified properties.
         * @function create
         * @memberof logproto.LabelRequest
         * @static
         * @param {logproto.ILabelRequest=} [properties] Properties to set
         * @returns {logproto.LabelRequest} LabelRequest instance
         */
    LabelRequest.create = function create (properties) {
      return new LabelRequest(properties)
    }

    /**
         * Encodes the specified LabelRequest message. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.LabelRequest
         * @static
         * @param {logproto.ILabelRequest} message LabelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.name != null && message.hasOwnProperty('name')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.name) }
      if (message.values != null && message.hasOwnProperty('values')) { writer.uint32(/* id 2, wireType 0 = */16).bool(message.values) }
      if (message.start != null && message.hasOwnProperty('start')) { $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
      if (message.end != null && message.hasOwnProperty('end')) { $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified LabelRequest message, length delimited. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.LabelRequest
         * @static
         * @param {logproto.ILabelRequest} message LabelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a LabelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.LabelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.LabelRequest} LabelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.LabelRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string()
            break
          case 2:
            message.values = reader.bool()
            break
          case 3:
            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 4:
            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a LabelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.LabelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.LabelRequest} LabelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a LabelRequest message.
         * @function verify
         * @memberof logproto.LabelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    LabelRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.name != null && message.hasOwnProperty('name')) {
        if (!$util.isString(message.name)) { return 'name: string expected' }
      }
      if (message.values != null && message.hasOwnProperty('values')) {
        if (typeof message.values !== 'boolean') { return 'values: boolean expected' }
      }
      if (message.start != null && message.hasOwnProperty('start')) {
        var error = $root.google.protobuf.Timestamp.verify(message.start)
        if (error) { return 'start.' + error }
      }
      if (message.end != null && message.hasOwnProperty('end')) {
        var error = $root.google.protobuf.Timestamp.verify(message.end)
        if (error) { return 'end.' + error }
      }
      return null
    }

    /**
         * Creates a LabelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.LabelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.LabelRequest} LabelRequest
         */
    LabelRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.LabelRequest) { return object }
      var message = new $root.logproto.LabelRequest()
      if (object.name != null) { message.name = String(object.name) }
      if (object.values != null) { message.values = Boolean(object.values) }
      if (object.start != null) {
        if (typeof object.start !== 'object') { throw TypeError('.logproto.LabelRequest.start: object expected') }
        message.start = $root.google.protobuf.Timestamp.fromObject(object.start)
      }
      if (object.end != null) {
        if (typeof object.end !== 'object') { throw TypeError('.logproto.LabelRequest.end: object expected') }
        message.end = $root.google.protobuf.Timestamp.fromObject(object.end)
      }
      return message
    }

    /**
         * Creates a plain object from a LabelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.LabelRequest
         * @static
         * @param {logproto.LabelRequest} message LabelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    LabelRequest.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.name = ''
        object.values = false
        object.start = null
        object.end = null
      }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.values != null && message.hasOwnProperty('values')) { object.values = message.values }
      if (message.start != null && message.hasOwnProperty('start')) { object.start = $root.google.protobuf.Timestamp.toObject(message.start, options) }
      if (message.end != null && message.hasOwnProperty('end')) { object.end = $root.google.protobuf.Timestamp.toObject(message.end, options) }
      return object
    }

    /**
         * Converts this LabelRequest to JSON.
         * @function toJSON
         * @memberof logproto.LabelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    LabelRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return LabelRequest
  })()

  logproto.LabelResponse = (function () {
    /**
         * Properties of a LabelResponse.
         * @memberof logproto
         * @interface ILabelResponse
         * @property {Array.<string>|null} [values] LabelResponse values
         */

    /**
         * Constructs a new LabelResponse.
         * @memberof logproto
         * @classdesc Represents a LabelResponse.
         * @implements ILabelResponse
         * @constructor
         * @param {logproto.ILabelResponse=} [properties] Properties to set
         */
    function LabelResponse (properties) {
      this.values = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * LabelResponse values.
         * @member {Array.<string>} values
         * @memberof logproto.LabelResponse
         * @instance
         */
    LabelResponse.prototype.values = $util.emptyArray

    /**
         * Creates a new LabelResponse instance using the specified properties.
         * @function create
         * @memberof logproto.LabelResponse
         * @static
         * @param {logproto.ILabelResponse=} [properties] Properties to set
         * @returns {logproto.LabelResponse} LabelResponse instance
         */
    LabelResponse.create = function create (properties) {
      return new LabelResponse(properties)
    }

    /**
         * Encodes the specified LabelResponse message. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.LabelResponse
         * @static
         * @param {logproto.ILabelResponse} message LabelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.values != null && message.values.length) {
        for (var i = 0; i < message.values.length; ++i) { writer.uint32(/* id 1, wireType 2 = */10).string(message.values[i]) }
      }
      return writer
    }

    /**
         * Encodes the specified LabelResponse message, length delimited. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.LabelResponse
         * @static
         * @param {logproto.ILabelResponse} message LabelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a LabelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.LabelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.LabelResponse} LabelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.LabelResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.values && message.values.length)) { message.values = [] }
            message.values.push(reader.string())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a LabelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.LabelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.LabelResponse} LabelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a LabelResponse message.
         * @function verify
         * @memberof logproto.LabelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    LabelResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.values != null && message.hasOwnProperty('values')) {
        if (!Array.isArray(message.values)) { return 'values: array expected' }
        for (var i = 0; i < message.values.length; ++i) {
          if (!$util.isString(message.values[i])) { return 'values: string[] expected' }
        }
      }
      return null
    }

    /**
         * Creates a LabelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.LabelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.LabelResponse} LabelResponse
         */
    LabelResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.LabelResponse) { return object }
      var message = new $root.logproto.LabelResponse()
      if (object.values) {
        if (!Array.isArray(object.values)) { throw TypeError('.logproto.LabelResponse.values: array expected') }
        message.values = []
        for (var i = 0; i < object.values.length; ++i) { message.values[i] = String(object.values[i]) }
      }
      return message
    }

    /**
         * Creates a plain object from a LabelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.LabelResponse
         * @static
         * @param {logproto.LabelResponse} message LabelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    LabelResponse.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.values = [] }
      if (message.values && message.values.length) {
        object.values = []
        for (var j = 0; j < message.values.length; ++j) { object.values[j] = message.values[j] }
      }
      return object
    }

    /**
         * Converts this LabelResponse to JSON.
         * @function toJSON
         * @memberof logproto.LabelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    LabelResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return LabelResponse
  })()

  logproto.Stream = (function () {
    /**
         * Properties of a Stream.
         * @memberof logproto
         * @interface IStream
         * @property {string|null} [labels] Stream labels
         * @property {Array.<logproto.IEntry>|null} [entries] Stream entries
         */

    /**
         * Constructs a new Stream.
         * @memberof logproto
         * @classdesc Represents a Stream.
         * @implements IStream
         * @constructor
         * @param {logproto.IStream=} [properties] Properties to set
         */
    function Stream (properties) {
      this.entries = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Stream labels.
         * @member {string} labels
         * @memberof logproto.Stream
         * @instance
         */
    Stream.prototype.labels = ''

    /**
         * Stream entries.
         * @member {Array.<logproto.IEntry>} entries
         * @memberof logproto.Stream
         * @instance
         */
    Stream.prototype.entries = $util.emptyArray

    /**
         * Creates a new Stream instance using the specified properties.
         * @function create
         * @memberof logproto.Stream
         * @static
         * @param {logproto.IStream=} [properties] Properties to set
         * @returns {logproto.Stream} Stream instance
         */
    Stream.create = function create (properties) {
      return new Stream(properties)
    }

    /**
         * Encodes the specified Stream message. Does not implicitly {@link logproto.Stream.verify|verify} messages.
         * @function encode
         * @memberof logproto.Stream
         * @static
         * @param {logproto.IStream} message Stream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Stream.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.labels != null && message.hasOwnProperty('labels')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.labels) }
      if (message.entries != null && message.entries.length) {
        for (var i = 0; i < message.entries.length; ++i) { $root.logproto.Entry.encode(message.entries[i], writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified Stream message, length delimited. Does not implicitly {@link logproto.Stream.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.Stream
         * @static
         * @param {logproto.IStream} message Stream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Stream.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a Stream message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.Stream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.Stream} Stream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Stream.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.Stream()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.labels = reader.string()
            break
          case 2:
            if (!(message.entries && message.entries.length)) { message.entries = [] }
            message.entries.push($root.logproto.Entry.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a Stream message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.Stream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.Stream} Stream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Stream.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a Stream message.
         * @function verify
         * @memberof logproto.Stream
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    Stream.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.labels != null && message.hasOwnProperty('labels')) {
        if (!$util.isString(message.labels)) { return 'labels: string expected' }
      }
      if (message.entries != null && message.hasOwnProperty('entries')) {
        if (!Array.isArray(message.entries)) { return 'entries: array expected' }
        for (var i = 0; i < message.entries.length; ++i) {
          var error = $root.logproto.Entry.verify(message.entries[i])
          if (error) { return 'entries.' + error }
        }
      }
      return null
    }

    /**
         * Creates a Stream message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.Stream
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.Stream} Stream
         */
    Stream.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.Stream) { return object }
      var message = new $root.logproto.Stream()
      if (object.labels != null) { message.labels = String(object.labels) }
      if (object.entries) {
        if (!Array.isArray(object.entries)) { throw TypeError('.logproto.Stream.entries: array expected') }
        message.entries = []
        for (var i = 0; i < object.entries.length; ++i) {
          if (typeof object.entries[i] !== 'object') { throw TypeError('.logproto.Stream.entries: object expected') }
          message.entries[i] = $root.logproto.Entry.fromObject(object.entries[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a Stream message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.Stream
         * @static
         * @param {logproto.Stream} message Stream
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    Stream.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.entries = [] }
      if (options.defaults) { object.labels = '' }
      if (message.labels != null && message.hasOwnProperty('labels')) { object.labels = message.labels }
      if (message.entries && message.entries.length) {
        object.entries = []
        for (var j = 0; j < message.entries.length; ++j) { object.entries[j] = $root.logproto.Entry.toObject(message.entries[j], options) }
      }
      return object
    }

    /**
         * Converts this Stream to JSON.
         * @function toJSON
         * @memberof logproto.Stream
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    Stream.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return Stream
  })()

  logproto.Entry = (function () {
    /**
         * Properties of an Entry.
         * @memberof logproto
         * @interface IEntry
         * @property {google.protobuf.ITimestamp|null} [timestamp] Entry timestamp
         * @property {string|null} [line] Entry line
         */

    /**
         * Constructs a new Entry.
         * @memberof logproto
         * @classdesc Represents an Entry.
         * @implements IEntry
         * @constructor
         * @param {logproto.IEntry=} [properties] Properties to set
         */
    function Entry (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Entry timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof logproto.Entry
         * @instance
         */
    Entry.prototype.timestamp = null

    /**
         * Entry line.
         * @member {string} line
         * @memberof logproto.Entry
         * @instance
         */
    Entry.prototype.line = ''

    /**
         * Creates a new Entry instance using the specified properties.
         * @function create
         * @memberof logproto.Entry
         * @static
         * @param {logproto.IEntry=} [properties] Properties to set
         * @returns {logproto.Entry} Entry instance
         */
    Entry.create = function create (properties) {
      return new Entry(properties)
    }

    /**
         * Encodes the specified Entry message. Does not implicitly {@link logproto.Entry.verify|verify} messages.
         * @function encode
         * @memberof logproto.Entry
         * @static
         * @param {logproto.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Entry.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) { $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      if (message.line != null && message.hasOwnProperty('line')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.line) }
      return writer
    }

    /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link logproto.Entry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.Entry
         * @static
         * @param {logproto.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Entry.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an Entry message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Entry.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.Entry()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 2:
            message.line = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Entry.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an Entry message.
         * @function verify
         * @memberof logproto.Entry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    Entry.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        var error = $root.google.protobuf.Timestamp.verify(message.timestamp)
        if (error) { return 'timestamp.' + error }
      }
      if (message.line != null && message.hasOwnProperty('line')) {
        if (!$util.isString(message.line)) { return 'line: string expected' }
      }
      return null
    }

    /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.Entry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.Entry} Entry
         */
    Entry.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.Entry) { return object }
      var message = new $root.logproto.Entry()
      if (object.timestamp != null) {
        if (typeof object.timestamp !== 'object') { throw TypeError('.logproto.Entry.timestamp: object expected') }
        message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp)
      }
      if (object.line != null) { message.line = String(object.line) }
      return message
    }

    /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.Entry
         * @static
         * @param {logproto.Entry} message Entry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    Entry.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.timestamp = null
        object.line = ''
      }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) { object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options) }
      if (message.line != null && message.hasOwnProperty('line')) { object.line = message.line }
      return object
    }

    /**
         * Converts this Entry to JSON.
         * @function toJSON
         * @memberof logproto.Entry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    Entry.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return Entry
  })()

  logproto.TailRequest = (function () {
    /**
         * Properties of a TailRequest.
         * @memberof logproto
         * @interface ITailRequest
         * @property {string|null} [query] TailRequest query
         * @property {number|null} [delayFor] TailRequest delayFor
         * @property {number|null} [limit] TailRequest limit
         * @property {google.protobuf.ITimestamp|null} [start] TailRequest start
         */

    /**
         * Constructs a new TailRequest.
         * @memberof logproto
         * @classdesc Represents a TailRequest.
         * @implements ITailRequest
         * @constructor
         * @param {logproto.ITailRequest=} [properties] Properties to set
         */
    function TailRequest (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * TailRequest query.
         * @member {string} query
         * @memberof logproto.TailRequest
         * @instance
         */
    TailRequest.prototype.query = ''

    /**
         * TailRequest delayFor.
         * @member {number} delayFor
         * @memberof logproto.TailRequest
         * @instance
         */
    TailRequest.prototype.delayFor = 0

    /**
         * TailRequest limit.
         * @member {number} limit
         * @memberof logproto.TailRequest
         * @instance
         */
    TailRequest.prototype.limit = 0

    /**
         * TailRequest start.
         * @member {google.protobuf.ITimestamp|null|undefined} start
         * @memberof logproto.TailRequest
         * @instance
         */
    TailRequest.prototype.start = null

    /**
         * Creates a new TailRequest instance using the specified properties.
         * @function create
         * @memberof logproto.TailRequest
         * @static
         * @param {logproto.ITailRequest=} [properties] Properties to set
         * @returns {logproto.TailRequest} TailRequest instance
         */
    TailRequest.create = function create (properties) {
      return new TailRequest(properties)
    }

    /**
         * Encodes the specified TailRequest message. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.TailRequest
         * @static
         * @param {logproto.ITailRequest} message TailRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.query != null && message.hasOwnProperty('query')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.query) }
      if (message.delayFor != null && message.hasOwnProperty('delayFor')) { writer.uint32(/* id 3, wireType 0 = */24).uint32(message.delayFor) }
      if (message.limit != null && message.hasOwnProperty('limit')) { writer.uint32(/* id 4, wireType 0 = */32).uint32(message.limit) }
      if (message.start != null && message.hasOwnProperty('start')) { $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 5, wireType 2 = */42).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified TailRequest message, length delimited. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TailRequest
         * @static
         * @param {logproto.ITailRequest} message TailRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TailRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TailRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TailRequest} TailRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TailRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.query = reader.string()
            break
          case 3:
            message.delayFor = reader.uint32()
            break
          case 4:
            message.limit = reader.uint32()
            break
          case 5:
            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TailRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TailRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TailRequest} TailRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TailRequest message.
         * @function verify
         * @memberof logproto.TailRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TailRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.query != null && message.hasOwnProperty('query')) {
        if (!$util.isString(message.query)) { return 'query: string expected' }
      }
      if (message.delayFor != null && message.hasOwnProperty('delayFor')) {
        if (!$util.isInteger(message.delayFor)) { return 'delayFor: integer expected' }
      }
      if (message.limit != null && message.hasOwnProperty('limit')) {
        if (!$util.isInteger(message.limit)) { return 'limit: integer expected' }
      }
      if (message.start != null && message.hasOwnProperty('start')) {
        var error = $root.google.protobuf.Timestamp.verify(message.start)
        if (error) { return 'start.' + error }
      }
      return null
    }

    /**
         * Creates a TailRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TailRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TailRequest} TailRequest
         */
    TailRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TailRequest) { return object }
      var message = new $root.logproto.TailRequest()
      if (object.query != null) { message.query = String(object.query) }
      if (object.delayFor != null) { message.delayFor = object.delayFor >>> 0 }
      if (object.limit != null) { message.limit = object.limit >>> 0 }
      if (object.start != null) {
        if (typeof object.start !== 'object') { throw TypeError('.logproto.TailRequest.start: object expected') }
        message.start = $root.google.protobuf.Timestamp.fromObject(object.start)
      }
      return message
    }

    /**
         * Creates a plain object from a TailRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TailRequest
         * @static
         * @param {logproto.TailRequest} message TailRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TailRequest.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.query = ''
        object.delayFor = 0
        object.limit = 0
        object.start = null
      }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = message.query }
      if (message.delayFor != null && message.hasOwnProperty('delayFor')) { object.delayFor = message.delayFor }
      if (message.limit != null && message.hasOwnProperty('limit')) { object.limit = message.limit }
      if (message.start != null && message.hasOwnProperty('start')) { object.start = $root.google.protobuf.Timestamp.toObject(message.start, options) }
      return object
    }

    /**
         * Converts this TailRequest to JSON.
         * @function toJSON
         * @memberof logproto.TailRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TailRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TailRequest
  })()

  logproto.TailResponse = (function () {
    /**
         * Properties of a TailResponse.
         * @memberof logproto
         * @interface ITailResponse
         * @property {logproto.IStream|null} [stream] TailResponse stream
         * @property {Array.<logproto.IDroppedStream>|null} [droppedStreams] TailResponse droppedStreams
         */

    /**
         * Constructs a new TailResponse.
         * @memberof logproto
         * @classdesc Represents a TailResponse.
         * @implements ITailResponse
         * @constructor
         * @param {logproto.ITailResponse=} [properties] Properties to set
         */
    function TailResponse (properties) {
      this.droppedStreams = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * TailResponse stream.
         * @member {logproto.IStream|null|undefined} stream
         * @memberof logproto.TailResponse
         * @instance
         */
    TailResponse.prototype.stream = null

    /**
         * TailResponse droppedStreams.
         * @member {Array.<logproto.IDroppedStream>} droppedStreams
         * @memberof logproto.TailResponse
         * @instance
         */
    TailResponse.prototype.droppedStreams = $util.emptyArray

    /**
         * Creates a new TailResponse instance using the specified properties.
         * @function create
         * @memberof logproto.TailResponse
         * @static
         * @param {logproto.ITailResponse=} [properties] Properties to set
         * @returns {logproto.TailResponse} TailResponse instance
         */
    TailResponse.create = function create (properties) {
      return new TailResponse(properties)
    }

    /**
         * Encodes the specified TailResponse message. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.TailResponse
         * @static
         * @param {logproto.ITailResponse} message TailResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.stream != null && message.hasOwnProperty('stream')) { $root.logproto.Stream.encode(message.stream, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      if (message.droppedStreams != null && message.droppedStreams.length) {
        for (var i = 0; i < message.droppedStreams.length; ++i) { $root.logproto.DroppedStream.encode(message.droppedStreams[i], writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified TailResponse message, length delimited. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TailResponse
         * @static
         * @param {logproto.ITailResponse} message TailResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TailResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TailResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TailResponse} TailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TailResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.stream = $root.logproto.Stream.decode(reader, reader.uint32())
            break
          case 2:
            if (!(message.droppedStreams && message.droppedStreams.length)) { message.droppedStreams = [] }
            message.droppedStreams.push($root.logproto.DroppedStream.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TailResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TailResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TailResponse} TailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TailResponse message.
         * @function verify
         * @memberof logproto.TailResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TailResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.stream != null && message.hasOwnProperty('stream')) {
        var error = $root.logproto.Stream.verify(message.stream)
        if (error) { return 'stream.' + error }
      }
      if (message.droppedStreams != null && message.hasOwnProperty('droppedStreams')) {
        if (!Array.isArray(message.droppedStreams)) { return 'droppedStreams: array expected' }
        for (var i = 0; i < message.droppedStreams.length; ++i) {
          var error = $root.logproto.DroppedStream.verify(message.droppedStreams[i])
          if (error) { return 'droppedStreams.' + error }
        }
      }
      return null
    }

    /**
         * Creates a TailResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TailResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TailResponse} TailResponse
         */
    TailResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TailResponse) { return object }
      var message = new $root.logproto.TailResponse()
      if (object.stream != null) {
        if (typeof object.stream !== 'object') { throw TypeError('.logproto.TailResponse.stream: object expected') }
        message.stream = $root.logproto.Stream.fromObject(object.stream)
      }
      if (object.droppedStreams) {
        if (!Array.isArray(object.droppedStreams)) { throw TypeError('.logproto.TailResponse.droppedStreams: array expected') }
        message.droppedStreams = []
        for (var i = 0; i < object.droppedStreams.length; ++i) {
          if (typeof object.droppedStreams[i] !== 'object') { throw TypeError('.logproto.TailResponse.droppedStreams: object expected') }
          message.droppedStreams[i] = $root.logproto.DroppedStream.fromObject(object.droppedStreams[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a TailResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TailResponse
         * @static
         * @param {logproto.TailResponse} message TailResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TailResponse.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.droppedStreams = [] }
      if (options.defaults) { object.stream = null }
      if (message.stream != null && message.hasOwnProperty('stream')) { object.stream = $root.logproto.Stream.toObject(message.stream, options) }
      if (message.droppedStreams && message.droppedStreams.length) {
        object.droppedStreams = []
        for (var j = 0; j < message.droppedStreams.length; ++j) { object.droppedStreams[j] = $root.logproto.DroppedStream.toObject(message.droppedStreams[j], options) }
      }
      return object
    }

    /**
         * Converts this TailResponse to JSON.
         * @function toJSON
         * @memberof logproto.TailResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TailResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TailResponse
  })()

  logproto.SeriesRequest = (function () {
    /**
         * Properties of a SeriesRequest.
         * @memberof logproto
         * @interface ISeriesRequest
         * @property {google.protobuf.ITimestamp|null} [start] SeriesRequest start
         * @property {google.protobuf.ITimestamp|null} [end] SeriesRequest end
         * @property {Array.<string>|null} [groups] SeriesRequest groups
         */

    /**
         * Constructs a new SeriesRequest.
         * @memberof logproto
         * @classdesc Represents a SeriesRequest.
         * @implements ISeriesRequest
         * @constructor
         * @param {logproto.ISeriesRequest=} [properties] Properties to set
         */
    function SeriesRequest (properties) {
      this.groups = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * SeriesRequest start.
         * @member {google.protobuf.ITimestamp|null|undefined} start
         * @memberof logproto.SeriesRequest
         * @instance
         */
    SeriesRequest.prototype.start = null

    /**
         * SeriesRequest end.
         * @member {google.protobuf.ITimestamp|null|undefined} end
         * @memberof logproto.SeriesRequest
         * @instance
         */
    SeriesRequest.prototype.end = null

    /**
         * SeriesRequest groups.
         * @member {Array.<string>} groups
         * @memberof logproto.SeriesRequest
         * @instance
         */
    SeriesRequest.prototype.groups = $util.emptyArray

    /**
         * Creates a new SeriesRequest instance using the specified properties.
         * @function create
         * @memberof logproto.SeriesRequest
         * @static
         * @param {logproto.ISeriesRequest=} [properties] Properties to set
         * @returns {logproto.SeriesRequest} SeriesRequest instance
         */
    SeriesRequest.create = function create (properties) {
      return new SeriesRequest(properties)
    }

    /**
         * Encodes the specified SeriesRequest message. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.SeriesRequest
         * @static
         * @param {logproto.ISeriesRequest} message SeriesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.start != null && message.hasOwnProperty('start')) { $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      if (message.end != null && message.hasOwnProperty('end')) { $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim() }
      if (message.groups != null && message.groups.length) {
        for (var i = 0; i < message.groups.length; ++i) { writer.uint32(/* id 3, wireType 2 = */26).string(message.groups[i]) }
      }
      return writer
    }

    /**
         * Encodes the specified SeriesRequest message, length delimited. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.SeriesRequest
         * @static
         * @param {logproto.ISeriesRequest} message SeriesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a SeriesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.SeriesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.SeriesRequest} SeriesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.SeriesRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 2:
            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 3:
            if (!(message.groups && message.groups.length)) { message.groups = [] }
            message.groups.push(reader.string())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a SeriesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.SeriesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.SeriesRequest} SeriesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a SeriesRequest message.
         * @function verify
         * @memberof logproto.SeriesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    SeriesRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.start != null && message.hasOwnProperty('start')) {
        var error = $root.google.protobuf.Timestamp.verify(message.start)
        if (error) { return 'start.' + error }
      }
      if (message.end != null && message.hasOwnProperty('end')) {
        var error = $root.google.protobuf.Timestamp.verify(message.end)
        if (error) { return 'end.' + error }
      }
      if (message.groups != null && message.hasOwnProperty('groups')) {
        if (!Array.isArray(message.groups)) { return 'groups: array expected' }
        for (var i = 0; i < message.groups.length; ++i) {
          if (!$util.isString(message.groups[i])) { return 'groups: string[] expected' }
        }
      }
      return null
    }

    /**
         * Creates a SeriesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.SeriesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.SeriesRequest} SeriesRequest
         */
    SeriesRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.SeriesRequest) { return object }
      var message = new $root.logproto.SeriesRequest()
      if (object.start != null) {
        if (typeof object.start !== 'object') { throw TypeError('.logproto.SeriesRequest.start: object expected') }
        message.start = $root.google.protobuf.Timestamp.fromObject(object.start)
      }
      if (object.end != null) {
        if (typeof object.end !== 'object') { throw TypeError('.logproto.SeriesRequest.end: object expected') }
        message.end = $root.google.protobuf.Timestamp.fromObject(object.end)
      }
      if (object.groups) {
        if (!Array.isArray(object.groups)) { throw TypeError('.logproto.SeriesRequest.groups: array expected') }
        message.groups = []
        for (var i = 0; i < object.groups.length; ++i) { message.groups[i] = String(object.groups[i]) }
      }
      return message
    }

    /**
         * Creates a plain object from a SeriesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.SeriesRequest
         * @static
         * @param {logproto.SeriesRequest} message SeriesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    SeriesRequest.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.groups = [] }
      if (options.defaults) {
        object.start = null
        object.end = null
      }
      if (message.start != null && message.hasOwnProperty('start')) { object.start = $root.google.protobuf.Timestamp.toObject(message.start, options) }
      if (message.end != null && message.hasOwnProperty('end')) { object.end = $root.google.protobuf.Timestamp.toObject(message.end, options) }
      if (message.groups && message.groups.length) {
        object.groups = []
        for (var j = 0; j < message.groups.length; ++j) { object.groups[j] = message.groups[j] }
      }
      return object
    }

    /**
         * Converts this SeriesRequest to JSON.
         * @function toJSON
         * @memberof logproto.SeriesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    SeriesRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SeriesRequest
  })()

  logproto.SeriesResponse = (function () {
    /**
         * Properties of a SeriesResponse.
         * @memberof logproto
         * @interface ISeriesResponse
         * @property {Array.<logproto.ISeriesIdentifier>|null} [series] SeriesResponse series
         */

    /**
         * Constructs a new SeriesResponse.
         * @memberof logproto
         * @classdesc Represents a SeriesResponse.
         * @implements ISeriesResponse
         * @constructor
         * @param {logproto.ISeriesResponse=} [properties] Properties to set
         */
    function SeriesResponse (properties) {
      this.series = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * SeriesResponse series.
         * @member {Array.<logproto.ISeriesIdentifier>} series
         * @memberof logproto.SeriesResponse
         * @instance
         */
    SeriesResponse.prototype.series = $util.emptyArray

    /**
         * Creates a new SeriesResponse instance using the specified properties.
         * @function create
         * @memberof logproto.SeriesResponse
         * @static
         * @param {logproto.ISeriesResponse=} [properties] Properties to set
         * @returns {logproto.SeriesResponse} SeriesResponse instance
         */
    SeriesResponse.create = function create (properties) {
      return new SeriesResponse(properties)
    }

    /**
         * Encodes the specified SeriesResponse message. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.SeriesResponse
         * @static
         * @param {logproto.ISeriesResponse} message SeriesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.series != null && message.series.length) {
        for (var i = 0; i < message.series.length; ++i) { $root.logproto.SeriesIdentifier.encode(message.series[i], writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified SeriesResponse message, length delimited. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.SeriesResponse
         * @static
         * @param {logproto.ISeriesResponse} message SeriesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a SeriesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.SeriesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.SeriesResponse} SeriesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.SeriesResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.series && message.series.length)) { message.series = [] }
            message.series.push($root.logproto.SeriesIdentifier.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a SeriesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.SeriesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.SeriesResponse} SeriesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a SeriesResponse message.
         * @function verify
         * @memberof logproto.SeriesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    SeriesResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.series != null && message.hasOwnProperty('series')) {
        if (!Array.isArray(message.series)) { return 'series: array expected' }
        for (var i = 0; i < message.series.length; ++i) {
          var error = $root.logproto.SeriesIdentifier.verify(message.series[i])
          if (error) { return 'series.' + error }
        }
      }
      return null
    }

    /**
         * Creates a SeriesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.SeriesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.SeriesResponse} SeriesResponse
         */
    SeriesResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.SeriesResponse) { return object }
      var message = new $root.logproto.SeriesResponse()
      if (object.series) {
        if (!Array.isArray(object.series)) { throw TypeError('.logproto.SeriesResponse.series: array expected') }
        message.series = []
        for (var i = 0; i < object.series.length; ++i) {
          if (typeof object.series[i] !== 'object') { throw TypeError('.logproto.SeriesResponse.series: object expected') }
          message.series[i] = $root.logproto.SeriesIdentifier.fromObject(object.series[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a SeriesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.SeriesResponse
         * @static
         * @param {logproto.SeriesResponse} message SeriesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    SeriesResponse.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.series = [] }
      if (message.series && message.series.length) {
        object.series = []
        for (var j = 0; j < message.series.length; ++j) { object.series[j] = $root.logproto.SeriesIdentifier.toObject(message.series[j], options) }
      }
      return object
    }

    /**
         * Converts this SeriesResponse to JSON.
         * @function toJSON
         * @memberof logproto.SeriesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    SeriesResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SeriesResponse
  })()

  logproto.SeriesIdentifier = (function () {
    /**
         * Properties of a SeriesIdentifier.
         * @memberof logproto
         * @interface ISeriesIdentifier
         * @property {Object.<string,string>|null} [labels] SeriesIdentifier labels
         */

    /**
         * Constructs a new SeriesIdentifier.
         * @memberof logproto
         * @classdesc Represents a SeriesIdentifier.
         * @implements ISeriesIdentifier
         * @constructor
         * @param {logproto.ISeriesIdentifier=} [properties] Properties to set
         */
    function SeriesIdentifier (properties) {
      this.labels = {}
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * SeriesIdentifier labels.
         * @member {Object.<string,string>} labels
         * @memberof logproto.SeriesIdentifier
         * @instance
         */
    SeriesIdentifier.prototype.labels = $util.emptyObject

    /**
         * Creates a new SeriesIdentifier instance using the specified properties.
         * @function create
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {logproto.ISeriesIdentifier=} [properties] Properties to set
         * @returns {logproto.SeriesIdentifier} SeriesIdentifier instance
         */
    SeriesIdentifier.create = function create (properties) {
      return new SeriesIdentifier(properties)
    }

    /**
         * Encodes the specified SeriesIdentifier message. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
         * @function encode
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {logproto.ISeriesIdentifier} message SeriesIdentifier message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesIdentifier.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.labels != null && message.hasOwnProperty('labels')) {
        for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i) { writer.uint32(/* id 1, wireType 2 = */10).fork().uint32(/* id 1, wireType 2 = */10).string(keys[i]).uint32(/* id 2, wireType 2 = */18).string(message.labels[keys[i]]).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified SeriesIdentifier message, length delimited. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {logproto.ISeriesIdentifier} message SeriesIdentifier message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    SeriesIdentifier.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a SeriesIdentifier message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.SeriesIdentifier} SeriesIdentifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesIdentifier.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.SeriesIdentifier(); var key
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            reader.skip().pos++
            if (message.labels === $util.emptyObject) { message.labels = {} }
            key = reader.string()
            reader.pos++
            message.labels[key] = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a SeriesIdentifier message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.SeriesIdentifier} SeriesIdentifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    SeriesIdentifier.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a SeriesIdentifier message.
         * @function verify
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    SeriesIdentifier.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.labels != null && message.hasOwnProperty('labels')) {
        if (!$util.isObject(message.labels)) { return 'labels: object expected' }
        var key = Object.keys(message.labels)
        for (var i = 0; i < key.length; ++i) {
          if (!$util.isString(message.labels[key[i]])) { return 'labels: string{k:string} expected' }
        }
      }
      return null
    }

    /**
         * Creates a SeriesIdentifier message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.SeriesIdentifier} SeriesIdentifier
         */
    SeriesIdentifier.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.SeriesIdentifier) { return object }
      var message = new $root.logproto.SeriesIdentifier()
      if (object.labels) {
        if (typeof object.labels !== 'object') { throw TypeError('.logproto.SeriesIdentifier.labels: object expected') }
        message.labels = {}
        for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i) { message.labels[keys[i]] = String(object.labels[keys[i]]) }
      }
      return message
    }

    /**
         * Creates a plain object from a SeriesIdentifier message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.SeriesIdentifier
         * @static
         * @param {logproto.SeriesIdentifier} message SeriesIdentifier
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    SeriesIdentifier.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.objects || options.defaults) { object.labels = {} }
      var keys2
      if (message.labels && (keys2 = Object.keys(message.labels)).length) {
        object.labels = {}
        for (var j = 0; j < keys2.length; ++j) { object.labels[keys2[j]] = message.labels[keys2[j]] }
      }
      return object
    }

    /**
         * Converts this SeriesIdentifier to JSON.
         * @function toJSON
         * @memberof logproto.SeriesIdentifier
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    SeriesIdentifier.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SeriesIdentifier
  })()

  logproto.DroppedStream = (function () {
    /**
         * Properties of a DroppedStream.
         * @memberof logproto
         * @interface IDroppedStream
         * @property {google.protobuf.ITimestamp|null} [from] DroppedStream from
         * @property {google.protobuf.ITimestamp|null} [to] DroppedStream to
         * @property {string|null} [labels] DroppedStream labels
         */

    /**
         * Constructs a new DroppedStream.
         * @memberof logproto
         * @classdesc Represents a DroppedStream.
         * @implements IDroppedStream
         * @constructor
         * @param {logproto.IDroppedStream=} [properties] Properties to set
         */
    function DroppedStream (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * DroppedStream from.
         * @member {google.protobuf.ITimestamp|null|undefined} from
         * @memberof logproto.DroppedStream
         * @instance
         */
    DroppedStream.prototype.from = null

    /**
         * DroppedStream to.
         * @member {google.protobuf.ITimestamp|null|undefined} to
         * @memberof logproto.DroppedStream
         * @instance
         */
    DroppedStream.prototype.to = null

    /**
         * DroppedStream labels.
         * @member {string} labels
         * @memberof logproto.DroppedStream
         * @instance
         */
    DroppedStream.prototype.labels = ''

    /**
         * Creates a new DroppedStream instance using the specified properties.
         * @function create
         * @memberof logproto.DroppedStream
         * @static
         * @param {logproto.IDroppedStream=} [properties] Properties to set
         * @returns {logproto.DroppedStream} DroppedStream instance
         */
    DroppedStream.create = function create (properties) {
      return new DroppedStream(properties)
    }

    /**
         * Encodes the specified DroppedStream message. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
         * @function encode
         * @memberof logproto.DroppedStream
         * @static
         * @param {logproto.IDroppedStream} message DroppedStream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    DroppedStream.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.from != null && message.hasOwnProperty('from')) { $root.google.protobuf.Timestamp.encode(message.from, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim() }
      if (message.to != null && message.hasOwnProperty('to')) { $root.google.protobuf.Timestamp.encode(message.to, writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim() }
      if (message.labels != null && message.hasOwnProperty('labels')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.labels) }
      return writer
    }

    /**
         * Encodes the specified DroppedStream message, length delimited. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.DroppedStream
         * @static
         * @param {logproto.IDroppedStream} message DroppedStream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    DroppedStream.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a DroppedStream message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.DroppedStream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.DroppedStream} DroppedStream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    DroppedStream.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.DroppedStream()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.from = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 2:
            message.to = $root.google.protobuf.Timestamp.decode(reader, reader.uint32())
            break
          case 3:
            message.labels = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a DroppedStream message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.DroppedStream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.DroppedStream} DroppedStream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    DroppedStream.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a DroppedStream message.
         * @function verify
         * @memberof logproto.DroppedStream
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    DroppedStream.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.from != null && message.hasOwnProperty('from')) {
        var error = $root.google.protobuf.Timestamp.verify(message.from)
        if (error) { return 'from.' + error }
      }
      if (message.to != null && message.hasOwnProperty('to')) {
        var error = $root.google.protobuf.Timestamp.verify(message.to)
        if (error) { return 'to.' + error }
      }
      if (message.labels != null && message.hasOwnProperty('labels')) {
        if (!$util.isString(message.labels)) { return 'labels: string expected' }
      }
      return null
    }

    /**
         * Creates a DroppedStream message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.DroppedStream
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.DroppedStream} DroppedStream
         */
    DroppedStream.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.DroppedStream) { return object }
      var message = new $root.logproto.DroppedStream()
      if (object.from != null) {
        if (typeof object.from !== 'object') { throw TypeError('.logproto.DroppedStream.from: object expected') }
        message.from = $root.google.protobuf.Timestamp.fromObject(object.from)
      }
      if (object.to != null) {
        if (typeof object.to !== 'object') { throw TypeError('.logproto.DroppedStream.to: object expected') }
        message.to = $root.google.protobuf.Timestamp.fromObject(object.to)
      }
      if (object.labels != null) { message.labels = String(object.labels) }
      return message
    }

    /**
         * Creates a plain object from a DroppedStream message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.DroppedStream
         * @static
         * @param {logproto.DroppedStream} message DroppedStream
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    DroppedStream.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.from = null
        object.to = null
        object.labels = ''
      }
      if (message.from != null && message.hasOwnProperty('from')) { object.from = $root.google.protobuf.Timestamp.toObject(message.from, options) }
      if (message.to != null && message.hasOwnProperty('to')) { object.to = $root.google.protobuf.Timestamp.toObject(message.to, options) }
      if (message.labels != null && message.hasOwnProperty('labels')) { object.labels = message.labels }
      return object
    }

    /**
         * Converts this DroppedStream to JSON.
         * @function toJSON
         * @memberof logproto.DroppedStream
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    DroppedStream.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return DroppedStream
  })()

  logproto.TimeSeriesChunk = (function () {
    /**
         * Properties of a TimeSeriesChunk.
         * @memberof logproto
         * @interface ITimeSeriesChunk
         * @property {string|null} [fromIngesterId] TimeSeriesChunk fromIngesterId
         * @property {string|null} [userId] TimeSeriesChunk userId
         * @property {Array.<logproto.ILabelPair>|null} [labels] TimeSeriesChunk labels
         * @property {Array.<logproto.IChunk>|null} [chunks] TimeSeriesChunk chunks
         */

    /**
         * Constructs a new TimeSeriesChunk.
         * @memberof logproto
         * @classdesc Represents a TimeSeriesChunk.
         * @implements ITimeSeriesChunk
         * @constructor
         * @param {logproto.ITimeSeriesChunk=} [properties] Properties to set
         */
    function TimeSeriesChunk (properties) {
      this.labels = []
      this.chunks = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * TimeSeriesChunk fromIngesterId.
         * @member {string} fromIngesterId
         * @memberof logproto.TimeSeriesChunk
         * @instance
         */
    TimeSeriesChunk.prototype.fromIngesterId = ''

    /**
         * TimeSeriesChunk userId.
         * @member {string} userId
         * @memberof logproto.TimeSeriesChunk
         * @instance
         */
    TimeSeriesChunk.prototype.userId = ''

    /**
         * TimeSeriesChunk labels.
         * @member {Array.<logproto.ILabelPair>} labels
         * @memberof logproto.TimeSeriesChunk
         * @instance
         */
    TimeSeriesChunk.prototype.labels = $util.emptyArray

    /**
         * TimeSeriesChunk chunks.
         * @member {Array.<logproto.IChunk>} chunks
         * @memberof logproto.TimeSeriesChunk
         * @instance
         */
    TimeSeriesChunk.prototype.chunks = $util.emptyArray

    /**
         * Creates a new TimeSeriesChunk instance using the specified properties.
         * @function create
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {logproto.ITimeSeriesChunk=} [properties] Properties to set
         * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk instance
         */
    TimeSeriesChunk.create = function create (properties) {
      return new TimeSeriesChunk(properties)
    }

    /**
         * Encodes the specified TimeSeriesChunk message. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
         * @function encode
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {logproto.ITimeSeriesChunk} message TimeSeriesChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TimeSeriesChunk.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.fromIngesterId != null && message.hasOwnProperty('fromIngesterId')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.fromIngesterId) }
      if (message.userId != null && message.hasOwnProperty('userId')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.userId) }
      if (message.labels != null && message.labels.length) {
        for (var i = 0; i < message.labels.length; ++i) { $root.logproto.LabelPair.encode(message.labels[i], writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim() }
      }
      if (message.chunks != null && message.chunks.length) {
        for (var i = 0; i < message.chunks.length; ++i) { $root.logproto.Chunk.encode(message.chunks[i], writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified TimeSeriesChunk message, length delimited. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {logproto.ITimeSeriesChunk} message TimeSeriesChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TimeSeriesChunk.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TimeSeriesChunk message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TimeSeriesChunk.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TimeSeriesChunk()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.fromIngesterId = reader.string()
            break
          case 2:
            message.userId = reader.string()
            break
          case 3:
            if (!(message.labels && message.labels.length)) { message.labels = [] }
            message.labels.push($root.logproto.LabelPair.decode(reader, reader.uint32()))
            break
          case 4:
            if (!(message.chunks && message.chunks.length)) { message.chunks = [] }
            message.chunks.push($root.logproto.Chunk.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TimeSeriesChunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TimeSeriesChunk.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TimeSeriesChunk message.
         * @function verify
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TimeSeriesChunk.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.fromIngesterId != null && message.hasOwnProperty('fromIngesterId')) {
        if (!$util.isString(message.fromIngesterId)) { return 'fromIngesterId: string expected' }
      }
      if (message.userId != null && message.hasOwnProperty('userId')) {
        if (!$util.isString(message.userId)) { return 'userId: string expected' }
      }
      if (message.labels != null && message.hasOwnProperty('labels')) {
        if (!Array.isArray(message.labels)) { return 'labels: array expected' }
        for (var i = 0; i < message.labels.length; ++i) {
          var error = $root.logproto.LabelPair.verify(message.labels[i])
          if (error) { return 'labels.' + error }
        }
      }
      if (message.chunks != null && message.hasOwnProperty('chunks')) {
        if (!Array.isArray(message.chunks)) { return 'chunks: array expected' }
        for (var i = 0; i < message.chunks.length; ++i) {
          var error = $root.logproto.Chunk.verify(message.chunks[i])
          if (error) { return 'chunks.' + error }
        }
      }
      return null
    }

    /**
         * Creates a TimeSeriesChunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk
         */
    TimeSeriesChunk.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TimeSeriesChunk) { return object }
      var message = new $root.logproto.TimeSeriesChunk()
      if (object.fromIngesterId != null) { message.fromIngesterId = String(object.fromIngesterId) }
      if (object.userId != null) { message.userId = String(object.userId) }
      if (object.labels) {
        if (!Array.isArray(object.labels)) { throw TypeError('.logproto.TimeSeriesChunk.labels: array expected') }
        message.labels = []
        for (var i = 0; i < object.labels.length; ++i) {
          if (typeof object.labels[i] !== 'object') { throw TypeError('.logproto.TimeSeriesChunk.labels: object expected') }
          message.labels[i] = $root.logproto.LabelPair.fromObject(object.labels[i])
        }
      }
      if (object.chunks) {
        if (!Array.isArray(object.chunks)) { throw TypeError('.logproto.TimeSeriesChunk.chunks: array expected') }
        message.chunks = []
        for (var i = 0; i < object.chunks.length; ++i) {
          if (typeof object.chunks[i] !== 'object') { throw TypeError('.logproto.TimeSeriesChunk.chunks: object expected') }
          message.chunks[i] = $root.logproto.Chunk.fromObject(object.chunks[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a TimeSeriesChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TimeSeriesChunk
         * @static
         * @param {logproto.TimeSeriesChunk} message TimeSeriesChunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TimeSeriesChunk.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) {
        object.labels = []
        object.chunks = []
      }
      if (options.defaults) {
        object.fromIngesterId = ''
        object.userId = ''
      }
      if (message.fromIngesterId != null && message.hasOwnProperty('fromIngesterId')) { object.fromIngesterId = message.fromIngesterId }
      if (message.userId != null && message.hasOwnProperty('userId')) { object.userId = message.userId }
      if (message.labels && message.labels.length) {
        object.labels = []
        for (var j = 0; j < message.labels.length; ++j) { object.labels[j] = $root.logproto.LabelPair.toObject(message.labels[j], options) }
      }
      if (message.chunks && message.chunks.length) {
        object.chunks = []
        for (var j = 0; j < message.chunks.length; ++j) { object.chunks[j] = $root.logproto.Chunk.toObject(message.chunks[j], options) }
      }
      return object
    }

    /**
         * Converts this TimeSeriesChunk to JSON.
         * @function toJSON
         * @memberof logproto.TimeSeriesChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TimeSeriesChunk.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TimeSeriesChunk
  })()

  logproto.LabelPair = (function () {
    /**
         * Properties of a LabelPair.
         * @memberof logproto
         * @interface ILabelPair
         * @property {string|null} [name] LabelPair name
         * @property {string|null} [value] LabelPair value
         */

    /**
         * Constructs a new LabelPair.
         * @memberof logproto
         * @classdesc Represents a LabelPair.
         * @implements ILabelPair
         * @constructor
         * @param {logproto.ILabelPair=} [properties] Properties to set
         */
    function LabelPair (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * LabelPair name.
         * @member {string} name
         * @memberof logproto.LabelPair
         * @instance
         */
    LabelPair.prototype.name = ''

    /**
         * LabelPair value.
         * @member {string} value
         * @memberof logproto.LabelPair
         * @instance
         */
    LabelPair.prototype.value = ''

    /**
         * Creates a new LabelPair instance using the specified properties.
         * @function create
         * @memberof logproto.LabelPair
         * @static
         * @param {logproto.ILabelPair=} [properties] Properties to set
         * @returns {logproto.LabelPair} LabelPair instance
         */
    LabelPair.create = function create (properties) {
      return new LabelPair(properties)
    }

    /**
         * Encodes the specified LabelPair message. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
         * @function encode
         * @memberof logproto.LabelPair
         * @static
         * @param {logproto.ILabelPair} message LabelPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelPair.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.name != null && message.hasOwnProperty('name')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.name) }
      if (message.value != null && message.hasOwnProperty('value')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.value) }
      return writer
    }

    /**
         * Encodes the specified LabelPair message, length delimited. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.LabelPair
         * @static
         * @param {logproto.ILabelPair} message LabelPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    LabelPair.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a LabelPair message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.LabelPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.LabelPair} LabelPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelPair.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.LabelPair()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string()
            break
          case 2:
            message.value = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a LabelPair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.LabelPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.LabelPair} LabelPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    LabelPair.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a LabelPair message.
         * @function verify
         * @memberof logproto.LabelPair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    LabelPair.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.name != null && message.hasOwnProperty('name')) {
        if (!$util.isString(message.name)) { return 'name: string expected' }
      }
      if (message.value != null && message.hasOwnProperty('value')) {
        if (!$util.isString(message.value)) { return 'value: string expected' }
      }
      return null
    }

    /**
         * Creates a LabelPair message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.LabelPair
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.LabelPair} LabelPair
         */
    LabelPair.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.LabelPair) { return object }
      var message = new $root.logproto.LabelPair()
      if (object.name != null) { message.name = String(object.name) }
      if (object.value != null) { message.value = String(object.value) }
      return message
    }

    /**
         * Creates a plain object from a LabelPair message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.LabelPair
         * @static
         * @param {logproto.LabelPair} message LabelPair
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    LabelPair.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.name = ''
        object.value = ''
      }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.value != null && message.hasOwnProperty('value')) { object.value = message.value }
      return object
    }

    /**
         * Converts this LabelPair to JSON.
         * @function toJSON
         * @memberof logproto.LabelPair
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    LabelPair.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return LabelPair
  })()

  logproto.Chunk = (function () {
    /**
         * Properties of a Chunk.
         * @memberof logproto
         * @interface IChunk
         * @property {Uint8Array|null} [data] Chunk data
         */

    /**
         * Constructs a new Chunk.
         * @memberof logproto
         * @classdesc Represents a Chunk.
         * @implements IChunk
         * @constructor
         * @param {logproto.IChunk=} [properties] Properties to set
         */
    function Chunk (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Chunk data.
         * @member {Uint8Array} data
         * @memberof logproto.Chunk
         * @instance
         */
    Chunk.prototype.data = $util.newBuffer([])

    /**
         * Creates a new Chunk instance using the specified properties.
         * @function create
         * @memberof logproto.Chunk
         * @static
         * @param {logproto.IChunk=} [properties] Properties to set
         * @returns {logproto.Chunk} Chunk instance
         */
    Chunk.create = function create (properties) {
      return new Chunk(properties)
    }

    /**
         * Encodes the specified Chunk message. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
         * @function encode
         * @memberof logproto.Chunk
         * @static
         * @param {logproto.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Chunk.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.data != null && message.hasOwnProperty('data')) { writer.uint32(/* id 1, wireType 2 = */10).bytes(message.data) }
      return writer
    }

    /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.Chunk
         * @static
         * @param {logproto.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    Chunk.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Chunk.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.Chunk()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    Chunk.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a Chunk message.
         * @function verify
         * @memberof logproto.Chunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    Chunk.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.data != null && message.hasOwnProperty('data')) {
        if (!(message.data && typeof message.data.length === 'number' || $util.isString(message.data))) { return 'data: buffer expected' }
      }
      return null
    }

    /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.Chunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.Chunk} Chunk
         */
    Chunk.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.Chunk) { return object }
      var message = new $root.logproto.Chunk()
      if (object.data != null) {
        if (typeof object.data === 'string') { $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0) } else if (object.data.length) { message.data = object.data }
      }
      return message
    }

    /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.Chunk
         * @static
         * @param {logproto.Chunk} message Chunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    Chunk.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if (options.bytes === String) { object.data = '' } else {
          object.data = []
          if (options.bytes !== Array) { object.data = $util.newBuffer(object.data) }
        }
      }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data }
      return object
    }

    /**
         * Converts this Chunk to JSON.
         * @function toJSON
         * @memberof logproto.Chunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    Chunk.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return Chunk
  })()

  logproto.TransferChunksResponse = (function () {
    /**
         * Properties of a TransferChunksResponse.
         * @memberof logproto
         * @interface ITransferChunksResponse
         */

    /**
         * Constructs a new TransferChunksResponse.
         * @memberof logproto
         * @classdesc Represents a TransferChunksResponse.
         * @implements ITransferChunksResponse
         * @constructor
         * @param {logproto.ITransferChunksResponse=} [properties] Properties to set
         */
    function TransferChunksResponse (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Creates a new TransferChunksResponse instance using the specified properties.
         * @function create
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {logproto.ITransferChunksResponse=} [properties] Properties to set
         * @returns {logproto.TransferChunksResponse} TransferChunksResponse instance
         */
    TransferChunksResponse.create = function create (properties) {
      return new TransferChunksResponse(properties)
    }

    /**
         * Encodes the specified TransferChunksResponse message. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {logproto.ITransferChunksResponse} message TransferChunksResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TransferChunksResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      return writer
    }

    /**
         * Encodes the specified TransferChunksResponse message, length delimited. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {logproto.ITransferChunksResponse} message TransferChunksResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TransferChunksResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TransferChunksResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TransferChunksResponse} TransferChunksResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TransferChunksResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TransferChunksResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TransferChunksResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TransferChunksResponse} TransferChunksResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TransferChunksResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TransferChunksResponse message.
         * @function verify
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TransferChunksResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      return null
    }

    /**
         * Creates a TransferChunksResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TransferChunksResponse} TransferChunksResponse
         */
    TransferChunksResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TransferChunksResponse) { return object }
      return new $root.logproto.TransferChunksResponse()
    }

    /**
         * Creates a plain object from a TransferChunksResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TransferChunksResponse
         * @static
         * @param {logproto.TransferChunksResponse} message TransferChunksResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TransferChunksResponse.toObject = function toObject () {
      return {}
    }

    /**
         * Converts this TransferChunksResponse to JSON.
         * @function toJSON
         * @memberof logproto.TransferChunksResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TransferChunksResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TransferChunksResponse
  })()

  logproto.TailersCountRequest = (function () {
    /**
         * Properties of a TailersCountRequest.
         * @memberof logproto
         * @interface ITailersCountRequest
         */

    /**
         * Constructs a new TailersCountRequest.
         * @memberof logproto
         * @classdesc Represents a TailersCountRequest.
         * @implements ITailersCountRequest
         * @constructor
         * @param {logproto.ITailersCountRequest=} [properties] Properties to set
         */
    function TailersCountRequest (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * Creates a new TailersCountRequest instance using the specified properties.
         * @function create
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {logproto.ITailersCountRequest=} [properties] Properties to set
         * @returns {logproto.TailersCountRequest} TailersCountRequest instance
         */
    TailersCountRequest.create = function create (properties) {
      return new TailersCountRequest(properties)
    }

    /**
         * Encodes the specified TailersCountRequest message. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
         * @function encode
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {logproto.ITailersCountRequest} message TailersCountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailersCountRequest.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      return writer
    }

    /**
         * Encodes the specified TailersCountRequest message, length delimited. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {logproto.ITailersCountRequest} message TailersCountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailersCountRequest.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TailersCountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TailersCountRequest} TailersCountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailersCountRequest.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TailersCountRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TailersCountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TailersCountRequest} TailersCountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailersCountRequest.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TailersCountRequest message.
         * @function verify
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TailersCountRequest.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      return null
    }

    /**
         * Creates a TailersCountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TailersCountRequest} TailersCountRequest
         */
    TailersCountRequest.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TailersCountRequest) { return object }
      return new $root.logproto.TailersCountRequest()
    }

    /**
         * Creates a plain object from a TailersCountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TailersCountRequest
         * @static
         * @param {logproto.TailersCountRequest} message TailersCountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TailersCountRequest.toObject = function toObject () {
      return {}
    }

    /**
         * Converts this TailersCountRequest to JSON.
         * @function toJSON
         * @memberof logproto.TailersCountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TailersCountRequest.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TailersCountRequest
  })()

  logproto.TailersCountResponse = (function () {
    /**
         * Properties of a TailersCountResponse.
         * @memberof logproto
         * @interface ITailersCountResponse
         * @property {number|null} [count] TailersCountResponse count
         */

    /**
         * Constructs a new TailersCountResponse.
         * @memberof logproto
         * @classdesc Represents a TailersCountResponse.
         * @implements ITailersCountResponse
         * @constructor
         * @param {logproto.ITailersCountResponse=} [properties] Properties to set
         */
    function TailersCountResponse (properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * TailersCountResponse count.
         * @member {number} count
         * @memberof logproto.TailersCountResponse
         * @instance
         */
    TailersCountResponse.prototype.count = 0

    /**
         * Creates a new TailersCountResponse instance using the specified properties.
         * @function create
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {logproto.ITailersCountResponse=} [properties] Properties to set
         * @returns {logproto.TailersCountResponse} TailersCountResponse instance
         */
    TailersCountResponse.create = function create (properties) {
      return new TailersCountResponse(properties)
    }

    /**
         * Encodes the specified TailersCountResponse message. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
         * @function encode
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {logproto.ITailersCountResponse} message TailersCountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailersCountResponse.encode = function encode (message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.count != null && message.hasOwnProperty('count')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.count) }
      return writer
    }

    /**
         * Encodes the specified TailersCountResponse message, length delimited. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {logproto.ITailersCountResponse} message TailersCountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    TailersCountResponse.encodeDelimited = function encodeDelimited (message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a TailersCountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logproto.TailersCountResponse} TailersCountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailersCountResponse.decode = function decode (reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.logproto.TailersCountResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.count = reader.uint32()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a TailersCountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logproto.TailersCountResponse} TailersCountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    TailersCountResponse.decodeDelimited = function decodeDelimited (reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a TailersCountResponse message.
         * @function verify
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    TailersCountResponse.verify = function verify (message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.count != null && message.hasOwnProperty('count')) {
        if (!$util.isInteger(message.count)) { return 'count: integer expected' }
      }
      return null
    }

    /**
         * Creates a TailersCountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logproto.TailersCountResponse} TailersCountResponse
         */
    TailersCountResponse.fromObject = function fromObject (object) {
      if (object instanceof $root.logproto.TailersCountResponse) { return object }
      var message = new $root.logproto.TailersCountResponse()
      if (object.count != null) { message.count = object.count >>> 0 }
      return message
    }

    /**
         * Creates a plain object from a TailersCountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logproto.TailersCountResponse
         * @static
         * @param {logproto.TailersCountResponse} message TailersCountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    TailersCountResponse.toObject = function toObject (message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) { object.count = 0 }
      if (message.count != null && message.hasOwnProperty('count')) { object.count = message.count }
      return object
    }

    /**
         * Converts this TailersCountResponse to JSON.
         * @function toJSON
         * @memberof logproto.TailersCountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    TailersCountResponse.prototype.toJSON = function toJSON () {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return TailersCountResponse
  })()

  return logproto
})()

$root.google = (function () {
  /**
     * Namespace google.
     * @exports google
     * @namespace
     */
  var google = {}

  google.protobuf = (function () {
    /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
    var protobuf = {}

    protobuf.Timestamp = (function () {
      /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

      /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
      function Timestamp (properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
          }
        }
      }

      /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
      Timestamp.prototype.nanos = 0

      /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
      Timestamp.create = function create (properties) {
        return new Timestamp(properties)
      }

      /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Timestamp.encode = function encode (message, writer) {
        if (!writer) { writer = $Writer.create() }
        if (message.seconds != null && message.hasOwnProperty('seconds')) { writer.uint32(/* id 1, wireType 0 = */8).int64(message.seconds) }
        if (message.nanos != null && message.hasOwnProperty('nanos')) { writer.uint32(/* id 2, wireType 0 = */16).int32(message.nanos) }
        return writer
      }

      /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Timestamp.encodeDelimited = function encodeDelimited (message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Timestamp.decode = function decode (reader, length) {
        if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
        var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.google.protobuf.Timestamp()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.seconds = reader.int64()
              break
            case 2:
              message.nanos = reader.int32()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Timestamp.decodeDelimited = function decodeDelimited (reader) {
        if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
        return this.decode(reader, reader.uint32())
      }

      /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
      Timestamp.verify = function verify (message) {
        if (typeof message !== 'object' || message === null) { return 'object expected' }
        if (message.seconds != null && message.hasOwnProperty('seconds')) {
          if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high))) { return 'seconds: integer|Long expected' }
        }
        if (message.nanos != null && message.hasOwnProperty('nanos')) {
          if (!$util.isInteger(message.nanos)) { return 'nanos: integer expected' }
        }
        return null
      }

      /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
      Timestamp.fromObject = function fromObject (object) {
        if (object instanceof $root.google.protobuf.Timestamp) { return object }
        var message = new $root.google.protobuf.Timestamp()
        if (object.seconds != null) {
          if ($util.Long) { (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false } else if (typeof object.seconds === 'string') { message.seconds = parseInt(object.seconds, 10) } else if (typeof object.seconds === 'number') { message.seconds = object.seconds } else if (typeof object.seconds === 'object') { message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber() }
        }
        if (object.nanos != null) { message.nanos = object.nanos | 0 }
        return message
      }

      /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
      Timestamp.toObject = function toObject (message, options) {
        if (!options) { options = {} }
        var object = {}
        if (options.defaults) {
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else { object.seconds = options.longs === String ? '0' : 0 }
          object.nanos = 0
        }
        if (message.seconds != null && message.hasOwnProperty('seconds')) {
          if (typeof message.seconds === 'number') { object.seconds = options.longs === String ? String(message.seconds) : message.seconds } else { object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds }
        }
        if (message.nanos != null && message.hasOwnProperty('nanos')) { object.nanos = message.nanos }
        return object
      }

      /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
      Timestamp.prototype.toJSON = function toJSON () {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Timestamp
    })()

    return protobuf
  })()

  return google
})()

module.exports = $root


/***/ }),

/***/ 3931:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const http = __nccwpck_require__(8605)
const https = __nccwpck_require__(7211)

const post = async (lokiUrl, contentType, headers = {}, data = '', timeout) => {
  // Construct a buffer from the data string to have deterministic data size
  const dataBuffer = Buffer.from(data, 'utf8')

  // Construct the headers
  const defaultHeaders = {
    'Content-Type': contentType,
    'Content-Length': dataBuffer.length
  }

  return new Promise((resolve, reject) => {
    // Decide which http library to use based on the url
    const lib = lokiUrl.protocol === 'https:' ? https : http

    // Construct the node request options
    const options = {
      hostname: lokiUrl.hostname,
      port: lokiUrl.port !== '' ? lokiUrl.port : (lokiUrl.protocol === 'https:' ? 443 : 80),
      path: lokiUrl.pathname,
      method: 'POST',
      headers: Object.assign(defaultHeaders, headers),
      timeout: timeout
    }

    // Construct the request
    const req = lib.request(options, res => {
      let resData = ''
      res.on('data', _data => (resData += _data))
      res.on('end', () => resolve(resData))
    })

    // Error listener
    req.on('error', error => {
      reject(error)
    })

    // Write to request
    req.write(dataBuffer)
    req.end()
  })
}

module.exports = { post }


/***/ }),

/***/ 7281:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(1669);
const Writable = __nccwpck_require__(6993);
const { LEVEL } = __nccwpck_require__(3937);

/**
 * Constructor function for the TransportStream. This is the base prototype
 * that all `winston >= 3` transports should inherit from.
 * @param {Object} options - Options for this TransportStream instance
 * @param {String} options.level - Highest level according to RFC5424.
 * @param {Boolean} options.handleExceptions - If true, info with
 * { exception: true } will be written.
 * @param {Function} options.log - Custom log function for simple Transport
 * creation
 * @param {Function} options.close - Called on "unpipe" from parent.
 */
const TransportStream = module.exports = function TransportStream(options = {}) {
  Writable.call(this, { objectMode: true, highWaterMark: options.highWaterMark });

  this.format = options.format;
  this.level = options.level;
  this.handleExceptions = options.handleExceptions;
  this.handleRejections = options.handleRejections;
  this.silent = options.silent;

  if (options.log) this.log = options.log;
  if (options.logv) this.logv = options.logv;
  if (options.close) this.close = options.close;

  // Get the levels from the source we are piped from.
  this.once('pipe', logger => {
    // Remark (indexzero): this bookkeeping can only support multiple
    // Logger parents with the same `levels`. This comes into play in
    // the `winston.Container` code in which `container.add` takes
    // a fully realized set of options with pre-constructed TransportStreams.
    this.levels = logger.levels;
    this.parent = logger;
  });

  // If and/or when the transport is removed from this instance
  this.once('unpipe', src => {
    // Remark (indexzero): this bookkeeping can only support multiple
    // Logger parents with the same `levels`. This comes into play in
    // the `winston.Container` code in which `container.add` takes
    // a fully realized set of options with pre-constructed TransportStreams.
    if (src === this.parent) {
      this.parent = null;
      if (this.close) {
        this.close();
      }
    }
  });
};

/*
 * Inherit from Writeable using Node.js built-ins
 */
util.inherits(TransportStream, Writable);

/**
 * Writes the info object to our transport instance.
 * @param {mixed} info - TODO: add param description.
 * @param {mixed} enc - TODO: add param description.
 * @param {function} callback - TODO: add param description.
 * @returns {undefined}
 * @private
 */
TransportStream.prototype._write = function _write(info, enc, callback) {
  if (this.silent || (info.exception === true && !this.handleExceptions)) {
    return callback(null);
  }

  // Remark: This has to be handled in the base transport now because we
  // cannot conditionally write to our pipe targets as stream. We always
  // prefer any explicit level set on the Transport itself falling back to
  // any level set on the parent.
  const level = this.level || (this.parent && this.parent.level);

  if (!level || this.levels[level] >= this.levels[info[LEVEL]]) {
    if (info && !this.format) {
      return this.log(info, callback);
    }

    let errState;
    let transformed;

    // We trap(and re-throw) any errors generated by the user-provided format, but also
    // guarantee that the streams callback is invoked so that we can continue flowing.
    try {
      transformed = this.format.transform(Object.assign({}, info), this.format.options);
    } catch (err) {
      errState = err;
    }

    if (errState || !transformed) {
      // eslint-disable-next-line callback-return
      callback();
      if (errState) throw errState;
      return;
    }

    return this.log(transformed, callback);
  }
  this._writableState.sync = false;
  return callback(null);
};

/**
 * Writes the batch of info objects (i.e. "object chunks") to our transport
 * instance after performing any necessary filtering.
 * @param {mixed} chunks - TODO: add params description.
 * @param {function} callback - TODO: add params description.
 * @returns {mixed} - TODO: add returns description.
 * @private
 */
TransportStream.prototype._writev = function _writev(chunks, callback) {
  if (this.logv) {
    const infos = chunks.filter(this._accept, this);
    if (!infos.length) {
      return callback(null);
    }

    // Remark (indexzero): from a performance perspective if Transport
    // implementers do choose to implement logv should we make it their
    // responsibility to invoke their format?
    return this.logv(infos, callback);
  }

  for (let i = 0; i < chunks.length; i++) {
    if (!this._accept(chunks[i])) continue;

    if (chunks[i].chunk && !this.format) {
      this.log(chunks[i].chunk, chunks[i].callback);
      continue;
    }

    let errState;
    let transformed;

    // We trap(and re-throw) any errors generated by the user-provided format, but also
    // guarantee that the streams callback is invoked so that we can continue flowing.
    try {
      transformed = this.format.transform(
        Object.assign({}, chunks[i].chunk),
        this.format.options
      );
    } catch (err) {
      errState = err;
    }

    if (errState || !transformed) {
      // eslint-disable-next-line callback-return
      chunks[i].callback();
      if (errState) {
        // eslint-disable-next-line callback-return
        callback(null);
        throw errState;
      }
    } else {
      this.log(transformed, chunks[i].callback);
    }
  }

  return callback(null);
};

/**
 * Predicate function that returns true if the specfied `info` on the
 * WriteReq, `write`, should be passed down into the derived
 * TransportStream's I/O via `.log(info, callback)`.
 * @param {WriteReq} write - winston@3 Node.js WriteReq for the `info` object
 * representing the log message.
 * @returns {Boolean} - Value indicating if the `write` should be accepted &
 * logged.
 */
TransportStream.prototype._accept = function _accept(write) {
  const info = write.chunk;
  if (this.silent) {
    return false;
  }

  // We always prefer any explicit level set on the Transport itself
  // falling back to any level set on the parent.
  const level = this.level || (this.parent && this.parent.level);

  // Immediately check the average case: log level filtering.
  if (
    info.exception === true ||
    !level ||
    this.levels[level] >= this.levels[info[LEVEL]]
  ) {
    // Ensure the info object is valid based on `{ exception }`:
    // 1. { handleExceptions: true }: all `info` objects are valid
    // 2. { exception: false }: accepted by all transports.
    if (this.handleExceptions || info.exception !== true) {
      return true;
    }
  }

  return false;
};

/**
 * _nop is short for "No operation"
 * @returns {Boolean} Intentionally false.
 */
TransportStream.prototype._nop = function _nop() {
  // eslint-disable-next-line no-undefined
  return void undefined;
};


// Expose legacy stream
module.exports.LegacyTransportStream = __nccwpck_require__(6201);


/***/ }),

/***/ 6201:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(1669);
const { LEVEL } = __nccwpck_require__(3937);
const TransportStream = __nccwpck_require__(7281);

/**
 * Constructor function for the LegacyTransportStream. This is an internal
 * wrapper `winston >= 3` uses to wrap older transports implementing
 * log(level, message, meta).
 * @param {Object} options - Options for this TransportStream instance.
 * @param {Transpot} options.transport - winston@2 or older Transport to wrap.
 */

const LegacyTransportStream = module.exports = function LegacyTransportStream(options = {}) {
  TransportStream.call(this, options);
  if (!options.transport || typeof options.transport.log !== 'function') {
    throw new Error('Invalid transport, must be an object with a log method.');
  }

  this.transport = options.transport;
  this.level = this.level || options.transport.level;
  this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;

  // Display our deprecation notice.
  this._deprecated();

  // Properly bubble up errors from the transport to the
  // LegacyTransportStream instance, but only once no matter how many times
  // this transport is shared.
  function transportError(err) {
    this.emit('error', err, this.transport);
  }

  if (!this.transport.__winstonError) {
    this.transport.__winstonError = transportError.bind(this);
    this.transport.on('error', this.transport.__winstonError);
  }
};

/*
 * Inherit from TransportStream using Node.js built-ins
 */
util.inherits(LegacyTransportStream, TransportStream);

/**
 * Writes the info object to our transport instance.
 * @param {mixed} info - TODO: add param description.
 * @param {mixed} enc - TODO: add param description.
 * @param {function} callback - TODO: add param description.
 * @returns {undefined}
 * @private
 */
LegacyTransportStream.prototype._write = function _write(info, enc, callback) {
  if (this.silent || (info.exception === true && !this.handleExceptions)) {
    return callback(null);
  }

  // Remark: This has to be handled in the base transport now because we
  // cannot conditionally write to our pipe targets as stream.
  if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL]]) {
    this.transport.log(info[LEVEL], info.message, info, this._nop);
  }

  callback(null);
};

/**
 * Writes the batch of info objects (i.e. "object chunks") to our transport
 * instance after performing any necessary filtering.
 * @param {mixed} chunks - TODO: add params description.
 * @param {function} callback - TODO: add params description.
 * @returns {mixed} - TODO: add returns description.
 * @private
 */
LegacyTransportStream.prototype._writev = function _writev(chunks, callback) {
  for (let i = 0; i < chunks.length; i++) {
    if (this._accept(chunks[i])) {
      this.transport.log(
        chunks[i].chunk[LEVEL],
        chunks[i].chunk.message,
        chunks[i].chunk,
        this._nop
      );
      chunks[i].callback();
    }
  }

  return callback(null);
};

/**
 * Displays a deprecation notice. Defined as a function so it can be
 * overriden in tests.
 * @returns {undefined}
 */
LegacyTransportStream.prototype._deprecated = function _deprecated() {
  // eslint-disable-next-line no-console
  console.error([
    `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
    '- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md'
  ].join('\n'));
};

/**
 * Clean up error handling state on the legacy transport associated
 * with this instance.
 * @returns {undefined}
 */
LegacyTransportStream.prototype.close = function close() {
  if (this.transport.close) {
    this.transport.close();
  }

  if (this.transport.__winstonError) {
    this.transport.removeListener('error', this.transport.__winstonError);
    this.transport.__winstonError = null;
  }
};


/***/ }),

/***/ 4158:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/**
 * winston.js: Top-level include defining Winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const logform = __nccwpck_require__(2955);
const { warn } = __nccwpck_require__(8043);

/**
 * Expose version. Use `require` method for `webpack` support.
 * @type {string}
 */
exports.version = __nccwpck_require__(6141).version;
/**
 * Include transports defined by default by winston
 * @type {Array}
 */
exports.transports = __nccwpck_require__(7804);
/**
 * Expose utility methods
 * @type {Object}
 */
exports.config = __nccwpck_require__(4325);
/**
 * Hoist format-related functionality from logform.
 * @type {Object}
 */
exports.addColors = logform.levels;
/**
 * Hoist format-related functionality from logform.
 * @type {Object}
 */
exports.format = logform.format;
/**
 * Expose core Logging-related prototypes.
 * @type {function}
 */
exports.createLogger = __nccwpck_require__(2878);
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.ExceptionHandler = __nccwpck_require__(7891);
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.RejectionHandler = __nccwpck_require__(1080);
/**
 * Expose core Logging-related prototypes.
 * @type {Container}
 */
exports.Container = __nccwpck_require__(7184);
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.Transport = __nccwpck_require__(7281);
/**
 * We create and expose a default `Container` to `winston.loggers` so that the
 * programmer may manage multiple `winston.Logger` instances without any
 * additional overhead.
 * @example
 *   // some-file1.js
 *   const logger = require('winston').loggers.get('something');
 *
 *   // some-file2.js
 *   const logger = require('winston').loggers.get('something');
 */
exports.loggers = new exports.Container();

/**
 * We create and expose a 'defaultLogger' so that the programmer may do the
 * following without the need to create an instance of winston.Logger directly:
 * @example
 *   const winston = require('winston');
 *   winston.log('info', 'some message');
 *   winston.error('some error');
 */
const defaultLogger = exports.createLogger();

// Pass through the target methods onto `winston.
Object.keys(exports.config.npm.levels)
  .concat([
    'log',
    'query',
    'stream',
    'add',
    'remove',
    'clear',
    'profile',
    'startTimer',
    'handleExceptions',
    'unhandleExceptions',
    'handleRejections',
    'unhandleRejections',
    'configure',
    'child'
  ])
  .forEach(
    method => (exports[method] = (...args) => defaultLogger[method](...args))
  );

/**
 * Define getter / setter for the default logger level which need to be exposed
 * by winston.
 * @type {string}
 */
Object.defineProperty(exports, "level", ({
  get() {
    return defaultLogger.level;
  },
  set(val) {
    defaultLogger.level = val;
  }
}));

/**
 * Define getter for `exceptions` which replaces `handleExceptions` and
 * `unhandleExceptions`.
 * @type {Object}
 */
Object.defineProperty(exports, "exceptions", ({
  get() {
    return defaultLogger.exceptions;
  }
}));

/**
 * Define getters / setters for appropriate properties of the default logger
 * which need to be exposed by winston.
 * @type {Logger}
 */
['exitOnError'].forEach(prop => {
  Object.defineProperty(exports, prop, {
    get() {
      return defaultLogger[prop];
    },
    set(val) {
      defaultLogger[prop] = val;
    }
  });
});

/**
 * The default transports and exceptionHandlers for the default winston logger.
 * @type {Object}
 */
Object.defineProperty(exports, "default", ({
  get() {
    return {
      exceptionHandlers: defaultLogger.exceptionHandlers,
      rejectionHandlers: defaultLogger.rejectionHandlers,
      transports: defaultLogger.transports
    };
  }
}));

// Have friendlier breakage notices for properties that were exposed by default
// on winston < 3.0.
warn.deprecated(exports, 'setLevels');
warn.forFunctions(exports, 'useFormat', ['cli']);
warn.forProperties(exports, 'useFormat', ['padLevels', 'stripColors']);
warn.forFunctions(exports, 'deprecated', [
  'addRewriter',
  'addFilter',
  'clone',
  'extend'
]);
warn.forProperties(exports, 'deprecated', ['emitErrs', 'levelLength']);
// Throw a useful error when users attempt to run `new winston.Logger`.
warn.moved(exports, 'createLogger', 'Logger');


/***/ }),

/***/ 8043:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/**
 * common.js: Internal helper and utility functions for winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const { format } = __nccwpck_require__(1669);

/**
 * Set of simple deprecation notices and a way to expose them for a set of
 * properties.
 * @type {Object}
 * @private
 */
exports.warn = {
  deprecated(prop) {
    return () => {
      throw new Error(format('{ %s } was removed in winston@3.0.0.', prop));
    };
  },
  useFormat(prop) {
    return () => {
      throw new Error([
        format('{ %s } was removed in winston@3.0.0.', prop),
        'Use a custom winston.format = winston.format(function) instead.'
      ].join('\n'));
    };
  },
  forFunctions(obj, type, props) {
    props.forEach(prop => {
      obj[prop] = exports.warn[type](prop);
    });
  },
  moved(obj, movedTo, prop) {
    function movedNotice() {
      return () => {
        throw new Error([
          format('winston.%s was moved in winston@3.0.0.', prop),
          format('Use a winston.%s instead.', movedTo)
        ].join('\n'));
      };
    }

    Object.defineProperty(obj, prop, {
      get: movedNotice,
      set: movedNotice
    });
  },
  forProperties(obj, type, props) {
    props.forEach(prop => {
      const notice = exports.warn[type](prop);
      Object.defineProperty(obj, prop, {
        get: notice,
        set: notice
      });
    });
  }
};


/***/ }),

/***/ 4325:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const logform = __nccwpck_require__(2955);
const { configs } = __nccwpck_require__(3937);

/**
 * Export config set for the CLI.
 * @type {Object}
 */
exports.cli = logform.levels(configs.cli);

/**
 * Export config set for npm.
 * @type {Object}
 */
exports.npm = logform.levels(configs.npm);

/**
 * Export config set for the syslog.
 * @type {Object}
 */
exports.syslog = logform.levels(configs.syslog);

/**
 * Hoist addColors from logform where it was refactored into in winston@3.
 * @type {Object}
 */
exports.addColors = logform.levels;


/***/ }),

/***/ 7184:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * container.js: Inversion of control container for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const createLogger = __nccwpck_require__(2878);

/**
 * Inversion of control container for winston logger instances.
 * @type {Container}
 */
module.exports = class Container {
  /**
   * Constructor function for the Container object responsible for managing a
   * set of `winston.Logger` instances based on string ids.
   * @param {!Object} [options={}] - Default pass-thru options for Loggers.
   */
  constructor(options = {}) {
    this.loggers = new Map();
    this.options = options;
  }

  /**
   * Retrieves a `winston.Logger` instance for the specified `id`. If an
   * instance does not exist, one is created.
   * @param {!string} id - The id of the Logger to get.
   * @param {?Object} [options] - Options for the Logger instance.
   * @returns {Logger} - A configured Logger instance with a specified id.
   */
  add(id, options) {
    if (!this.loggers.has(id)) {
      // Remark: Simple shallow clone for configuration options in case we pass
      // in instantiated protoypal objects
      options = Object.assign({}, options || this.options);
      const existing = options.transports || this.options.transports;

      // Remark: Make sure if we have an array of transports we slice it to
      // make copies of those references.
      options.transports = existing ? existing.slice() : [];

      const logger = createLogger(options);
      logger.on('close', () => this._delete(id));
      this.loggers.set(id, logger);
    }

    return this.loggers.get(id);
  }

  /**
   * Retreives a `winston.Logger` instance for the specified `id`. If
   * an instance does not exist, one is created.
   * @param {!string} id - The id of the Logger to get.
   * @param {?Object} [options] - Options for the Logger instance.
   * @returns {Logger} - A configured Logger instance with a specified id.
   */
  get(id, options) {
    return this.add(id, options);
  }

  /**
   * Check if the container has a logger with the id.
   * @param {?string} id - The id of the Logger instance to find.
   * @returns {boolean} - Boolean value indicating if this instance has a
   * logger with the specified `id`.
   */
  has(id) {
    return !!this.loggers.has(id);
  }

  /**
   * Closes a `Logger` instance with the specified `id` if it exists.
   * If no `id` is supplied then all Loggers are closed.
   * @param {?string} id - The id of the Logger instance to close.
   * @returns {undefined}
   */
  close(id) {
    if (id) {
      return this._removeLogger(id);
    }

    this.loggers.forEach((val, key) => this._removeLogger(key));
  }

  /**
   * Remove a logger based on the id.
   * @param {!string} id - The id of the logger to remove.
   * @returns {undefined}
   * @private
   */
  _removeLogger(id) {
    if (!this.loggers.has(id)) {
      return;
    }

    const logger = this.loggers.get(id);
    logger.close();
    this._delete(id);
  }

  /**
   * Deletes a `Logger` instance with the specified `id`.
   * @param {!string} id - The id of the Logger instance to delete from
   * container.
   * @returns {undefined}
   * @private
   */
  _delete(id) {
    this.loggers.delete(id);
  }
};


/***/ }),

/***/ 2878:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * create-logger.js: Logger factory for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const { LEVEL } = __nccwpck_require__(3937);
const config = __nccwpck_require__(4325);
const Logger = __nccwpck_require__(5153);
const debug = __nccwpck_require__(3170)('winston:create-logger');

function isLevelEnabledFunctionName(level) {
  return 'is' + level.charAt(0).toUpperCase() + level.slice(1) + 'Enabled';
}

/**
 * Create a new instance of a winston Logger. Creates a new
 * prototype for each instance.
 * @param {!Object} opts - Options for the created logger.
 * @returns {Logger} - A newly created logger instance.
 */
module.exports = function (opts = {}) {
  //
  // Default levels: npm
  //
  opts.levels = opts.levels || config.npm.levels;

  /**
   * DerivedLogger to attach the logs level methods.
   * @type {DerivedLogger}
   * @extends {Logger}
   */
  class DerivedLogger extends Logger {
    /**
     * Create a new class derived logger for which the levels can be attached to
     * the prototype of. This is a V8 optimization that is well know to increase
     * performance of prototype functions.
     * @param {!Object} options - Options for the created logger.
     */
    constructor(options) {
      super(options);
    }
  }

  const logger = new DerivedLogger(opts);

  //
  // Create the log level methods for the derived logger.
  //
  Object.keys(opts.levels).forEach(function (level) {
    debug('Define prototype method for "%s"', level);
    if (level === 'log') {
      // eslint-disable-next-line no-console
      console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
      return;
    }

    //
    // Define prototype methods for each log level e.g.:
    // logger.log('info', msg) implies these methods are defined:
    // - logger.info(msg)
    // - logger.isInfoEnabled()
    //
    // Remark: to support logger.child this **MUST** be a function
    // so it'll always be called on the instance instead of a fixed
    // place in the prototype chain.
    //
    DerivedLogger.prototype[level] = function (...args) {
      // Prefer any instance scope, but default to "root" logger
      const self = this || logger;

      // Optimize the hot-path which is the single object.
      if (args.length === 1) {
        const [msg] = args;
        const info = msg && msg.message && msg || { message: msg };
        info.level = info[LEVEL] = level;
        self._addDefaultMeta(info);
        self.write(info);
        return (this || logger);
      }

      // When provided nothing assume the empty string
      if (args.length === 0) {
        self.log(level, '');
        return self;
      }

      // Otherwise build argument list which could potentially conform to
      // either:
      // . v3 API: log(obj)
      // 2. v1/v2 API: log(level, msg, ... [string interpolate], [{metadata}], [callback])
      return self.log(level, ...args);
    };

    DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function () {
      return (this || logger).isLevelEnabled(level);
    };
  });

  return logger;
};


/***/ }),

/***/ 7891:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const os = __nccwpck_require__(2087);
const asyncForEach = __nccwpck_require__(1216);
const debug = __nccwpck_require__(3170)('winston:exception');
const once = __nccwpck_require__(4118);
const stackTrace = __nccwpck_require__(5315);
const ExceptionStream = __nccwpck_require__(6268);

/**
 * Object for handling uncaughtException events.
 * @type {ExceptionHandler}
 */
module.exports = class ExceptionHandler {
  /**
   * TODO: add contructor description
   * @param {!Logger} logger - TODO: add param description
   */
  constructor(logger) {
    if (!logger) {
      throw new Error('Logger is required to handle exceptions');
    }

    this.logger = logger;
    this.handlers = new Map();
  }

  /**
   * Handles `uncaughtException` events for the current process by adding any
   * handlers passed in.
   * @returns {undefined}
   */
  handle(...args) {
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        return arg.forEach(handler => this._addHandler(handler));
      }

      this._addHandler(arg);
    });

    if (!this.catcher) {
      this.catcher = this._uncaughtException.bind(this);
      process.on('uncaughtException', this.catcher);
    }
  }

  /**
   * Removes any handlers to `uncaughtException` events for the current
   * process. This does not modify the state of the `this.handlers` set.
   * @returns {undefined}
   */
  unhandle() {
    if (this.catcher) {
      process.removeListener('uncaughtException', this.catcher);
      this.catcher = false;

      Array.from(this.handlers.values())
        .forEach(wrapper => this.logger.unpipe(wrapper));
    }
  }

  /**
   * TODO: add method description
   * @param {Error} err - Error to get information about.
   * @returns {mixed} - TODO: add return description.
   */
  getAllInfo(err) {
    let { message } = err;
    if (!message && typeof err === 'string') {
      message = err;
    }

    return {
      error: err,
      // TODO (indexzero): how do we configure this?
      level: 'error',
      message: [
        `uncaughtException: ${(message || '(no error message)')}`,
        err.stack || '  No stack trace'
      ].join('\n'),
      stack: err.stack,
      exception: true,
      date: new Date().toString(),
      process: this.getProcessInfo(),
      os: this.getOsInfo(),
      trace: this.getTrace(err)
    };
  }

  /**
   * Gets all relevant process information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getProcessInfo() {
    return {
      pid: process.pid,
      uid: process.getuid ? process.getuid() : null,
      gid: process.getgid ? process.getgid() : null,
      cwd: process.cwd(),
      execPath: process.execPath,
      version: process.version,
      argv: process.argv,
      memoryUsage: process.memoryUsage()
    };
  }

  /**
   * Gets all relevant OS information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getOsInfo() {
    return {
      loadavg: os.loadavg(),
      uptime: os.uptime()
    };
  }

  /**
   * Gets a stack trace for the specified error.
   * @param {mixed} err - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  getTrace(err) {
    const trace = err ? stackTrace.parse(err) : stackTrace.get();
    return trace.map(site => {
      return {
        column: site.getColumnNumber(),
        file: site.getFileName(),
        function: site.getFunctionName(),
        line: site.getLineNumber(),
        method: site.getMethodName(),
        native: site.isNative()
      };
    });
  }

  /**
   * Helper method to add a transport as an exception handler.
   * @param {Transport} handler - The transport to add as an exception handler.
   * @returns {void}
   */
  _addHandler(handler) {
    if (!this.handlers.has(handler)) {
      handler.handleExceptions = true;
      const wrapper = new ExceptionStream(handler);
      this.handlers.set(handler, wrapper);
      this.logger.pipe(wrapper);
    }
  }

  /**
   * Logs all relevant information around the `err` and exits the current
   * process.
   * @param {Error} err - Error to handle
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _uncaughtException(err) {
    const info = this.getAllInfo(err);
    const handlers = this._getExceptionHandlers();
    // Calculate if we should exit on this error
    let doExit = typeof this.logger.exitOnError === 'function'
      ? this.logger.exitOnError(err)
      : this.logger.exitOnError;
    let timeout;

    if (!handlers.length && doExit) {
      // eslint-disable-next-line no-console
      console.warn('winston: exitOnError cannot be true with no exception handlers.');
      // eslint-disable-next-line no-console
      console.warn('winston: not exiting process.');
      doExit = false;
    }

    function gracefulExit() {
      debug('doExit', doExit);
      debug('process._exiting', process._exiting);

      if (doExit && !process._exiting) {
        // Remark: Currently ignoring any exceptions from transports when
        // catching uncaught exceptions.
        if (timeout) {
          clearTimeout(timeout);
        }
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      }
    }

    if (!handlers || handlers.length === 0) {
      return process.nextTick(gracefulExit);
    }

    // Log to all transports attempting to listen for when they are completed.
    asyncForEach(handlers, (handler, next) => {
      const done = once(next);
      const transport = handler.transport || handler;

      // Debug wrapping so that we can inspect what's going on under the covers.
      function onDone(event) {
        return () => {
          debug(event);
          done();
        };
      }

      transport._ending = true;
      transport.once('finish', onDone('finished'));
      transport.once('error', onDone('error'));
    }, () => doExit && gracefulExit());

    this.logger.log(info);

    // If exitOnError is true, then only allow the logging of exceptions to
    // take up to `3000ms`.
    if (doExit) {
      timeout = setTimeout(gracefulExit, 3000);
    }
  }

  /**
   * Returns the list of transports and exceptionHandlers for this instance.
   * @returns {Array} - List of transports and exceptionHandlers for this
   * instance.
   * @private
   */
  _getExceptionHandlers() {
    // Remark (indexzero): since `logger.transports` returns all of the pipes
    // from the _readableState of the stream we actually get the join of the
    // explicit handlers and the implicit transports with
    // `handleExceptions: true`
    return this.logger.transports.filter(wrap => {
      const transport = wrap.transport || wrap;
      return transport.handleExceptions;
    });
  }
};


/***/ }),

/***/ 6268:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * exception-stream.js: TODO: add file header handler.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const { Writable } = __nccwpck_require__(1642);

/**
 * TODO: add class description.
 * @type {ExceptionStream}
 * @extends {Writable}
 */
module.exports = class ExceptionStream extends Writable {
  /**
   * Constructor function for the ExceptionStream responsible for wrapping a
   * TransportStream; only allowing writes of `info` objects with
   * `info.exception` set to true.
   * @param {!TransportStream} transport - Stream to filter to exceptions
   */
  constructor(transport) {
    super({ objectMode: true });

    if (!transport) {
      throw new Error('ExceptionStream requires a TransportStream instance.');
    }

    // Remark (indexzero): we set `handleExceptions` here because it's the
    // predicate checked in ExceptionHandler.prototype.__getExceptionHandlers
    this.handleExceptions = true;
    this.transport = transport;
  }

  /**
   * Writes the info object to our transport instance if (and only if) the
   * `exception` property is set on the info.
   * @param {mixed} info - TODO: add param description.
   * @param {mixed} enc - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _write(info, enc, callback) {
    if (info.exception) {
      return this.transport.log(info, callback);
    }

    callback();
    return true;
  }
};


/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * logger.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const { Stream, Transform } = __nccwpck_require__(1642);
const asyncForEach = __nccwpck_require__(1216);
const { LEVEL, SPLAT } = __nccwpck_require__(3937);
const isStream = __nccwpck_require__(1554);
const ExceptionHandler = __nccwpck_require__(7891);
const RejectionHandler = __nccwpck_require__(1080);
const LegacyTransportStream = __nccwpck_require__(6201);
const Profiler = __nccwpck_require__(6959);
const { warn } = __nccwpck_require__(8043);
const config = __nccwpck_require__(4325);

/**
 * Captures the number of format (i.e. %s strings) in a given string.
 * Based on `util.format`, see Node.js source:
 * https://github.com/nodejs/node/blob/b1c8f15c5f169e021f7c46eb7b219de95fe97603/lib/util.js#L201-L230
 * @type {RegExp}
 */
const formatRegExp = /%[scdjifoO%]/g;

/**
 * TODO: add class description.
 * @type {Logger}
 * @extends {Transform}
 */
class Logger extends Transform {
  /**
   * Constructor function for the Logger object responsible for persisting log
   * messages and metadata to one or more transports.
   * @param {!Object} options - foo
   */
  constructor(options) {
    super({ objectMode: true });
    this.configure(options);
  }

  child(defaultRequestMetadata) {
    const logger = this;
    return Object.create(logger, {
      write: {
        value: function (info) {
          const infoClone = Object.assign(
            {},
            defaultRequestMetadata,
            info
          );

          // Object.assign doesn't copy inherited Error
          // properties so we have to do that explicitly
          //
          // Remark (indexzero): we should remove this
          // since the errors format will handle this case.
          //
          if (info instanceof Error) {
            infoClone.stack = info.stack;
            infoClone.message = info.message;
          }

          logger.write(infoClone);
        }
      }
    });
  }

  /**
   * This will wholesale reconfigure this instance by:
   * 1. Resetting all transports. Older transports will be removed implicitly.
   * 2. Set all other options including levels, colors, rewriters, filters,
   *    exceptionHandlers, etc.
   * @param {!Object} options - TODO: add param description.
   * @returns {undefined}
   */
  configure({
    silent,
    format,
    defaultMeta,
    levels,
    level = 'info',
    exitOnError = true,
    transports,
    colors,
    emitErrs,
    formatters,
    padLevels,
    rewriters,
    stripColors,
    exceptionHandlers,
    rejectionHandlers
  } = {}) {
    // Reset transports if we already have them
    if (this.transports.length) {
      this.clear();
    }

    this.silent = silent;
    this.format = format || this.format || __nccwpck_require__(5669)();

    this.defaultMeta = defaultMeta || null;
    // Hoist other options onto this instance.
    this.levels = levels || this.levels || config.npm.levels;
    this.level = level;
    if (this.exceptions) {
      this.exceptions.unhandle();
    }
    if (this.rejections) {
      this.rejections.unhandle();
    }
    this.exceptions = new ExceptionHandler(this);
    this.rejections = new RejectionHandler(this);
    this.profilers = {};
    this.exitOnError = exitOnError;

    // Add all transports we have been provided.
    if (transports) {
      transports = Array.isArray(transports) ? transports : [transports];
      transports.forEach(transport => this.add(transport));
    }

    if (
      colors ||
      emitErrs ||
      formatters ||
      padLevels ||
      rewriters ||
      stripColors
    ) {
      throw new Error(
        [
          '{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.',
          'Use a custom winston.format(function) instead.',
          'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
        ].join('\n')
      );
    }

    if (exceptionHandlers) {
      this.exceptions.handle(exceptionHandlers);
    }
    if (rejectionHandlers) {
      this.rejections.handle(rejectionHandlers);
    }
  }

  isLevelEnabled(level) {
    const givenLevelValue = getLevelValue(this.levels, level);
    if (givenLevelValue === null) {
      return false;
    }

    const configuredLevelValue = getLevelValue(this.levels, this.level);
    if (configuredLevelValue === null) {
      return false;
    }

    if (!this.transports || this.transports.length === 0) {
      return configuredLevelValue >= givenLevelValue;
    }

    const index = this.transports.findIndex(transport => {
      let transportLevelValue = getLevelValue(this.levels, transport.level);
      if (transportLevelValue === null) {
        transportLevelValue = configuredLevelValue;
      }
      return transportLevelValue >= givenLevelValue;
    });
    return index !== -1;
  }

  /* eslint-disable valid-jsdoc */
  /**
   * Ensure backwards compatibility with a `log` method
   * @param {mixed} level - Level the log message is written at.
   * @param {mixed} msg - TODO: add param description.
   * @param {mixed} meta - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   *
   * @example
   *    // Supports the existing API:
   *    logger.log('info', 'Hello world', { custom: true });
   *    logger.log('info', new Error('Yo, it\'s on fire'));
   *
   *    // Requires winston.format.splat()
   *    logger.log('info', '%s %d%%', 'A string', 50, { thisIsMeta: true });
   *
   *    // And the new API with a single JSON literal:
   *    logger.log({ level: 'info', message: 'Hello world', custom: true });
   *    logger.log({ level: 'info', message: new Error('Yo, it\'s on fire') });
   *
   *    // Also requires winston.format.splat()
   *    logger.log({
   *      level: 'info',
   *      message: '%s %d%%',
   *      [SPLAT]: ['A string', 50],
   *      meta: { thisIsMeta: true }
   *    });
   *
   */
  /* eslint-enable valid-jsdoc */
  log(level, msg, ...splat) {
    // eslint-disable-line max-params
    // Optimize for the hotpath of logging JSON literals
    if (arguments.length === 1) {
      // Yo dawg, I heard you like levels ... seriously ...
      // In this context the LHS `level` here is actually the `info` so read
      // this as: info[LEVEL] = info.level;
      level[LEVEL] = level.level;
      this._addDefaultMeta(level);
      this.write(level);
      return this;
    }

    // Slightly less hotpath, but worth optimizing for.
    if (arguments.length === 2) {
      if (msg && typeof msg === 'object') {
        msg[LEVEL] = msg.level = level;
        this._addDefaultMeta(msg);
        this.write(msg);
        return this;
      }

      msg = { [LEVEL]: level, level, message: msg };
      this._addDefaultMeta(msg);
      this.write(msg);
      return this;
    }

    const [meta] = splat;
    if (typeof meta === 'object' && meta !== null) {
      // Extract tokens, if none available default to empty array to
      // ensure consistancy in expected results
      const tokens = msg && msg.match && msg.match(formatRegExp);

      if (!tokens) {
        const info = Object.assign({}, this.defaultMeta, meta, {
          [LEVEL]: level,
          [SPLAT]: splat,
          level,
          message: msg
        });

        if (meta.message) info.message = `${info.message} ${meta.message}`;
        if (meta.stack) info.stack = meta.stack;

        this.write(info);
        return this;
      }
    }

    this.write(Object.assign({}, this.defaultMeta, {
      [LEVEL]: level,
      [SPLAT]: splat,
      level,
      message: msg
    }));

    return this;
  }

  /**
   * Pushes data so that it can be picked up by all of our pipe targets.
   * @param {mixed} info - TODO: add param description.
   * @param {mixed} enc - TODO: add param description.
   * @param {mixed} callback - Continues stream processing.
   * @returns {undefined}
   * @private
   */
  _transform(info, enc, callback) {
    if (this.silent) {
      return callback();
    }

    // [LEVEL] is only soft guaranteed to be set here since we are a proper
    // stream. It is likely that `info` came in through `.log(info)` or
    // `.info(info)`. If it is not defined, however, define it.
    // This LEVEL symbol is provided by `triple-beam` and also used in:
    // - logform
    // - winston-transport
    // - abstract-winston-transport
    if (!info[LEVEL]) {
      info[LEVEL] = info.level;
    }

    // Remark: really not sure what to do here, but this has been reported as
    // very confusing by pre winston@2.0.0 users as quite confusing when using
    // custom levels.
    if (!this.levels[info[LEVEL]] && this.levels[info[LEVEL]] !== 0) {
      // eslint-disable-next-line no-console
      console.error('[winston] Unknown logger level: %s', info[LEVEL]);
    }

    // Remark: not sure if we should simply error here.
    if (!this._readableState.pipes) {
      // eslint-disable-next-line no-console
      console.error(
        '[winston] Attempt to write logs with no transports, which can increase memory usage: %j',
        info
      );
    }

    // Here we write to the `format` pipe-chain, which on `readable` above will
    // push the formatted `info` Object onto the buffer for this instance. We trap
    // (and re-throw) any errors generated by the user-provided format, but also
    // guarantee that the streams callback is invoked so that we can continue flowing.
    try {
      this.push(this.format.transform(info, this.format.options));
    } finally {
      this._writableState.sync = false;
      // eslint-disable-next-line callback-return
      callback();
    }
  }

  /**
   * Delays the 'finish' event until all transport pipe targets have
   * also emitted 'finish' or are already finished.
   * @param {mixed} callback - Continues stream processing.
   */
  _final(callback) {
    const transports = this.transports.slice();
    asyncForEach(
      transports,
      (transport, next) => {
        if (!transport || transport.finished) return setImmediate(next);
        transport.once('finish', next);
        transport.end();
      },
      callback
    );
  }

  /**
   * Adds the transport to this logger instance by piping to it.
   * @param {mixed} transport - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   */
  add(transport) {
    // Support backwards compatibility with all existing `winston < 3.x.x`
    // transports which meet one of two criteria:
    // 1. They inherit from winston.Transport in  < 3.x.x which is NOT a stream.
    // 2. They expose a log method which has a length greater than 2 (i.e. more then
    //    just `log(info, callback)`.
    const target =
      !isStream(transport) || transport.log.length > 2
        ? new LegacyTransportStream({ transport })
        : transport;

    if (!target._writableState || !target._writableState.objectMode) {
      throw new Error(
        'Transports must WritableStreams in objectMode. Set { objectMode: true }.'
      );
    }

    // Listen for the `error` event and the `warn` event on the new Transport.
    this._onEvent('error', target);
    this._onEvent('warn', target);
    this.pipe(target);

    if (transport.handleExceptions) {
      this.exceptions.handle();
    }

    if (transport.handleRejections) {
      this.rejections.handle();
    }

    return this;
  }

  /**
   * Removes the transport from this logger instance by unpiping from it.
   * @param {mixed} transport - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   */
  remove(transport) {
    if (!transport) return this;
    let target = transport;
    if (!isStream(transport) || transport.log.length > 2) {
      target = this.transports.filter(
        match => match.transport === transport
      )[0];
    }

    if (target) {
      this.unpipe(target);
    }
    return this;
  }

  /**
   * Removes all transports from this logger instance.
   * @returns {Logger} - TODO: add return description.
   */
  clear() {
    this.unpipe();
    return this;
  }

  /**
   * Cleans up resources (streams, event listeners) for all transports
   * associated with this instance (if necessary).
   * @returns {Logger} - TODO: add return description.
   */
  close() {
    this.exceptions.unhandle();
    this.rejections.unhandle();
    this.clear();
    this.emit('close');
    return this;
  }

  /**
   * Sets the `target` levels specified on this instance.
   * @param {Object} Target levels to use on this instance.
   */
  setLevels() {
    warn.deprecated('setLevels');
  }

  /**
   * Queries the all transports for this instance with the specified `options`.
   * This will aggregate each transport's results into one object containing
   * a property per transport.
   * @param {Object} options - Query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = options || {};
    const results = {};
    const queryObject = Object.assign({}, options.query || {});

    // Helper function to query a single transport
    function queryTransport(transport, next) {
      if (options.query && typeof transport.formatQuery === 'function') {
        options.query = transport.formatQuery(queryObject);
      }

      transport.query(options, (err, res) => {
        if (err) {
          return next(err);
        }

        if (typeof transport.formatResults === 'function') {
          res = transport.formatResults(res, options.format);
        }

        next(null, res);
      });
    }

    // Helper function to accumulate the results from `queryTransport` into
    // the `results`.
    function addResults(transport, next) {
      queryTransport(transport, (err, result) => {
        // queryTransport could potentially invoke the callback multiple times
        // since Transport code can be unpredictable.
        if (next) {
          result = err || result;
          if (result) {
            results[transport.name] = result;
          }

          // eslint-disable-next-line callback-return
          next();
        }

        next = null;
      });
    }

    // Iterate over the transports in parallel setting the appropriate key in
    // the `results`.
    asyncForEach(
      this.transports.filter(transport => !!transport.query),
      addResults,
      () => callback(null, results)
    );
  }

  /**
   * Returns a log stream for all transports. Options object is optional.
   * @param{Object} options={} - Stream options for this instance.
   * @returns {Stream} - TODO: add return description.
   */
  stream(options = {}) {
    const out = new Stream();
    const streams = [];

    out._streams = streams;
    out.destroy = () => {
      let i = streams.length;
      while (i--) {
        streams[i].destroy();
      }
    };

    // Create a list of all transports for this instance.
    this.transports
      .filter(transport => !!transport.stream)
      .forEach(transport => {
        const str = transport.stream(options);
        if (!str) {
          return;
        }

        streams.push(str);

        str.on('log', log => {
          log.transport = log.transport || [];
          log.transport.push(transport.name);
          out.emit('log', log);
        });

        str.on('error', err => {
          err.transport = err.transport || [];
          err.transport.push(transport.name);
          out.emit('error', err);
        });
      });

    return out;
  }

  /**
   * Returns an object corresponding to a specific timing. When done is called
   * the timer will finish and log the duration. e.g.:
   * @returns {Profile} - TODO: add return description.
   * @example
   *    const timer = winston.startTimer()
   *    setTimeout(() => {
   *      timer.done({
   *        message: 'Logging message'
   *      });
   *    }, 1000);
   */
  startTimer() {
    return new Profiler(this);
  }

  /**
   * Tracks the time inbetween subsequent calls to this method with the same
   * `id` parameter. The second call to this method will log the difference in
   * milliseconds along with the message.
   * @param {string} id Unique id of the profiler
   * @returns {Logger} - TODO: add return description.
   */
  profile(id, ...args) {
    const time = Date.now();
    if (this.profilers[id]) {
      const timeEnd = this.profilers[id];
      delete this.profilers[id];

      // Attempt to be kind to users if they are still using older APIs.
      if (typeof args[args.length - 2] === 'function') {
        // eslint-disable-next-line no-console
        console.warn(
          'Callback function no longer supported as of winston@3.0.0'
        );
        args.pop();
      }

      // Set the duration property of the metadata
      const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
      info.level = info.level || 'info';
      info.durationMs = time - timeEnd;
      info.message = info.message || id;
      return this.write(info);
    }

    this.profilers[id] = time;
    return this;
  }

  /**
   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
   * @returns {undefined}
   * @deprecated
   */
  handleExceptions(...args) {
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()'
    );
    this.exceptions.handle(...args);
  }

  /**
   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
   * @returns {undefined}
   * @deprecated
   */
  unhandleExceptions(...args) {
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()'
    );
    this.exceptions.unhandle(...args);
  }

  /**
   * Throw a more meaningful deprecation notice
   * @throws {Error} - TODO: add throws description.
   */
  cli() {
    throw new Error(
      [
        'Logger.cli() was removed in winston@3.0.0',
        'Use a custom winston.formats.cli() instead.',
        'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
      ].join('\n')
    );
  }

  /**
   * Bubbles the `event` that occured on the specified `transport` up
   * from this instance.
   * @param {string} event - The event that occured
   * @param {Object} transport - Transport on which the event occured
   * @private
   */
  _onEvent(event, transport) {
    function transportEvent(err) {
      // https://github.com/winstonjs/winston/issues/1364
      if (event === 'error' && !this.transports.includes(transport)) {
        this.add(transport);
      }
      this.emit(event, err, transport);
    }

    if (!transport['__winston' + event]) {
      transport['__winston' + event] = transportEvent.bind(this);
      transport.on(event, transport['__winston' + event]);
    }
  }

  _addDefaultMeta(msg) {
    if (this.defaultMeta) {
      Object.assign(msg, this.defaultMeta);
    }
  }
}

function getLevelValue(levels, level) {
  const value = levels[level];
  if (!value && value !== 0) {
    return null;
  }
  return value;
}

/**
 * Represents the current readableState pipe targets for this Logger instance.
 * @type {Array|Object}
 */
Object.defineProperty(Logger.prototype, 'transports', {
  configurable: false,
  enumerable: true,
  get() {
    const { pipes } = this._readableState;
    return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
  }
});

module.exports = Logger;


/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
/**
 * profiler.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * TODO: add class description.
 * @type {Profiler}
 * @private
 */
module.exports = class Profiler {
  /**
   * Constructor function for the Profiler instance used by
   * `Logger.prototype.startTimer`. When done is called the timer will finish
   * and log the duration.
   * @param {!Logger} logger - TODO: add param description.
   * @private
   */
  constructor(logger) {
    if (!logger) {
      throw new Error('Logger is required for profiling.');
    }

    this.logger = logger;
    this.start = Date.now();
  }

  /**
   * Ends the current timer (i.e. Profiler) instance and logs the `msg` along
   * with the duration since creation.
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  done(...args) {
    if (typeof args[args.length - 1] === 'function') {
      // eslint-disable-next-line no-console
      console.warn('Callback function no longer supported as of winston@3.0.0');
      args.pop();
    }

    const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
    info.level = info.level || 'info';
    info.durationMs = (Date.now()) - this.start;

    return this.logger.write(info);
  }
};


/***/ }),

/***/ 1080:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const os = __nccwpck_require__(2087);
const asyncForEach = __nccwpck_require__(1216);
const debug = __nccwpck_require__(3170)('winston:rejection');
const once = __nccwpck_require__(4118);
const stackTrace = __nccwpck_require__(5315);
const ExceptionStream = __nccwpck_require__(6268);

/**
 * Object for handling unhandledRejection events.
 * @type {RejectionHandler}
 */
module.exports = class RejectionHandler {
  /**
   * TODO: add contructor description
   * @param {!Logger} logger - TODO: add param description
   */
  constructor(logger) {
    if (!logger) {
      throw new Error('Logger is required to handle rejections');
    }

    this.logger = logger;
    this.handlers = new Map();
  }

  /**
   * Handles `unhandledRejection` events for the current process by adding any
   * handlers passed in.
   * @returns {undefined}
   */
  handle(...args) {
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        return arg.forEach(handler => this._addHandler(handler));
      }

      this._addHandler(arg);
    });

    if (!this.catcher) {
      this.catcher = this._unhandledRejection.bind(this);
      process.on('unhandledRejection', this.catcher);
    }
  }

  /**
   * Removes any handlers to `unhandledRejection` events for the current
   * process. This does not modify the state of the `this.handlers` set.
   * @returns {undefined}
   */
  unhandle() {
    if (this.catcher) {
      process.removeListener('unhandledRejection', this.catcher);
      this.catcher = false;

      Array.from(this.handlers.values()).forEach(wrapper =>
        this.logger.unpipe(wrapper)
      );
    }
  }

  /**
   * TODO: add method description
   * @param {Error} err - Error to get information about.
   * @returns {mixed} - TODO: add return description.
   */
  getAllInfo(err) {
    let message = null;
    if (err) {
      message = typeof err === 'string' ? err : err.message;
    }

    return {
      error: err,
      // TODO (indexzero): how do we configure this?
      level: 'error',
      message: [
        `unhandledRejection: ${message || '(no error message)'}`,
        err && err.stack || '  No stack trace'
      ].join('\n'),
      stack: err && err.stack,
      exception: true,
      date: new Date().toString(),
      process: this.getProcessInfo(),
      os: this.getOsInfo(),
      trace: this.getTrace(err)
    };
  }

  /**
   * Gets all relevant process information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getProcessInfo() {
    return {
      pid: process.pid,
      uid: process.getuid ? process.getuid() : null,
      gid: process.getgid ? process.getgid() : null,
      cwd: process.cwd(),
      execPath: process.execPath,
      version: process.version,
      argv: process.argv,
      memoryUsage: process.memoryUsage()
    };
  }

  /**
   * Gets all relevant OS information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getOsInfo() {
    return {
      loadavg: os.loadavg(),
      uptime: os.uptime()
    };
  }

  /**
   * Gets a stack trace for the specified error.
   * @param {mixed} err - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  getTrace(err) {
    const trace = err ? stackTrace.parse(err) : stackTrace.get();
    return trace.map(site => {
      return {
        column: site.getColumnNumber(),
        file: site.getFileName(),
        function: site.getFunctionName(),
        line: site.getLineNumber(),
        method: site.getMethodName(),
        native: site.isNative()
      };
    });
  }

  /**
   * Helper method to add a transport as an exception handler.
   * @param {Transport} handler - The transport to add as an exception handler.
   * @returns {void}
   */
  _addHandler(handler) {
    if (!this.handlers.has(handler)) {
      handler.handleRejections = true;
      const wrapper = new ExceptionStream(handler);
      this.handlers.set(handler, wrapper);
      this.logger.pipe(wrapper);
    }
  }

  /**
   * Logs all relevant information around the `err` and exits the current
   * process.
   * @param {Error} err - Error to handle
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _unhandledRejection(err) {
    const info = this.getAllInfo(err);
    const handlers = this._getRejectionHandlers();
    // Calculate if we should exit on this error
    let doExit =
      typeof this.logger.exitOnError === 'function'
        ? this.logger.exitOnError(err)
        : this.logger.exitOnError;
    let timeout;

    if (!handlers.length && doExit) {
      // eslint-disable-next-line no-console
      console.warn('winston: exitOnError cannot be true with no rejection handlers.');
      // eslint-disable-next-line no-console
      console.warn('winston: not exiting process.');
      doExit = false;
    }

    function gracefulExit() {
      debug('doExit', doExit);
      debug('process._exiting', process._exiting);

      if (doExit && !process._exiting) {
        // Remark: Currently ignoring any rejections from transports when
        // catching unhandled rejections.
        if (timeout) {
          clearTimeout(timeout);
        }
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      }
    }

    if (!handlers || handlers.length === 0) {
      return process.nextTick(gracefulExit);
    }

    // Log to all transports attempting to listen for when they are completed.
    asyncForEach(
      handlers,
      (handler, next) => {
        const done = once(next);
        const transport = handler.transport || handler;

        // Debug wrapping so that we can inspect what's going on under the covers.
        function onDone(event) {
          return () => {
            debug(event);
            done();
          };
        }

        transport._ending = true;
        transport.once('finish', onDone('finished'));
        transport.once('error', onDone('error'));
      },
      () => doExit && gracefulExit()
    );

    this.logger.log(info);

    // If exitOnError is true, then only allow the logging of exceptions to
    // take up to `3000ms`.
    if (doExit) {
      timeout = setTimeout(gracefulExit, 3000);
    }
  }

  /**
   * Returns the list of transports and exceptionHandlers for this instance.
   * @returns {Array} - List of transports and exceptionHandlers for this
   * instance.
   * @private
   */
  _getRejectionHandlers() {
    // Remark (indexzero): since `logger.transports` returns all of the pipes
    // from the _readableState of the stream we actually get the join of the
    // explicit handlers and the implicit transports with
    // `handleRejections: true`
    return this.logger.transports.filter(wrap => {
      const transport = wrap.transport || wrap;
      return transport.handleRejections;
    });
  }
};


/***/ }),

/***/ 1965:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * tail-file.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const fs = __nccwpck_require__(5747);
const { StringDecoder } = __nccwpck_require__(4304);
const { Stream } = __nccwpck_require__(1642);

/**
 * Simple no-op function.
 * @returns {undefined}
 */
function noop() {}

/**
 * TODO: add function description.
 * @param {Object} options - Options for tail.
 * @param {function} iter - Iterator function to execute on every line.
* `tail -f` a file. Options must include file.
 * @returns {mixed} - TODO: add return description.
 */
module.exports = (options, iter) => {
  const buffer = Buffer.alloc(64 * 1024);
  const decode = new StringDecoder('utf8');
  const stream = new Stream();
  let buff = '';
  let pos = 0;
  let row = 0;

  if (options.start === -1) {
    delete options.start;
  }

  stream.readable = true;
  stream.destroy = () => {
    stream.destroyed = true;
    stream.emit('end');
    stream.emit('close');
  };

  fs.open(options.file, 'a+', '0644', (err, fd) => {
    if (err) {
      if (!iter) {
        stream.emit('error', err);
      } else {
        iter(err);
      }
      stream.destroy();
      return;
    }

    (function read() {
      if (stream.destroyed) {
        fs.close(fd, noop);
        return;
      }

      return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
        if (error) {
          if (!iter) {
            stream.emit('error', error);
          } else {
            iter(error);
          }
          stream.destroy();
          return;
        }

        if (!bytes) {
          if (buff) {
            // eslint-disable-next-line eqeqeq
            if (options.start == null || row > options.start) {
              if (!iter) {
                stream.emit('line', buff);
              } else {
                iter(null, buff);
              }
            }
            row++;
            buff = '';
          }
          return setTimeout(read, 1000);
        }

        let data = decode.write(buffer.slice(0, bytes));
        if (!iter) {
          stream.emit('data', data);
        }

        data = (buff + data).split(/\n+/);

        const l = data.length - 1;
        let i = 0;

        for (; i < l; i++) {
          // eslint-disable-next-line eqeqeq
          if (options.start == null || row > options.start) {
            if (!iter) {
              stream.emit('line', data[i]);
            } else {
              iter(null, data[i]);
            }
          }
          row++;
        }

        buff = data[l];
        pos += bytes;
        return read();
      });
    }());
  });

  if (!iter) {
    return stream;
  }

  return stream.destroy;
};


/***/ }),

/***/ 7501:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint-disable no-console */
/*
 * console.js: Transport for outputting to the console.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const os = __nccwpck_require__(2087);
const { LEVEL, MESSAGE } = __nccwpck_require__(3937);
const TransportStream = __nccwpck_require__(7281);

/**
 * Transport for outputting to the console.
 * @type {Console}
 * @extends {TransportStream}
 */
module.exports = class Console extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    // Expose the name of this Transport on the prototype
    this.name = options.name || 'console';
    this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
    this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;

    this.setMaxListeners(30);
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));

    // Remark: what if there is no raw...?
    if (this.stderrLevels[info[LEVEL]]) {
      if (console._stderr) {
        // Node.js maps `process.stderr` to `console._stderr`.
        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
      } else {
        // console.error adds a newline
        console.error(info[MESSAGE]);
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    } else if (this.consoleWarnLevels[info[LEVEL]]) {
      if (console._stderr) {
        // Node.js maps `process.stderr` to `console._stderr`.
        // in Node.js console.warn is an alias for console.error
        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
      } else {
        // console.warn adds a newline
        console.warn(info[MESSAGE]);
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    }

    if (console._stdout) {
      // Node.js maps `process.stdout` to `console._stdout`.
      console._stdout.write(`${info[MESSAGE]}${this.eol}`);
    } else {
      // console.log adds a newline.
      console.log(info[MESSAGE]);
    }

    if (callback) {
      callback(); // eslint-disable-line callback-return
    }
  }

  /**
   * Returns a Set-like object with strArray's elements as keys (each with the
   * value true).
   * @param {Array} strArray - Array of Set-elements as strings.
   * @param {?string} [errMsg] - Custom error message thrown on invalid input.
   * @returns {Object} - TODO: add return description.
   * @private
   */
  _stringArrayToSet(strArray, errMsg) {
    if (!strArray)
      return {};

    errMsg = errMsg || 'Cannot make set from type other than Array of string elements';

    if (!Array.isArray(strArray)) {
      throw new Error(errMsg);
    }

    return strArray.reduce((set, el) =>  {
      if (typeof el !== 'string') {
        throw new Error(errMsg);
      }
      set[el] = true;

      return set;
    }, {});
  }
};


/***/ }),

/***/ 2478:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint-disable complexity,max-statements */
/**
 * file.js: Transport for outputting to a local log file.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const fs = __nccwpck_require__(5747);
const path = __nccwpck_require__(5622);
const asyncSeries = __nccwpck_require__(9619);
const zlib = __nccwpck_require__(8761);
const { MESSAGE } = __nccwpck_require__(3937);
const { Stream, PassThrough } = __nccwpck_require__(1642);
const TransportStream = __nccwpck_require__(7281);
const debug = __nccwpck_require__(3170)('winston:file');
const os = __nccwpck_require__(2087);
const tailFile = __nccwpck_require__(1965);

/**
 * Transport for outputting to a local log file.
 * @type {File}
 * @extends {TransportStream}
 */
module.exports = class File extends TransportStream {
  /**
   * Constructor function for the File transport object responsible for
   * persisting log messages and metadata to one or more files.
   * @param {Object} options - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    // Expose the name of this Transport on the prototype.
    this.name = options.name || 'file';

    // Helper function which throws an `Error` in the event that any of the
    // rest of the arguments is present in `options`.
    function throwIf(target, ...args) {
      args.slice(1).forEach(name => {
        if (options[name]) {
          throw new Error(`Cannot set ${name} and ${target} together`);
        }
      });
    }

    // Setup the base stream that always gets piped to to handle buffering.
    this._stream = new PassThrough();
    this._stream.setMaxListeners(30);

    // Bind this context for listener methods.
    this._onError = this._onError.bind(this);

    if (options.filename || options.dirname) {
      throwIf('filename or dirname', 'stream');
      this._basename = this.filename = options.filename
        ? path.basename(options.filename)
        : 'winston.log';

      this.dirname = options.dirname || path.dirname(options.filename);
      this.options = options.options || { flags: 'a' };
    } else if (options.stream) {
      // eslint-disable-next-line no-console
      console.warn('options.stream will be removed in winston@4. Use winston.transports.Stream');
      throwIf('stream', 'filename', 'maxsize');
      this._dest = this._stream.pipe(this._setupStream(options.stream));
      this.dirname = path.dirname(this._dest.path);
      // We need to listen for drain events when write() returns false. This
      // can make node mad at times.
    } else {
      throw new Error('Cannot log to file without filename or stream.');
    }

    this.maxsize = options.maxsize || null;
    this.rotationFormat = options.rotationFormat || false;
    this.zippedArchive = options.zippedArchive || false;
    this.maxFiles = options.maxFiles || null;
    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
    this.tailable = options.tailable || false;

    // Internal state variables representing the number of files this instance
    // has created and the current size (in bytes) of the current logfile.
    this._size = 0;
    this._pendingSize = 0;
    this._created = 0;
    this._drain = false;
    this._opening = false;
    this._ending = false;

    if (this.dirname) this._createLogDirIfNotExist(this.dirname);
    this.open();
  }

  finishIfEnding() {
    if (this._ending) {
      if (this._opening) {
        this.once('open', () => {
          this._stream.once('finish', () => this.emit('finish'));
          setImmediate(() => this._stream.end());
        });
      } else {
        this._stream.once('finish', () => this.emit('finish'));
        setImmediate(() => this._stream.end());
      }
    }
  }


  /**
   * Core logging method exposed to Winston. Metadata is optional.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback = () => {}) {
    // Remark: (jcrugzz) What is necessary about this callback(null, true) now
    // when thinking about 3.x? Should silent be handled in the base
    // TransportStream _write method?
    if (this.silent) {
      callback();
      return true;
    }

    // Output stream buffer is full and has asked us to wait for the drain event
    if (this._drain) {
      this._stream.once('drain', () => {
        this._drain = false;
        this.log(info, callback);
      });
      return;
    }
    if (this._rotate) {
      this._stream.once('rotate', () => {
        this._rotate = false;
        this.log(info, callback);
      });
      return;
    }

    // Grab the raw string and append the expected EOL.
    const output = `${info[MESSAGE]}${this.eol}`;
    const bytes = Buffer.byteLength(output);

    // After we have written to the PassThrough check to see if we need
    // to rotate to the next file.
    //
    // Remark: This gets called too early and does not depict when data
    // has been actually flushed to disk.
    function logged() {
      this._size += bytes;
      this._pendingSize -= bytes;

      debug('logged %s %s', this._size, output);
      this.emit('logged', info);

      // Do not attempt to rotate files while opening
      if (this._opening) {
        return;
      }

      // Check to see if we need to end the stream and create a new one.
      if (!this._needsNewFile()) {
        return;
      }

      // End the current stream, ensure it flushes and create a new one.
      // This could potentially be optimized to not run a stat call but its
      // the safest way since we are supporting `maxFiles`.
      this._rotate = true;
      this._endStream(() => this._rotateFile());
    }

    // Keep track of the pending bytes being written while files are opening
    // in order to properly rotate the PassThrough this._stream when the file
    // eventually does open.
    this._pendingSize += bytes;
    if (this._opening
      && !this.rotatedWhileOpening
      && this._needsNewFile(this._size + this._pendingSize)) {
      this.rotatedWhileOpening = true;
    }

    const written = this._stream.write(output, logged.bind(this));
    if (!written) {
      this._drain = true;
      this._stream.once('drain', () => {
        this._drain = false;
        callback();
      });
    } else {
      callback(); // eslint-disable-line callback-return
    }

    debug('written', written, this._drain);

    this.finishIfEnding();

    return written;
  }

  /**
   * Query the transport. Options object is optional.
   * @param {Object} options - Loggly-like query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   * TODO: Refactor me.
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = normalizeQuery(options);
    const file = path.join(this.dirname, this.filename);
    let buff = '';
    let results = [];
    let row = 0;

    const stream = fs.createReadStream(file, {
      encoding: 'utf8'
    });

    stream.on('error', err => {
      if (stream.readable) {
        stream.destroy();
      }
      if (!callback) {
        return;
      }

      return err.code !== 'ENOENT' ? callback(err) : callback(null, results);
    });

    stream.on('data', data => {
      data = (buff + data).split(/\n+/);
      const l = data.length - 1;
      let i = 0;

      for (; i < l; i++) {
        if (!options.start || row >= options.start) {
          add(data[i]);
        }
        row++;
      }

      buff = data[l];
    });

    stream.on('close', () => {
      if (buff) {
        add(buff, true);
      }
      if (options.order === 'desc') {
        results = results.reverse();
      }

      // eslint-disable-next-line callback-return
      if (callback) callback(null, results);
    });

    function add(buff, attempt) {
      try {
        const log = JSON.parse(buff);
        if (check(log)) {
          push(log);
        }
      } catch (e) {
        if (!attempt) {
          stream.emit('error', e);
        }
      }
    }

    function push(log) {
      if (
        options.rows &&
        results.length >= options.rows &&
        options.order !== 'desc'
      ) {
        if (stream.readable) {
          stream.destroy();
        }
        return;
      }

      if (options.fields) {
        log = options.fields.reduce((obj, key) => {
          obj[key] = log[key];
          return obj;
        }, {});
      }

      if (options.order === 'desc') {
        if (results.length >= options.rows) {
          results.shift();
        }
      }
      results.push(log);
    }

    function check(log) {
      if (!log) {
        return;
      }

      if (typeof log !== 'object') {
        return;
      }

      const time = new Date(log.timestamp);
      if (
        (options.from && time < options.from) ||
        (options.until && time > options.until) ||
        (options.level && options.level !== log.level)
      ) {
        return;
      }

      return true;
    }

    function normalizeQuery(options) {
      options = options || {};

      // limit
      options.rows = options.rows || options.limit || 10;

      // starting row offset
      options.start = options.start || 0;

      // now
      options.until = options.until || new Date();
      if (typeof options.until !== 'object') {
        options.until = new Date(options.until);
      }

      // now - 24
      options.from = options.from || (options.until - (24 * 60 * 60 * 1000));
      if (typeof options.from !== 'object') {
        options.from = new Date(options.from);
      }

      // 'asc' or 'desc'
      options.order = options.order || 'desc';

      return options;
    }
  }

  /**
   * Returns a log stream for this transport. Options object is optional.
   * @param {Object} options - Stream options for this instance.
   * @returns {Stream} - TODO: add return description.
   * TODO: Refactor me.
   */
  stream(options = {}) {
    const file = path.join(this.dirname, this.filename);
    const stream = new Stream();
    const tail = {
      file,
      start: options.start
    };

    stream.destroy = tailFile(tail, (err, line) => {
      if (err) {
        return stream.emit('error', err);
      }

      try {
        stream.emit('data', line);
        line = JSON.parse(line);
        stream.emit('log', line);
      } catch (e) {
        stream.emit('error', e);
      }
    });

    return stream;
  }

  /**
   * Checks to see the filesize of.
   * @returns {undefined}
   */
  open() {
    // If we do not have a filename then we were passed a stream and
    // don't need to keep track of size.
    if (!this.filename) return;
    if (this._opening) return;

    this._opening = true;

    // Stat the target file to get the size and create the stream.
    this.stat((err, size) => {
      if (err) {
        return this.emit('error', err);
      }
      debug('stat done: %s { size: %s }', this.filename, size);
      this._size = size;
      this._dest = this._createStream(this._stream);
      this._opening = false;
      this.once('open', () => {
        if (this._stream.eventNames().includes('rotate')) {
          this._stream.emit('rotate');
        } else {
          this._rotate = false;
        }
      });
    });
  }

  /**
   * Stat the file and assess information in order to create the proper stream.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  stat(callback) {
    const target = this._getFile();
    const fullpath = path.join(this.dirname, target);

    fs.stat(fullpath, (err, stat) => {
      if (err && err.code === 'ENOENT') {
        debug('ENOENT ok', fullpath);
        // Update internally tracked filename with the new target name.
        this.filename = target;
        return callback(null, 0);
      }

      if (err) {
        debug(`err ${err.code} ${fullpath}`);
        return callback(err);
      }

      if (!stat || this._needsNewFile(stat.size)) {
        // If `stats.size` is greater than the `maxsize` for this
        // instance then try again.
        return this._incFile(() => this.stat(callback));
      }

      // Once we have figured out what the filename is, set it
      // and return the size.
      this.filename = target;
      callback(null, stat.size);
    });
  }

  /**
   * Closes the stream associated with this instance.
   * @param {function} cb - TODO: add param description.
   * @returns {undefined}
   */
  close(cb) {
    if (!this._stream) {
      return;
    }

    this._stream.end(() => {
      if (cb) {
        cb(); // eslint-disable-line callback-return
      }
      this.emit('flush');
      this.emit('closed');
    });
  }

  /**
   * TODO: add method description.
   * @param {number} size - TODO: add param description.
   * @returns {undefined}
   */
  _needsNewFile(size) {
    size = size || this._size;
    return this.maxsize && size >= this.maxsize;
  }

  /**
   * TODO: add method description.
   * @param {Error} err - TODO: add param description.
   * @returns {undefined}
   */
  _onError(err) {
    this.emit('error', err);
  }

  /**
   * TODO: add method description.
   * @param {Stream} stream - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  _setupStream(stream) {
    stream.on('error', this._onError);

    return stream;
  }

  /**
   * TODO: add method description.
   * @param {Stream} stream - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  _cleanupStream(stream) {
    stream.removeListener('error', this._onError);

    return stream;
  }

  /**
   * TODO: add method description.
   */
  _rotateFile() {
    this._incFile(() => this.open());
  }

  /**
   * Unpipe from the stream that has been marked as full and end it so it
   * flushes to disk.
   *
   * @param {function} callback - Callback for when the current file has closed.
   * @private
   */
  _endStream(callback = () => {}) {
    if (this._dest) {
      this._stream.unpipe(this._dest);
      this._dest.end(() => {
        this._cleanupStream(this._dest);
        callback();
      });
    } else {
      callback(); // eslint-disable-line callback-return
    }
  }

  /**
   * Returns the WritableStream for the active file on this instance. If we
   * should gzip the file then a zlib stream is returned.
   *
   * @param {ReadableStream} source – PassThrough to pipe to the file when open.
   * @returns {WritableStream} Stream that writes to disk for the active file.
   */
  _createStream(source) {
    const fullpath = path.join(this.dirname, this.filename);

    debug('create stream start', fullpath, this.options);
    const dest = fs.createWriteStream(fullpath, this.options)
      // TODO: What should we do with errors here?
      .on('error', err => debug(err))
      .on('close', () => debug('close', dest.path, dest.bytesWritten))
      .on('open', () => {
        debug('file open ok', fullpath);
        this.emit('open', fullpath);
        source.pipe(dest);

        // If rotation occured during the open operation then we immediately
        // start writing to a new PassThrough, begin opening the next file
        // and cleanup the previous source and dest once the source has drained.
        if (this.rotatedWhileOpening) {
          this._stream = new PassThrough();
          this._stream.setMaxListeners(30);
          this._rotateFile();
          this.rotatedWhileOpening = false;
          this._cleanupStream(dest);
          source.end();
        }
      });

    debug('create stream ok', fullpath);
    if (this.zippedArchive) {
      const gzip = zlib.createGzip();
      gzip.pipe(dest);
      return gzip;
    }

    return dest;
  }

  /**
   * TODO: add method description.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  _incFile(callback) {
    debug('_incFile', this.filename);
    const ext = path.extname(this._basename);
    const basename = path.basename(this._basename, ext);

    if (!this.tailable) {
      this._created += 1;
      this._checkMaxFilesIncrementing(ext, basename, callback);
    } else {
      this._checkMaxFilesTailable(ext, basename, callback);
    }
  }

  /**
   * Gets the next filename to use for this instance in the case that log
   * filesizes are being capped.
   * @returns {string} - TODO: add return description.
   * @private
   */
  _getFile() {
    const ext = path.extname(this._basename);
    const basename = path.basename(this._basename, ext);
    const isRotation = this.rotationFormat
      ? this.rotationFormat()
      : this._created;

    // Caveat emptor (indexzero): rotationFormat() was broken by design When
    // combined with max files because the set of files to unlink is never
    // stored.
    const target = !this.tailable && this._created
      ? `${basename}${isRotation}${ext}`
      : `${basename}${ext}`;

    return this.zippedArchive && !this.tailable
      ? `${target}.gz`
      : target;
  }

  /**
   * Increment the number of files created or checked by this instance.
   * @param {mixed} ext - TODO: add param description.
   * @param {mixed} basename - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {undefined}
   * @private
   */
  _checkMaxFilesIncrementing(ext, basename, callback) {
    // Check for maxFiles option and delete file.
    if (!this.maxFiles || this._created < this.maxFiles) {
      return setImmediate(callback);
    }

    const oldest = this._created - this.maxFiles;
    const isOldest = oldest !== 0 ? oldest : '';
    const isZipped = this.zippedArchive ? '.gz' : '';
    const filePath = `${basename}${isOldest}${ext}${isZipped}`;
    const target = path.join(this.dirname, filePath);

    fs.unlink(target, callback);
  }

  /**
   * Roll files forward based on integer, up to maxFiles. e.g. if base if
   * file.log and it becomes oversized, roll to file1.log, and allow file.log
   * to be re-used. If file is oversized again, roll file1.log to file2.log,
   * roll file.log to file1.log, and so on.
   * @param {mixed} ext - TODO: add param description.
   * @param {mixed} basename - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {undefined}
   * @private
   */
  _checkMaxFilesTailable(ext, basename, callback) {
    const tasks = [];
    if (!this.maxFiles) {
      return;
    }

    // const isZipped = this.zippedArchive ? '.gz' : '';
    const isZipped = this.zippedArchive ? '.gz' : '';
    for (let x = this.maxFiles - 1; x > 1; x--) {
      tasks.push(function (i, cb) {
        let fileName = `${basename}${(i - 1)}${ext}${isZipped}`;
        const tmppath = path.join(this.dirname, fileName);

        fs.exists(tmppath, exists => {
          if (!exists) {
            return cb(null);
          }

          fileName = `${basename}${i}${ext}${isZipped}`;
          fs.rename(tmppath, path.join(this.dirname, fileName), cb);
        });
      }.bind(this, x));
    }

    asyncSeries(tasks, () => {
      fs.rename(
        path.join(this.dirname, `${basename}${ext}`),
        path.join(this.dirname, `${basename}1${ext}${isZipped}`),
        callback
      );
    });
  }

  _createLogDirIfNotExist(dirPath) {
    /* eslint-disable no-sync */
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    /* eslint-enable no-sync */
  }
};


/***/ }),

/***/ 8028:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * http.js: Transport for outputting to a json-rpcserver.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const { Stream } = __nccwpck_require__(1642);
const TransportStream = __nccwpck_require__(7281);
const jsonStringify = __nccwpck_require__(7560);

/**
 * Transport for outputting to a json-rpc server.
 * @type {Stream}
 * @extends {TransportStream}
 */
module.exports = class Http extends TransportStream {
  /**
   * Constructor function for the Http transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  // eslint-disable-next-line max-statements
  constructor(options = {}) {
    super(options);

    this.options = options;
    this.name = options.name || 'http';
    this.ssl = !!options.ssl;
    this.host = options.host || 'localhost';
    this.port = options.port;
    this.auth = options.auth;
    this.path = options.path || '';
    this.agent = options.agent;
    this.headers = options.headers || {};
    this.headers['content-type'] = 'application/json';
    this.batch = options.batch || false;
    this.batchInterval = options.batchInterval || 5000;
    this.batchCount = options.batchCount || 10;
    this.batchOptions = [];
    this.batchTimeoutID = -1;
    this.batchCallback = {};

    if (!this.port) {
      this.port = this.ssl ? 443 : 80;
    }
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    this._request(info, (err, res) => {
      if (res && res.statusCode !== 200) {
        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
      }

      if (err) {
        this.emit('warn', err);
      } else {
        this.emit('logged', info);
      }
    });

    // Remark: (jcrugzz) Fire and forget here so requests dont cause buffering
    // and block more requests from happening?
    if (callback) {
      setImmediate(callback);
    }
  }

  /**
   * Query the transport. Options object is optional.
   * @param {Object} options -  Loggly-like query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   * @returns {undefined}
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = {
      method: 'query',
      params: this.normalizeQuery(options)
    };

    if (options.params.path) {
      options.path = options.params.path;
      delete options.params.path;
    }

    if (options.params.auth) {
      options.auth = options.params.auth;
      delete options.params.auth;
    }

    this._request(options, (err, res, body) => {
      if (res && res.statusCode !== 200) {
        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
      }

      if (err) {
        return callback(err);
      }

      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          return callback(e);
        }
      }

      callback(null, body);
    });
  }

  /**
   * Returns a log stream for this transport. Options object is optional.
   * @param {Object} options - Stream options for this instance.
   * @returns {Stream} - TODO: add return description
   */
  stream(options = {}) {
    const stream = new Stream();
    options = {
      method: 'stream',
      params: options
    };

    if (options.params.path) {
      options.path = options.params.path;
      delete options.params.path;
    }

    if (options.params.auth) {
      options.auth = options.params.auth;
      delete options.params.auth;
    }

    let buff = '';
    const req = this._request(options);

    stream.destroy = () => req.destroy();
    req.on('data', data => {
      data = (buff + data).split(/\n+/);
      const l = data.length - 1;

      let i = 0;
      for (; i < l; i++) {
        try {
          stream.emit('log', JSON.parse(data[i]));
        } catch (e) {
          stream.emit('error', e);
        }
      }

      buff = data[l];
    });
    req.on('error', err => stream.emit('error', err));

    return stream;
  }

  /**
   * Make a request to a winstond server or any http server which can
   * handle json-rpc.
   * @param {function} options - Options to sent the request.
   * @param {function} callback - Continuation to respond to when complete.
   */
  _request(options, callback) {
    options = options || {};

    const auth = options.auth || this.auth;
    const path = options.path || this.path || '';

    delete options.auth;
    delete options.path;

    if (this.batch) {
      this._doBatch(options, callback, auth, path);
    } else {
      this._doRequest(options, callback, auth, path);
    }
  }

  /**
   * Send or memorize the options according to batch configuration
   * @param {function} options - Options to sent the request.
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doBatch(options, callback, auth, path) {
    this.batchOptions.push(options);
    if (this.batchOptions.length === 1) {
      // First message stored, it's time to start the timeout!
      const me = this;
      this.batchCallback = callback;
      this.batchTimeoutID = setTimeout(function () {
        // timeout is reached, send all messages to endpoint
        me.batchTimeoutID = -1;
        me._doBatchRequest(me.batchCallback, auth, path);
      }, this.batchInterval);
    }
    if (this.batchOptions.length === this.batchCount) {
      // max batch count is reached, send all messages to endpoint
      this._doBatchRequest(this.batchCallback, auth, path);
    }
  }

  /**
   * Initiate a request with the memorized batch options, stop the batch timeout
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doBatchRequest(callback, auth, path) {
    if (this.batchTimeoutID > 0) {
      clearTimeout(this.batchTimeoutID);
      this.batchTimeoutID = -1;
    }
    const batchOptionsCopy = this.batchOptions.slice();
    this.batchOptions = [];
    this._doRequest(batchOptionsCopy, callback, auth, path);
  }

  /**
   * Make a request to a winstond server or any http server which can
   * handle json-rpc.
   * @param {function} options - Options to sent the request.
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doRequest(options, callback, auth, path) {
    // Prepare options for outgoing HTTP request
    const headers = Object.assign({}, this.headers);
    if (auth && auth.bearer) {
      headers.Authorization = `Bearer ${auth.bearer}`;
    }
    const req = (this.ssl ? https : http).request({
      ...this.options,
      method: 'POST',
      host: this.host,
      port: this.port,
      path: `/${path.replace(/^\//, '')}`,
      headers: headers,
      auth: (auth && auth.username && auth.password) ? (`${auth.username}:${auth.password}`) : '',
      agent: this.agent
    });

    req.on('error', callback);
    req.on('response', res => (
      res.on('end', () => callback(null, res)).resume()
    ));
    req.end(Buffer.from(jsonStringify(options, this.options.replacer), 'utf8'));
  }
};


/***/ }),

/***/ 7804:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/**
 * transports.js: Set of all transports Winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



/**
 * TODO: add property description.
 * @type {Console}
 */
Object.defineProperty(exports, "Console", ({
  configurable: true,
  enumerable: true,
  get() {
    return __nccwpck_require__(7501);
  }
}));

/**
 * TODO: add property description.
 * @type {File}
 */
Object.defineProperty(exports, "File", ({
  configurable: true,
  enumerable: true,
  get() {
    return __nccwpck_require__(2478);
  }
}));

/**
 * TODO: add property description.
 * @type {Http}
 */
Object.defineProperty(exports, "Http", ({
  configurable: true,
  enumerable: true,
  get() {
    return __nccwpck_require__(8028);
  }
}));

/**
 * TODO: add property description.
 * @type {Stream}
 */
Object.defineProperty(exports, "Stream", ({
  configurable: true,
  enumerable: true,
  get() {
    return __nccwpck_require__(4747);
  }
}));


/***/ }),

/***/ 4747:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * stream.js: Transport for outputting to any arbitrary stream.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */



const isStream = __nccwpck_require__(1554);
const { MESSAGE } = __nccwpck_require__(3937);
const os = __nccwpck_require__(2087);
const TransportStream = __nccwpck_require__(7281);

/**
 * Transport for outputting to any arbitrary stream.
 * @type {Stream}
 * @extends {TransportStream}
 */
module.exports = class Stream extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    if (!options.stream || !isStream(options.stream)) {
      throw new Error('options.stream is required.');
    }

    // We need to listen for drain events when write() returns false. This can
    // make node mad at times.
    this._stream = options.stream;
    this._stream.setMaxListeners(Infinity);
    this.isObjectMode = options.stream._writableState.objectMode;
    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));
    if (this.isObjectMode) {
      this._stream.write(info);
      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    }

    this._stream.write(`${info[MESSAGE]}${this.eol}`);
    if (callback) {
      callback(); // eslint-disable-line callback-return
    }
    return;
  }
};


/***/ }),

/***/ 4351:
/***/ ((module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
__nccwpck_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__nccwpck_require__.r(__webpack_exports__);
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "getClient": () => (/* binding */ getClient),
/* harmony export */   "fetchJobs": () => (/* binding */ fetchJobs),
/* harmony export */   "fetchLogs": () => (/* binding */ fetchLogs),
/* harmony export */   "getCommaSeparatedInput": () => (/* binding */ getCommaSeparatedInput),
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
const core = __nccwpck_require__(2186);
const process = __nccwpck_require__(1765);
const HttpClient = __nccwpck_require__(9925)/* .HttpClient */ .eN;
const { createLogger, format } = __nccwpck_require__(4158);
const LokiTransport = __nccwpck_require__(4490);
const githubAPIUrl = "https://api.github.com";
const { printf } = format;
const gh_log_regex =
  /^\s?(?<timestamp>((19|20)[0-9][0-9])[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])[T]([01][1-9]|[2][0-3])[:]([0-5][0-9])[:]([0-5][0-9])[.](?<nanosec>[0-9][0-9][0-9][0-9][0-9][0-9][0-9])[Z])\s(?<log>.*){0,1}/;

/**
 *
 * @param {*} ghToken
 * @returns
 */
function getClient(ghToken) {
  return new HttpClient("gh-http-client", [], {
    headers: {
      Authorization: `token ${ghToken}`,
      "Content-Type": "application/json",
    },
  });
}

/**
 *
 * @param {*} httpClient
 * @param {*} repo
 * @param {*} runId
 * @param {*} allowList
 * @returns
 */
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

/**
 *
 * @param {*} httpClient
 * @param {*} repo
 * @param {*} job
 * @returns
 */

async function fetchLogs(httpClient, repo, job) {
  const url = `${githubAPIUrl}/repos/${repo}/actions/jobs/${job.id}/logs`;
  const res = await httpClient.get(url);

  if (res.message.statusCode === undefined || res.message.statusCode >= 400) {
    throw new Error(`HTTP request failed: ${res.message.statusMessage}`);
  }

  const body = await res.readBody();
  return body.split("\n");
}

/**
 *
 * @param {*} value
 * @returns
 */
function getCommaSeparatedInput(value) {
  let val = [];
  if (value !== "") {
    val = value.split(",");
    val = val.map((s) => s.trim());
  }

  return val;
}

async function run() {
  try {
    // retrieve config params

    // Github repo token
    const repoToken = core.getInput("repo-token", { required: true });
    // List of jobs to collect logs from (all jobs when empty)
    const jobNames = core.getInput("job-names", { required: false });
    const allowList = getCommaSeparatedInput(jobNames);
    // LogQL Push endpoint
    const endpoint = core.getInput("endpoint", { required: false });
    // LogQL endpoints (when endpoint is not present)
    const addrValue = core.getInput("addresses", { required: false });
    const addresses = getCommaSeparatedInput(addrValue);
    // LogQL partition ID
    const partitionId = core.getInput("partition", { required: false });
    // logql user
    const username = core.getInput("username", { required: false });
    // logql pass
    const password = core.getInput("password", { required: false });

    // Ensure either endpoint or addresses are set
    if (endpoint === "" && addresses.length === 0) {
      throw new Error(
        "invalid configuration: please set either endpoint or addresses"
      );
    }

    // get an authenticated HTTP client for the GitHub API
    const client = getClient(repoToken);

    // get all the jobs for the current workflow
    const workflowId = process.env["GITHUB_RUN_ID"] || "";
    const repo = process.env["GITHUB_REPOSITORY"] || "";
    core.debug(`Allow listing ${allowList.length} jobs in repo ${repo}`);
    const jobs = await fetchJobs(client, repo, workflowId, allowList);

    const onConnectionError = (err) => {
      core.debug("Error at connecting with logs endpoint\n", err);
    };
    const lokiBasicAuth = () => {
      if (username && password) {
        return `${username}:${password}`;
      }
      return "";
    };

    const lokiFmt = printf(({ message }) => {
      if (!message || message.length === 0) {
        return;
      }
      const line = message.match(gh_log_regex);
      if (!line?.groups?.log) {
        return message;
      }
      const { log } = line?.groups;
      const xlog = `${log}`;
      return xlog;
    });

    const options = (job) => {
      return {
        transports: [
          new LokiTransport({
            labels: {
              job: job?.name,
              jobId: job?.id,
              repo,
              workflowId,
              type: "github",
            },
            batching: false,
            format: lokiFmt,
            host: endpoint || addresses[0],
            gracefulShutdown: true,
            onConnectionError: onConnectionError,
            lokiBasicAuth: lokiBasicAuth(),
          }),
        ],
      };
    };
    const logger = (job) => createLogger(options(job));

    // get the logs for each job
    core.debug(`Getting logs for ${jobs.length} jobs`);
    for (const j of jobs) {
      const logs = logger(j);
      const lines = await fetchLogs(client, repo, j);
      core.debug(`Fetched ${lines.length} lines for job ${j.name}`);
      for (const l of lines) {
        try {
          if (l && l?.length > 0) {
            logs.info(l);
          }
        } catch (e) {
          core.warning(`Parser error ${e}`);
          logs.warning(`Error: ${e}`);
        }
      }
      logs.clear();
    }
  } catch (e) {
    core.setFailed(`Run failed: ${e}`);
  }
}

await run();

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ 1607:
/***/ ((module) => {

module.exports = eval("require")("./snappy.android-arm64.node");


/***/ }),

/***/ 6262:
/***/ ((module) => {

module.exports = eval("require")("./snappy.darwin-arm64.node");


/***/ }),

/***/ 8220:
/***/ ((module) => {

module.exports = eval("require")("./snappy.darwin-x64.node");


/***/ }),

/***/ 6366:
/***/ ((module) => {

module.exports = eval("require")("./snappy.freebsd-x64.node");


/***/ }),

/***/ 4707:
/***/ ((module) => {

module.exports = eval("require")("./snappy.linux-arm-gnueabihf.node");


/***/ }),

/***/ 5972:
/***/ ((module) => {

module.exports = eval("require")("./snappy.linux-arm64-gnu.node");


/***/ }),

/***/ 1026:
/***/ ((module) => {

module.exports = eval("require")("./snappy.linux-arm64-musl.node");


/***/ }),

/***/ 1110:
/***/ ((module) => {

module.exports = eval("require")("./snappy.linux-x64-gnu.node");


/***/ }),

/***/ 5095:
/***/ ((module) => {

module.exports = eval("require")("./snappy.linux-x64-musl.node");


/***/ }),

/***/ 4403:
/***/ ((module) => {

module.exports = eval("require")("./snappy.win32-arm64-msvc.node");


/***/ }),

/***/ 3199:
/***/ ((module) => {

module.exports = eval("require")("./snappy.win32-ia32-msvc.node");


/***/ }),

/***/ 5102:
/***/ ((module) => {

module.exports = eval("require")("./snappy.win32-x64-msvc.node");


/***/ }),

/***/ 8935:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-android-arm64");


/***/ }),

/***/ 7850:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-darwin-arm64");


/***/ }),

/***/ 2511:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-darwin-x64");


/***/ }),

/***/ 7798:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-freebsd-x64");


/***/ }),

/***/ 7144:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-linux-arm-gnueabihf");


/***/ }),

/***/ 5305:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-linux-arm64-gnu");


/***/ }),

/***/ 7925:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-linux-arm64-musl");


/***/ }),

/***/ 8897:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-win32-arm64-msvc");


/***/ }),

/***/ 9965:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-win32-ia32-msvc");


/***/ }),

/***/ 9679:
/***/ ((module) => {

module.exports = eval("require")("@napi-rs/snappy-win32-x64-msvc");


/***/ }),

/***/ 6141:
/***/ ((module) => {

"use strict";
module.exports = {"version":"3.8.1"};

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 1765:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 3867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__nccwpck_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(4351);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;