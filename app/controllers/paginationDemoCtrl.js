(function(){

    'use strict';

    angular.module('kuangular').controller('paginationDemoCtrl', paginationDemoCtrl);

    paginationDemoCtrl.$inject = ['UserList'];

    function paginationDemoCtrl(UserList){

        var vm = this;

        vm.users = UserList.data.Users;

        vm.paginationSettings = {
            totalUsers: vm.users.length,
            currentPage: 1,
            usersPerPage: 8
        }

        vm.headers = [
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
    };

}());


