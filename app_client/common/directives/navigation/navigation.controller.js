(function () {
	angular
		.module('angularApp')
		.controller('navigationCtrl', navigationCtrl);

	navigationCtrl.$inject = ['$location', 'authentication', 'pathTracker'];

	function navigationCtrl($location, authentication, pathTracker) {
		var vm = this;
		
	}
})();