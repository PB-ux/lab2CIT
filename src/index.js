const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let arr = [];

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Main page");
});

app.post("/create", (req, res) => {
  arr.push(req.body);
  console.log(req.body);
});

app.get("/list", (req, res) => {
  res.send(`List: ${JSON.stringify(arr)}`);
});

app.listen(() => {
  console.log("Server running");
});
