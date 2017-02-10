$(document).ready(function() {

    $(window).scroll(function() {
        var fixed_head_height = $(".navbar").height();
        var winTop = $(window).scrollTop();
        if (winTop >= 211) {
            $("nav").addClass("sticky-header");
            $(".section-header").css("padding-top", fixed_head_height + "px");
        } else {
            $("nav").removeClass("sticky-header");
            $(".section-header").css("padding-top", 0);
        }
    });

    $(".client-slider").slick({
        "arrows": false,
        "dots": true,
        "autoplay": true,
        "draggable": false
    });

    $(document).on("click",".navbar-nav__link", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".nav").singlePageNav({
        offset: 0,                  // Offset from top
        currentClass: 'current',    // Class added to menu link when section is active
        currentThreshold: 0,        // Threshold for triggering current section action
        duration: 500,              // Duration of scroll animation in milliseconds 
        effect: 'swing',            // Effect for scroll animation
        started: function (){},     // Callback at start of animation
        finished: function (){}     // Callback after animation is finished
    });

});