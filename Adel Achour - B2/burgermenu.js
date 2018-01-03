$( document ).ready(function() {

$( ".bouton A" ).hide();
$( ".bouton B" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".bouton C" ).hide();
$( ".cross" ).show();
});
});

$( ".Bouton A" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".Bouton B" ).show();
});
});

});
