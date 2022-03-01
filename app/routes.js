angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/product",{
        templateUrl: "app/templates/product.html"
    })
    .when("/system",{
        templateUrl: "app/templates/system.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});