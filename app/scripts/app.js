'use strict';

/**
 * @ngdoc overview
 * @name colossusAppApp
 * @description
 * # colossusAppApp
 *
 * Main module of the application.
 */
angular
  .module('colossusAppApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:pool_id', {
        templateUrl: 'views/pool.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
