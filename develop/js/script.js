/*
 * Third party
 */

$(document).ready(function () {

    // fancybox
    $(document).ready(function () {
        $(".fancybox").fancybox();
    });

    // swiper slider
    var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
//        autoplay: 2500,
//        autoplayDisableOnInteraction: false,
//        effect: 'fade',
        loop: true
    });


    // animate scroll
    $(function () {
        var topPos = $('.floating').offset().top;
        $(window).scroll(function () {
            var top = $(document).scrollTop(),
                pip = $('.footer').offset().top,
                height = $('.floating').outerHeight();
            if (top > topPos && top < pip - height) {
                $('.floating').addClass('fixed').removeAttr("style");
            }
            else if (top > pip - height) {
                $('.floating').removeClass('fixed').css({'position': 'fixed', 'width': '292.5px', 'top': '0'});
            }
            else {
                $('.floating').removeClass('fixed');
            }
        });
    });


    // sidebar
    $(".call-the-master").click(function(){
       $("#sidebar").toggleClass("show");
    });

});