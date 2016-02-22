app.factory('ProfileService', function ($http) {
    return {
        getAll: function () {
            return $http({
                method:'GET',
                url:'/data/profile.json'
            });
        }
    }
});