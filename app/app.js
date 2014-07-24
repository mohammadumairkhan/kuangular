angular.module('kuangular',['ngRoute']).config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/homepage.html'
        })
        .when('/scrollDemo',{
            templateUrl: 'views/setOnScrollDemo.html'
        })
        .when('/modelUpdateDemo',{
            templateUrl: 'views/modelUpdateOn.html',
            controller: 'modelUpdateOnCtrl'
        })
}]);