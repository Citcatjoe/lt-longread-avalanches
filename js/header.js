jQuery(document).ready(function($) 
{
	var $headerBgImg = $('.header--bg--img');
	var $headerBgVid = $('.header--bg--vid');
	var $headerTitle = $('.header--title');
	var controller = new ScrollMagic.Controller({});

	setIntroDone();
	function setIntroDone(){
		var scenef = new ScrollMagic.Scene({
			triggerHook: 'onEnter',
			duration: '100%',
			offset: 0
		})
			.setTween([$headerBgImg, $headerBgVid], {autoAlpha: 0, yPercent: '30%', scale: 1.2, ease: Power0.easeInOut}) 
			.addTo(controller);
	}





	var $overlay = $('.overlay'),
		$logoLt = $('.overlay .logo-brand'),
		$spinner = $('.spinner'),
		tlIntroduction;
	
	tlIntroduction =  new TimelineMax({ paused: false });

	tlIntroduction
		.set($headerTitle, { autoAlpha: 0, yPercent: '10' })
		.to([$spinner, $logoLt], 0.7, {autoAlpha: 0, ease: Power4.easeOut}, '+=1.5')
		.to($overlay, 1, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.0')
		.to($headerTitle, 2, { autoAlpha: 1, yPercent: '0' }, '+=2.0')
		.set($headerTitle, { clearProps: "all" }); ;




});
