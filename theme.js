Bliss.Theme = function() {
};

//Create a function for each one of your javascript/jQuery operations to maintain order!
Bliss.Theme.HandleThemeDialog = function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );

// Create an instace of your function.
$(function($) {
	Bliss.Theme.HandleThemeDialog();
} );

