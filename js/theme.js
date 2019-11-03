;(function($){
    "use strict"


    var nav_offset_top = $('header').height() + 50; 
/*-------------------------------------------------------------------------------
Navbar 
-------------------------------------------------------------------------------*/

//* Navbar Fixed  
function navbarFixed(){
    if ( $('.header_area').length ){ 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();   
            if (scroll >= nav_offset_top ) {
                $(".header_area").addClass("navbar_fixed");
            } else {
                $(".header_area").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();





/*----------------------------------------------------*/
/*  Parallax Effect js
/*----------------------------------------------------*/
function parallaxEffect() {
    $('.bg-parallax').parallax();
}
parallaxEffect();




if(document.getElementById("number-section")){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}


//------- Owl Carusel  js --------//




$(document).ready(function() {


/*-------------------------------------------------------------------------------
Testimonial Slider 
-------------------------------------------------------------------------------*/

$('.testi_slider').owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    autoplay: 2500,
    smartSpeed: 1500,
    dots: true,
    responsiveClass: true
})


/*-------------------------------------------------------------------------------
Brand Slider 
-------------------------------------------------------------------------------*/
$(".brand-carousel").owlCarousel({
    items: 1,
    autoplay:false,
    loop:true,
    nav:false,
    margin: 30,
    dots:false,
    responsive: {
        0: {
            items: 1,
        },
        420: {
            items: 1,
        },
        480: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 5,
        }
    }
});

// Search Toggle
$("#search_input_box").hide();
$("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
});
$("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
});

});




//------- mailchimp --------//  
function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();

//-------- Counter js --------//
$(window).on("load", function() {


    $('.portfolio-filter ul li').on('click', function () {
        $('.portfolio-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $workGrid.isotope({
            filter: data
        });
    });

    if (document.getElementById('portfolio')) {
        var $workGrid = $('.portfolio-grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }
});


function makeTimer() {

    var endTime = new Date("21 November 2019 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>يوم</span>");
    $("#hours").html(hours + "<span>ساعة</span>");
    $("#minutes").html(minutes + "<span>دقيقة</span>");
    $("#seconds").html(seconds + "<span>ثانية</span>");

}

setInterval(function () { makeTimer(); }, 1000);

})(jQuery)