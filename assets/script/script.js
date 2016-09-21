/*******************************************************************************
 *                   Behaviour of the home button when hover                   *
 *******************************************************************************/

$( ".page-scroll a" ).hover(             // Hover some sort of animation
  function() {
    $( this ).addClass( "hover-button" );
  }, function() {
    $( this ).removeClass( "hover-button" );
  }
);

/*******************************************************************************
 *                 Navigation Bar Sticking Fixed and Floating                  *
 *******************************************************************************/
