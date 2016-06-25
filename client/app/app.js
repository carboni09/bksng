'use strict';

angular.module('booksnigeriaApp', ['booksnigeriaApp.auth', 'booksnigeriaApp.admin',
    'booksnigeriaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode(true);
  });
