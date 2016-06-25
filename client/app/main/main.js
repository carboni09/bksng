'use strict';

angular.module('booksnigeriaApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/books',
      template: '<main></main>'
    });
  });
