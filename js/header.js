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
		tlOverlay;

	tlOverlay = new TimelineMax({ paused: false });

	tlOverlay
		
		.to([$spinner, $logoLt], 0.7, { autoAlpha: 0, ease: Power4.easeOut }, '+=1.5')
		.to($overlay, 1, { autoAlpha: 0, ease: Linear.easeNone }, '-=0.0');
		

	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	if($(window).width() > 1200)
	{
		tlBgVid = new TimelineMax({ paused: false });

		tlBgVid
			.set($headerTitle, { autoAlpha: 0, yPercent: '10' })
			.to($headerTitle, 2, { autoAlpha: 1, yPercent: '0' }, '+=5.0')
			.set($headerTitle, { clearProps: "all" });
	}
	else
	{
		tlBgImg = new TimelineMax({ paused: false });

		tlBgImg
			.set($headerBgImg, { transformOrigin: 'center center', scale: 1.05 })
			.to($headerBgImg, 10, { scale: 1, ease: Power4.easeOut, y: 0 }, '+=2.0');
	}

	


	




});
