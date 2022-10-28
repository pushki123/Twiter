const { response } = require("express");
var express = require("express");
var app = express();
const path = require('path');

app.get("/views/login.HTML", function (request, response) {
  console.log("in login rouye");
  response.sendFile("/views/login.HTML", { root: __dirname });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
