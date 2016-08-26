$(function () {
	// var numPages = 1;
	var headerHeight, meHeight, projectsHeight, contactHeight;
	setTimeout(function () {
		headerHeight = parseInt($("#site-header").outerHeight());
		meHeight = parseInt($("#me").outerHeight());
		projectsHeight = parseInt($("#projects").outerHeight());
		contactHeight = parseInt($("#contact").outerHeight());
	}, 50);
	// console.log(headerHeight);
	$(window).scroll(function () {
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() > 50) {
			$("#site-header .header-filler").addClass("sticky");
		} else {
			$("#site-header .header-filler").removeClass("sticky");
		}
		if ($(window).scrollTop() > $("#me").offset().top - headerHeight - 1 &&
			$(window).scrollTop() < $("#me").offset().top + meHeight) {
			$("#me_button").addClass("in-view");
		} else {
			$("#me_button").removeClass("in-view");
		}
		if ($(window).scrollTop() > $("#projects").offset().top - headerHeight - 1 &&
			$(window).scrollTop() < $("#projects").offset().top + projectsHeight) {
			$("#projects_button").addClass("in-view");
		} else {
			$("#projects_button").removeClass("in-view");
		}
		if ($(window).scrollTop() > $("#contact").offset().top - headerHeight - 1 &&
			$(window).scrollTop() < $("#contact").offset().top + contactHeight) {
			$("#contact_button").addClass("in-view");
		} else {
			$("#contact_button").removeClass("in-view");
		}
		// for (var i = 2; i <= numPages*2; i+=2) {
		// 	var height = parseInt($("#group"+i).css("height"), 10);
		// 	var offset = $("#group"+i).offset().top - $("#parallax").scrollTop() - height;
		// 	console.log("first=" + offset + " second=" + (offset + 2*height));
		// 	if (offset < 0 && (offset + 2*height) > 50) {
		// 		$("#group"+ i +" .parallax__layer--base").addClass("in-view");
		// 	} else {
		// 		$("#group"+ i + " .parallax__layer--base").removeClass("in-view");
		// 	}
		// }

		// for (var i = 2; i <= numPages*2; i+=2) {
		// 	var height = parseInt($("#group"+i).css("height"), 10);
		// 	var offset = $("#group"+i).offset().top - $(window).scrollTop() - height;
		// 	var factor = 200;
		// 	if (offset < 0 && offset > -factor) {
		// 		$("#group"+ i +" .parallax__layer--base").css({"opacity": (-offset) / factor});
		// 	} else if (offset < -factor) {
		// 		$("#group"+ i +" .parallax__layer--base").css({"opacity": 1});
		// 	}
		// }
	});
});