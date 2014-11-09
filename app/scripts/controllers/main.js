'use strict';

/**
 * @ngdoc function
 * @name devFlowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devFlowApp
 */
var myapp = angular.module('devFlowApp');
/*
myapp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
myapp.controller('MainCtrl', function ($scope, $firebase, $routeParams, $http) {
    var ref = new Firebase('https://devflow.firebaseio.com/users');
	var sync = $firebase(ref);
	$scope.user = {};
	$scope.name = "Nirajpant7";
	$http.get('https://devflow.firebaseio.com/users.json')
	.success(function(data) {
		console.log(data);

		for (var key in data) {
			var obj = data[key];
			if (obj.name === $scope.name) {
				console.log('works');
				$scope.user = obj;
			}
			else {
				console.log('no');
			}
		}
	});
  });
