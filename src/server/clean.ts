export function clean(path: string, baseDir: string): string {
  // /routes/index.ts => /
  // /routes/users.ts => /users

  const result = path.replace(/\\/g, "/").replace(baseDir, "").replace(/\/$/, "");

  if (result.includes("index") && !result.startsWith("/index")) {
    return result.replace(/index\.(js|ts)$/, "").replace(/\/$/, "");
  } else if (result.startsWith("/index")) {
    return "/";
  } else {
    return result.replace(/\.(js|ts)$/, "").replace(/\/$/, "");
  }
}
