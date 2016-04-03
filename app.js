

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var config = require('./config/');
var express = require('express');
var bodyParser = require('body-parser');
//create routing object
var member = require('./api/members/index');


//create an express app
var app = express();

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//add static path.
app.use(express.static(config.root));
console.log(config.root);

//Add routes for contacts api
app.get('/api/members',member.index);
app.post('/api/members',member.create);
app.put('/api/members/:id',member.update);
app.delete('/api/members/:id',member.delete);

// Listen on port 8081, IP defaults to 127.0.0.1
app.listen(config.port)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8081/");