(function(){
  "use strict";

  angular.module('starter')
  .config(configBlock)

  configBlock.$inject=['$ionicConfigProvider'];

  function configBlock($ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
  }

})();
