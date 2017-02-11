$(document).ready(function() {

    $(document).on("click", ".mobile-icon", function() {
        $(".mobile-menu").slideToggle();
        if ($(".mobile-icon").hasClass("active")) {
            $(".mobile-icon").removeClass("active")
        } else {
            $(".mobile-icon").addClass("active");
        }
        
    });

    $('.work-slider').slick({
        "dots": true,
    });

    $('.team-slider').slick({

    });

    $(document).on("click",".menu-item a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).on("click", ".to-the-top", function() {

        var delay = 1000;

        $('body, html').animate({
            scrollTop: 0
        }, delay);

    });

    $('.to-the-top').fadeOut();

    $(document).scroll(function() {
        var top_show = 250;

        if ($(this).scrollTop() > top_show) {
            $('.to-the-top').fadeIn();
        } else {
            $('.to-the-top').fadeOut();
        }

    });

});