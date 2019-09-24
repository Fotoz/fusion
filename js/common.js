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


	// Checking for touch event
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		console.log('this is a touch device');
		document.body.classList.add('touch');
	} else {
		console.log('this is not a touch device');
		document.body.classList.add('no-touch');
	}


	// Owl-carousels
	$('.portfolio-active-carousel').owlCarousel({
		items: 1,
		smartSpeed: 700
	});

	$('.portfolio-hidden-carousel, .testimonials-carousel').owlCarousel({
		items: 1,
		smartSpeed: 700,
		loop: true
	});


	// Section: Services
	$('[data-service]').on('click', function(event) {
		event.preventDefault();

		var serviceId = $(this).data('service');

		$('.services-main').slideToggle(500);
		$(serviceId).slideToggle(500);
	});


	// Section: Portfolio
	$('[data-project]').on('click', function(event) {
		event.preventDefault();

		var projectId = $(this).data('project');

		$('.owl-carousel.portfolio-active-carousel').slideToggle(500);
		$(projectId).slideToggle(500);
	});

	$('.carousel-display--js').on('click', function(event) {
		event.preventDefault();

		$('.owl-carousel.portfolio-active-carousel, .hidden-carousel-wrapper').slideToggle(500);
	});


	// Section: Our Team
	$('.profile-wrapper').on('click', function(event) {
		$(this).addClass('active');
		$('.profile-wrapper.active .single-profile, .profile-wrapper.active .active-profile').fadeToggle();
		$(this).removeClass('active');
	});


	// Section: Footer
	$('input').focus(function() {
		$(this).prev('label').addClass('label-active');
	})
	.blur(function() {
		if ( $(this).val() === '' ) {
			$(this).prev('label').removeClass('label-active');
		}
	});

});
