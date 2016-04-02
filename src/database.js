'use strict';

// Include mongoose
var mongoose = require('mongoose');

// Establish a connection to the Mongo database
mongoose.connect('mongodb://localhost/login');

// Assigne the connection to a variable for testing
var database = mongoose.connection;

// Output feedback to user based on connection status
database.on('error', function() {
  console.log("Error establishing connection to database");
});

// Output feedback to user based on connection status
database.once('open', function() {
  console.log("Successfully connected to Mongo");
});
