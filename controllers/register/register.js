var register = angular.module('register', [])

register.controller('registerController', ['$http', '$location', '$scope', function ($http, $location, $scope) {
	$scope.registerFormSubmit = function (e) {
		console.log($scope.registerForm.userName);
		console.log($scope.registerForm.password);

		$location.path("index");
	}
}])