// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$('.left').backstretch('/img/bg.img');

// Intialize Masonry
$('.masonry').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 293,
	gutter: 10,
	isFitWidth: true
});