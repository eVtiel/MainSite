// $(window).scroll(function(){
// 	var st = $(this).scrollTop();

// 	$('.container-fluid').css({
// 		'transform' : 'translate(0%, -'+ st /20 + '%'
// 	});


// });

jQuery(window).resize(function() {
  if (jQuery(window).width() < 768) {
    jQuery(".footer1, .footer2").css('height', '500');
  }
});

jQuery(window).resize(function() {
  if (jQuery(window).width() > 768) {
    jQuery(".footer1, .footer2").css('height', '684');
  }
});

$("#resumeButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".fores").offset().top
    }, 1000);
});
