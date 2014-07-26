/**
 * Created by M Umair Khan on 7/27/2014.
 */

'use strict';

angular.module('kuangular').controller('paginationDemoCtrl', function($scope, UserList){

    $scope.users = UserList.data.Users;

    $scope.paginationSettings = {
        totalUsers: $scope.users.length,
        currentPage: 1,
        usersPerPage: 8
    }

    $scope.headers = [
        {
            title: "First Name"
        },
        {
            title: "Last Name"
        },
        {
            title: "User Name"
        },
        {
            title: "Email Address"
        }
    ]
});

