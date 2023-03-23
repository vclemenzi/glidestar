import http from "http";
import { Config } from "../..";
import { reader } from "./reader";
import { clean } from "./clean";
import path from "path";

export function server(config: Config, callback?: (err: Error | null) => void) {
  const server = http.createServer((req, res) => {
    const files = reader(config.dir);

    // /users == /users
    if ((req.url as string).endsWith("/") && (req.url as string).length > 1) {
      req.url = (req.url as string).slice(0, -1);
    }                                     

    // Loop through the files and find the one that matches the request
    for (const file of files) {
      const f = clean(file, config.dir);

      if (f === req.url) {
        const result = import(path.resolve(file));

        result.then((module) => {
          const instance = new module.default();

          if (req.method === "GET") {
            instance.get(req, res);
          } else if (req.method === "POST") {
            instance.post(req, res);
          } else if (req.method === "PUT") {
            instance.put(req, res);
          } else if (req.method === "DELETE") {
            instance.delete(req, res);
          } else {
            res.statusCode = 404;
            res.end();
          }
        });
      }
    }
  });

  server.listen(config.port || 8080, () => {
    if (callback) {
      callback(null);
    }
  });
}
