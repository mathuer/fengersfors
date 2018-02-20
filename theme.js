Bliss.Theme = function() {
};

Bliss.Theme.HandlePopup = function() {
	$( ".open-pop" ).click(function() {
		$( ".stores" ).slideToggle( "slow" );	

	});
	$( ".close-pop" ).click(function() {
		$( ".stores" ).slideToggle( "slow" );	

	});
};
				  
// Create an instace of your function.
$(function($) {
	Bliss.Theme.HandlePopup();
} );