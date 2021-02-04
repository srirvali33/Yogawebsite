$(document).ready(function () {

 
    $(window).scroll(function () {
      
      $(".home-about-area .about-images .addimage").fadeIn();
        
      $('.home-about-area .about-images .addimage').css('display', 'flex');
        
       
      });

  /*-------------------------------
 Counter Up
 ---------------------------------*/
 

 $(".counter").counterUp({
  delay: 20,
  time: 4000,
  
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




  /*-------------------------------
owl carousel
---------------------------------*/

  $(".owl-carousel").owlCarousel({

    autoPlay: 3000,
    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 5
      }
    }




  });




});

