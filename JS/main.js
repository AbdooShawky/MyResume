$(function(){

    // download my cv
    // $('#link').click(function(e) {
    //     e.preventDefault();  //stop the browser from following
    //     window.location.href = 'PDF/Abdelrahman Shawky CV.pdf';
    // });
     // menu 
     $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {

            $("#nav").addClass('fixed-top').removeClass('bg-transparent'); //.css('background-color','#202026');
            document.getElementById("nav").style.backgroundColor = "#202026";
            document.getElementById("nav").style.padding = "3px";
            document.getElementById("#navs").style.padding = " 7px 10px ";
            


        }
        else {
            $("#nav").removeClass('fixed-top').addClass('bg-transparent');
            document.getElementById("#navs").style.padding = " 10px 15px ";
            document.getElementById("#navs").style.padding = "10px";

        }
    });

    $("#imgdesc , .heading , .search-icon").hide();
  
   $('.imgdesc').hover(function () {
   
           // over
          
           
           
           $(this).css('background-color',"rgba(255, 165, 0, 0.6)")
           $(this).find('.search-icon , .heading').fadeIn(200);

            
           
       }, function () {
           // out
           $(this).find( '  .search-icon , .heading').fadeOut(100);
           $(this).css('background-color',"transparent");

       
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
                    scrollTop: target.offset().top-50
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