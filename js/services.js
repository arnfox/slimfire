'use strict';

/* Services */

var slimfireServices = angular.module('slimfireServices', ['firebase']);

slimfireServices.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://slimfire.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

slimfireServices.factory("FB",
  function($firebaseArray) {
    return $firebaseArray.$extend({
        /**
         * Called each time there is an update from the server
         * to update our Book data
         */
        $$added: function (snap) {
            // call the super
            var changed = $firebaseArray.prototype
                .$$added.apply(this, arguments);
            // manipulate the date
            if( changed ) {
               this.date = new Date(this.date||0);
            }
            // inform the sync manager that it changed
            return changed;
        },
        
        /**
         * Used when our book is saved back to the server
         * to convert our dates back to JSON
         */
        toJSON: function() {
            return angular.extend({}, this, {
                // revert Date objects to json data
                date: this.date? this.date.getTime() : null
            });
        }
    });
  }
);