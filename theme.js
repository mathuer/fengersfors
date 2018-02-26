Bliss.Theme = function() {
};

	Bliss.Theme.HandleColumnTransform = function(){
	if( !$("#content-wrapper .page").length ){
		return;
	}
	
	$(".column-transform").each(function(){
		var column = $(this);
		var class_list = $(this).attr("class").split(" ");

		column_class = class_list[class_list.length-1];
		
		var split = column_class.split("-");
		var col_size = split[split.length-1];
		
					
		column.removeClass( column_class );
		column.addClass( "col-md-" + col_size);


	});
}		  
// Create an instace of your function.
$(function($) {
Bliss.Theme.HandleColumnTransform();
} );