'use strict';

angular.module('booksnigeriaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profileCreate', {
        url: '/profileCreate',
        templateUrl: 'app/profileCreate/profileCreate.html',
    controller: 'ProfileCreateCtrl'
        
      });
  });
