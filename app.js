require('console-stamp')(console, '[HH:MM:ss.l]');

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/", (req, res, next) => {
    console.log('get /');
    res.sendStatus(200);
});

app.get("/pay/ideal", (req, res, next) => {
    console.log('get /pay/ideal/');
    res.sendStatus(200);
});

app.post("/pay/ideal", (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    console.log(req.baseUrl);

    res.sendStatus(200);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
