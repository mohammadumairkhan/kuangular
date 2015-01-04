angular.module('kuangular',['ngRoute','ui.bootstrap']).config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/homepage.html'
        })
        .when('/scrollDemo',{
            templateUrl: 'views/setOnScrollDemo.html'
        })
        .when('/modelUpdateDemo',{
            templateUrl: 'views/modelUpdateOn.html',
            controller: 'modelUpdateOnCtrl as vm'
        })
        .when('/paginationDemo',{
            templateUrl: 'views/paginationDemo.html',
            controller: 'paginationDemoCtrl as vm',
            resolve: {
                UserList: function($http){
                    return $http.get('data/users.json').success(function(res){
                        return res;
                    });
                }
            }
        })
        .otherwise({redirectTo: '/'});
}]);