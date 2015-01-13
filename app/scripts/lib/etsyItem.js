'use strict';

/**
 * @ngdoc function
 * @name etsyApp.lib:EtsyApi
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('EtsyItem', [ 'EtsyApi' ])

  .provider('EtsyItem', function(){

  	this.$get = function( $http, EtsyApi ){
  		return {

        list: function(query){
          var endpoint = EtsyApi.endpoint + 'listings/active.js?' 
            + $.param( angular.extend( {}, { api_key: EtsyApi.apiKey, callback: 'angular.callbacks._' + angular.callbacks.counter }, query ) );

          return $http.jsonp( endpoint );
        }

      };
  	}
  
   });
