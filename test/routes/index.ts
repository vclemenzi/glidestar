import { Request } from "../../src";

export default class {
    public get(req: any, res: any) {
        res.end('Hello World!');
    }

    public post(req: Request, res: any) {
        console.log(req.connection);
        res.end('Hello World!');
    }
}