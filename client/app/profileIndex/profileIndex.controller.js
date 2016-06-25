'use strict';

angular.module('booksnigeriaApp')
  .controller('profileIndexCtrl',function ($scope, $http){
  	$http.get('api/profiles').success(function(profiles) {
  		$scope.profiles = profiles;
  	});
  });