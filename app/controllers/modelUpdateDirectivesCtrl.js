(function(){

	'use strict';

	angular.module('kuangular').controller('modelUpdateOnCtrl', modelUpdateOnCtrl);

	function modelUpdateOnCtrl(){
		var vm = this;

		vm.onSubmitForModel = function(argsOne, argsTwo){
			alert(argsOne + " " + argsTwo);
		}
	};

}());

