import { PinoLogLine } from '../logWorker.interface';
import { logproto } from './logproto';
export declare const PinoLevelMap: {
    '10': string;
    '20': string;
    '30': string;
    '40': string;
    '50': string;
    '60': string;
};
export declare const DEFAULT_PINO_KEYS: string[];
export declare const createProtoTimestamps: (logEntry: {
    msg: string;
    time: number;
}) => logproto.IEntryAdapter;
export declare const prepareProtoBatch: (batch: PinoLogLine[], importantLabels: string[], chronologicalOrder?: boolean | undefined) => logproto.IPushRequest;
//# sourceMappingURL=helpers.d.ts.map