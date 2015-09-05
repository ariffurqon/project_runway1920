var app = angular.module('project_runway1920', ['ui.router']);

	app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/home.html',
	      controller: 'MainCtrl'
	    });

	  $urlRouterProvider.otherwise('home'); //redirect to home if couldn't find anything
	}]);

	app.factory('posts', [function(){
	  var x = {
	    posts: []
	  };
	  return x;
	}]);

	app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
		$scope.test = 'You are beautiful!';

		$scope.posts = posts.posts;

		$scope.addPost = function(){
		  if(!$scope.title || $scope.title === '') { return; }
		  $scope.posts.push({
		    title: $scope.title,
		    link: $scope.link,
		    upvotes: 0
		  });
		  $scope.title = '';
		  $scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
		  post.upvotes += 1;
		};

}]);