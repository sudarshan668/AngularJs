/// <reference path="Scripts/jquery-3.3.1.intellisense.js" />
$(document).ready(function ()
{
    var code="";
    console.log(" document load successfully");
   

    console.log("form hide successfully");

    $("#formbtnid").click(function () {
        $("#one").load("formelement.html");
       
    })

    $("#hidebtnid").click(function () {
        $("#formdiv").remove();

    })
    $("#hederbtnid").click(function () {
        $("#header").toggle();
       // $("#formdiv").toggle();
    });
   

});

