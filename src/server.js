var express = require('express');
var app = express();

console.log('hello');
app.get('/', function(req, res){
    var r = req;
    res.send('asdf');
});
app.listen(8000);

