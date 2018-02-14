(function(){
angular
	.module('angularApp')
	.controller('homepageCtrl', homepageCtrl);

homepageCtrl.$inject = ['$location', 'authentication'];

function homepageCtrl ($location, authentication) {
	var vm = this;
	
};
})();