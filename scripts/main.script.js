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
});
