var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/herodb');
mongoose.model(
  'Hero',
  new Schema({
    "alias": String,
    "first_name": String,
    "last_name": String,
    "city": String,
    "primary_power": String
  },
  {
    collection: 'Heroes'
  }
));

mongoose.model(
  'Super Power',
  new Schema({

  },
  {
    collection: 'Super Powers'
  }
));

var Hero = mongoose.model('Hero');
var Power = mongoose.model('Super Power');

app.get('/getpowers', function(req, res) {
  Power.find({}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    console.log(data);
    res.send(data);

  });
});

app.post('/savehero', function(req, res) {
  var addHero = new Hero({
    "alias": req.body.alias,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "city": req.body.city,
    "primary_power": req.body.primary_power
  });

  //post new blog post
  addHero.save(function(err, data) {
    if(err) {
      console.log('ERROR:', err);
    }
    Hero.find({}, function(err, data) {
      if(err) {
        console.log('ERROR:', err);
      }
      res.send(data);
    });
  });
});

app.get('/heroes/:primary_power', function(req, res) {
  Hero.find({"primary_power": req.params.primary_power}, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    }
    console.log("from factory", req.params);
    console.log(data);
    res.send(data);
  });
});

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
