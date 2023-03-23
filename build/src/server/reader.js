"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function reader(directoryPath) {
    const files = fs_1.default.readdirSync(directoryPath);
    const result = [];
    for (const file of files) {
        const filePath = path_1.default.join(directoryPath, file);
        const stats = fs_1.default.statSync(filePath);
        if (stats.isDirectory()) {
            const subFiles = reader(filePath);
            result.push(...subFiles);
        }
        else {
            result.push(filePath);
        }
    }
    return result;
}
exports.reader = reader;
