'use strict';

angular.module('signin')
.service('mainService', function( $http ) {

  this.getUsers = function( callback ) {
    $http.get( 'http://localhost:3000/api/users').then( callback );
  }

});
