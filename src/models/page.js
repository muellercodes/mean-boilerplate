'use strict';

// Include mongoose
var mongoose = require('mongoose');

// Creare schema for pages
var schema = mongoose.Schema({
  title: String,
  status: String,
  author: String,
  templates: [{
    name: String,
    url: String
  }]
});

// Create Page model for interacting with the database
var Page = mongoose.model('Page', schema);

// Expose the Page model to the rest of the application
module.exports = Page;
