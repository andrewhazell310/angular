var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

