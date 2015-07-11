var home = angular.module('home', [])

home.controller('homeController', ['$http', '$location', '$scope', function ($http, $location, $scope) {
	console.log("home controller");
}])