var express = require('express');
var app = express();

console.log('hello');

const foo = (req, res) => {
    console.log('fooing');
    res.send('bar');
}

app.get('/', foo);
app.listen(8000);