(function () {
	angular
		.module('angularApp')
		.controller('navigationCtrl', navigationCtrl);

	navigationCtrl.$inject = ['$location'];

	function navigationCtrl($location) {
		var vm = this;
		
	}
})();