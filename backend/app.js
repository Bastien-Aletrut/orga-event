var express = require('express');
var app = express();
var cors = require('cors');

var route = require('./routes/routes.js')


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use('/', express.json(), cors(corsOptions), route);

app.listen(3000);