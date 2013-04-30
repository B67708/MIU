//John Cardiff-Winchell
//MIU 1304
// Project 4
$('#mainPage').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#addItemForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.




