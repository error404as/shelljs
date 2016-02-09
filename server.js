
var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    shell = require('shelljs');

var app = express();
var data_holder = [];

app.use(bodyParser.json({limit: '3mB'}));
app.use(bodyParser.urlencoded({ limit: '3mB', extended: true }));



app.get('/git/:exec', function(req, res){
    shell.cd('application-dir');
    var result = shell.exec('git '+req.params.exec).output
    res.send(result);
    shell.cd('..');
});

app.get('*', function(req, res){
    res.send(fs.readFileSync('server-index.html', 'utf8'));
});

app.listen(1111, 'localhost', function(){
  console.log("Server started: http://localhost:1111");
});
