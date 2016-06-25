'use strict';

angular.module('booksnigeriaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('bookCreate', {
        url: '/bookCreate',
        templateUrl: 'app/bookCreate/bookCreate.html',
        controller: 'BookCreateController',
        controllerAs: 'vm'
      });
  })
