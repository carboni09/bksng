'use strict';

angular.module('booksnigeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>'
      });
  });
