
var navSection = angular.module('navSection',['duScroll']);


navSection.component('navSection',{


	templateUrl:`modules/navigation/navigation-template.html`,
	controller: function navigationController($http,$scope,$location,$document){

		var self = this;

		/*$document.on('scroll', function() {
      console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    });*/

   /* var someElement = angular.element(document.getElementById('home-section'));
    var offset = 60;
    var duration =2000;
    $document.scrollToElement(someElement, offset, duration);*/

    /*var container = angular.element(document.getElementById('home-section'));
    container.on('scroll', function() {
      console.log('Container scrolled to ', container.scrollLeft(), container.scrollTop());
    });*/
		$scope.clickThis = function (href){
			/*console.log("clicked");*/
			
		}
   

	}






}).value('duScrollOffset',300);



