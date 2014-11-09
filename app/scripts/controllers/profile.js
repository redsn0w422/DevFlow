'use strict';

/**
 * @ngdoc function
 * @name devFlowApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the devFlowApp
 */
angular.module('devFlowApp')
  .controller('ProfileCtrl', function ($scope, $firebase, $routeParams, $http, md5) {
    var ref = new Firebase('https://devflow.firebaseio.com/users');
	var sync = $firebase(ref);
	$scope.user = {};
	$scope.foundUsername = false;
	$scope.hashedEmail = "http://www.gravatar.com/avatar/";

	$http.get('https://devflow.firebaseio.com/users.json')
	.success(function(data) {
		for (var key in data) {
			var obj = data[key];
			console.log(obj);
			if (obj.username.toLowerCase() === $routeParams.username.toLowerCase()) {
				$scope.user = obj;
				$scope.foundUsername = true;
				$scope.hashedEmail+=md5.createHash($scope.user.email);
			}
		}
	});
  });
