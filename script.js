var app = angular.module('modName', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
    	{
    		controller: 'theController',
    		templateUrl: 'home.html'
    	})
    .when('/view1',
      {
        controller: 'theController',
        templateUrl: 'dog.html'
      })

    .when('/view2',
      {
        controller: 'theController',
        templateUrl: 'cat.html'
      })
    .when('/view3',
      {
        controller: 'theController',
        templateUrl: 'giraff.html'
      })
    .when('/view4',
      {
        controller: 'theController',
        templateUrl: 'octo.html'
      })
    .otherwise({ redirectTo: '/' });
});

app.controller('theController', function(){
  
});