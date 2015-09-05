var app = angular.module('project_runway1920', []);

	app.controller('MainCtrl', ['$scope', function($scope){
		$scope.test = 'You are beautiful!';

		$scope.posts = [
		  'post 1',
		  'post 2',
		  'post 3',
		  'post 4',
		  'post 5'
		];

}]);