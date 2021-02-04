$(document).ready(function () {

    
      
$(".home-about-area .about-images .addaboutimage").fadeTo(2000, 1);
          
       
          
         
    
 
    $(window).scroll(function () {
      
      $(".benefits-section .card-img-top").fadeIn(1000);
        
      $('.benefits-section .card-img-top').css('display', 'flex');

      $(".wwd-section.spad.set-bg").fadeIn(3000);

      $(".wwd-section.spad.set-bg").css('display', 'flex');

      
       
    });

   
    $(".benefits-section .card-img-top img").mouseover(function(){
        $(this).css('height', '360px',
        'width', '360px');
        }, "slow");


        $(".benefits-section .card-img-top img").mouseout(function(){
            $(this).css('height', '350px',
            'width', '350px');
            }, "slow");


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
