var app = angular.module("myApp", []);
app.controller("myController", ["$scope", function($scope) {
	console.log($scope);
}]);