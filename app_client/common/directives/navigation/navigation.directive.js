(function () {
	angular
		.module('angularApp')
		.directive('navigation', navigation);

	function navigation() {
		return {
			restrict: 'EA',
			scope: {
				content : '=content'
			},
			templateUrl: '/common/directives/navigation/navigation.template.html',
			controller: 'navigationCtrl as navvm'
		};
	}
}) ();