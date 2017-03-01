'use strict';
angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
        $routeProvider
            .when('/main', {
                templateUrl : 'main.html'
            })
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'dishdetail.html',
                controller  : 'DishDetailController'
            })
            .when('/aboutus', {
                templateUrl : 'aboutus.html'
            })
            .otherwise('/main');
    })
;


/*
https://docs.angularjs.org/api/ng/function/angular.module
// Create a new module
var myModule = angular.module('myModule', []);

// register a new service
myModule.value('appName', 'MyCoolApp');

// configure existing services inside initialization blocks.
myModule.config(['$locationProvider', function($locationProvider) {
  // Configure existing providers
  $locationProvider.hashPrefix('!');
}]);

*/