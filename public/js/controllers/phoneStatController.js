angular.module('app')
    .controller('phoneStatController', function ($scope, $http) {
    $http.get('/phones')
    .then(function (phones) {
        $scope.phones = phones.data;
    });
});