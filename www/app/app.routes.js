(function(){
  "use strict";

  angular.module('starter')
  .config( initializeRoutes);

  initializeRoutes.$inject=['$stateProvider', '$urlRouterProvider'];


 function initializeRoutes($stateProvider, $urlRouterProvider){

   $stateProvider

     .state('tab', {
     url: '/tab',
     abstract: true,
     templateUrl: 'templates/tabs.html'
   })

   // Each tab has its own nav history stack:

   .state('tab.dash', {
     url: '/dash',
     views: {
       'tab-dash': {
         templateUrl: 'templates/tab-dash.html',
         
       }
     }
   })

   .state('tab.chats', {
       url: '/chats',
       views: {
         'tab-chats': {
           templateUrl: 'templates/tab-chats.html',

         }
       }
     })
     .state('tab.chat-detail', {
       url: '/chats/:chatId',
       views: {
         'tab-chats': {
           templateUrl: 'templates/chat-detail.html',

         }
       }
     })

   .state('tab.account', {
     url: '/account',
     views: {
       'tab-account': {
         templateUrl: 'templates/tab-account.html',

       }
     }
   });

   // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/tab/dash');

 }

})();
