var express = require("express");
const bodyParser = require("body-parser")
const PORT = 3000;


var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/login", function(request, response) {
    // console.log(request)
    console.log("in login route");
    response.sendFile("views/login.html", { root: __dirname });
});

app.get("/user_info", function(request, response) {
    // console.log(request)
    console.log("in user info route");
    response.sendFile("views/user_info.html", { root: __dirname });
});

app.get("/twitter", function(request, response) {
    // console.log(request)
    console.log("in user info route");
    response.sendFile("views/twitter.html", { root: __dirname });
});

app.get("/seats", function(request, response) {
    // console.log(request)
    console.log("in seats route");
    response.sendFile("views/seats.html", { root: __dirname });
});

app.post("/add-me", function(request, response) {
    const a = request.body
    console.log("getting here")
        // console.log(request)
    response.send({ "result": `${a.val1+ a.val2}` })
    console.log(typeof(a.val1))
});

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});