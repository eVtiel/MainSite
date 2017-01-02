$(window).scroll(function(){
	var st = $(this).scrollTop();

	$('.container-fluid').css({
		'transform' : 'translate(0%, -'+ st /20 + '%'
	});

	$('.homepage-hero-module').css({
		'transform' : 'translate(0%, '+ st /10 + '%'
	});


});
