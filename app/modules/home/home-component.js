var homeSection = angular.module('homeSection',['duScroll'])


homeSection.component('homeSection',{

  
	templateUrl:`modules/home/home.template.html`,
	controller: function homeSectionController($http,$scope,$document){

		var self = this;

	


	}



})/*.value('duScrollOffset', 30);*/

/*angular.module('myApp', ['duScroll']).
  controller('MyCtrl', function($scope, $document){
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);*/
