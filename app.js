const express = require('express');
const app = express();
const path = require('path');
// const dateFormat = require('dateformat');
// var now = new Date();


app.use( function (req, res, next) {
    req.time = new date()
    next()
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/mon', function(req, res) {
    res.sendFile(path.join(__dirname + '/mon.html'));
});
app.get('/tue', function(req, res) {
    res.sendFile(path.join(__dirname + '/tue.html'));
});

//PORT
const PORT= process.env.PORT || 3050;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
