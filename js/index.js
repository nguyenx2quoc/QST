var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider   .state('home', {
        url:'/home' ,
        templateUrl: 'HomePage.html',
    });
    $stateProvider  .state('create', {
        url:'/create' ,
        templateUrl: 'CreateItem.html',
    });
    $stateProvider  .state('error', {
        url: '/404',
        templateUrl: 'error-404.html'
    });
    $stateProvider  .state('detail', {
        url:'/detail' ,
        templateUrl: 'DetailItem.html',
    });
    $stateProvider  .state('search', {
        url:'/search' ,
        templateUrl: 'Result.html',
    });
});