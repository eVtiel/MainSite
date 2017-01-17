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
    }, 500);
});

// jQuery('.tmproject').click(function(){
//   $(this).data('clicked', true);

// if(jQuery('.section').data('clicked')) {
// 	 		$(this).css('background-color', '#a91b0d');
// 	} 
// });



// sections size

	$('.tmproject').click(function(){

		$ (this).parent(this).toggleClass('sectionHeight');
	});

// hover color

	$('.tmproject').click(function(){

		$ (this).addClass('tmclicked');
	});

// open all prajects

	$('#allProjects').click(function(){
		$ ('.section').toggleClass('sectionHeight');

	});


