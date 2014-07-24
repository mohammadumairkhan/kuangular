'use strict';

angular.module('kuangular').controller('modelUpdateOnCtrl',['$scope', function($scope){
	$scope.onSubmitForModel = function(argsOne, argsTwo){
		alert(argsOne + " " + argsTwo);
	}
}]);