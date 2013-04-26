
$(document).ready(function() {

	function setCenter() {
		var half = $(window).height() / 2;
		var center = half - $('.wrapper').height() / 2;
		$('.wrapper').css("margin-top", center);
	}

	setCenter();

	$(window).resize(function() {
		setCenter();
	});
});
