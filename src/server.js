'use strict';

// Require and include Express
var express = require('express');
var server = express();

var database = require('./database.js');

// Include the Page model from ./models/pages.js
var Page = require('./models/page.js');

// Include the API Router from ./api
var APIRouter = require('./api');

// Server static files from the root of the directory
server.use('/', express.static('./public'));

// Mount router to the server
server.use('/api', APIRouter );

// Listen for changes and serve files on port 3000
server.listen(3000, function() {
  console.log( "Express server running on port 3000" );
});
