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