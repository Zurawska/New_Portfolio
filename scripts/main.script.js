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
});
