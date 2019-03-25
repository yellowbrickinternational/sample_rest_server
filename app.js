require('console-stamp')(console, '[HH:MM:ss.l]');

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var postRequests = [];

function utcDate() {
    var dt = new Date();
    var utcDate = dt.toUTCString();

    return utcDate;
}

app.get("/", (req, res, next) => {
    console.log('get /');
    res.sendStatus(200);
});

app.get("/pay/ideal", (req, res, next) => {
    console.log('get /pay/ideal/');
    res.status(200).json(postRequests);
});

app.post("/pay/ideal", (req, res, next) => {
    var date = utcDate();

    var timestampedRequest = {
        'date': date, 
        'request': {
            'params': req.params,
            'body': req.body,
            'query': req.query,
            'baseUrl': req.baseUrl
        }
    };
    
    postRequests.push(timestampedRequest);


/*  console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    console.log(req.baseUrl);*/
    res.sendStatus(200);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
