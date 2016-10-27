// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$('.left').backstretch('/nameplate/img/bg.jpg');

// Intialize Masonry
$('.right').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 255,
	gutter: 10,
	isFitWidth: true
});