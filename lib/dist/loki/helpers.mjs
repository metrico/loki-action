export const createProtoTimestamps = (logEntry) => {
    return {
        timestamp: {
            seconds: Math.floor(logEntry.time / 1000),
            nanos: (logEntry.time % 1000) * 1000000
        },
        line: logEntry.msg
    }
}

export const prepareJSONBatch = (batch) => {
    batch.streams = batch.streams.map(logEntry => {
        logEntry.stream = logEntry.labels
        logEntry.values = logEntry.entries
        logEntry.values = logEntry.values.map(entry => {
            return [JSON.stringify(entry.ts * 1000 * 1000), entry.line]
        })
        delete logEntry.entries
        delete logEntry.labels
        return logEntry
    })
    return batch
}

export const prepareProtoBatch = (batch) => {
    return {
        streams: batch.map(item => {
            return {
                labels: `{level="${item.level}",hostname="${item.hostname}"}`,
                entries: [createProtoTimestamps(item)]
            }
        })
    }
    // batch.streams = batch.streams.map(logEntry => {
    //     // Skip preparation when the batch has been prepared already
    //     // TODO: The patch blocks new labels to be added, although the situation is better than before
    //     if (typeof logEntry.labels === 'string') {
    //         return logEntry
    //     }
    //     let protoLabels = `{level="${logEntry.labels.level}"`
    //     delete logEntry.labels.level
    //     for (let key in logEntry.labels) {
    //         protoLabels += `,${key}="${logEntry.labels[key]}"`
    //     }
    //     protoLabels += '}'
    //     logEntry.labels = protoLabels
    //     return logEntry
    // })
    return batch
}