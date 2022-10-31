var express = require("express");
var app = express();
const PORT = 3000;

app.get("/login", function (request, response) {
  // console.log(request)
  console.log("in login route");
  response.sendFile("views/login.html", {root:__dirname});
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
