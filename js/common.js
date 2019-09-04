$(function() {

	// Forbids to move images and links on the page
	$('img, a').on('dragstart', function(event) {
		event.preventDefault();
	});

});
