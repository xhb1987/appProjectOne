var app = angular.module("appCalender", [
    'ngRoute',
    'log',
    'register',
    'home']);

app.run(['$location', '$rootScope', 'appConfig', function ($location, $rootScope, appConfig) {
    var appId = appConfig.getAppId();
    var appKey = appConfig.getAppKey();
    var masterKey = appConfig.getMasterKey();

    AV.initialize(appId, appKey);

    // var TestObject = AV.Object.extend("test");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}, {
    //   success: function(object) {
    //     console.log(object)
    //   alert("LeanCloud works!");
    //   }
    // });
}])

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/register', {
        templateUrl: 'views/register/register.html',
        controller: 'registerController'
    }).
    when('/login', {
        templateUrl: 'views/log/login.html',
        controller: 'logInController'
    }).
    when('/index', {
        templateUrl: 'views/index.html',
        controller: 'homeController'
    }).

    otherwise({
        redirectTo: '/index'
    })
}])



app.controller('appController', function () {
    console.log('app controller')
})

app.factory('appConfig', function () {
    var appId = "crqjnyuvk9tojueivbryqem8scgdcg4suxemkfj9tsjcopx1";
    var appKey = "ks10xmazpnablcysip2tb0cz80hsainjjwb0qt2ccd230amz";
    var masterKey = "emivuo9jzv96rhrwcsg8gg5qxyncnf9igpszlsjjxe1wweq3";

    return {
        getAppId: function () {
            return  appId;
        },

        getAppKey: function () {
            return appKey;
        },

        getMasterKey: function () {
            return  masterKey;
        }
    }
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