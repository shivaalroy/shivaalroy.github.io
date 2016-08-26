$(function () {
	var easingFunction = "easeInOutQuad";
	$("#name").click(function() {
		$("body").animate({
			scrollTop: 0
		}, 800, easingFunction);
	});
	$("#me_button").click(function() {
		var headerHeight = parseInt($("#site-header").outerHeight());
		$("body").animate({
			scrollTop: $("#me").offset().top - headerHeight
		}, 800, easingFunction);
	});
	$("#projects_button").click(function() {
		var headerHeight = parseInt($("#site-header").outerHeight());
		$("body").animate({
			scrollTop: $("#projects").offset().top - headerHeight
		}, 800, easingFunction);
	});
	$("#contact_button").click(function() {
		var headerHeight = parseInt($("#site-header").outerHeight());
		$("body").animate({
			scrollTop: $("#contact").offset().top - headerHeight
		}, 800, easingFunction);
	});
});