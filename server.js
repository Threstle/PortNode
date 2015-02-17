/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var port = process.env.PORT || 8080;
var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index','rightSide'
  )
})
app.listen(8080)

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
 
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});