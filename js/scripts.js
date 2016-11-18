// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$('.left').backstretch(
{
    "img/me.jpg",
    "img/orange.png",
    "img/quadcopter.png"
}, {duration: 5000, fade: 850});

// Intialize Masonry
$('.masonry').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 293,
	gutter: 10,
	isFitWidth: true
});

//Startup Layout
$('#contact').addClass('closed');
$('#contact .close').hide();

$('#resume').addClass('closed');
$('#resume .close').hide();

//Close Buttons (closed)

$('#contact .close').click( function()
{
    console.log("close clicked");
    $('#contact').removeClass('open');
    $('#contact').addClass('closed');
    $('#contact .close').hide();
});

$('#resume .close').click( function()
{
    console.log("close clicked");
    $('#resume').removeClass('open');
    $('#resume').addClass('closed');
    $('#resume .close').hide();
});

//Close Buttons (open)
$('#contact h2').click( function()
{
    console.log("open clicked");
    $('#contact').removeClass('closed');
    $('#contact').addClass('open');
    $('#contact .close').show();
});

$('#resume h2').click( function()
{
    console.log("open clicked");
    $('#resume').removeClass('closed');
    $('#resume').addClass('open');
    $('#resume .close').show();
});