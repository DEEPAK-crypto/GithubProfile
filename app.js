var express = require('express');
app = express();
request = require('request');

app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.send('App Created');
});


app.listen(3000);