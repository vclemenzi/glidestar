export default class {
    public get(req: any, res: any) {
        res.end('Hello World!');
    }

    public post(req: any, res: any) {
        res.end('Hello World from POST xd!');
    }
}