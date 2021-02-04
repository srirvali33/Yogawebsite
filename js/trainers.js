$(document).ready(function () {

    

   $(".trainers-page-section .trainer-item .ti-text").slideDown(2000);
   $(".trainers-page-section .trainer-item .ti-img").fadeIn(1000);

   $(".classes-top .classes-item-warp ").fadeIn(1000);
   
   $(window).scroll(function () {
   $(".location .formgrid").fadeIn(3000);
    });

    
    /*------------------
    Back to top
  --------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $('.back-to-top').fadeIn();
      $('.back-to-top').css('display', 'flex');
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

});