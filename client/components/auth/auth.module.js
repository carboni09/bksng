'use strict';

angular.module('booksnigeriaApp.auth', ['booksnigeriaApp.constants', 'booksnigeriaApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
