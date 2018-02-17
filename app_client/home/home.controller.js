(function(){
angular
	.module('angularApp')
	.controller('homepageCtrl', homepageCtrl);

homepageCtrl.$inject = ['$location'];

function homepageCtrl ($location) {
	var vm = this;
	
};
})();