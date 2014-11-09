'use strict';

/**
 * @ngdoc function
 * @name devFlowApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the devFlowApp
 */
angular.module('devFlowApp')
  .controller('ProfileCtrl', function ($scope, $firebase, $routeParams, $http) {
    var ref = new Firebase('https://devflow.firebaseio.com/users');
	var sync = $firebase(ref);
	$scope.user = {};
	$scope.foundUsername = false;

	$http.get('https://devflow.firebaseio.com/users.json')
	.success(function(data) {
		console.log(data);
		
		for (var key in data) {
			var obj = data[key];
			if (obj.name === $routeParams.username) {
				console.log('works');
				$scope.user = obj;
				$scope.foundUsername = true;
			}
			else {
				console.log('no');
			}
		}
	});
  });
