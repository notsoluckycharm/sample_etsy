'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
