import color from "colors/safe";

export function logRequest(method: string, path: string) {
    console.log(`[${new Date().getHours() + ":" + new Date().getMinutes()}] ${color.green(method)} ${path}`);
}

export function logServer(port: number) {
    console.log(`[${new Date().getHours() + ":" + new Date().getMinutes()}] ${color.yellow("[!]")} Server started at *:${port}`);
}