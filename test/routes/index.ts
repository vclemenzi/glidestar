import { Request, Response } from "../../src";

export default class {
    public get(req: Request, res: Response) {
        res.send('Hello World!');
    }

    public post(req: Request, res: Response) {
        res.json({ message: 'Hello World!' });
    }
}