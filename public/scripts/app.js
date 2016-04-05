'use strict';

var app = angular.module('signin', ['ngRoute']);

app.config(['$routeProvider', function( $routeProvider ) {
  $routeProvider.
    when('/home', {
      templateUrl: './page-templates/home.html',
      controller: 'mainCtrl'
    }).
    when('/about', {
      templateUrl: './page-templates/about.html',
      controller: 'mainCtrl'
    }).
    when('/company', {
      templateUrl: './page-templates/company.html',
      controller: 'mainCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);
