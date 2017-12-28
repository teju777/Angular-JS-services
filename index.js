
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("MOCK_DATA.JSON").then(function (response) {
        $scope.names = response.data;
    });
});


