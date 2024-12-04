$(document).ready(function () {
	let controller = new ScrollMagic.Controller();

	$('.project').each(function(index) {
		let triggerElement = $(this).find('.content')[0];

		let scene = new ScrollMagic.Scene({
			triggerElement: triggerElement,
			triggerHook: 0.8
		});

		if (index % 2 === 0) {
			scene.setClassToggle(triggerElement, "fade-left");
		} else {
			scene.setClassToggle(triggerElement, "fade-right");
		}

		scene.addTo(controller);
	});
});
