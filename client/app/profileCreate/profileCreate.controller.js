'use strict';

angular.module('booksnigeriaApp')
  .controller('profileCreateCtrl',function ($scope, $http, $location) {

    
    $scope.submit = function() {
      $http.post('/api/profiles', $scope.profile).success(function(){
        $location.path('/');
      });
    };

  });
    
  
