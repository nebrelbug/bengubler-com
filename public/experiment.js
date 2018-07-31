$( document ).ready(function() {
  $.get( "/index.html", function( data ) {
  document.getElementById("result").innerHTML = data;
});
    // Handler for .ready() called.
});
