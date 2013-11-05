'use strict';
var engines = require('consolidate');
var express = require('express');
var http = require('http');
var moment = require('moment');
var path = require('path');
var scss = require('sassafras');
var app = express();

function fixture(name) {
  return require(path.join(__dirname, 'fixtures', name));
}

function json(data) {
  return function(req, res) { res.json(data); };
}

function render(view) {
  return function(req, res) { res.render(view); };
}

function locationsForPage(page) {
  var locations = fixture('locations');
  var items = 25;
  var begin = (page - 1) * items;
  var end = begin + items;
  return locations.slice(begin, end);
}

app.engine('hbs', engines.handlebars);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(scss.middleware({
  src: path.join(__dirname, 'views'),
  dest: path.join(__dirname, 'build')
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

if('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
  res.render('index', {

    // Featured locations
    featureds: fixture('featureds'),

    // Featured blogs
    blogs: fixture('blogs'),

    partials: {

    },
    helpers: {

    }
  });
});

app.get('/locations/page/:page', function(req, res) {
  res.render('index', {

    // Locations by page.
    locations: locationsForPage(req.param('page')),

    // Tags grouped by 'area', 'type', 'style' and 'feature'
    tags: fixture('tags'),

    partials: {

    },
    helpers: {

    }
  });
});

app.get('/locations', function(req, res) {
  res.redirect('/locations/page/1');
});

// Endpoint for tests
app.get('/specs', render('index'));

// JSON api endpoints
app.get('/api/locations', json(fixture('locations')));
app.get('/api/featureds', json(fixture('featureds')));
app.get('/api/blogs', json(fixture('blogs')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
