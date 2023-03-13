var express = require('express');
var app = express();
var data = require('./services/evenements.js')
var cors = require('cors')


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), function(req, res) {
  res.send(data);
});

app.listen(3000);