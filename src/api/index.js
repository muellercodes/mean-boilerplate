'use strict';

// Include Express
var express = require('express');

// Instantiate Express Router class
var APIRouter = express.Router();

// Include the database
var Page = require('../models/page.js');
var User = require('../models/user.js');

// Create route for api/pages
APIRouter.get('/pages', function( req, res ) {
  Page.find({}, function( error, pages ) {
    if( error ) {
      return console.log( error.message );
    } else {
      res.json({ pages: pages });
    }
  })
});

// Create route for api/users
APIRouter.get('/users', function( req, res ) {
  User.find({}, function( error, users ) {
    if( error ) {
      return console.log( error.message );
    } else {
      res.json({ users: users });
    }
  });
});

// Expose the router to the rest of the application
module.exports = APIRouter;
