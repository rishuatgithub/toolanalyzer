
app.config(function($routeProvider){
    $routeProvider
        .when("/",{ templateUrl: "Home.html" })
        .when("/home",{ templateUrl: "Home.html" })
        .when("/details",{ templateUrl: "Details.html" })
        .when("/points",{ templateUrl: "Points.html" })
        .when("/pointschat",{ templateUrl: "PointsChat.html" })
        .when("/market",{ templateUrl: "Market.html" })
        .otherwise({ templateUrl: "Error.html" });
});