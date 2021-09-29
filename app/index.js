import http from "http";

const port = 3000;

const server = http.createServer((_, res) => {
  res.statusCode = 200; // Status code = OK

  // Server announces to the browser what type of stuff is in this response - HTML
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
});

server.listen(port, () => {
  console.info(`Server is running: http://localhost:${port}`);
});
