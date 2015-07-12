var home = angular.module('home', [])

home.controller('homeController', ['$http', '$location', '$scope', function ($http, $location, $scope) {
	var currentUser = AV.User.current();
	if (currentUser) {
		console.log(currentUser.attributes);
		$scope.username = currentUser.attributes.username;
	} else {
		$location.path('login');
	  // show the signup or login page
	}

	$scope.logout = function () {
		AV.User.logOut({
			success: function (user) {
				console.log(user);
				$location.path('index')
			},

			error: function (user, error) {
				console.log(error);
			}
		});
	}
}])