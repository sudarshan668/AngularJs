/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", ['ngRoute']).controller("myController", function ($scope, $http, name)
     {

    $http.get('WebService1.asmx/GetCompanys').then(function (response) {
        $scope.newdata = response.data;
    });

    $scope.se = function (input) {

        if (!input)
        {
            return input;
        }
       // var output = "";
        $scope.output ="new";


           }; 
    $scope.emp =
        {
            FirstName:"Sudarshan",
            LastName: "Sonawane",
            Age:18

        };

    $scope.List = ["abc","asd","rferf"];

    var employees = [
         {name: "sid",gender:"male",salary:"10000"},
         {name: "sudarshan", gender: "male", salary: "10000" },
         {name: "sparky", gender: "male", salary: "10000" }

    ];
    $scope.employee = employees;
    $scope.employeeView = "employeeTable.html";
});


