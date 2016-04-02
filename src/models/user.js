'use strict';

// Require mongoose to access it's methods
var mongoose = require('mongoose');

// Define a schema for the user model
var schema = mongoose.Schema({
  name: String,
  username: String,
  email: String
});

// Create the user model with the mongoose.model method
var User = mongoose.model( 'User', schema );

// Expose the user model to the rest of the application
module.exports = User;
