'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('SettingsCtrl', function ($scope, EtsyApi, localStorageService) {
  	
	$scope.key = localStorageService.get('EtsyApiKey')
  	$scope.$watch( 'key', function(nv){
  		EtsyApi.setApiKey(nv);
  		localStorageService.set('EtsyApiKey', nv);
  	});

  	// $http.jsonp('https://openapi.etsy.com/v2/listings/active.js?callback=JSON_CALLBACK&api_key=gr54q024l0x8msvsa84gi33s').success(function(data){
  	// 	console.log(data);
  	// })

  });
