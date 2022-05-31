var navff = $('.navbar').offset().top;

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > navff){
        $('.navbar').addClass('menu_fix');
    }
    else{
        $('.navbar').removeClass('menu_fix');
    }
});
$('.btn_top').click(function(){
    $('html, body').animate({
        scrollTop : 0,
    },2000);
});
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // slick slider Part Start Here

    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:".prev",
        nextArrow:".next",
        speed:3000,
    });
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:2000,
    });
    $('.story_slide').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    $('.team_slide').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 1000,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    

});