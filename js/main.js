jQuery(document).ready(function($) 
{
	
	// scroll indicator
	// $('body').progressScroll({
	// 	backgroundColor: "#3498DB",
	// 	height : "5px",
	// });
	
	// Vertical navigation
	//var dotCounter = $('p.f-inter').length;


// init();
// function init(){
// 	$('p.f-inter').each(function( index ) {
// 	  	$('nav ul').append('<li></li>');


// 	});

// 	$('nav ul li').on('click', function(e) {
// 		$('nav ul li').removeClass('is-active');
// 		$(this).addClass('is-active');
// 		//alert($(this).index());
// 		// SCROLL TO AN ELEMENT FUNCTION
// 	    $('html, body').animate({
// 	       scrollTop:$('p.f-inter:eq(' + $(this).index() + ')').offset().top
// 	    }, 1);
// 	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200) {
		$(".zoom").click(function () {
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	


// }

$('.slider').owlCarousel({
    margin:10,
    loop:true,
    items:1,
    lazyLoad: true,
    nav: false,
    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>']
})

	var ctx = document.getElementById('myChart').getContext('2d');
	// ctx.canvas.width = 200;
	// ctx.canvas.height = 100;
	var chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Faible", "Limité", "Marqué", "Fort", "Très fort"],
			datasets: [{
				label: 'Hors piste',
				data: [3, 24, 90, 4, 0],
				backgroundColor: [
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)'
				],
				borderColor: [
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)',
					'rgba(37, 166, 210, 1)'
				],
				borderWidth: 1
			},
			{
				label: 'Randonnée',
				data: [3, 77, 100, 5, 0],
				backgroundColor: [
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)'
				],
				borderColor: [
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)',
					'rgba(188, 28, 233, 1)'
				],
				borderWidth: 1
			},
			{
				label: 'Autre',
				data: [1, 1, 4, 6, 2],
				backgroundColor: [
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)'
				],
				borderColor: [
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)',
					'rgba(255, 209, 121, 1)'
				],
				borderWidth: 1
			}
			]
		},
		options: {
			responsive: true,
			tooltips: {
				mode: 'label',
				callbacks: {
					afterTitle: function () {
						window.total = 0;
					},
					label: function (tooltipItem, data) {
						var corporation = data.datasets[tooltipItem.datasetIndex].label;
						var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						window.total += valor;
						return corporation + ": " + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
					},
					footer: function () {
						return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
					}
				}
			},
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true,
						max: 200
						
					},
					scaleLabel: {
						display: true,
						labelString: "Nombre d'accidents mortels"
					}
				}],
				xAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: true
					},
					scaleLabel: {
						display: true,
						labelString: "Degré de danger prévu"
					}
				}]

			}
		}
	});




	
	

	

	// $(".button").on('click', function(e) {
	// 	$('.button').removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	// alert('hello');
	// 	// $(".iframe").load('http://theurltoload.com')
	// 	// e.preventDefault();
	// 	e.preventDefault();
	// 	var $el = $(this);
	// 	// alert($el.attr('map-url'));
	// 	$(".iframe").attr("src", $el.attr('map-url'));
	// });











	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.f-inter(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
