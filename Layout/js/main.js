$(function(){

	//scroll to top
	$('.button-up').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 300);
		return false;
	});


	//show up-button
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		if (y > 800) {
			$('.button-up').removeClass('hidden');
		} else {
			$('.button-up').addClass('hidden');
		}
	});

});
