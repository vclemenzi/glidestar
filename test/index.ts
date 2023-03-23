import { Config, server } from "../src";

const config: Config = {
    dir: "test/routes",
    port: 8080
};

server(config, (err) => {});