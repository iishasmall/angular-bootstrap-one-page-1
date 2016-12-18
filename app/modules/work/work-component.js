
var workSection = angular.module('workSection',['duScroll']);


workSection.component('workSection',{


	templateUrl:`modules/work/work.template.html`,
	controller: function workSectionController($http,$scope){

		var self = this;
		self.modalImg;
		 $scope.thumbnnailBtn = function (thumb){
		 	console.log(thumb+" - this is my thumb");
					//$('.modal-body').empty();
		  	var title = $(this).parent('a').attr("title");
		  	$('.modal-title').html(title);
		  	$($(this).parents('div').html()).appendTo('.modal-body');
		  	$('#myModal').modal({show:true});

		  	self.modalImg = thumb;

		}

/*
		$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});*/

	}



});
