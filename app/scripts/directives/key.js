'use strict';

/**
 * @ngdoc function
 * @name etsyApp.directive:etsyKey
 * @description
 * # EtsyKey
 * directive that collects and saves the Etsy Key
 */
var app = angular.module('etsyApp') 
  .directive('etsyKey', function (localStorageService, EtsyApi) {
  	return {
        templateUrl: 'views/etsy_key.html',
  		link: function($scope){
  			$scope.key = localStorageService.get('EtsyApiKey')
		  	$scope.$watch( 'key', function(nv){
		  		EtsyApi.setApiKey(nv);
		  		localStorageService.set('EtsyApiKey', nv);
		  	});
  		}
  	};
  });
