/// <reference path="controller/mycontroller.js" />
/// <reference path="controller/mycontroller.js" />


//// <reference path="angular.min.js" />


//var myApp = angular.module("myModule", ['ngRoute']).controller("myController", function ($scope, $http) {

//    $http.post('WebService1.asmx/GetCompanys').then(function (response) {
//        $scope.newdata = response.data;
//    });





//    $scope.emp =
//        {
//            FirstName: "Sudarshan",
//            LastName: "Sonawane",
//            Age: 18

//        };





//});

var myApp = angular.module('myModule', ['ngRoute', 'oc.lazyLoad']);

    myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "views/aboutme.html", 
        controller: 'aboutmeController',
        resolve: {
            js: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("controller/aboutmeController.js");

            }]
        }
    })

	.when('/home', {
        templateUrl: "views/home.html",
        controller: 'myController',
        resolve: {
            js : ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("controller/myController.js");

            }]
        }
	})

	.when('/posts', {
        templateUrl: "views/posts.html",
        controller: 'postsController',
        resolve: {
            js: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("controller/postsController.js");

            }]
        }
	})
        
	.when('/contact', {
        templateUrl: "views/contact.html",
        controller: 'contactController',
        resolve: {
            js: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load("controller/contactController.js");

            }]
        }
	})
        
	.otherwise({ redirectTo: '/' })
})


     