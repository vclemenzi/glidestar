import { ServerResponse } from "http";
import cookie from "cookie";

export class Response {
    private res: ServerResponse;

    constructor(res: ServerResponse) {
        this.res = res;
    }
    
    public send(data: string) {
        this.res.end(data);
    }
    
    public json(data: object) {
        this.res.setHeader('Content-Type', 'application/json');
        this.res.end(JSON.stringify(data));
    }
    
    public status(code: number) {
        this.res.statusCode = code;
    }
    
    public redirect(location: string) {
        this.res.setHeader('Location', location);
        this.res.statusCode = 302;
        this.res.end();
    }
    
    public file(path: string) {
        const fs = require('fs');
        const readStream = fs.createReadStream(path);
    
        readStream.on('open', () => {
            this.res.setHeader('Content-Type', 'text/html');
            readStream.pipe(this.res);
        });
    
        readStream.on('error', (err: Error) => {
            this.status(500);
            this.send(`Error reading file: ${err.message}`);
        });
    }

    public setHeader(name: string, value: string) {
        this.res.setHeader(name, value);
    }

    public cookie(name: string, value: string, options: object = {}) {
        const serialized = cookie.serialize(name, value, options);
        this.res.setHeader('Set-Cookie', serialized);
    }

    public clearCookie(name: string) {
        this.cookie(name, '', { expires: new Date(0) });
    }

    public download(path: string, filename: string) {
        this.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        this.file(path);
    }
}