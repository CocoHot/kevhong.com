angular.module('indexPage').controller('ContactController', function ($scope, $http) {
	$scope.lastForm = {};
	
	$scope.sendForm = function(form) {
		$scope.lastForm = angular.copy(form);
		$http({
			method: 'POST',
			url: "index/backend/email.php",
			data: {
				'contactname':$scope.form.name,
				'email':$scope.form.email,
				'message':$scope.form.message
			},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status, headers, config){
			$scope.resultData = data;
			alert("Message sent successfully!");
		}).error(function(data, status, headers, config) {
			$scope.resultData = data;
			alert("Sending message failed.");
			});
	}
	
	$scope.resetForm = function() {
		$scope.form = angular.copy($scope.lastForm);
	}
});