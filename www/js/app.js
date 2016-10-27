// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/side/home');

    $stateProvider
      .state('sidemenu', {
        url: '/side',
        abstract: true,
        templateUrl: 'templates/side-menu.html',
      })
      .state('sidemenu.home', {
        url: '/home',
        views: {
          'menuContent' :{
            templateUrl: 'templates/home.html'
          }
        }
      })
      .state('sidemenu.nav', {
        url: '/nav',
        views: {
          'menuContent' :{
            controller: 'NavCtrl',
            templateUrl: 'templates/map.html'
          }
        }
      });
  });
