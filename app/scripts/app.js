'use strict';

/**
 * @ngdoc overview
 * @name etsyApp
 * @description
 * # etsyApp
 *
 * Main module of the application.
 */
var app = 
angular
  .module('etsyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'EtsyApi',
    'EtsyItem'
  ])
  .config(function ($routeProvider) {

    // $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
    
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })

      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'ItemsCtrl'
      })

      .when('/item/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })

      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  })

  .run(function(EtsyApi, localStorageService){
    EtsyApi.setApiKey( localStorageService.get('EtsyApiKey') );
  });
