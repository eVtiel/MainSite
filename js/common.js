$(window).scroll(function(){
	var st = $(this).scrollTop();

	$('.container-fluid').css({
		'transform' : 'translate(0%, -'+ st /20 + '%'
	});


});
