const express = require("express");

const app = express();

app.get("/", (_req, res) => {
    res.send("Hello from Service A")
})

app.listen(80, ()=> {
    console.log("App running on port 80")
})
