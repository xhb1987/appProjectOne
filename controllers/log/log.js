var log = angular.module('log', [])

log.controller("logInController", ['$scope', '$location', function ($scope, $location) {
	var user = new AV.User();

	$scope.logInFormSubmit = function (e) {
		AV.User.logIn($scope.logInForm.userName, $scope.logInForm.password,  {
			success: function(user) {
				console.log(user);
				$location.path("index");
			},
			error: function(user, error) {
				console.log(error)
				console.log(error.code, error.message);
			}
		})
	}
}])

log.controller("logOutController", ['$scope', '$location', function ($scope, $location) {
	AV.User.logOut();
}])
