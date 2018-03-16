var express = require('express');
var app = express();

app.get('/', function(req, res){
    var r = req;
    res.send('asdf');
});
app.listen(8000);

