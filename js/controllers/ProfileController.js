app.controller('ProfileController', ['$scope', 'ProfileService', function ($scope, ProfileService) {
    $scope.greeting = 'Hola!';
    $scope.profiles = {
        'name': '',
        'lname': ''
    };
    ProfileService.getAll().then(function (data) {
        $scope.profile = data.data;
    }, function (error) {
        console.log(error);
    })
}]);