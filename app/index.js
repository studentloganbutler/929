// Specifically import the promises part of the fs module
// For convenience, ren it to fs
import { promises as fs } from "fs";
import http from "http";
const port = 3000;
let count = 0;
// Create the initial file
fs.writeFile("count.log", "");
const server = http.createServer((_, res) => {
  res.statusCode = 200; // Status code - OK
  // Server announces to the browser what type of stuff is in this response - HTML
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Goodbye World</h1>");
  count += 1;

  fs.writeFile("count.log", String(count));
});
server.listen(port, () => {
  console.info(`Server is running: http://localhost:${port}`);
});
