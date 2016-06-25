'use strict';

angular.module('booksnigeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profileIndex', {
        url: '/profiles',
        templateUrl: 'app/profileIndex/profileIndex.html',
    controller: 'ProfileIndexCtrl'
        
      });
  });