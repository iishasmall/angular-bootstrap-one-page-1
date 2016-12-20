
var workSection = angular.module('workSection',['duScroll']);


workSection.component('workSection',{
	

	templateUrl:"modules/work/work.template.html",
	controller: function workSectionController($http,$scope){

		var self = this;
		self.modalImg;
		self.modalTitle;

		$http.get('data/gallery.json').then(function (response) {
                          self.images = response.data;

                         
         });
		
		 $scope.thumbnnailBtn = function (thumb,title){
		 	
			self.modalTitle = title;	
		
		  	$('.modal-title').html(self.modalTitle);
		  	$($(this).parents('div').html()).appendTo('.modal-body');
		  	$('#myModal').modal({show:true});

		  	self.modalImg = thumb;
		  	



		}



	}



});
