var register = angular.module('register', [])

register.controller('registerController', ['$http', '$location', '$scope', 'appConfig', function ($http, $location, $scope, appConfig) {
    var appId = appConfig.getAppId();
    var appKey = appConfig.getAppKey();
    var masterKey = appConfig.getMasterKey();

    AV.initialize(appId, appKey);

	var user = new AV.User();

	$scope.registerFormSubmit = function (e) {
		console.log($scope.registerForm.userName);
		console.log($scope.registerForm.password);

		user.set("username", $scope.registerForm.userName);
		user.set("password", $scope.registerForm.password)

		user.signUp(null, {
			success: function (user) {
				AV.User.logIn($scope.registerForm.userName, $scope.registerForm.password,  {
					success: function(user) {
						console.log(user);
						$location("index");
					},
					error: function(user, error) {
						console.log(error)
						console.log(error.code, error.message);
					}
				})
			},

			error: function (user, error) {
				console.log(error)
				console.log(error.code, error.message);
			}
		})
	}
}])