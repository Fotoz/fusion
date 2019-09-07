$(function() {

	// Smooth-scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		var sectionId = $(this).data('scroll'),
				sectionOffset = $(sectionId).offset().top;

		$('html, body').animate({
			scrollTop: sectionOffset
		}, 700);
	});


	// Forbids to move images and links on the page
	$('img, a').on('dragstart', function(event) {
		event.preventDefault();
	});


	// Section: Services
	$('#strategy_link, #strategy_btn').on('click', function(event) {
		event.preventDefault();

		$('.s-services-content').slideToggle(500)
		$('#s_services_strategy').slideToggle(500)
	});

	$('#branding_link, #branding_btn').on('click', function(event) {
		event.preventDefault();

		$('.s-services-content').slideToggle(500)
		$('#s_services_branding').slideToggle(500)
	});

	$('#design_link, #design_btn').on('click', function(event) {
		event.preventDefault();

		$('.s-services-content').slideToggle(500)
		$('#s_services_design').slideToggle(500)
	});

});
