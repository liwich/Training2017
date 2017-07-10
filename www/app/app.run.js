(function(){
  "use strict";
  angular.module('starter')
  .run(runBlock)

  runBlock.$inject=['$ionicPlatform'];

  function runBlock($ionicPlatform){
    $ionicPlatform.ready(function() {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

  }

})();
