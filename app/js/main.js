jQuery(document).ready(function($) {
	$('.header__top-toggle').on('click', function() {

		$('.header__nav').slideToggle(400, function() {

			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}

		});

	});
});
