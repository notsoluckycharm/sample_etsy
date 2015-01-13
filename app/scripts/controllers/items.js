'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')

  .controller('ItemsCtrl', function ($scope, $location, EtsyItem) {

  	$scope.query = $location.search();
  	$scope.$watch( 'query', function(nv){
  		// $location.search( nv );
  		$scope.search( nv );
  	}, true )

  	$scope.search = function(query){
  		console.log( query );
	  	EtsyItem.list(query).success(function(data){
	 		$scope.data = data;
	 		console.log( data );
	  	});
	  	// TODO error handling
  	}

  });
