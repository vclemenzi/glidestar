import { IncomingMessage } from "http";

export class Request {
    private req: IncomingMessage;
    private _params: string[];

    constructor(req: IncomingMessage, params: string[]) {
        this.req = req;
        this._params = params;
    }

    public get method(): string {
        return (this.req.method as string);
    }

    public get url(): string {
        return (this.req.url as string);
    }

    public get headers(): any {
        return this.req.headers;
    }

    public get status(): number {
        return (this.req.statusCode as number);
    }

    public get body() {
        let body = '';
    
        const chunks = [];
        let size = 0;
    
        while (true) {
            const chunk = this.req.read();
            if (!chunk) {
                break;
            }
    
            chunks.push(chunk);
            size += chunk.length;
        }
    
        if (size) {
            body = Buffer.concat(chunks, size).toString();
        }
    
        if (this.req.headers['content-type'] === 'application/json') {
            return JSON.parse(body);
        } else {
            return body;
        }
    } 
    
    public get params(): object {
        const params = {};
    
        for (const [key, value] of this._params) {
            // @ts-ignore
            params[key] = value;
        }
    
        return params;
    }

    public get query() {
        return this.params;
    }

    public get cookies() {
        return this.req.headers.cookie;
    }

    public get socket() {
        return this.req.socket;
    }

    /**
     * @deprecated
     * @see Request.socket
    */
    public get connection() {
        return this.req.connection;
    }
}