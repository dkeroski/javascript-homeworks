$(function () {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$("#goUp").fadeIn('slow');
		}else {
			$("#goUp").fadeOut('slow');
		}
	});
})