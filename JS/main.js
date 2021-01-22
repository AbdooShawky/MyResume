$(function () {

   
    var color ;
    if(localStorage.getItem("color") == null)
    {
        color ="rgb(255, 165, 0)";
    }
    else{
        color =  localStorage.getItem("color");
        // apply color on all elements
       $('.navbar-brand').css('border-color',color);
      
       $('.shape').css('background-color',color);
       $('.img-border img').css('border-color',color);
       $('.tags ul li span').css('border-color',color);
       $('.about .cv-link').css('border-color',color);
       $('.edu-year').css('color',color);
       $('.contact-icon').css('border-color',color);
       $('.floating-buttom a').css('background-color',color);
       $('.navbar-brand').css('border-color',color);
       $('.navbar-brand').css('border-color',color);
       $('.navbar-brand').css('border-color',color);
       $('.navbar-dark .navbar-nav .nav-link').hover(function () {
        // over
        $(this).css('color',color);
    }, function () {
        // out
        $(this).css('color','rgb(226, 225, 225)')
    }
);
$('ul li p').hover(function () {
        // over
        $(this).css('color',color);
            
    }, function () {
        // out
        $(this).css('color','rgb(226, 225, 225)')
    }
);
$('.social li a').hover(function () {
        // over
        $(this).css('color',color);

    }, function () {
        // out
        $(this).css('color','rgb(226, 225, 225)')
    }
);
$('.about .cv-link').hover(function () {
        // over
        $(this).css('color',color);

    }, function () {
        // out
        $(this).css('color','rgb(226, 225, 225)')
    }
);
$('.github a').hover(function () {
        // over
        $(this).css('color',color);

    }, function () {
        // out
        $(this).css('color','rgb(226, 225, 225)')
    }
);

    }
   
    

    $(".sidebar span").click(function(){


       var bgColor = $(this).attr('class');
       var str = bgColor.split(" ");
      
       color = $("."+str[1]).css('background-color');

       localStorage.setItem("color",color);
       // apply color on all elements
       $('.navbar-brand').css('border-color',color);
      
       $('.shape').css('background-color',color);
       $('.img-border img').css('border-color',color);
       $('.tags ul li span').css('border-color',color);
       $('.about .cv-link').css('border-color',color);
       $('.edu-year').css('color',color);
       $('.contact-icon').css('border-color',color);
       $('.floating-buttom a').css('background-color',color);
       $('.navbar-brand').css('border-color',color);
       $('.navbar-brand').css('border-color',color);
       $('.navbar-brand').css('border-color',color);
       
      
    });
    $('.navbar-dark .navbar-nav .nav-link').hover(function () {
            // over
            $(this).css('color',color);
        }, function () {
            // out
            $(this).css('color','rgb(226, 225, 225)')
        }
    );
    $('ul li p').hover(function () {
            // over
            $(this).css('color',color);
                
        }, function () {
            // out
            $(this).css('color','rgb(226, 225, 225)')
        }
    );
    $('.social li a').hover(function () {
            // over
            $(this).css('color',color);

        }, function () {
            // out
            $(this).css('color','rgb(226, 225, 225)')
        }
    );
    $('.about .cv-link').hover(function () {
            // over
            $(this).css('color',color);

        }, function () {
            // out
            $(this).css('color','rgb(226, 225, 225)')
        }
    );
    $('.github a').hover(function () {
            // over
            $(this).css('color',color);

        }, function () {
            // out
            $(this).css('color','rgb(226, 225, 225)')
        }
    );
    
   

   
       
        
    $('#view').hide();
    $('#view-card').hide();
    $('.floating-buttom').hide();
    
    $('.Certificate .cert-item .position-relative').click(function (e) {
        e.preventDefault();
        var image = $(this).find('img');
        var src = $(image).attr('src');
        
        $('#preview').attr('src',src);
        // $('#view').show();
        $('#view').show(0, function () {
            
            $('#view-card').show(0, function(){
                $('.block').css('transform', 'translateY(70px)');
                $('body').css('overflow', 'hidden');

            });
            
           
        });
       
        
        

    });
    $('#times').click(function(){

        
        $('.block').css('transform', 'translateY(-70px)');
        $('#view').hide(0, function () {
            $('body').css('overflow', 'visible');
           
        });
      
        


    });

    //sidebar
    $('.setting').click(function () { 
        
        if( $(this).data('switch') == "close")
        {

           
            $(this).animate({
                left:'200px'
            },300);
            $('#sidebar').animate({
                left:'0'
            },300);
            $(this).data('switch', 'open');
        }
        else{

            if( $(this).data('switch') == 'open')
            {
                $(this).animate({
                    left:'0px'
                },300);
                $('#sidebar').animate({
                    left:'-199px'
                },300);
                $(this).data('switch', 'close');
            }
        }   
    });
    // menu 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {

            $('#floating').show(500);
            $("#nav").removeClass('bg-transparent'); //.css('background-color','#202026');
            document.getElementById("nav").style.backgroundColor = "#202026";
            

        }
        else {
            $('#floating').hide(500);
            $("#nav").addClass('bg-transparent');
            

        }
        
    });

    //$("#imgdesc , .heading , .search-icon").hide();
    $('.imgdesc').hover(function () {

      
        //  $(this).css('background-color', "#09c");
        // over
        $(this).animate({
            opacity: 0.6,
            
        },10,function () { 
            
            $(this).css('background-color', color);
            $(this).find(".heading , .search-icon ").css('opacity', 1);
            $(this).find('.heading , .search-icon').css("transform","translateX(0px)");
         });
       

    }, function () {
        // out
        $(this).animate({
            opacity: 0.6,
            
        },10,function () { 
            
            $(this).css('background-color', "transparent");
            $(this).find(".heading , .search-icon ").css('opacity', 0);
            $(this).find('.heading').css("transform","translateX(100px)");
            $(this).find('.search-icon').css("transform","translateX(-100px)");
         });
       

    }

    );

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {

            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


        

});
 
let _scrollReveal = function(){
    let SR = ScrollReveal({
        distance: '30px',
        duration: 1500,
        reset: true,
    });


    ScrollReveal().reveal('.tags ul li', { origin: 'top', interval: 100, duration: 800, distance: '30px' });

    SR.reveal('.cert-item ,#certificate h2 ', {origin: 'top', interval: 200})
    SR.reveal(
        `.edu-details ,
           .break-line ,
            .about-me h2 , 
            .about-me p ,
             .about-content .col-md-12 ,
             edu-left h2 , exp-right h2 ,
             #contact h2 , #projects h2
         `,
        { origin: 'top', interval: 200 });

    SR.reveal('.contact-content , .contact .row .col-md-9 p , .about-img', { origin: 'left', interval: 200 });
    SR.reveal('.contact-map , .contact .row .col-md-9 ul ',
        { origin: 'right', interval: 200 }

    );
}
_scrollReveal();