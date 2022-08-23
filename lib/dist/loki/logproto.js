"use strict";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function (global, factory) {
    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);
    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));
})(this, function ($protobuf) {
    "use strict";
    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.logproto = (function () {
        /**
         * Namespace logproto.
         * @exports logproto
         * @namespace
         */
        var logproto = {};
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
            function Pusher(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
            (Pusher.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Pusher;
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
            Pusher.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
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
            Object.defineProperty(Pusher.prototype.push = function push(request, callback) {
                return this.rpcCall(push, $root.logproto.PushRequest, $root.logproto.PushResponse, request, callback);
            }, "name", { value: "Push" });
            /**
             * Calls Push.
             * @function push
             * @memberof logproto.Pusher
             * @instance
             * @param {logproto.IPushRequest} request PushRequest message or plain object
             * @returns {Promise<logproto.PushResponse>} Promise
             * @variation 2
             */
            return Pusher;
        })();
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
            function Querier(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
            (Querier.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Querier;
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
            Querier.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
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
            Object.defineProperty(Querier.prototype.query = function query(request, callback) {
                return this.rpcCall(query, $root.logproto.QueryRequest, $root.logproto.QueryResponse, request, callback);
            }, "name", { value: "Query" });
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
             * Callback as used by {@link logproto.Querier#querySample}.
             * @memberof logproto.Querier
             * @typedef QuerySampleCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {logproto.SampleQueryResponse} [response] SampleQueryResponse
             */
            /**
             * Calls QuerySample.
             * @function querySample
             * @memberof logproto.Querier
             * @instance
             * @param {logproto.ISampleQueryRequest} request SampleQueryRequest message or plain object
             * @param {logproto.Querier.QuerySampleCallback} callback Node-style callback called with the error, if any, and SampleQueryResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Querier.prototype.querySample = function querySample(request, callback) {
                return this.rpcCall(querySample, $root.logproto.SampleQueryRequest, $root.logproto.SampleQueryResponse, request, callback);
            }, "name", { value: "QuerySample" });
            /**
             * Calls QuerySample.
             * @function querySample
             * @memberof logproto.Querier
             * @instance
             * @param {logproto.ISampleQueryRequest} request SampleQueryRequest message or plain object
             * @returns {Promise<logproto.SampleQueryResponse>} Promise
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
            Object.defineProperty(Querier.prototype.label = function label(request, callback) {
                return this.rpcCall(label, $root.logproto.LabelRequest, $root.logproto.LabelResponse, request, callback);
            }, "name", { value: "Label" });
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
            Object.defineProperty(Querier.prototype.tail = function tail(request, callback) {
                return this.rpcCall(tail, $root.logproto.TailRequest, $root.logproto.TailResponse, request, callback);
            }, "name", { value: "Tail" });
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
            Object.defineProperty(Querier.prototype.series = function series(request, callback) {
                return this.rpcCall(series, $root.logproto.SeriesRequest, $root.logproto.SeriesResponse, request, callback);
            }, "name", { value: "Series" });
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
            Object.defineProperty(Querier.prototype.tailersCount = function tailersCount(request, callback) {
                return this.rpcCall(tailersCount, $root.logproto.TailersCountRequest, $root.logproto.TailersCountResponse, request, callback);
            }, "name", { value: "TailersCount" });
            /**
             * Calls TailersCount.
             * @function tailersCount
             * @memberof logproto.Querier
             * @instance
             * @param {logproto.ITailersCountRequest} request TailersCountRequest message or plain object
             * @returns {Promise<logproto.TailersCountResponse>} Promise
             * @variation 2
             */
            /**
             * Callback as used by {@link logproto.Querier#getChunkIDs}.
             * @memberof logproto.Querier
             * @typedef GetChunkIDsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {logproto.GetChunkIDsResponse} [response] GetChunkIDsResponse
             */
            /**
             * Calls GetChunkIDs.
             * @function getChunkIDs
             * @memberof logproto.Querier
             * @instance
             * @param {logproto.IGetChunkIDsRequest} request GetChunkIDsRequest message or plain object
             * @param {logproto.Querier.GetChunkIDsCallback} callback Node-style callback called with the error, if any, and GetChunkIDsResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Querier.prototype.getChunkIDs = function getChunkIDs(request, callback) {
                return this.rpcCall(getChunkIDs, $root.logproto.GetChunkIDsRequest, $root.logproto.GetChunkIDsResponse, request, callback);
            }, "name", { value: "GetChunkIDs" });
            /**
             * Calls GetChunkIDs.
             * @function getChunkIDs
             * @memberof logproto.Querier
             * @instance
             * @param {logproto.IGetChunkIDsRequest} request GetChunkIDsRequest message or plain object
             * @returns {Promise<logproto.GetChunkIDsResponse>} Promise
             * @variation 2
             */
            return Querier;
        })();
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
            function Ingester(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
            (Ingester.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Ingester;
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
            Ingester.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
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
            Object.defineProperty(Ingester.prototype.transferChunks = function transferChunks(request, callback) {
                return this.rpcCall(transferChunks, $root.logproto.TimeSeriesChunk, $root.logproto.TransferChunksResponse, request, callback);
            }, "name", { value: "TransferChunks" });
            /**
             * Calls TransferChunks.
             * @function transferChunks
             * @memberof logproto.Ingester
             * @instance
             * @param {logproto.ITimeSeriesChunk} request TimeSeriesChunk message or plain object
             * @returns {Promise<logproto.TransferChunksResponse>} Promise
             * @variation 2
             */
            return Ingester;
        })();
        logproto.PushRequest = (function () {
            /**
             * Properties of a PushRequest.
             * @memberof logproto
             * @interface IPushRequest
             * @property {Array.<logproto.IStreamAdapter>|null} [streams] PushRequest streams
             */
            /**
             * Constructs a new PushRequest.
             * @memberof logproto
             * @classdesc Represents a PushRequest.
             * @implements IPushRequest
             * @constructor
             * @param {logproto.IPushRequest=} [properties] Properties to set
             */
            function PushRequest(properties) {
                this.streams = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * PushRequest streams.
             * @member {Array.<logproto.IStreamAdapter>} streams
             * @memberof logproto.PushRequest
             * @instance
             */
            PushRequest.prototype.streams = $util.emptyArray;
            /**
             * Creates a new PushRequest instance using the specified properties.
             * @function create
             * @memberof logproto.PushRequest
             * @static
             * @param {logproto.IPushRequest=} [properties] Properties to set
             * @returns {logproto.PushRequest} PushRequest instance
             */
            PushRequest.create = function create(properties) {
                return new PushRequest(properties);
            };
            /**
             * Encodes the specified PushRequest message. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.PushRequest
             * @static
             * @param {logproto.IPushRequest} message PushRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.streams != null && message.streams.length)
                    for (var i = 0; i < message.streams.length; ++i)
                        $root.logproto.StreamAdapter.encode(message.streams[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified PushRequest message, length delimited. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.PushRequest
             * @static
             * @param {logproto.IPushRequest} message PushRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            PushRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.PushRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.streams && message.streams.length))
                                message.streams = [];
                            message.streams.push($root.logproto.StreamAdapter.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            PushRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PushRequest message.
             * @function verify
             * @memberof logproto.PushRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PushRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.streams != null && message.hasOwnProperty("streams")) {
                    if (!Array.isArray(message.streams))
                        return "streams: array expected";
                    for (var i = 0; i < message.streams.length; ++i) {
                        var error = $root.logproto.StreamAdapter.verify(message.streams[i]);
                        if (error)
                            return "streams." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a PushRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.PushRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.PushRequest} PushRequest
             */
            PushRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.PushRequest)
                    return object;
                var message = new $root.logproto.PushRequest();
                if (object.streams) {
                    if (!Array.isArray(object.streams))
                        throw TypeError(".logproto.PushRequest.streams: array expected");
                    message.streams = [];
                    for (var i = 0; i < object.streams.length; ++i) {
                        if (typeof object.streams[i] !== "object")
                            throw TypeError(".logproto.PushRequest.streams: object expected");
                        message.streams[i] = $root.logproto.StreamAdapter.fromObject(object.streams[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a PushRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.PushRequest
             * @static
             * @param {logproto.PushRequest} message PushRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PushRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.streams = [];
                if (message.streams && message.streams.length) {
                    object.streams = [];
                    for (var j = 0; j < message.streams.length; ++j)
                        object.streams[j] = $root.logproto.StreamAdapter.toObject(message.streams[j], options);
                }
                return object;
            };
            /**
             * Converts this PushRequest to JSON.
             * @function toJSON
             * @memberof logproto.PushRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PushRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return PushRequest;
        })();
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
            function PushResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new PushResponse instance using the specified properties.
             * @function create
             * @memberof logproto.PushResponse
             * @static
             * @param {logproto.IPushResponse=} [properties] Properties to set
             * @returns {logproto.PushResponse} PushResponse instance
             */
            PushResponse.create = function create(properties) {
                return new PushResponse(properties);
            };
            /**
             * Encodes the specified PushResponse message. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.PushResponse
             * @static
             * @param {logproto.IPushResponse} message PushResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
            /**
             * Encodes the specified PushResponse message, length delimited. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.PushResponse
             * @static
             * @param {logproto.IPushResponse} message PushResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PushResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            PushResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.PushResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            PushResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PushResponse message.
             * @function verify
             * @memberof logproto.PushResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PushResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
            /**
             * Creates a PushResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.PushResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.PushResponse} PushResponse
             */
            PushResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.PushResponse)
                    return object;
                return new $root.logproto.PushResponse();
            };
            /**
             * Creates a plain object from a PushResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.PushResponse
             * @static
             * @param {logproto.PushResponse} message PushResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PushResponse.toObject = function toObject() {
                return {};
            };
            /**
             * Converts this PushResponse to JSON.
             * @function toJSON
             * @memberof logproto.PushResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PushResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return PushResponse;
        })();
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
             * @property {Array.<string>|null} [shards] QueryRequest shards
             */
            /**
             * Constructs a new QueryRequest.
             * @memberof logproto
             * @classdesc Represents a QueryRequest.
             * @implements IQueryRequest
             * @constructor
             * @param {logproto.IQueryRequest=} [properties] Properties to set
             */
            function QueryRequest(properties) {
                this.shards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * QueryRequest selector.
             * @member {string} selector
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.selector = "";
            /**
             * QueryRequest limit.
             * @member {number} limit
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.limit = 0;
            /**
             * QueryRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.start = null;
            /**
             * QueryRequest end.
             * @member {google.protobuf.ITimestamp|null|undefined} end
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.end = null;
            /**
             * QueryRequest direction.
             * @member {logproto.Direction} direction
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.direction = 0;
            /**
             * QueryRequest shards.
             * @member {Array.<string>} shards
             * @memberof logproto.QueryRequest
             * @instance
             */
            QueryRequest.prototype.shards = $util.emptyArray;
            /**
             * Creates a new QueryRequest instance using the specified properties.
             * @function create
             * @memberof logproto.QueryRequest
             * @static
             * @param {logproto.IQueryRequest=} [properties] Properties to set
             * @returns {logproto.QueryRequest} QueryRequest instance
             */
            QueryRequest.create = function create(properties) {
                return new QueryRequest(properties);
            };
            /**
             * Encodes the specified QueryRequest message. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.QueryRequest
             * @static
             * @param {logproto.IQueryRequest} message QueryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.selector);
                if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.limit);
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.direction);
                if (message.shards != null && message.shards.length)
                    for (var i = 0; i < message.shards.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.shards[i]);
                return writer;
            };
            /**
             * Encodes the specified QueryRequest message, length delimited. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.QueryRequest
             * @static
             * @param {logproto.IQueryRequest} message QueryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            QueryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.QueryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.limit = reader.uint32();
                            break;
                        case 3:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.direction = reader.int32();
                            break;
                        case 7:
                            if (!(message.shards && message.shards.length))
                                message.shards = [];
                            message.shards.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            QueryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a QueryRequest message.
             * @function verify
             * @memberof logproto.QueryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.selector != null && message.hasOwnProperty("selector"))
                    if (!$util.isString(message.selector))
                        return "selector: string expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                if (message.direction != null && message.hasOwnProperty("direction"))
                    switch (message.direction) {
                        default:
                            return "direction: enum value expected";
                        case 0:
                        case 1:
                            break;
                    }
                if (message.shards != null && message.hasOwnProperty("shards")) {
                    if (!Array.isArray(message.shards))
                        return "shards: array expected";
                    for (var i = 0; i < message.shards.length; ++i)
                        if (!$util.isString(message.shards[i]))
                            return "shards: string[] expected";
                }
                return null;
            };
            /**
             * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.QueryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.QueryRequest} QueryRequest
             */
            QueryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.QueryRequest)
                    return object;
                var message = new $root.logproto.QueryRequest();
                if (object.selector != null)
                    message.selector = String(object.selector);
                if (object.limit != null)
                    message.limit = object.limit >>> 0;
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.QueryRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".logproto.QueryRequest.end: object expected");
                    message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                }
                switch (object.direction) {
                    case "FORWARD":
                    case 0:
                        message.direction = 0;
                        break;
                    case "BACKWARD":
                    case 1:
                        message.direction = 1;
                        break;
                }
                if (object.shards) {
                    if (!Array.isArray(object.shards))
                        throw TypeError(".logproto.QueryRequest.shards: array expected");
                    message.shards = [];
                    for (var i = 0; i < object.shards.length; ++i)
                        message.shards[i] = String(object.shards[i]);
                }
                return message;
            };
            /**
             * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.QueryRequest
             * @static
             * @param {logproto.QueryRequest} message QueryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.shards = [];
                if (options.defaults) {
                    object.selector = "";
                    object.limit = 0;
                    object.start = null;
                    object.end = null;
                    object.direction = options.enums === String ? "FORWARD" : 0;
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    object.selector = message.selector;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                if (message.direction != null && message.hasOwnProperty("direction"))
                    object.direction = options.enums === String ? $root.logproto.Direction[message.direction] : message.direction;
                if (message.shards && message.shards.length) {
                    object.shards = [];
                    for (var j = 0; j < message.shards.length; ++j)
                        object.shards[j] = message.shards[j];
                }
                return object;
            };
            /**
             * Converts this QueryRequest to JSON.
             * @function toJSON
             * @memberof logproto.QueryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return QueryRequest;
        })();
        logproto.SampleQueryRequest = (function () {
            /**
             * Properties of a SampleQueryRequest.
             * @memberof logproto
             * @interface ISampleQueryRequest
             * @property {string|null} [selector] SampleQueryRequest selector
             * @property {google.protobuf.ITimestamp|null} [start] SampleQueryRequest start
             * @property {google.protobuf.ITimestamp|null} [end] SampleQueryRequest end
             * @property {Array.<string>|null} [shards] SampleQueryRequest shards
             */
            /**
             * Constructs a new SampleQueryRequest.
             * @memberof logproto
             * @classdesc Represents a SampleQueryRequest.
             * @implements ISampleQueryRequest
             * @constructor
             * @param {logproto.ISampleQueryRequest=} [properties] Properties to set
             */
            function SampleQueryRequest(properties) {
                this.shards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SampleQueryRequest selector.
             * @member {string} selector
             * @memberof logproto.SampleQueryRequest
             * @instance
             */
            SampleQueryRequest.prototype.selector = "";
            /**
             * SampleQueryRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.SampleQueryRequest
             * @instance
             */
            SampleQueryRequest.prototype.start = null;
            /**
             * SampleQueryRequest end.
             * @member {google.protobuf.ITimestamp|null|undefined} end
             * @memberof logproto.SampleQueryRequest
             * @instance
             */
            SampleQueryRequest.prototype.end = null;
            /**
             * SampleQueryRequest shards.
             * @member {Array.<string>} shards
             * @memberof logproto.SampleQueryRequest
             * @instance
             */
            SampleQueryRequest.prototype.shards = $util.emptyArray;
            /**
             * Creates a new SampleQueryRequest instance using the specified properties.
             * @function create
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {logproto.ISampleQueryRequest=} [properties] Properties to set
             * @returns {logproto.SampleQueryRequest} SampleQueryRequest instance
             */
            SampleQueryRequest.create = function create(properties) {
                return new SampleQueryRequest(properties);
            };
            /**
             * Encodes the specified SampleQueryRequest message. Does not implicitly {@link logproto.SampleQueryRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {logproto.ISampleQueryRequest} message SampleQueryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleQueryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.selector);
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.shards != null && message.shards.length)
                    for (var i = 0; i < message.shards.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.shards[i]);
                return writer;
            };
            /**
             * Encodes the specified SampleQueryRequest message, length delimited. Does not implicitly {@link logproto.SampleQueryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {logproto.ISampleQueryRequest} message SampleQueryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleQueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a SampleQueryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.SampleQueryRequest} SampleQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleQueryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.SampleQueryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.shards && message.shards.length))
                                message.shards = [];
                            message.shards.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a SampleQueryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.SampleQueryRequest} SampleQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleQueryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SampleQueryRequest message.
             * @function verify
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SampleQueryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.selector != null && message.hasOwnProperty("selector"))
                    if (!$util.isString(message.selector))
                        return "selector: string expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                if (message.shards != null && message.hasOwnProperty("shards")) {
                    if (!Array.isArray(message.shards))
                        return "shards: array expected";
                    for (var i = 0; i < message.shards.length; ++i)
                        if (!$util.isString(message.shards[i]))
                            return "shards: string[] expected";
                }
                return null;
            };
            /**
             * Creates a SampleQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.SampleQueryRequest} SampleQueryRequest
             */
            SampleQueryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.SampleQueryRequest)
                    return object;
                var message = new $root.logproto.SampleQueryRequest();
                if (object.selector != null)
                    message.selector = String(object.selector);
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.SampleQueryRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".logproto.SampleQueryRequest.end: object expected");
                    message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                }
                if (object.shards) {
                    if (!Array.isArray(object.shards))
                        throw TypeError(".logproto.SampleQueryRequest.shards: array expected");
                    message.shards = [];
                    for (var i = 0; i < object.shards.length; ++i)
                        message.shards[i] = String(object.shards[i]);
                }
                return message;
            };
            /**
             * Creates a plain object from a SampleQueryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.SampleQueryRequest
             * @static
             * @param {logproto.SampleQueryRequest} message SampleQueryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SampleQueryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.shards = [];
                if (options.defaults) {
                    object.selector = "";
                    object.start = null;
                    object.end = null;
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    object.selector = message.selector;
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                if (message.shards && message.shards.length) {
                    object.shards = [];
                    for (var j = 0; j < message.shards.length; ++j)
                        object.shards[j] = message.shards[j];
                }
                return object;
            };
            /**
             * Converts this SampleQueryRequest to JSON.
             * @function toJSON
             * @memberof logproto.SampleQueryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SampleQueryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return SampleQueryRequest;
        })();
        logproto.SampleQueryResponse = (function () {
            /**
             * Properties of a SampleQueryResponse.
             * @memberof logproto
             * @interface ISampleQueryResponse
             * @property {Array.<logproto.ISeries>|null} [series] SampleQueryResponse series
             */
            /**
             * Constructs a new SampleQueryResponse.
             * @memberof logproto
             * @classdesc Represents a SampleQueryResponse.
             * @implements ISampleQueryResponse
             * @constructor
             * @param {logproto.ISampleQueryResponse=} [properties] Properties to set
             */
            function SampleQueryResponse(properties) {
                this.series = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SampleQueryResponse series.
             * @member {Array.<logproto.ISeries>} series
             * @memberof logproto.SampleQueryResponse
             * @instance
             */
            SampleQueryResponse.prototype.series = $util.emptyArray;
            /**
             * Creates a new SampleQueryResponse instance using the specified properties.
             * @function create
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {logproto.ISampleQueryResponse=} [properties] Properties to set
             * @returns {logproto.SampleQueryResponse} SampleQueryResponse instance
             */
            SampleQueryResponse.create = function create(properties) {
                return new SampleQueryResponse(properties);
            };
            /**
             * Encodes the specified SampleQueryResponse message. Does not implicitly {@link logproto.SampleQueryResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {logproto.ISampleQueryResponse} message SampleQueryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleQueryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.series != null && message.series.length)
                    for (var i = 0; i < message.series.length; ++i)
                        $root.logproto.Series.encode(message.series[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified SampleQueryResponse message, length delimited. Does not implicitly {@link logproto.SampleQueryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {logproto.ISampleQueryResponse} message SampleQueryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SampleQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a SampleQueryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.SampleQueryResponse} SampleQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleQueryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.SampleQueryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.series && message.series.length))
                                message.series = [];
                            message.series.push($root.logproto.Series.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a SampleQueryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.SampleQueryResponse} SampleQueryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SampleQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SampleQueryResponse message.
             * @function verify
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SampleQueryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.series != null && message.hasOwnProperty("series")) {
                    if (!Array.isArray(message.series))
                        return "series: array expected";
                    for (var i = 0; i < message.series.length; ++i) {
                        var error = $root.logproto.Series.verify(message.series[i]);
                        if (error)
                            return "series." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a SampleQueryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.SampleQueryResponse} SampleQueryResponse
             */
            SampleQueryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.SampleQueryResponse)
                    return object;
                var message = new $root.logproto.SampleQueryResponse();
                if (object.series) {
                    if (!Array.isArray(object.series))
                        throw TypeError(".logproto.SampleQueryResponse.series: array expected");
                    message.series = [];
                    for (var i = 0; i < object.series.length; ++i) {
                        if (typeof object.series[i] !== "object")
                            throw TypeError(".logproto.SampleQueryResponse.series: object expected");
                        message.series[i] = $root.logproto.Series.fromObject(object.series[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a SampleQueryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.SampleQueryResponse
             * @static
             * @param {logproto.SampleQueryResponse} message SampleQueryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SampleQueryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.series = [];
                if (message.series && message.series.length) {
                    object.series = [];
                    for (var j = 0; j < message.series.length; ++j)
                        object.series[j] = $root.logproto.Series.toObject(message.series[j], options);
                }
                return object;
            };
            /**
             * Converts this SampleQueryResponse to JSON.
             * @function toJSON
             * @memberof logproto.SampleQueryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SampleQueryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return SampleQueryResponse;
        })();
        /**
         * Direction enum.
         * @name logproto.Direction
         * @enum {number}
         * @property {number} FORWARD=0 FORWARD value
         * @property {number} BACKWARD=1 BACKWARD value
         */
        logproto.Direction = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FORWARD"] = 0;
            values[valuesById[1] = "BACKWARD"] = 1;
            return values;
        })();
        logproto.QueryResponse = (function () {
            /**
             * Properties of a QueryResponse.
             * @memberof logproto
             * @interface IQueryResponse
             * @property {Array.<logproto.IStreamAdapter>|null} [streams] QueryResponse streams
             */
            /**
             * Constructs a new QueryResponse.
             * @memberof logproto
             * @classdesc Represents a QueryResponse.
             * @implements IQueryResponse
             * @constructor
             * @param {logproto.IQueryResponse=} [properties] Properties to set
             */
            function QueryResponse(properties) {
                this.streams = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * QueryResponse streams.
             * @member {Array.<logproto.IStreamAdapter>} streams
             * @memberof logproto.QueryResponse
             * @instance
             */
            QueryResponse.prototype.streams = $util.emptyArray;
            /**
             * Creates a new QueryResponse instance using the specified properties.
             * @function create
             * @memberof logproto.QueryResponse
             * @static
             * @param {logproto.IQueryResponse=} [properties] Properties to set
             * @returns {logproto.QueryResponse} QueryResponse instance
             */
            QueryResponse.create = function create(properties) {
                return new QueryResponse(properties);
            };
            /**
             * Encodes the specified QueryResponse message. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.QueryResponse
             * @static
             * @param {logproto.IQueryResponse} message QueryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.streams != null && message.streams.length)
                    for (var i = 0; i < message.streams.length; ++i)
                        $root.logproto.StreamAdapter.encode(message.streams[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.QueryResponse
             * @static
             * @param {logproto.IQueryResponse} message QueryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            QueryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.QueryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.streams && message.streams.length))
                                message.streams = [];
                            message.streams.push($root.logproto.StreamAdapter.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            QueryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a QueryResponse message.
             * @function verify
             * @memberof logproto.QueryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QueryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.streams != null && message.hasOwnProperty("streams")) {
                    if (!Array.isArray(message.streams))
                        return "streams: array expected";
                    for (var i = 0; i < message.streams.length; ++i) {
                        var error = $root.logproto.StreamAdapter.verify(message.streams[i]);
                        if (error)
                            return "streams." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.QueryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.QueryResponse} QueryResponse
             */
            QueryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.QueryResponse)
                    return object;
                var message = new $root.logproto.QueryResponse();
                if (object.streams) {
                    if (!Array.isArray(object.streams))
                        throw TypeError(".logproto.QueryResponse.streams: array expected");
                    message.streams = [];
                    for (var i = 0; i < object.streams.length; ++i) {
                        if (typeof object.streams[i] !== "object")
                            throw TypeError(".logproto.QueryResponse.streams: object expected");
                        message.streams[i] = $root.logproto.StreamAdapter.fromObject(object.streams[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.QueryResponse
             * @static
             * @param {logproto.QueryResponse} message QueryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QueryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.streams = [];
                if (message.streams && message.streams.length) {
                    object.streams = [];
                    for (var j = 0; j < message.streams.length; ++j)
                        object.streams[j] = $root.logproto.StreamAdapter.toObject(message.streams[j], options);
                }
                return object;
            };
            /**
             * Converts this QueryResponse to JSON.
             * @function toJSON
             * @memberof logproto.QueryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QueryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return QueryResponse;
        })();
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
            function LabelRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * LabelRequest name.
             * @member {string} name
             * @memberof logproto.LabelRequest
             * @instance
             */
            LabelRequest.prototype.name = "";
            /**
             * LabelRequest values.
             * @member {boolean} values
             * @memberof logproto.LabelRequest
             * @instance
             */
            LabelRequest.prototype.values = false;
            /**
             * LabelRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.LabelRequest
             * @instance
             */
            LabelRequest.prototype.start = null;
            /**
             * LabelRequest end.
             * @member {google.protobuf.ITimestamp|null|undefined} end
             * @memberof logproto.LabelRequest
             * @instance
             */
            LabelRequest.prototype.end = null;
            /**
             * Creates a new LabelRequest instance using the specified properties.
             * @function create
             * @memberof logproto.LabelRequest
             * @static
             * @param {logproto.ILabelRequest=} [properties] Properties to set
             * @returns {logproto.LabelRequest} LabelRequest instance
             */
            LabelRequest.create = function create(properties) {
                return new LabelRequest(properties);
            };
            /**
             * Encodes the specified LabelRequest message. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.LabelRequest
             * @static
             * @param {logproto.ILabelRequest} message LabelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
                if (message.values != null && Object.hasOwnProperty.call(message, "values"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.values);
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified LabelRequest message, length delimited. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.LabelRequest
             * @static
             * @param {logproto.ILabelRequest} message LabelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            LabelRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.LabelRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.values = reader.bool();
                            break;
                        case 3:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            LabelRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a LabelRequest message.
             * @function verify
             * @memberof logproto.LabelRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LabelRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.values != null && message.hasOwnProperty("values"))
                    if (typeof message.values !== "boolean")
                        return "values: boolean expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                return null;
            };
            /**
             * Creates a LabelRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.LabelRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.LabelRequest} LabelRequest
             */
            LabelRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.LabelRequest)
                    return object;
                var message = new $root.logproto.LabelRequest();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.values != null)
                    message.values = Boolean(object.values);
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.LabelRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".logproto.LabelRequest.end: object expected");
                    message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                }
                return message;
            };
            /**
             * Creates a plain object from a LabelRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.LabelRequest
             * @static
             * @param {logproto.LabelRequest} message LabelRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LabelRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.values = false;
                    object.start = null;
                    object.end = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.values != null && message.hasOwnProperty("values"))
                    object.values = message.values;
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                return object;
            };
            /**
             * Converts this LabelRequest to JSON.
             * @function toJSON
             * @memberof logproto.LabelRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LabelRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return LabelRequest;
        })();
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
            function LabelResponse(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * LabelResponse values.
             * @member {Array.<string>} values
             * @memberof logproto.LabelResponse
             * @instance
             */
            LabelResponse.prototype.values = $util.emptyArray;
            /**
             * Creates a new LabelResponse instance using the specified properties.
             * @function create
             * @memberof logproto.LabelResponse
             * @static
             * @param {logproto.ILabelResponse=} [properties] Properties to set
             * @returns {logproto.LabelResponse} LabelResponse instance
             */
            LabelResponse.create = function create(properties) {
                return new LabelResponse(properties);
            };
            /**
             * Encodes the specified LabelResponse message. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.LabelResponse
             * @static
             * @param {logproto.ILabelResponse} message LabelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.values[i]);
                return writer;
            };
            /**
             * Encodes the specified LabelResponse message, length delimited. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.LabelResponse
             * @static
             * @param {logproto.ILabelResponse} message LabelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            LabelResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.LabelResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            LabelResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a LabelResponse message.
             * @function verify
             * @memberof logproto.LabelResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LabelResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i)
                        if (!$util.isString(message.values[i]))
                            return "values: string[] expected";
                }
                return null;
            };
            /**
             * Creates a LabelResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.LabelResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.LabelResponse} LabelResponse
             */
            LabelResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.LabelResponse)
                    return object;
                var message = new $root.logproto.LabelResponse();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".logproto.LabelResponse.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i)
                        message.values[i] = String(object.values[i]);
                }
                return message;
            };
            /**
             * Creates a plain object from a LabelResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.LabelResponse
             * @static
             * @param {logproto.LabelResponse} message LabelResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LabelResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = message.values[j];
                }
                return object;
            };
            /**
             * Converts this LabelResponse to JSON.
             * @function toJSON
             * @memberof logproto.LabelResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LabelResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return LabelResponse;
        })();
        logproto.StreamAdapter = (function () {
            /**
             * Properties of a StreamAdapter.
             * @memberof logproto
             * @interface IStreamAdapter
             * @property {string|null} [labels] StreamAdapter labels
             * @property {Array.<logproto.IEntryAdapter>|null} [entries] StreamAdapter entries
             */
            /**
             * Constructs a new StreamAdapter.
             * @memberof logproto
             * @classdesc Represents a StreamAdapter.
             * @implements IStreamAdapter
             * @constructor
             * @param {logproto.IStreamAdapter=} [properties] Properties to set
             */
            function StreamAdapter(properties) {
                this.entries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * StreamAdapter labels.
             * @member {string} labels
             * @memberof logproto.StreamAdapter
             * @instance
             */
            StreamAdapter.prototype.labels = "";
            /**
             * StreamAdapter entries.
             * @member {Array.<logproto.IEntryAdapter>} entries
             * @memberof logproto.StreamAdapter
             * @instance
             */
            StreamAdapter.prototype.entries = $util.emptyArray;
            /**
             * Creates a new StreamAdapter instance using the specified properties.
             * @function create
             * @memberof logproto.StreamAdapter
             * @static
             * @param {logproto.IStreamAdapter=} [properties] Properties to set
             * @returns {logproto.StreamAdapter} StreamAdapter instance
             */
            StreamAdapter.create = function create(properties) {
                return new StreamAdapter(properties);
            };
            /**
             * Encodes the specified StreamAdapter message. Does not implicitly {@link logproto.StreamAdapter.verify|verify} messages.
             * @function encode
             * @memberof logproto.StreamAdapter
             * @static
             * @param {logproto.IStreamAdapter} message StreamAdapter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamAdapter.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.labels);
                if (message.entries != null && message.entries.length)
                    for (var i = 0; i < message.entries.length; ++i)
                        $root.logproto.EntryAdapter.encode(message.entries[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified StreamAdapter message, length delimited. Does not implicitly {@link logproto.StreamAdapter.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.StreamAdapter
             * @static
             * @param {logproto.IStreamAdapter} message StreamAdapter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamAdapter.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a StreamAdapter message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.StreamAdapter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.StreamAdapter} StreamAdapter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamAdapter.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.StreamAdapter();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.labels = reader.string();
                            break;
                        case 2:
                            if (!(message.entries && message.entries.length))
                                message.entries = [];
                            message.entries.push($root.logproto.EntryAdapter.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a StreamAdapter message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.StreamAdapter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.StreamAdapter} StreamAdapter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamAdapter.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a StreamAdapter message.
             * @function verify
             * @memberof logproto.StreamAdapter
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamAdapter.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.labels != null && message.hasOwnProperty("labels"))
                    if (!$util.isString(message.labels))
                        return "labels: string expected";
                if (message.entries != null && message.hasOwnProperty("entries")) {
                    if (!Array.isArray(message.entries))
                        return "entries: array expected";
                    for (var i = 0; i < message.entries.length; ++i) {
                        var error = $root.logproto.EntryAdapter.verify(message.entries[i]);
                        if (error)
                            return "entries." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a StreamAdapter message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.StreamAdapter
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.StreamAdapter} StreamAdapter
             */
            StreamAdapter.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.StreamAdapter)
                    return object;
                var message = new $root.logproto.StreamAdapter();
                if (object.labels != null)
                    message.labels = String(object.labels);
                if (object.entries) {
                    if (!Array.isArray(object.entries))
                        throw TypeError(".logproto.StreamAdapter.entries: array expected");
                    message.entries = [];
                    for (var i = 0; i < object.entries.length; ++i) {
                        if (typeof object.entries[i] !== "object")
                            throw TypeError(".logproto.StreamAdapter.entries: object expected");
                        message.entries[i] = $root.logproto.EntryAdapter.fromObject(object.entries[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a StreamAdapter message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.StreamAdapter
             * @static
             * @param {logproto.StreamAdapter} message StreamAdapter
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamAdapter.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.entries = [];
                if (options.defaults)
                    object.labels = "";
                if (message.labels != null && message.hasOwnProperty("labels"))
                    object.labels = message.labels;
                if (message.entries && message.entries.length) {
                    object.entries = [];
                    for (var j = 0; j < message.entries.length; ++j)
                        object.entries[j] = $root.logproto.EntryAdapter.toObject(message.entries[j], options);
                }
                return object;
            };
            /**
             * Converts this StreamAdapter to JSON.
             * @function toJSON
             * @memberof logproto.StreamAdapter
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamAdapter.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return StreamAdapter;
        })();
        logproto.EntryAdapter = (function () {
            /**
             * Properties of an EntryAdapter.
             * @memberof logproto
             * @interface IEntryAdapter
             * @property {google.protobuf.ITimestamp|null} [timestamp] EntryAdapter timestamp
             * @property {string|null} [line] EntryAdapter line
             */
            /**
             * Constructs a new EntryAdapter.
             * @memberof logproto
             * @classdesc Represents an EntryAdapter.
             * @implements IEntryAdapter
             * @constructor
             * @param {logproto.IEntryAdapter=} [properties] Properties to set
             */
            function EntryAdapter(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * EntryAdapter timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof logproto.EntryAdapter
             * @instance
             */
            EntryAdapter.prototype.timestamp = null;
            /**
             * EntryAdapter line.
             * @member {string} line
             * @memberof logproto.EntryAdapter
             * @instance
             */
            EntryAdapter.prototype.line = "";
            /**
             * Creates a new EntryAdapter instance using the specified properties.
             * @function create
             * @memberof logproto.EntryAdapter
             * @static
             * @param {logproto.IEntryAdapter=} [properties] Properties to set
             * @returns {logproto.EntryAdapter} EntryAdapter instance
             */
            EntryAdapter.create = function create(properties) {
                return new EntryAdapter(properties);
            };
            /**
             * Encodes the specified EntryAdapter message. Does not implicitly {@link logproto.EntryAdapter.verify|verify} messages.
             * @function encode
             * @memberof logproto.EntryAdapter
             * @static
             * @param {logproto.IEntryAdapter} message EntryAdapter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryAdapter.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.line);
                return writer;
            };
            /**
             * Encodes the specified EntryAdapter message, length delimited. Does not implicitly {@link logproto.EntryAdapter.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.EntryAdapter
             * @static
             * @param {logproto.IEntryAdapter} message EntryAdapter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EntryAdapter.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an EntryAdapter message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.EntryAdapter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.EntryAdapter} EntryAdapter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryAdapter.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.EntryAdapter();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.line = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an EntryAdapter message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.EntryAdapter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.EntryAdapter} EntryAdapter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntryAdapter.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an EntryAdapter message.
             * @function verify
             * @memberof logproto.EntryAdapter
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntryAdapter.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isString(message.line))
                        return "line: string expected";
                return null;
            };
            /**
             * Creates an EntryAdapter message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.EntryAdapter
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.EntryAdapter} EntryAdapter
             */
            EntryAdapter.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.EntryAdapter)
                    return object;
                var message = new $root.logproto.EntryAdapter();
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".logproto.EntryAdapter.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.line != null)
                    message.line = String(object.line);
                return message;
            };
            /**
             * Creates a plain object from an EntryAdapter message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.EntryAdapter
             * @static
             * @param {logproto.EntryAdapter} message EntryAdapter
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntryAdapter.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp = null;
                    object.line = "";
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                return object;
            };
            /**
             * Converts this EntryAdapter to JSON.
             * @function toJSON
             * @memberof logproto.EntryAdapter
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntryAdapter.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return EntryAdapter;
        })();
        logproto.Sample = (function () {
            /**
             * Properties of a Sample.
             * @memberof logproto
             * @interface ISample
             * @property {number|Long|null} [timestamp] Sample timestamp
             * @property {number|null} [value] Sample value
             * @property {number|Long|null} [hash] Sample hash
             */
            /**
             * Constructs a new Sample.
             * @memberof logproto
             * @classdesc Represents a Sample.
             * @implements ISample
             * @constructor
             * @param {logproto.ISample=} [properties] Properties to set
             */
            function Sample(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Sample timestamp.
             * @member {number|Long} timestamp
             * @memberof logproto.Sample
             * @instance
             */
            Sample.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            /**
             * Sample value.
             * @member {number} value
             * @memberof logproto.Sample
             * @instance
             */
            Sample.prototype.value = 0;
            /**
             * Sample hash.
             * @member {number|Long} hash
             * @memberof logproto.Sample
             * @instance
             */
            Sample.prototype.hash = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * Creates a new Sample instance using the specified properties.
             * @function create
             * @memberof logproto.Sample
             * @static
             * @param {logproto.ISample=} [properties] Properties to set
             * @returns {logproto.Sample} Sample instance
             */
            Sample.create = function create(properties) {
                return new Sample(properties);
            };
            /**
             * Encodes the specified Sample message. Does not implicitly {@link logproto.Sample.verify|verify} messages.
             * @function encode
             * @memberof logproto.Sample
             * @static
             * @param {logproto.ISample} message Sample message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sample.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.timestamp);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.value);
                if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.hash);
                return writer;
            };
            /**
             * Encodes the specified Sample message, length delimited. Does not implicitly {@link logproto.Sample.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.Sample
             * @static
             * @param {logproto.ISample} message Sample message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sample.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a Sample message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.Sample
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.Sample} Sample
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sample.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.Sample();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.timestamp = reader.int64();
                            break;
                        case 2:
                            message.value = reader.double();
                            break;
                        case 3:
                            message.hash = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a Sample message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.Sample
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.Sample} Sample
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sample.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a Sample message.
             * @function verify
             * @memberof logproto.Sample
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sample.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!$util.isInteger(message.hash) && !(message.hash && $util.isInteger(message.hash.low) && $util.isInteger(message.hash.high)))
                        return "hash: integer|Long expected";
                return null;
            };
            /**
             * Creates a Sample message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.Sample
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.Sample} Sample
             */
            Sample.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.Sample)
                    return object;
                var message = new $root.logproto.Sample();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                if (object.value != null)
                    message.value = Number(object.value);
                if (object.hash != null)
                    if ($util.Long)
                        (message.hash = $util.Long.fromValue(object.hash)).unsigned = true;
                    else if (typeof object.hash === "string")
                        message.hash = parseInt(object.hash, 10);
                    else if (typeof object.hash === "number")
                        message.hash = object.hash;
                    else if (typeof object.hash === "object")
                        message.hash = new $util.LongBits(object.hash.low >>> 0, object.hash.high >>> 0).toNumber(true);
                return message;
            };
            /**
             * Creates a plain object from a Sample message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.Sample
             * @static
             * @param {logproto.Sample} message Sample
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sample.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.value = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.hash = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.hash = options.longs === String ? "0" : 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (typeof message.hash === "number")
                        object.hash = options.longs === String ? String(message.hash) : message.hash;
                    else
                        object.hash = options.longs === String ? $util.Long.prototype.toString.call(message.hash) : options.longs === Number ? new $util.LongBits(message.hash.low >>> 0, message.hash.high >>> 0).toNumber(true) : message.hash;
                return object;
            };
            /**
             * Converts this Sample to JSON.
             * @function toJSON
             * @memberof logproto.Sample
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sample.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Sample;
        })();
        logproto.Series = (function () {
            /**
             * Properties of a Series.
             * @memberof logproto
             * @interface ISeries
             * @property {string|null} [labels] Series labels
             * @property {Array.<logproto.ISample>|null} [samples] Series samples
             */
            /**
             * Constructs a new Series.
             * @memberof logproto
             * @classdesc Represents a Series.
             * @implements ISeries
             * @constructor
             * @param {logproto.ISeries=} [properties] Properties to set
             */
            function Series(properties) {
                this.samples = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Series labels.
             * @member {string} labels
             * @memberof logproto.Series
             * @instance
             */
            Series.prototype.labels = "";
            /**
             * Series samples.
             * @member {Array.<logproto.ISample>} samples
             * @memberof logproto.Series
             * @instance
             */
            Series.prototype.samples = $util.emptyArray;
            /**
             * Creates a new Series instance using the specified properties.
             * @function create
             * @memberof logproto.Series
             * @static
             * @param {logproto.ISeries=} [properties] Properties to set
             * @returns {logproto.Series} Series instance
             */
            Series.create = function create(properties) {
                return new Series(properties);
            };
            /**
             * Encodes the specified Series message. Does not implicitly {@link logproto.Series.verify|verify} messages.
             * @function encode
             * @memberof logproto.Series
             * @static
             * @param {logproto.ISeries} message Series message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Series.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.labels);
                if (message.samples != null && message.samples.length)
                    for (var i = 0; i < message.samples.length; ++i)
                        $root.logproto.Sample.encode(message.samples[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified Series message, length delimited. Does not implicitly {@link logproto.Series.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.Series
             * @static
             * @param {logproto.ISeries} message Series message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Series.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a Series message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.Series
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.Series} Series
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Series.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.Series();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.labels = reader.string();
                            break;
                        case 2:
                            if (!(message.samples && message.samples.length))
                                message.samples = [];
                            message.samples.push($root.logproto.Sample.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a Series message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.Series
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.Series} Series
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Series.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a Series message.
             * @function verify
             * @memberof logproto.Series
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Series.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.labels != null && message.hasOwnProperty("labels"))
                    if (!$util.isString(message.labels))
                        return "labels: string expected";
                if (message.samples != null && message.hasOwnProperty("samples")) {
                    if (!Array.isArray(message.samples))
                        return "samples: array expected";
                    for (var i = 0; i < message.samples.length; ++i) {
                        var error = $root.logproto.Sample.verify(message.samples[i]);
                        if (error)
                            return "samples." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a Series message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.Series
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.Series} Series
             */
            Series.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.Series)
                    return object;
                var message = new $root.logproto.Series();
                if (object.labels != null)
                    message.labels = String(object.labels);
                if (object.samples) {
                    if (!Array.isArray(object.samples))
                        throw TypeError(".logproto.Series.samples: array expected");
                    message.samples = [];
                    for (var i = 0; i < object.samples.length; ++i) {
                        if (typeof object.samples[i] !== "object")
                            throw TypeError(".logproto.Series.samples: object expected");
                        message.samples[i] = $root.logproto.Sample.fromObject(object.samples[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a Series message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.Series
             * @static
             * @param {logproto.Series} message Series
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Series.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.samples = [];
                if (options.defaults)
                    object.labels = "";
                if (message.labels != null && message.hasOwnProperty("labels"))
                    object.labels = message.labels;
                if (message.samples && message.samples.length) {
                    object.samples = [];
                    for (var j = 0; j < message.samples.length; ++j)
                        object.samples[j] = $root.logproto.Sample.toObject(message.samples[j], options);
                }
                return object;
            };
            /**
             * Converts this Series to JSON.
             * @function toJSON
             * @memberof logproto.Series
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Series.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Series;
        })();
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
            function TailRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * TailRequest query.
             * @member {string} query
             * @memberof logproto.TailRequest
             * @instance
             */
            TailRequest.prototype.query = "";
            /**
             * TailRequest delayFor.
             * @member {number} delayFor
             * @memberof logproto.TailRequest
             * @instance
             */
            TailRequest.prototype.delayFor = 0;
            /**
             * TailRequest limit.
             * @member {number} limit
             * @memberof logproto.TailRequest
             * @instance
             */
            TailRequest.prototype.limit = 0;
            /**
             * TailRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.TailRequest
             * @instance
             */
            TailRequest.prototype.start = null;
            /**
             * Creates a new TailRequest instance using the specified properties.
             * @function create
             * @memberof logproto.TailRequest
             * @static
             * @param {logproto.ITailRequest=} [properties] Properties to set
             * @returns {logproto.TailRequest} TailRequest instance
             */
            TailRequest.create = function create(properties) {
                return new TailRequest(properties);
            };
            /**
             * Encodes the specified TailRequest message. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.TailRequest
             * @static
             * @param {logproto.ITailRequest} message TailRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.query);
                if (message.delayFor != null && Object.hasOwnProperty.call(message, "delayFor"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.delayFor);
                if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.limit);
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 5, wireType 2 =*/ 42).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified TailRequest message, length delimited. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TailRequest
             * @static
             * @param {logproto.ITailRequest} message TailRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TailRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TailRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.query = reader.string();
                            break;
                        case 3:
                            message.delayFor = reader.uint32();
                            break;
                        case 4:
                            message.limit = reader.uint32();
                            break;
                        case 5:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TailRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TailRequest message.
             * @function verify
             * @memberof logproto.TailRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TailRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.query != null && message.hasOwnProperty("query"))
                    if (!$util.isString(message.query))
                        return "query: string expected";
                if (message.delayFor != null && message.hasOwnProperty("delayFor"))
                    if (!$util.isInteger(message.delayFor))
                        return "delayFor: integer expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                return null;
            };
            /**
             * Creates a TailRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TailRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TailRequest} TailRequest
             */
            TailRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TailRequest)
                    return object;
                var message = new $root.logproto.TailRequest();
                if (object.query != null)
                    message.query = String(object.query);
                if (object.delayFor != null)
                    message.delayFor = object.delayFor >>> 0;
                if (object.limit != null)
                    message.limit = object.limit >>> 0;
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.TailRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                return message;
            };
            /**
             * Creates a plain object from a TailRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TailRequest
             * @static
             * @param {logproto.TailRequest} message TailRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TailRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.query = "";
                    object.delayFor = 0;
                    object.limit = 0;
                    object.start = null;
                }
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = message.query;
                if (message.delayFor != null && message.hasOwnProperty("delayFor"))
                    object.delayFor = message.delayFor;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                return object;
            };
            /**
             * Converts this TailRequest to JSON.
             * @function toJSON
             * @memberof logproto.TailRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TailRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TailRequest;
        })();
        logproto.TailResponse = (function () {
            /**
             * Properties of a TailResponse.
             * @memberof logproto
             * @interface ITailResponse
             * @property {logproto.IStreamAdapter|null} [stream] TailResponse stream
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
            function TailResponse(properties) {
                this.droppedStreams = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * TailResponse stream.
             * @member {logproto.IStreamAdapter|null|undefined} stream
             * @memberof logproto.TailResponse
             * @instance
             */
            TailResponse.prototype.stream = null;
            /**
             * TailResponse droppedStreams.
             * @member {Array.<logproto.IDroppedStream>} droppedStreams
             * @memberof logproto.TailResponse
             * @instance
             */
            TailResponse.prototype.droppedStreams = $util.emptyArray;
            /**
             * Creates a new TailResponse instance using the specified properties.
             * @function create
             * @memberof logproto.TailResponse
             * @static
             * @param {logproto.ITailResponse=} [properties] Properties to set
             * @returns {logproto.TailResponse} TailResponse instance
             */
            TailResponse.create = function create(properties) {
                return new TailResponse(properties);
            };
            /**
             * Encodes the specified TailResponse message. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.TailResponse
             * @static
             * @param {logproto.ITailResponse} message TailResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stream != null && Object.hasOwnProperty.call(message, "stream"))
                    $root.logproto.StreamAdapter.encode(message.stream, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.droppedStreams != null && message.droppedStreams.length)
                    for (var i = 0; i < message.droppedStreams.length; ++i)
                        $root.logproto.DroppedStream.encode(message.droppedStreams[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified TailResponse message, length delimited. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TailResponse
             * @static
             * @param {logproto.ITailResponse} message TailResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TailResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TailResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.stream = $root.logproto.StreamAdapter.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.droppedStreams && message.droppedStreams.length))
                                message.droppedStreams = [];
                            message.droppedStreams.push($root.logproto.DroppedStream.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TailResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TailResponse message.
             * @function verify
             * @memberof logproto.TailResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TailResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stream != null && message.hasOwnProperty("stream")) {
                    var error = $root.logproto.StreamAdapter.verify(message.stream);
                    if (error)
                        return "stream." + error;
                }
                if (message.droppedStreams != null && message.hasOwnProperty("droppedStreams")) {
                    if (!Array.isArray(message.droppedStreams))
                        return "droppedStreams: array expected";
                    for (var i = 0; i < message.droppedStreams.length; ++i) {
                        var error = $root.logproto.DroppedStream.verify(message.droppedStreams[i]);
                        if (error)
                            return "droppedStreams." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a TailResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TailResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TailResponse} TailResponse
             */
            TailResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TailResponse)
                    return object;
                var message = new $root.logproto.TailResponse();
                if (object.stream != null) {
                    if (typeof object.stream !== "object")
                        throw TypeError(".logproto.TailResponse.stream: object expected");
                    message.stream = $root.logproto.StreamAdapter.fromObject(object.stream);
                }
                if (object.droppedStreams) {
                    if (!Array.isArray(object.droppedStreams))
                        throw TypeError(".logproto.TailResponse.droppedStreams: array expected");
                    message.droppedStreams = [];
                    for (var i = 0; i < object.droppedStreams.length; ++i) {
                        if (typeof object.droppedStreams[i] !== "object")
                            throw TypeError(".logproto.TailResponse.droppedStreams: object expected");
                        message.droppedStreams[i] = $root.logproto.DroppedStream.fromObject(object.droppedStreams[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a TailResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TailResponse
             * @static
             * @param {logproto.TailResponse} message TailResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TailResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.droppedStreams = [];
                if (options.defaults)
                    object.stream = null;
                if (message.stream != null && message.hasOwnProperty("stream"))
                    object.stream = $root.logproto.StreamAdapter.toObject(message.stream, options);
                if (message.droppedStreams && message.droppedStreams.length) {
                    object.droppedStreams = [];
                    for (var j = 0; j < message.droppedStreams.length; ++j)
                        object.droppedStreams[j] = $root.logproto.DroppedStream.toObject(message.droppedStreams[j], options);
                }
                return object;
            };
            /**
             * Converts this TailResponse to JSON.
             * @function toJSON
             * @memberof logproto.TailResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TailResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TailResponse;
        })();
        logproto.SeriesRequest = (function () {
            /**
             * Properties of a SeriesRequest.
             * @memberof logproto
             * @interface ISeriesRequest
             * @property {google.protobuf.ITimestamp|null} [start] SeriesRequest start
             * @property {google.protobuf.ITimestamp|null} [end] SeriesRequest end
             * @property {Array.<string>|null} [groups] SeriesRequest groups
             * @property {Array.<string>|null} [shards] SeriesRequest shards
             */
            /**
             * Constructs a new SeriesRequest.
             * @memberof logproto
             * @classdesc Represents a SeriesRequest.
             * @implements ISeriesRequest
             * @constructor
             * @param {logproto.ISeriesRequest=} [properties] Properties to set
             */
            function SeriesRequest(properties) {
                this.groups = [];
                this.shards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SeriesRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.SeriesRequest
             * @instance
             */
            SeriesRequest.prototype.start = null;
            /**
             * SeriesRequest end.
             * @member {google.protobuf.ITimestamp|null|undefined} end
             * @memberof logproto.SeriesRequest
             * @instance
             */
            SeriesRequest.prototype.end = null;
            /**
             * SeriesRequest groups.
             * @member {Array.<string>} groups
             * @memberof logproto.SeriesRequest
             * @instance
             */
            SeriesRequest.prototype.groups = $util.emptyArray;
            /**
             * SeriesRequest shards.
             * @member {Array.<string>} shards
             * @memberof logproto.SeriesRequest
             * @instance
             */
            SeriesRequest.prototype.shards = $util.emptyArray;
            /**
             * Creates a new SeriesRequest instance using the specified properties.
             * @function create
             * @memberof logproto.SeriesRequest
             * @static
             * @param {logproto.ISeriesRequest=} [properties] Properties to set
             * @returns {logproto.SeriesRequest} SeriesRequest instance
             */
            SeriesRequest.create = function create(properties) {
                return new SeriesRequest(properties);
            };
            /**
             * Encodes the specified SeriesRequest message. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.SeriesRequest
             * @static
             * @param {logproto.ISeriesRequest} message SeriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.groups != null && message.groups.length)
                    for (var i = 0; i < message.groups.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.groups[i]);
                if (message.shards != null && message.shards.length)
                    for (var i = 0; i < message.shards.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.shards[i]);
                return writer;
            };
            /**
             * Encodes the specified SeriesRequest message, length delimited. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.SeriesRequest
             * @static
             * @param {logproto.ISeriesRequest} message SeriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            SeriesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.SeriesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.groups && message.groups.length))
                                message.groups = [];
                            message.groups.push(reader.string());
                            break;
                        case 4:
                            if (!(message.shards && message.shards.length))
                                message.shards = [];
                            message.shards.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            SeriesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SeriesRequest message.
             * @function verify
             * @memberof logproto.SeriesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SeriesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                if (message.groups != null && message.hasOwnProperty("groups")) {
                    if (!Array.isArray(message.groups))
                        return "groups: array expected";
                    for (var i = 0; i < message.groups.length; ++i)
                        if (!$util.isString(message.groups[i]))
                            return "groups: string[] expected";
                }
                if (message.shards != null && message.hasOwnProperty("shards")) {
                    if (!Array.isArray(message.shards))
                        return "shards: array expected";
                    for (var i = 0; i < message.shards.length; ++i)
                        if (!$util.isString(message.shards[i]))
                            return "shards: string[] expected";
                }
                return null;
            };
            /**
             * Creates a SeriesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.SeriesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.SeriesRequest} SeriesRequest
             */
            SeriesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.SeriesRequest)
                    return object;
                var message = new $root.logproto.SeriesRequest();
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.SeriesRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".logproto.SeriesRequest.end: object expected");
                    message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                }
                if (object.groups) {
                    if (!Array.isArray(object.groups))
                        throw TypeError(".logproto.SeriesRequest.groups: array expected");
                    message.groups = [];
                    for (var i = 0; i < object.groups.length; ++i)
                        message.groups[i] = String(object.groups[i]);
                }
                if (object.shards) {
                    if (!Array.isArray(object.shards))
                        throw TypeError(".logproto.SeriesRequest.shards: array expected");
                    message.shards = [];
                    for (var i = 0; i < object.shards.length; ++i)
                        message.shards[i] = String(object.shards[i]);
                }
                return message;
            };
            /**
             * Creates a plain object from a SeriesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.SeriesRequest
             * @static
             * @param {logproto.SeriesRequest} message SeriesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SeriesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.groups = [];
                    object.shards = [];
                }
                if (options.defaults) {
                    object.start = null;
                    object.end = null;
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                if (message.groups && message.groups.length) {
                    object.groups = [];
                    for (var j = 0; j < message.groups.length; ++j)
                        object.groups[j] = message.groups[j];
                }
                if (message.shards && message.shards.length) {
                    object.shards = [];
                    for (var j = 0; j < message.shards.length; ++j)
                        object.shards[j] = message.shards[j];
                }
                return object;
            };
            /**
             * Converts this SeriesRequest to JSON.
             * @function toJSON
             * @memberof logproto.SeriesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SeriesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return SeriesRequest;
        })();
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
            function SeriesResponse(properties) {
                this.series = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SeriesResponse series.
             * @member {Array.<logproto.ISeriesIdentifier>} series
             * @memberof logproto.SeriesResponse
             * @instance
             */
            SeriesResponse.prototype.series = $util.emptyArray;
            /**
             * Creates a new SeriesResponse instance using the specified properties.
             * @function create
             * @memberof logproto.SeriesResponse
             * @static
             * @param {logproto.ISeriesResponse=} [properties] Properties to set
             * @returns {logproto.SeriesResponse} SeriesResponse instance
             */
            SeriesResponse.create = function create(properties) {
                return new SeriesResponse(properties);
            };
            /**
             * Encodes the specified SeriesResponse message. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.SeriesResponse
             * @static
             * @param {logproto.ISeriesResponse} message SeriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.series != null && message.series.length)
                    for (var i = 0; i < message.series.length; ++i)
                        $root.logproto.SeriesIdentifier.encode(message.series[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified SeriesResponse message, length delimited. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.SeriesResponse
             * @static
             * @param {logproto.ISeriesResponse} message SeriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            SeriesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.SeriesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.series && message.series.length))
                                message.series = [];
                            message.series.push($root.logproto.SeriesIdentifier.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            SeriesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SeriesResponse message.
             * @function verify
             * @memberof logproto.SeriesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SeriesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.series != null && message.hasOwnProperty("series")) {
                    if (!Array.isArray(message.series))
                        return "series: array expected";
                    for (var i = 0; i < message.series.length; ++i) {
                        var error = $root.logproto.SeriesIdentifier.verify(message.series[i]);
                        if (error)
                            return "series." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a SeriesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.SeriesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.SeriesResponse} SeriesResponse
             */
            SeriesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.SeriesResponse)
                    return object;
                var message = new $root.logproto.SeriesResponse();
                if (object.series) {
                    if (!Array.isArray(object.series))
                        throw TypeError(".logproto.SeriesResponse.series: array expected");
                    message.series = [];
                    for (var i = 0; i < object.series.length; ++i) {
                        if (typeof object.series[i] !== "object")
                            throw TypeError(".logproto.SeriesResponse.series: object expected");
                        message.series[i] = $root.logproto.SeriesIdentifier.fromObject(object.series[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a SeriesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.SeriesResponse
             * @static
             * @param {logproto.SeriesResponse} message SeriesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SeriesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.series = [];
                if (message.series && message.series.length) {
                    object.series = [];
                    for (var j = 0; j < message.series.length; ++j)
                        object.series[j] = $root.logproto.SeriesIdentifier.toObject(message.series[j], options);
                }
                return object;
            };
            /**
             * Converts this SeriesResponse to JSON.
             * @function toJSON
             * @memberof logproto.SeriesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SeriesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return SeriesResponse;
        })();
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
            function SeriesIdentifier(properties) {
                this.labels = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * SeriesIdentifier labels.
             * @member {Object.<string,string>} labels
             * @memberof logproto.SeriesIdentifier
             * @instance
             */
            SeriesIdentifier.prototype.labels = $util.emptyObject;
            /**
             * Creates a new SeriesIdentifier instance using the specified properties.
             * @function create
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {logproto.ISeriesIdentifier=} [properties] Properties to set
             * @returns {logproto.SeriesIdentifier} SeriesIdentifier instance
             */
            SeriesIdentifier.create = function create(properties) {
                return new SeriesIdentifier(properties);
            };
            /**
             * Encodes the specified SeriesIdentifier message. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
             * @function encode
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {logproto.ISeriesIdentifier} message SeriesIdentifier message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesIdentifier.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                    for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 2 =*/ 10).string(keys[i]).uint32(/* id 2, wireType 2 =*/ 18).string(message.labels[keys[i]]).ldelim();
                return writer;
            };
            /**
             * Encodes the specified SeriesIdentifier message, length delimited. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {logproto.ISeriesIdentifier} message SeriesIdentifier message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesIdentifier.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            SeriesIdentifier.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.SeriesIdentifier(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (message.labels === $util.emptyObject)
                                message.labels = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                }
                            }
                            message.labels[key] = value;
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            SeriesIdentifier.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SeriesIdentifier message.
             * @function verify
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SeriesIdentifier.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.labels != null && message.hasOwnProperty("labels")) {
                    if (!$util.isObject(message.labels))
                        return "labels: object expected";
                    var key = Object.keys(message.labels);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.labels[key[i]]))
                            return "labels: string{k:string} expected";
                }
                return null;
            };
            /**
             * Creates a SeriesIdentifier message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.SeriesIdentifier} SeriesIdentifier
             */
            SeriesIdentifier.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.SeriesIdentifier)
                    return object;
                var message = new $root.logproto.SeriesIdentifier();
                if (object.labels) {
                    if (typeof object.labels !== "object")
                        throw TypeError(".logproto.SeriesIdentifier.labels: object expected");
                    message.labels = {};
                    for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                        message.labels[keys[i]] = String(object.labels[keys[i]]);
                }
                return message;
            };
            /**
             * Creates a plain object from a SeriesIdentifier message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.SeriesIdentifier
             * @static
             * @param {logproto.SeriesIdentifier} message SeriesIdentifier
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SeriesIdentifier.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.labels = {};
                var keys2;
                if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                    object.labels = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.labels[keys2[j]] = message.labels[keys2[j]];
                }
                return object;
            };
            /**
             * Converts this SeriesIdentifier to JSON.
             * @function toJSON
             * @memberof logproto.SeriesIdentifier
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SeriesIdentifier.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return SeriesIdentifier;
        })();
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
            function DroppedStream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * DroppedStream from.
             * @member {google.protobuf.ITimestamp|null|undefined} from
             * @memberof logproto.DroppedStream
             * @instance
             */
            DroppedStream.prototype.from = null;
            /**
             * DroppedStream to.
             * @member {google.protobuf.ITimestamp|null|undefined} to
             * @memberof logproto.DroppedStream
             * @instance
             */
            DroppedStream.prototype.to = null;
            /**
             * DroppedStream labels.
             * @member {string} labels
             * @memberof logproto.DroppedStream
             * @instance
             */
            DroppedStream.prototype.labels = "";
            /**
             * Creates a new DroppedStream instance using the specified properties.
             * @function create
             * @memberof logproto.DroppedStream
             * @static
             * @param {logproto.IDroppedStream=} [properties] Properties to set
             * @returns {logproto.DroppedStream} DroppedStream instance
             */
            DroppedStream.create = function create(properties) {
                return new DroppedStream(properties);
            };
            /**
             * Encodes the specified DroppedStream message. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
             * @function encode
             * @memberof logproto.DroppedStream
             * @static
             * @param {logproto.IDroppedStream} message DroppedStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DroppedStream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                    $root.google.protobuf.Timestamp.encode(message.from, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                    $root.google.protobuf.Timestamp.encode(message.to, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.labels);
                return writer;
            };
            /**
             * Encodes the specified DroppedStream message, length delimited. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.DroppedStream
             * @static
             * @param {logproto.IDroppedStream} message DroppedStream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DroppedStream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            DroppedStream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.DroppedStream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.from = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.to = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.labels = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            DroppedStream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a DroppedStream message.
             * @function verify
             * @memberof logproto.DroppedStream
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DroppedStream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.from != null && message.hasOwnProperty("from")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.from);
                    if (error)
                        return "from." + error;
                }
                if (message.to != null && message.hasOwnProperty("to")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.to);
                    if (error)
                        return "to." + error;
                }
                if (message.labels != null && message.hasOwnProperty("labels"))
                    if (!$util.isString(message.labels))
                        return "labels: string expected";
                return null;
            };
            /**
             * Creates a DroppedStream message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.DroppedStream
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.DroppedStream} DroppedStream
             */
            DroppedStream.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.DroppedStream)
                    return object;
                var message = new $root.logproto.DroppedStream();
                if (object.from != null) {
                    if (typeof object.from !== "object")
                        throw TypeError(".logproto.DroppedStream.from: object expected");
                    message.from = $root.google.protobuf.Timestamp.fromObject(object.from);
                }
                if (object.to != null) {
                    if (typeof object.to !== "object")
                        throw TypeError(".logproto.DroppedStream.to: object expected");
                    message.to = $root.google.protobuf.Timestamp.fromObject(object.to);
                }
                if (object.labels != null)
                    message.labels = String(object.labels);
                return message;
            };
            /**
             * Creates a plain object from a DroppedStream message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.DroppedStream
             * @static
             * @param {logproto.DroppedStream} message DroppedStream
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DroppedStream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.from = null;
                    object.to = null;
                    object.labels = "";
                }
                if (message.from != null && message.hasOwnProperty("from"))
                    object.from = $root.google.protobuf.Timestamp.toObject(message.from, options);
                if (message.to != null && message.hasOwnProperty("to"))
                    object.to = $root.google.protobuf.Timestamp.toObject(message.to, options);
                if (message.labels != null && message.hasOwnProperty("labels"))
                    object.labels = message.labels;
                return object;
            };
            /**
             * Converts this DroppedStream to JSON.
             * @function toJSON
             * @memberof logproto.DroppedStream
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DroppedStream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return DroppedStream;
        })();
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
            function TimeSeriesChunk(properties) {
                this.labels = [];
                this.chunks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * TimeSeriesChunk fromIngesterId.
             * @member {string} fromIngesterId
             * @memberof logproto.TimeSeriesChunk
             * @instance
             */
            TimeSeriesChunk.prototype.fromIngesterId = "";
            /**
             * TimeSeriesChunk userId.
             * @member {string} userId
             * @memberof logproto.TimeSeriesChunk
             * @instance
             */
            TimeSeriesChunk.prototype.userId = "";
            /**
             * TimeSeriesChunk labels.
             * @member {Array.<logproto.ILabelPair>} labels
             * @memberof logproto.TimeSeriesChunk
             * @instance
             */
            TimeSeriesChunk.prototype.labels = $util.emptyArray;
            /**
             * TimeSeriesChunk chunks.
             * @member {Array.<logproto.IChunk>} chunks
             * @memberof logproto.TimeSeriesChunk
             * @instance
             */
            TimeSeriesChunk.prototype.chunks = $util.emptyArray;
            /**
             * Creates a new TimeSeriesChunk instance using the specified properties.
             * @function create
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {logproto.ITimeSeriesChunk=} [properties] Properties to set
             * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk instance
             */
            TimeSeriesChunk.create = function create(properties) {
                return new TimeSeriesChunk(properties);
            };
            /**
             * Encodes the specified TimeSeriesChunk message. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
             * @function encode
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {logproto.ITimeSeriesChunk} message TimeSeriesChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeSeriesChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fromIngesterId != null && Object.hasOwnProperty.call(message, "fromIngesterId"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.fromIngesterId);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.userId);
                if (message.labels != null && message.labels.length)
                    for (var i = 0; i < message.labels.length; ++i)
                        $root.logproto.LabelPair.encode(message.labels[i], writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.chunks != null && message.chunks.length)
                    for (var i = 0; i < message.chunks.length; ++i)
                        $root.logproto.Chunk.encode(message.chunks[i], writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified TimeSeriesChunk message, length delimited. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {logproto.ITimeSeriesChunk} message TimeSeriesChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeSeriesChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TimeSeriesChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TimeSeriesChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.fromIngesterId = reader.string();
                            break;
                        case 2:
                            message.userId = reader.string();
                            break;
                        case 3:
                            if (!(message.labels && message.labels.length))
                                message.labels = [];
                            message.labels.push($root.logproto.LabelPair.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.chunks && message.chunks.length))
                                message.chunks = [];
                            message.chunks.push($root.logproto.Chunk.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TimeSeriesChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TimeSeriesChunk message.
             * @function verify
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeSeriesChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fromIngesterId != null && message.hasOwnProperty("fromIngesterId"))
                    if (!$util.isString(message.fromIngesterId))
                        return "fromIngesterId: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.labels != null && message.hasOwnProperty("labels")) {
                    if (!Array.isArray(message.labels))
                        return "labels: array expected";
                    for (var i = 0; i < message.labels.length; ++i) {
                        var error = $root.logproto.LabelPair.verify(message.labels[i]);
                        if (error)
                            return "labels." + error;
                    }
                }
                if (message.chunks != null && message.hasOwnProperty("chunks")) {
                    if (!Array.isArray(message.chunks))
                        return "chunks: array expected";
                    for (var i = 0; i < message.chunks.length; ++i) {
                        var error = $root.logproto.Chunk.verify(message.chunks[i]);
                        if (error)
                            return "chunks." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a TimeSeriesChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TimeSeriesChunk} TimeSeriesChunk
             */
            TimeSeriesChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TimeSeriesChunk)
                    return object;
                var message = new $root.logproto.TimeSeriesChunk();
                if (object.fromIngesterId != null)
                    message.fromIngesterId = String(object.fromIngesterId);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.labels) {
                    if (!Array.isArray(object.labels))
                        throw TypeError(".logproto.TimeSeriesChunk.labels: array expected");
                    message.labels = [];
                    for (var i = 0; i < object.labels.length; ++i) {
                        if (typeof object.labels[i] !== "object")
                            throw TypeError(".logproto.TimeSeriesChunk.labels: object expected");
                        message.labels[i] = $root.logproto.LabelPair.fromObject(object.labels[i]);
                    }
                }
                if (object.chunks) {
                    if (!Array.isArray(object.chunks))
                        throw TypeError(".logproto.TimeSeriesChunk.chunks: array expected");
                    message.chunks = [];
                    for (var i = 0; i < object.chunks.length; ++i) {
                        if (typeof object.chunks[i] !== "object")
                            throw TypeError(".logproto.TimeSeriesChunk.chunks: object expected");
                        message.chunks[i] = $root.logproto.Chunk.fromObject(object.chunks[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a TimeSeriesChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TimeSeriesChunk
             * @static
             * @param {logproto.TimeSeriesChunk} message TimeSeriesChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeSeriesChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.labels = [];
                    object.chunks = [];
                }
                if (options.defaults) {
                    object.fromIngesterId = "";
                    object.userId = "";
                }
                if (message.fromIngesterId != null && message.hasOwnProperty("fromIngesterId"))
                    object.fromIngesterId = message.fromIngesterId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.labels && message.labels.length) {
                    object.labels = [];
                    for (var j = 0; j < message.labels.length; ++j)
                        object.labels[j] = $root.logproto.LabelPair.toObject(message.labels[j], options);
                }
                if (message.chunks && message.chunks.length) {
                    object.chunks = [];
                    for (var j = 0; j < message.chunks.length; ++j)
                        object.chunks[j] = $root.logproto.Chunk.toObject(message.chunks[j], options);
                }
                return object;
            };
            /**
             * Converts this TimeSeriesChunk to JSON.
             * @function toJSON
             * @memberof logproto.TimeSeriesChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeSeriesChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TimeSeriesChunk;
        })();
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
            function LabelPair(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * LabelPair name.
             * @member {string} name
             * @memberof logproto.LabelPair
             * @instance
             */
            LabelPair.prototype.name = "";
            /**
             * LabelPair value.
             * @member {string} value
             * @memberof logproto.LabelPair
             * @instance
             */
            LabelPair.prototype.value = "";
            /**
             * Creates a new LabelPair instance using the specified properties.
             * @function create
             * @memberof logproto.LabelPair
             * @static
             * @param {logproto.ILabelPair=} [properties] Properties to set
             * @returns {logproto.LabelPair} LabelPair instance
             */
            LabelPair.create = function create(properties) {
                return new LabelPair(properties);
            };
            /**
             * Encodes the specified LabelPair message. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
             * @function encode
             * @memberof logproto.LabelPair
             * @static
             * @param {logproto.ILabelPair} message LabelPair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelPair.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.value);
                return writer;
            };
            /**
             * Encodes the specified LabelPair message, length delimited. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.LabelPair
             * @static
             * @param {logproto.ILabelPair} message LabelPair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelPair.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            LabelPair.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.LabelPair();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            LabelPair.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a LabelPair message.
             * @function verify
             * @memberof logproto.LabelPair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LabelPair.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
            /**
             * Creates a LabelPair message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.LabelPair
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.LabelPair} LabelPair
             */
            LabelPair.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.LabelPair)
                    return object;
                var message = new $root.logproto.LabelPair();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
            /**
             * Creates a plain object from a LabelPair message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.LabelPair
             * @static
             * @param {logproto.LabelPair} message LabelPair
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LabelPair.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
            /**
             * Converts this LabelPair to JSON.
             * @function toJSON
             * @memberof logproto.LabelPair
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LabelPair.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return LabelPair;
        })();
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
            function Chunk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Chunk data.
             * @member {Uint8Array} data
             * @memberof logproto.Chunk
             * @instance
             */
            Chunk.prototype.data = $util.newBuffer([]);
            /**
             * Creates a new Chunk instance using the specified properties.
             * @function create
             * @memberof logproto.Chunk
             * @static
             * @param {logproto.IChunk=} [properties] Properties to set
             * @returns {logproto.Chunk} Chunk instance
             */
            Chunk.create = function create(properties) {
                return new Chunk(properties);
            };
            /**
             * Encodes the specified Chunk message. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
             * @function encode
             * @memberof logproto.Chunk
             * @static
             * @param {logproto.IChunk} message Chunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.data);
                return writer;
            };
            /**
             * Encodes the specified Chunk message, length delimited. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.Chunk
             * @static
             * @param {logproto.IChunk} message Chunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            Chunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.Chunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.data = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            Chunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a Chunk message.
             * @function verify
             * @memberof logproto.Chunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
            /**
             * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.Chunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.Chunk} Chunk
             */
            Chunk.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.Chunk)
                    return object;
                var message = new $root.logproto.Chunk();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
            /**
             * Creates a plain object from a Chunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.Chunk
             * @static
             * @param {logproto.Chunk} message Chunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
            /**
             * Converts this Chunk to JSON.
             * @function toJSON
             * @memberof logproto.Chunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Chunk;
        })();
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
            function TransferChunksResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new TransferChunksResponse instance using the specified properties.
             * @function create
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {logproto.ITransferChunksResponse=} [properties] Properties to set
             * @returns {logproto.TransferChunksResponse} TransferChunksResponse instance
             */
            TransferChunksResponse.create = function create(properties) {
                return new TransferChunksResponse(properties);
            };
            /**
             * Encodes the specified TransferChunksResponse message. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {logproto.ITransferChunksResponse} message TransferChunksResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransferChunksResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
            /**
             * Encodes the specified TransferChunksResponse message, length delimited. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {logproto.ITransferChunksResponse} message TransferChunksResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransferChunksResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TransferChunksResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TransferChunksResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TransferChunksResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TransferChunksResponse message.
             * @function verify
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TransferChunksResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
            /**
             * Creates a TransferChunksResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TransferChunksResponse} TransferChunksResponse
             */
            TransferChunksResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TransferChunksResponse)
                    return object;
                return new $root.logproto.TransferChunksResponse();
            };
            /**
             * Creates a plain object from a TransferChunksResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TransferChunksResponse
             * @static
             * @param {logproto.TransferChunksResponse} message TransferChunksResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransferChunksResponse.toObject = function toObject() {
                return {};
            };
            /**
             * Converts this TransferChunksResponse to JSON.
             * @function toJSON
             * @memberof logproto.TransferChunksResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TransferChunksResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TransferChunksResponse;
        })();
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
            function TailersCountRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new TailersCountRequest instance using the specified properties.
             * @function create
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {logproto.ITailersCountRequest=} [properties] Properties to set
             * @returns {logproto.TailersCountRequest} TailersCountRequest instance
             */
            TailersCountRequest.create = function create(properties) {
                return new TailersCountRequest(properties);
            };
            /**
             * Encodes the specified TailersCountRequest message. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {logproto.ITailersCountRequest} message TailersCountRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailersCountRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
            /**
             * Encodes the specified TailersCountRequest message, length delimited. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {logproto.ITailersCountRequest} message TailersCountRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailersCountRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TailersCountRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TailersCountRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TailersCountRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TailersCountRequest message.
             * @function verify
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TailersCountRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
            /**
             * Creates a TailersCountRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TailersCountRequest} TailersCountRequest
             */
            TailersCountRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TailersCountRequest)
                    return object;
                return new $root.logproto.TailersCountRequest();
            };
            /**
             * Creates a plain object from a TailersCountRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TailersCountRequest
             * @static
             * @param {logproto.TailersCountRequest} message TailersCountRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TailersCountRequest.toObject = function toObject() {
                return {};
            };
            /**
             * Converts this TailersCountRequest to JSON.
             * @function toJSON
             * @memberof logproto.TailersCountRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TailersCountRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TailersCountRequest;
        })();
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
            function TailersCountResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * TailersCountResponse count.
             * @member {number} count
             * @memberof logproto.TailersCountResponse
             * @instance
             */
            TailersCountResponse.prototype.count = 0;
            /**
             * Creates a new TailersCountResponse instance using the specified properties.
             * @function create
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {logproto.ITailersCountResponse=} [properties] Properties to set
             * @returns {logproto.TailersCountResponse} TailersCountResponse instance
             */
            TailersCountResponse.create = function create(properties) {
                return new TailersCountResponse(properties);
            };
            /**
             * Encodes the specified TailersCountResponse message. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {logproto.ITailersCountResponse} message TailersCountResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailersCountResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.count);
                return writer;
            };
            /**
             * Encodes the specified TailersCountResponse message, length delimited. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {logproto.ITailersCountResponse} message TailersCountResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TailersCountResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
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
            TailersCountResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.TailersCountResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.count = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
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
            TailersCountResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a TailersCountResponse message.
             * @function verify
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TailersCountResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };
            /**
             * Creates a TailersCountResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.TailersCountResponse} TailersCountResponse
             */
            TailersCountResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.TailersCountResponse)
                    return object;
                var message = new $root.logproto.TailersCountResponse();
                if (object.count != null)
                    message.count = object.count >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a TailersCountResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.TailersCountResponse
             * @static
             * @param {logproto.TailersCountResponse} message TailersCountResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TailersCountResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.count = 0;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };
            /**
             * Converts this TailersCountResponse to JSON.
             * @function toJSON
             * @memberof logproto.TailersCountResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TailersCountResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return TailersCountResponse;
        })();
        logproto.GetChunkIDsRequest = (function () {
            /**
             * Properties of a GetChunkIDsRequest.
             * @memberof logproto
             * @interface IGetChunkIDsRequest
             * @property {string|null} [matchers] GetChunkIDsRequest matchers
             * @property {google.protobuf.ITimestamp|null} [start] GetChunkIDsRequest start
             * @property {google.protobuf.ITimestamp|null} [end] GetChunkIDsRequest end
             */
            /**
             * Constructs a new GetChunkIDsRequest.
             * @memberof logproto
             * @classdesc Represents a GetChunkIDsRequest.
             * @implements IGetChunkIDsRequest
             * @constructor
             * @param {logproto.IGetChunkIDsRequest=} [properties] Properties to set
             */
            function GetChunkIDsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * GetChunkIDsRequest matchers.
             * @member {string} matchers
             * @memberof logproto.GetChunkIDsRequest
             * @instance
             */
            GetChunkIDsRequest.prototype.matchers = "";
            /**
             * GetChunkIDsRequest start.
             * @member {google.protobuf.ITimestamp|null|undefined} start
             * @memberof logproto.GetChunkIDsRequest
             * @instance
             */
            GetChunkIDsRequest.prototype.start = null;
            /**
             * GetChunkIDsRequest end.
             * @member {google.protobuf.ITimestamp|null|undefined} end
             * @memberof logproto.GetChunkIDsRequest
             * @instance
             */
            GetChunkIDsRequest.prototype.end = null;
            /**
             * Creates a new GetChunkIDsRequest instance using the specified properties.
             * @function create
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {logproto.IGetChunkIDsRequest=} [properties] Properties to set
             * @returns {logproto.GetChunkIDsRequest} GetChunkIDsRequest instance
             */
            GetChunkIDsRequest.create = function create(properties) {
                return new GetChunkIDsRequest(properties);
            };
            /**
             * Encodes the specified GetChunkIDsRequest message. Does not implicitly {@link logproto.GetChunkIDsRequest.verify|verify} messages.
             * @function encode
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {logproto.IGetChunkIDsRequest} message GetChunkIDsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetChunkIDsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.matchers != null && Object.hasOwnProperty.call(message, "matchers"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.matchers);
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified GetChunkIDsRequest message, length delimited. Does not implicitly {@link logproto.GetChunkIDsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {logproto.IGetChunkIDsRequest} message GetChunkIDsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetChunkIDsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GetChunkIDsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.GetChunkIDsRequest} GetChunkIDsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetChunkIDsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.GetChunkIDsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.matchers = reader.string();
                            break;
                        case 2:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a GetChunkIDsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.GetChunkIDsRequest} GetChunkIDsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetChunkIDsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GetChunkIDsRequest message.
             * @function verify
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetChunkIDsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.matchers != null && message.hasOwnProperty("matchers"))
                    if (!$util.isString(message.matchers))
                        return "matchers: string expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                return null;
            };
            /**
             * Creates a GetChunkIDsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.GetChunkIDsRequest} GetChunkIDsRequest
             */
            GetChunkIDsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.GetChunkIDsRequest)
                    return object;
                var message = new $root.logproto.GetChunkIDsRequest();
                if (object.matchers != null)
                    message.matchers = String(object.matchers);
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".logproto.GetChunkIDsRequest.start: object expected");
                    message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".logproto.GetChunkIDsRequest.end: object expected");
                    message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                }
                return message;
            };
            /**
             * Creates a plain object from a GetChunkIDsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.GetChunkIDsRequest
             * @static
             * @param {logproto.GetChunkIDsRequest} message GetChunkIDsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetChunkIDsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.matchers = "";
                    object.start = null;
                    object.end = null;
                }
                if (message.matchers != null && message.hasOwnProperty("matchers"))
                    object.matchers = message.matchers;
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                return object;
            };
            /**
             * Converts this GetChunkIDsRequest to JSON.
             * @function toJSON
             * @memberof logproto.GetChunkIDsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetChunkIDsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return GetChunkIDsRequest;
        })();
        logproto.GetChunkIDsResponse = (function () {
            /**
             * Properties of a GetChunkIDsResponse.
             * @memberof logproto
             * @interface IGetChunkIDsResponse
             * @property {Array.<string>|null} [chunkIDs] GetChunkIDsResponse chunkIDs
             */
            /**
             * Constructs a new GetChunkIDsResponse.
             * @memberof logproto
             * @classdesc Represents a GetChunkIDsResponse.
             * @implements IGetChunkIDsResponse
             * @constructor
             * @param {logproto.IGetChunkIDsResponse=} [properties] Properties to set
             */
            function GetChunkIDsResponse(properties) {
                this.chunkIDs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * GetChunkIDsResponse chunkIDs.
             * @member {Array.<string>} chunkIDs
             * @memberof logproto.GetChunkIDsResponse
             * @instance
             */
            GetChunkIDsResponse.prototype.chunkIDs = $util.emptyArray;
            /**
             * Creates a new GetChunkIDsResponse instance using the specified properties.
             * @function create
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {logproto.IGetChunkIDsResponse=} [properties] Properties to set
             * @returns {logproto.GetChunkIDsResponse} GetChunkIDsResponse instance
             */
            GetChunkIDsResponse.create = function create(properties) {
                return new GetChunkIDsResponse(properties);
            };
            /**
             * Encodes the specified GetChunkIDsResponse message. Does not implicitly {@link logproto.GetChunkIDsResponse.verify|verify} messages.
             * @function encode
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {logproto.IGetChunkIDsResponse} message GetChunkIDsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetChunkIDsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chunkIDs != null && message.chunkIDs.length)
                    for (var i = 0; i < message.chunkIDs.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.chunkIDs[i]);
                return writer;
            };
            /**
             * Encodes the specified GetChunkIDsResponse message, length delimited. Does not implicitly {@link logproto.GetChunkIDsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {logproto.IGetChunkIDsResponse} message GetChunkIDsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetChunkIDsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GetChunkIDsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {logproto.GetChunkIDsResponse} GetChunkIDsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetChunkIDsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logproto.GetChunkIDsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.chunkIDs && message.chunkIDs.length))
                                message.chunkIDs = [];
                            message.chunkIDs.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a GetChunkIDsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {logproto.GetChunkIDsResponse} GetChunkIDsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetChunkIDsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GetChunkIDsResponse message.
             * @function verify
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetChunkIDsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chunkIDs != null && message.hasOwnProperty("chunkIDs")) {
                    if (!Array.isArray(message.chunkIDs))
                        return "chunkIDs: array expected";
                    for (var i = 0; i < message.chunkIDs.length; ++i)
                        if (!$util.isString(message.chunkIDs[i]))
                            return "chunkIDs: string[] expected";
                }
                return null;
            };
            /**
             * Creates a GetChunkIDsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {logproto.GetChunkIDsResponse} GetChunkIDsResponse
             */
            GetChunkIDsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.logproto.GetChunkIDsResponse)
                    return object;
                var message = new $root.logproto.GetChunkIDsResponse();
                if (object.chunkIDs) {
                    if (!Array.isArray(object.chunkIDs))
                        throw TypeError(".logproto.GetChunkIDsResponse.chunkIDs: array expected");
                    message.chunkIDs = [];
                    for (var i = 0; i < object.chunkIDs.length; ++i)
                        message.chunkIDs[i] = String(object.chunkIDs[i]);
                }
                return message;
            };
            /**
             * Creates a plain object from a GetChunkIDsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof logproto.GetChunkIDsResponse
             * @static
             * @param {logproto.GetChunkIDsResponse} message GetChunkIDsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetChunkIDsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.chunkIDs = [];
                if (message.chunkIDs && message.chunkIDs.length) {
                    object.chunkIDs = [];
                    for (var j = 0; j < message.chunkIDs.length; ++j)
                        object.chunkIDs[j] = message.chunkIDs[j];
                }
                return object;
            };
            /**
             * Converts this GetChunkIDsResponse to JSON.
             * @function toJSON
             * @memberof logproto.GetChunkIDsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetChunkIDsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return GetChunkIDsResponse;
        })();
        return logproto;
    })();
    $root.google = (function () {
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
        google.protobuf = (function () {
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
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
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
                    return writer;
                };
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
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
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                message.seconds = reader.int64();
                                break;
                            case 2:
                                message.nanos = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
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
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        }
                        else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                return Timestamp;
            })();
            return protobuf;
        })();
        return google;
    })();
    return $root;
});
//# sourceMappingURL=logproto.js.map