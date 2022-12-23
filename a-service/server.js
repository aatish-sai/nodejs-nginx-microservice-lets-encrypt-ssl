const express = require("express");
const http = require("http");

const app = express();

app.get("/b", (_req, res) => {
  http.get("http://b-service", (r) => {
    let rawData = "";
    r.on("data", (chunk) => {
      rawData += chunk;
    });
    r.on("end", () => {
      res.send(`Called service B from A ${rawData}`);
    });
  });
});
app.get("/", (_req, res) => {
  res.send("Hello from Service A");
});

app.listen(80, () => {
  console.log("App running on port 80");
});
