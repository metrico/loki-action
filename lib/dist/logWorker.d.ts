/// <reference types="node" />
import { LogWorkerOptions } from './logWorker.interface';
export declare const createTransport: (opts: LogWorkerOptions) => (import("stream").Transform & import("pino-abstract-transport").OnUnknown) | undefined;
export { LogWorkerOptions };
//# sourceMappingURL=logWorker.d.ts.map