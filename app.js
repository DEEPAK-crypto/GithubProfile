var express = require('express');
app = express();
request = require('request');

app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
    const url = {
        url: 'https://api.github.com/users/DEEPAK-crypto/repos',
        headers: {
            'User-Agent': 'DEEPAK-crypto'
        }
    }
    request(url, function(error, request, body) {
        var data = JSON.parse(body);

        res.render('index', { data: data });

    });
});


app.listen(3000);