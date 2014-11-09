.when('/profile', {
  templateUrl: 'views/profile.html',
  controller: 'ProfileCtrl'
})
'use strict';

/**
 * @ngdoc overview
 * @name devFlowApp
 * @description
 * # devFlowApp
 *
 * Main module of the application.
 */
angular.module('devFlowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.utils',
    'simpleLogin'
  ]);
