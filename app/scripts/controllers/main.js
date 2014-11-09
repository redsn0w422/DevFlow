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
        var hitCount = 0;
        console.log("succeeded at getting users");
            for (var key in data) {
                var obj = data[key];
                if (obj.name === $scope.query) {
                    $scope.user = obj;
                    ++hitCount;
                }
            }
            if (hitCount > 0) {
                $scope.name="Found " + hitCount + " Users with that name";
            } else {
                $scope.name="Found no users by that name";
            }
        });
    };
  });
