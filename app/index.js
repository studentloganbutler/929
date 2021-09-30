import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get("/:page", (req, res) => {
  switch (req.params.page) {
    case "hello":
      res.end("Hello");
      break;
    case "bye":
      res.end("bye");
      break;
    default:
      res.end("404");
  }
});

app.listen(3000, () => {
  console.info("Server running");
});
