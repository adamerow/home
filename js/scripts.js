// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$('.left').backstretch([
      "img/me.jpg"
    , "img/orange.png"
    , "img/quadcopter.png"
  ], {duration: 4000, fade: 750});

// Intialize Masonry
$('.masonry').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 293,
	gutter: 10,
	isFitWidth: true
});

////Close Buttons (closed)
//$('#contact .close').click( function()
//{
//    $('#contact').removeClass('.open');
//    $('#contact').addClass('.closed');
//    $('#contact .close').hide();
//});
//
//$('#resume .close').click( function()
//{
//    $('#resume').removeClass('.open');
//    $('#resume').addClass('.closed');
//    $('#resume .close').hide();
//});
//
////Close Buttons (open)
//$('#contact').click( funtion()
//{
//    $('#contact').removeClass('.closed');
//    $('#contact').addClass('.open');
//    $('#contact .close').show();
//});
//
//$('#resume').click( funtion()
//{
//    $('#resume').removeClass('.closed');
//    $('#resume').addClass('.open');
//    $('#resume .close').show();
//});