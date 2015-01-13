'use strict';

/**
 * @ngdoc function
 * @name etsyApp.lib:EtsyApi
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('EtsyApi', [])

  .provider('EtsyApi', function(){
  	
  	this.apiKey 	= '';
  	this.apiSecret 	= '';

  	this.$get = function( $location ){
  		return { 
  			endpoint: 'https://openapi.etsy.com/v2/',
		    setApiKey: function(key){
		  		this.apiKey = key;
		  	}
		};
  	}
  	return this;
   });
