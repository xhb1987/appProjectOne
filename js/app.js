var app = angular.module("appCalender", [
    'ngRoute',
    'register']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/register', {
        templateUrl: 'views/register/register.html',
        controller: 'registerController'
    }).
    when('/index', {
        templateUrl: 'views/index.html',
        controller: 'indexController'
    }).
    otherwise({
        redirectTo: '/index'
    })
}])

app.controller('appController', function () {
    console.log('app controller')
})

// Code goes here

// var demo = angular.module('app', ['ngRoute']);

// demo.config(function($routeProvider){
//   $routeProvider.when('/', {
//     controller: 'testController',
//     templateUrl: 'test.html'
//   })
// })

// var controllers = {};
// controllers.testController = function($scope){
//    $scope.first = "Info";
//     $scope.customers=[
//         {name:'jerry',city:'chicago'},
//         {name:'tom',city:'houston'},
//         {name:'enslo',city:'taipei'}
//     ];
// }

// demo.controller(controllers)