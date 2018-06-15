var myApp = angular.module("myModule", ['ngRoute', 'oc.lazyLoad']).controller("aboutmeController", function ($scope, $http) {




    //$http.post('WebService1.asmx/GetCompanys').then(function (response) {
    //    $scope.newdata = response.data;
    //});

    $scope.emp =
        {
            FirstName: "Sudarshan",
            LastName: "Sonawane",
            Age: 18,
            Page: "aboutmeController"

        };





});