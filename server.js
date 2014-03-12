var express = require('express'),
	cors = require('cors'),
    movies = require('./config/db'),
    path = require('path');
 
var app = express();

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
    res.render('./public/index.html');
});

// Server end-point
app.get('/movies/:title', movies.findByTitle);
app.get('/movies', movies.findAll);
app.get('/movienames', movies.getMovieTitles);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
