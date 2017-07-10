(function(){
  "use strict";

  angular.module('starter')
  .config( initializeRoutes);

  initializeRoutes.$inject=['$stateProvider', '$urlRouterProvider'];


 function initializeRoutes($stateProvider, $urlRouterProvider){

   $stateProvider
    .state('find', {
     url: '/find',
     templateUrl: 'app/songs/find.html',
     controller:"FindController",
     controllerAs: "vm"
   })

   // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/find');

 }

})();
