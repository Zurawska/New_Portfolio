$(document).ready(function() {

// navigation
    $('button.nav-mobile-btn').click(function() {
        $('.nav-menu').toggleClass('clicked');
        $('.nav-mobile-btn-bar').toggleClass('clicked');
    });
    $('.nav-menu').click(function() {
        $('.nav-menu').toggleClass('clicked');
        $('.nav-mobile-btn-bar').toggleClass('clicked');
    });

    // slider
    var slideIndex = 1;
        showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = $('.mySlides').css('display', 'none');
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        slides.eq(slideIndex-1).css('display', 'block');
    }
    $('.prev').click(function() {
        plusSlides(-1);
    });
    $('.next').click(function() {
        plusSlides(1);
    });

    // flip
    var cardHeight;
    // Sets the height of the back of the card to match the image in front
    function setBackHeight() {
        cardHeight = $('.card .front').height();
        $('.card .back').height(cardHeight);
    }
    //Swap behavior of hover with click on touch devices
	if (Modernizr.touch){
		$('.card').on('click', function() {
            $(this).toggleClass('not-flipped');
		});
	} else {
		$('.card').hover(function() {
			$(this).toggleClass('not-flipped');
		});
	}
    // On window change, recalculate the size of the box
    window.onresize = function(){
        setBackHeight();
    };
    setBackHeight();
});
