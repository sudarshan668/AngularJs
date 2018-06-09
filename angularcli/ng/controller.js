/// <reference path="angular.min.js" />
var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/First',
    {
        templateUrl:'First.html'

    }).when('/second',
    {
        templateUrl: 'second.html'

    }).otherwise({
        redirectTo: '/'

    });

});