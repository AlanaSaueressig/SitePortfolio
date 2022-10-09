$(document).ready(function() {
	$(window).scroll(function(){
		if(this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky"); /* quando vai pra cima ele remove a opção */
		}
	});

//	$('.menu-btn').click(function(){
//		$('.navbar .menu').toggleClass("active");
//		$('.menu-btn i').toggleClass("active");
//	})
});