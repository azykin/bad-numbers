var express = require('express');
var app = express();
var port = process.env.port || 3000;
var dbPath = __dirname + '/db';

app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/angular', express.static(__dirname + '/node_modules/angular'))

app.get('/', function (req, res) {
    res.sendFile('./public/index.js');
});

app.get('/phones', function (req, res) {
    res.sendFile(dbPath + '/phones.json');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});