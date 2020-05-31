var express = require("express");
app = express();
axios = require("axios");
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get('/user/:id', function(req, res) {

    var user = axios({
        method: 'get',
        url: 'https://api.github.com/users/' + req.params.id,
        headers: {
            'User-Agent': req.params.id
        }

    });

    var repo = axios({
        method: 'get',
        url: 'https://api.github.com/users/' + req.params.id + '/repos',
        headers: {
            'User-Agent': req.params.id
        }

    });

    axios.all([user, repo]).then(function(response) {
        var userData = response[0].data;
        var repoData = response[1].data;
        res.render('index', { user: userData, repo: repoData });

    });
});

app.listen(3000);