

/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", ['ngRoute']).controller("myController", function ($scope, $http) {

    $http.post('WebService1.asmx/GetCompanys').then(function (response) {
        $scope.newdata = response.data;
    });





    $scope.emp =
        {
            FirstName: "Sudarshan",
            LastName: "Sonawane",
            Age: 18

        };





});

//var myApp = angular.module('myModule', ['ngRoute']);
       myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'myController',
    })

	.when('/aboutme', {
	    templateUrl: 'views/aboutme.html'
	    //controller: 'AboutMeController'
	})

	.when('/posts', {
	    templateUrl: 'views/posts.html'
	})

	.when('/contact', {
	    templateUrl: 'views/contact.html'
	})

	.otherwise({ redirectTo: '/' })
})


     