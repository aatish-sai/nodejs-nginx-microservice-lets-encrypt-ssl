const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello from Service A");
});

app.get("/b", (_req, res) => {
  fetch("http://b-service").then((response) => {
    res.send(`Called service B from A ${response}`);
  });
});

app.listen(80, () => {
  console.log("App running on port 80");
});
