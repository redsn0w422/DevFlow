'use strict';
/**
 * @ngdoc function
 * @name devFlowApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('devFlowApp')
  .controller('ChatCtrl', function ($scope, fbutil, $timeout, $rootScope) {
    console.log('from main ' + $rootScope.user);
    console.log($rootScope.user);
    $("#profLink").attr("href","#/profile"+$rootScope.user.username);
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.messages = fbutil.syncArray('messages', {limit: 10});

    // display any errors
    $scope.messages.$loaded().catch(alert);

    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.messages.$add({text: newMessage})
          // display any errors
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
