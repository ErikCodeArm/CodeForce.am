$(document).ready(function() {

    // nav bar menu 

    $('.led').on('click', function(e){
        e.preventDefault();
        $('.led svg g').css('fill', '#FFC000');
        $('body, nav, .leng button').css('background', '#fff');
        $('.cotiner, .leng').css('background', '#eee');
        $('.btn-up').css('background', '#B2B2B2');
        $('.leng button').css('color', '#000');
        $('.leng_am').css('background', '#222222');
        $('.leng_am').css('color', '#fff');
        $('.hr_color').css('border-top', '1px solid #eee');
        $('nav ul li.btn span').css('color', '#000');
        $('nav ul li.btn span').css('border', '1px solid #000');
        $('nav ul div.items a, a').css('color', '#777777');
        $('.about h1, .about_txt, .website h2, .continer h2, .cliend h2').css('color', '#777777');
        $('.website_img h2, .website_img1 h2, .website_img2 h2, .website_img3 h2, .website_img3 h2').css('color', '#777777');
        $('.input_cliend span, .input_cliend span i, .email_txt, .email_em').css('color', '#777777');
        $('.foot, .foot1, .cont_txt, .cont_ph').css('color', '#777777');
      });
      
    $('nav ul li.btn span').click(function(){
        $('nav ul div.items').toggleClass("show");
        $('nav ul li.btn span').toggleClass("show");
      });

      // btn-up

      var $btn = $('.btn-up');
      var h = 700;
      var btnShowed = false;
      
      function onScrollEnd(){
          var scrollTop = $(this).scrollTop();
  
          if(!btnShowed && scrollTop >= h){
              $btn.fadeIn(20);
              btnShowed = true;
          }
          else if(btnShowed && scrollTop < h){
              $btn.fadeOut(20);
              btnShowed = false;
          }
      }
  
      $btn.on('click', function(){
          $('html, body').animate({
              scrollTop: 0
          }, 700);
      });
  
      onScrollEnd.call(document);

      // btn-up end
    
    })