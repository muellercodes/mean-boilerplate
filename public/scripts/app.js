'use strict';

var app = angular.module('signin', ['ngRoute'])
.controller('mainCtrl', function( $scope, mainService ) {

  mainService.getUsers(function( response ) {
    console.log( response.data.users );
    $scope.users = response.data.users;
  });
})

.service('mainService', function( $http ) {

  this.getUsers = function( callback ) {
    $http.get( 'http://localhost:3000/api/users').then( callback );
  }

});
