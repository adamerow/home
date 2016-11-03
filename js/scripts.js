// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$('.left').backstretch([
      "http://placehold.it/1500x1000/"
    , "http://placehold.it/1000x1500/"
    , "http://placehold.it/1000x1000/"
  ], {duration: 4000, fade: 750});

// Intialize Masonry
$('.masonry').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 293,
	gutter: 10,
	isFitWidth: true
});