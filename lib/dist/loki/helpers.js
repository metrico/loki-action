"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareProtoBatch = exports.createProtoTimestamps = exports.DEFAULT_PINO_KEYS = exports.PinoLevelMap = void 0;
exports.PinoLevelMap = {
    '10': 'trace',
    '20': 'debug',
    '30': 'info',
    '40': 'warn',
    '50': 'error',
    '60': 'fatal',
};
exports.DEFAULT_PINO_KEYS = ['level', 'time', 'pid', 'msg'];
const createProtoTimestamps = (logEntry) => {
    return {
        timestamp: {
            seconds: Math.floor(logEntry.time / 1000),
            nanos: (logEntry.time % 1000) * 1000000,
        },
        line: logEntry.msg,
    };
};
exports.createProtoTimestamps = createProtoTimestamps;
const extractObjectKeys = (key, obj) => {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
        return key + '={}';
    }
    const result = [];
    for (const objKey of keys) {
        result.push(extractLabel(key + '_' + objKey, obj[objKey]));
    }
    return result.join(' ');
};
const extractLabel = (key, value) => {
    if (Array.isArray(value)) {
        return `${key}=${value.join(',')}`;
    }
    if (typeof value === 'object') {
        return extractObjectKeys(key, value);
    }
    return `${key}=${value}`;
};
const prepareProtoBatch = (batch, importantLabels, chronologicalOrder) => {
    if (batch.length === 0) {
        throw new Error('Empty batch');
    }
    const labelMaps = new Map();
    for (const item of batch) {
        const labelArr = [];
        let msg = item.msg +
            ' ' +
            extractLabel('level', exports.PinoLevelMap[item.level + ''] || 'error');
        // labelArr.push({
        //     key: 'level',
        //     value: (PinoLevelMap as any)[item.level + ''] || 'error'
        // });
        for (const key of Object.keys(item).sort()) {
            if (importantLabels.includes(key)) {
                labelArr.push({
                    key,
                    value: item[key] + '',
                });
            }
            else if (!exports.DEFAULT_PINO_KEYS.includes(key)) {
                msg += ' ' + extractLabel(key, item[key]);
            }
        }
        const labels = `{${labelArr
            .map(item => item.key + '="' + item.value + '"')
            .join(',')}}`;
        const fromMap = labelMaps.get(labels);
        const logLine = {
            msg,
            time: item.time,
        };
        if (fromMap) {
            labelMaps.set(labels, [...fromMap, logLine]);
        }
        else {
            labelMaps.set(labels, [logLine]);
        }
    }
    return {
        streams: [...labelMaps.entries()].map(([labels, entries]) => {
            if (chronologicalOrder && entries.length > 1) {
                entries = entries.sort((prev, curr) => prev.time - curr.time);
            }
            return {
                labels,
                entries: entries.map(item => (0, exports.createProtoTimestamps)(item)),
            };
        }),
    };
};
exports.prepareProtoBatch = prepareProtoBatch;
//# sourceMappingURL=helpers.js.map