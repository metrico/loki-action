"use strict";
/* eslint-disable */
module.exports = opts => require('pino-loki-transport')({
    ...opts,
    // ...non-serializable options
});
