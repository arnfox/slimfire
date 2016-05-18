'use strict';

/* Services */

var slimfireServices = angular.module('slimfireServices', ['firebase']);

slimfireServices.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://slimfire.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

slimfireServices.factory("FB", ["$firebaseArray",
  function($firebaseArray) {
    return $firebaseArray;
  }]
);