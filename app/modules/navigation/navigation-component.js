
var navSection = angular.module('navSection',['duScroll']);


navSection.component('navSection',{
	"use strict";

	templateUrl:`modules/navigation/navigation-template.html`,
	controller: function navigationController($http,$scope,$location,$document){

		var self = this;

		
		$scope.clickThis = function (href){
			/*console.log("clicked");*/
			
		}
   

	}






}).value('duScrollOffset',50);



