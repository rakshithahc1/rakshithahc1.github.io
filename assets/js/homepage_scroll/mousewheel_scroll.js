$(document).ready(function(){


    //Set each section's height equals to the window height
    // $('.scroll-anim').height($(window).height());
    /*set the class 'active' to the first element 
     this will serve as our indicator*/
    $('.scroll-anim').first().addClass('active');


$('body, html').delay(1000).animate({
        scrollTop: $('.we-on-banner').position().top
        }, 'slow');

    /* handle the mousewheel event together with 
     DOMMouseScroll to work on cross browser */
    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();//prevent the default mousewheel scrolling
        var active = $('.scroll-anim.active');
        var indactive = $('.scroll-indicators li.active');
        //get the delta to determine the mousewheel scrol UP and DOWN
        var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
        
        //if the delta value is negative, the user is scrolling down
        if (delta < 0) {
            //mousewheel down handler
            next = active.next('.scroll-anim');

            //indicator
            nextind = indactive.next('li');
            //check if the next section exist and animate the anchoring
            if (next.length) {
               /*setTimeout is here to prevent the scrolling animation
                to jump to the topmost or bottom when 
                the user scrolled very fast.*/
                var timer = setTimeout(function () {

                    /* animate the scrollTop by passing 
                    the elements offset top value */
                    $('body, html').animate({
                        scrollTop: next.offset().top
                    }, 'slow');
                    
                    // move the indicator 'active' class
                    next.addClass('active')
                        .siblings().removeClass('active');
                    nextind.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        } else {
            //mousewheel up handler
            /*similar logic to the mousewheel down handler 
            except that we are animate the anchoring 
            to the previous sibling element*/
            prev = active.prev('.scroll-anim');

            //indicator
            prevind = indactive.prev('li');

            if (prev.length) {
                var timer = setTimeout(function () {
                    $('body, html').animate({
                        scrollTop: prev.offset().top
                    }, 'slow');

                    prev.addClass('active')
                        .siblings().removeClass('active');
                    prevind.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        }
    });


    //onclick indicators scroll animation
      $('.scroll-indicators > li').click(function(){
        $('.scroll-indicators > li').removeClass('active')
        $(this).addClass('active');
        var dval = $(this).data('tab');

        $('.scroll-anim').each(function(){
            // alert( $('body, html').offset().top);
            var scrolldval = $(this).data('value');
            //for the product svg line animation
            if(dval == 4)
            {
                $("#product-boundary-line").attr("class","product-boundary-line");
            }
            else{
                 $("#product-boundary-line").attr("class","");
            }
            if(dval == scrolldval) {
              $(".scroll-anim").removeClass('active');
              $(this).addClass('active');
              console.log($(this).offset().top);
              $('body, html').animate({
                          scrollTop: $(this).position().top
                      }, 'slow');
            }
            else {
              $(this).removeClass('active');
            }

        });

      });
    // End of onclick indicator scroll animation

    //homepage mousescroll animation
  $('#headerscroll').click(function(){
      var scrollsec = $(this).parents('.scroll-anim');
      $('body, html').animate({scrollTop: scrollsec.next().offset().top}, 'slow');
      scrollsec.removeClass('active');
      scrollsec.next().addClass('active');
      $('.scroll-indicators > li').removeClass('active');
      $('.scroll-indicators > li:eq(1)').addClass('active');
  });



   $('.scroll-indicators li').click(function () {
        var value = $(this).attr('data-tab');
    if( value == 3)
    {
        $(".scroll-indicators li .hw-label").css("color","#fff");
        // $('li').addClass('other-li');
    }
    else {
        $(".scroll-indicators li .hw-label").css("color","#ee2b7b");
    }

   });


    // $('.idesktop').hide();
    // $('.ipad').hide();
    // $('.iphone').show();

    // $('.res1').mouseover(function(){
    //     $('.res1').attr('src','/assets/img/landingpage/hover-mobile.svg');
    // });
    // $('.res1').mouseleave(function(){
    //     if(!$(this).parent().hasClass("active"))
    //     {
    //     $('.res1').attr('src','/assets/img/landingpage/Responsive_Mobile_Icon.svg');
    //     }
    // });
    // $('.res1').click(function() {
    //     if($(".res2").parent().hasClass("active"))
    //     {
    //         $(".res2").parent().removeClass("active");
    //         $('.res2').attr('src','/assets/img/landingpage/Responsive_Desktop_Icon.svg');
    //     }
    //     if($(".res3").parent().hasClass("active"))
    //     {
    //         $(".res3").parent().removeClass("active");
    //         $('.res3').attr('src','/assets/img/landingpage/Responsive_Tablet_Icon.svg');
    //     }
    //     $(this).parent().addClass("active");
    //      $('.idesktop').hide();
    //      $('.ipad').hide();
    //      $('.iphone').show();
    //      $('.res1').attr('src','/assets/img/landingpage/hover-mobile.svg');
    // });

    //  $('.res2').mouseover(function(){
    //     $('.res2').attr('src','/assets/img/landingpage/hover-desk.svg');
    // });
    //  $('.res2').mouseleave(function(){
    //     if(!$(this).parent().hasClass("active"))
    //     {
    //     $('.res2').attr('src','/assets/img/landingpage/Responsive_Desktop_Icon.svg');
    //     }
    // });
    // $('.res2').click(function() {
    //     if($(".res1").parent().hasClass("active"))
    //     {
    //         $(".res1").parent().removeClass("active");
    //         $('.res1').attr('src','/assets/img/landingpage/Responsive_Mobile_Icon.svg');
    //     }
    //     if($(".res3").parent().hasClass("active"))
    //     {
    //         $(".res3").parent().removeClass("active");
    //         $('.res3').attr('src','/assets/img/landingpage/Responsive_Tablet_Icon.svg');
    //     }
    //     $(this).parent().addClass("active");
    //      $('.idesktop').show();
    //      $('.ipad').hide();
    //      $('.iphone').hide();
    //      $('.res2').attr('src','/assets/img/landingpage/hover-desk.svg');
    // });


    //  $('.res3').mouseover(function(){
    //     $('.res3').attr('src','/assets/img/landingpage/hover-ipad.svg');
    // });
    //  $('.res3').mouseleave(function(){
    //     if(!$(this).parent().hasClass("active"))
    //     {
    //     $('.res3').attr('src','/assets/img/landingpage/Responsive_Tablet_Icon.svg');
    //     }
    // });
    // $('.res3').click(function() {
    //     if($(".res1").parent().hasClass("active"))
    //     {
    //         $(".res1").parent().removeClass("active");
    //         $('.res1').attr('src','/assets/img/landingpage/Responsive_Mobile_Icon.svg');
    //     }
    //     if($(".res2").parent().hasClass("active"))
    //     {
    //         $(".res2").parent().removeClass("active");
    //         $('.res2').attr('src','/assets/img/landingpage/Responsive_Desktop_Icon.svg');
    //     }
    //     $(this).parent().addClass("active");
    //      $('.idesktop').hide();
    //      $('.ipad').show();
    //      $('.iphone').hide();
    //      $('.res3').attr('src','/assets/img/landingpage/hover-ipad.svg');
    // });



   


});