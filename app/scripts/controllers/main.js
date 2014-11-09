'use strict';

/**
 * @ngdoc function
 * @name devFlowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devFlowApp
 */
var myapp = angular.module('devFlowApp');

myapp.controller('MainCtrl', function ($scope, $firebase, $routeParams, $http) {
    $scope.searchOnClick = function () {
        var ref = new Firebase('https://devflow.firebaseio.com/users');
        var sync = $firebase(ref);
        $scope.user = {};
        $http.get('https://devflow.firebaseio.com/users.json')
        .success(function(data) {

            for (var key in data) {
                var obj = data[key];
                if (obj.name === $scope.query) {
                    $scope.name="works";
                    console.log($scope.name);
                    $scope.user = obj;
                    break;
                }
                else {
                    $scope.name="no";
                    console.log($scope.name);
                }
            }
        });
    };
  });
