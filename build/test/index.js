"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const config = {
    dir: "routes",
    port: 8080
};
(0, src_1.server)(config, (err) => { });
