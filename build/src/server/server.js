"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const reader_1 = require("./reader");
function server(config, callback) {
    const server = http_1.default.createServer((req, res) => {
        const files = (0, reader_1.reader)(config.dir);
        for (file in files) {
            const route = require(file);
            route(req, res);
        }
    });
    server.listen(config.port || 8080, () => {
        if (callback) {
            callback(null);
        }
    });
}
exports.server = server;
