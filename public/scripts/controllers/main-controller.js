'use strict';

angular.module('signin')
.controller('mainCtrl', function( $scope, mainService ) {

  mainService.getUsers(function( response ) {
    $scope.users = response.data.users;
  });

});
