'use strict';

var app = angular.module('signin', ['ngRoute'])

.controller('mainCtrl', function( $scope, mainService ) {

  mainService.getUsers(function( response ) {
    $scope.users = response.data.users;
  });

})

.service('mainService', function( $http ) {

  this.getUsers = function( callback ) {
    $http.get( 'http://localhost:3000/api/users').then( callback );
  }

});

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
      redirectTo: ''
    });
}]);
