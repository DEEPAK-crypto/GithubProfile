var express = require("express");
app = express();
axios = require("axios");
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/user', function(req, res) {
    var name = req.query.search;
    var user = axios({
        method: 'get',
        url: 'https://api.github.com/users/' + name,
        headers: {
            'User-Agent': name
        }

    });

    var repo = axios({
        method: 'get',
        url: 'https://api.github.com/users/' + name + '/repos',
        headers: {
            'User-Agent': name
        }

    });

    axios.all([user, repo]).then(function(response) {
        var userData = response[0].data;
        var repoData = response[1].data;
        res.render('result', { user: userData, repo: repoData });

    });
});

app.listen(3000);