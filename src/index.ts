import express from "express";

const app = express();

app.get("/", () => {});

app.post("/", () => {});

app.listen(3001, () => {
  console.log("started");
});
