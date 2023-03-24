# Glidestar
A library for nodejs based on api creation

# Example
```js
const { server } = require('glidestar');

const config = {
    dir: "routes/",
    port: 8080
};

server(config, (err) => {});
```

# Routes
```js
// routes/index.js
module.exports = class {
    constructor(app) {
        this.app = app;
    }

    // This method is called for every type of request at the endpoint
    first(req, res) {
        res.send("Hello World");
    }

    get(req, res) {
        res.send("Hello World");
    }

    post(req, res) {
        res.send("Hello World");
    }

    put(req, res) {
        res.send("Hello World");
    }

    delete(req, res) {
        res.send("Hello World");
    }

    patch(req, res) {
        res.send("Hello World");
    }
}
```
