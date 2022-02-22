
$(document).ready(function () {

    // get color from local storage 
    var color;
    if (localStorage.getItem("color") == null) {
        // if this is the firist time (local storage does not exist)
        color = "rgb(255, 165, 0)"; // default color 
    }
    else {

        color = localStorage.getItem("color");
        // apply color on all elements
        $('.navbar-brand').css('border-color', color);

        $('.shape').css('background-color', color);
        $('.img-border img').css('border-color', color);
        $('.tags ul li span').css('border-color', color);
        $('.about .cv-link').css('border-color', color);
        $('.edu-year').css('color', color);
        $('.contact-icon').css('border-color', color);
        $('.floating-buttom a').css('background-color', color);
        $('.navbar-brand').css('border-color', color);
        $('.list-page li p').css('border-color', color);
        $('.active-page').css('background-color', color);


        $('.navbar-dark .navbar-nav .nav-link').hover(function () {
            // over
            $(this).css('color', color);
        }, function () {
            // out
            $(this).css('color', 'rgb(226, 225, 225)')
        }
        );
        $('ul li p').hover(function () {
            // over
            $(this).css('color', color);

        }, function () {
            // out
            $(this).css('color', 'rgb(226, 225, 225)')
        }
        );
        $('.social li a').hover(function () {
            // over
            $(this).css('color', color);

        }, function () {
            // out
            $(this).css('color', 'rgb(226, 225, 225)')
        }
        );
        $('.about .cv-link').hover(function () {
            // over
            $(this).css('color', color);

        }, function () {
            // out
            $(this).css('color', 'rgb(226, 225, 225)')
        }
        );
        $('.github a').hover(function () {
            // over
            $(this).css('color', color);

        }, function () {
            // out
            $(this).css('color', 'rgb(226, 225, 225)')
        }
        );
        $(".page").not('.active-page').hover(function () {
            // over
            $(this).css("background-color", color);
            $(this).css("color", "#fff");

        }, function () {
            // out
            $(this).css("background-color", "transparent");
            $(this).css("color", "#fff");
        }
        );


    }



    $(".sidebar span").click(function () {


        var bgColor = $(this).attr('class');
        var str = bgColor.split(" ");

        color = $("." + str[1]).css('background-color');

        localStorage.setItem("color", color);
        // apply color on all elements
        $('.navbar-brand').css('border-color', color);

        $('.shape').css('background-color', color);
        $('.img-border img').css('border-color', color);
        $('.tags ul li span').css('border-color', color);
        $('.about .cv-link').css('border-color', color);
        $('.edu-year').css('color', color);
        $('.contact-icon').css('border-color', color);
        $('.floating-buttom a').css('background-color', color);
        $('.navbar-brand').css('border-color', color);
        $('.list-page li p').css('border-color', color);
        $('.active-page').css('background-color', color);


    });

    $('.navbar-dark .navbar-nav .nav-link').hover(function () {
        // over
        $(this).css('color', color);
    }, function () {
        // out
        $(this).css('color', 'rgb(226, 225, 225)')
    }
    );

    $('.social li a').hover(function () {
        // over
        $(this).css('color', color);

    }, function () {
        // out
        $(this).css('color', 'rgb(226, 225, 225)')
    }
    );
    $('.about .cv-link').hover(function () {
        // over
        $(this).css('color', color);

    }, function () {
        // out
        $(this).css('color', 'rgb(226, 225, 225)')
    }
    );
    $('.github a').hover(function () {
        // over
        $(this).css('color', color);

    }, function () {
        // out
        $(this).css('color', 'rgb(226, 225, 225)')
    }
    );






    $('#view').hide();
    
    $('.floating-buttom').hide();

    $('.Certificate .cert-item .position-relative').click(function (e) {
        e.preventDefault();
        var image = $(this).find('img');
        var src = $(image).attr('src');

        $('#preview').attr('src', src);
        // $('#view').show();
        $('#view').show(0, function () {

            $('#view-card').show(0, function () {
                $('.block').css('transform', 'translateY(70px)');
                $('body').css('overflow', 'hidden');

            });


        });




    });
    $('#times').click(function () {


        $('.block').css('transform', 'translateY(-70px)');
        $('#view').hide(0, function () {
            $('body').css('overflow', 'visible');

        });




    });



    //sidebar
    // width of sidebar
    let sidebarWidth = $("#sidebar").innerWidth();

    // close the sidebar
    $(".sidebar-container").css("left", `-${sidebarWidth}px`);
    $(".setting").css("left", `-${sidebarWidth}px`);

    // when sidebar cliked
    $('.setting').click(function () {


        let sidebarLeftProperty = $(".sidebar-container").css("left");

        if (sidebarLeftProperty == "0px") {

            // if sidebar menu opend then close 
            $(".sidebar-container").animate({ left: `-${sidebarWidth}px` }, 500);
        }
        else {
            // if close then open it 
            $(".sidebar-container").animate({ left: `0px` }, 500);

        }

    });
    //  navbar  menu
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

        }, 10, function () {

            $(this).css('background-color', color);
            $(this).find(".heading , .search-icon ").css('opacity', 1);
            $(this).find('.heading , .search-icon').css("transform", "translateX(0px)");
        });


    }, function () {
        // out
        $(this).animate({
            opacity: 0.6,

        }, 10, function () {

            $(this).css('background-color', "transparent");
            $(this).find(".heading , .search-icon ").css('opacity', 0);
            $(this).find('.heading').css("transform", "translateX(100px)");
            $(this).find('.search-icon').css("transform", "translateX(-100px)");
        });


    }

    );

    // Select all links with hashes
    $('nav a[href*="#"] , #floating a[href*="#"]')
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
                    }, 1000);
                }
            }
        });

    // handeling active page 
    $(document).on("click", ".list-page li p", function (e) {


        // apply to the clicked element background-color 
        $(this).css("background-color", color).addClass("active-page");
        // remove background-color from the other element     
        $(this).parent().siblings().find('p').css("background-color", "transparent").removeClass("active-page");

    });
   
    
    // project section pages 
    $(".two").hide();
    var mixer = mixitup('#mixit');
    var mixer = mixitup(containerEl);

     
    var mixer = mixitup('#mixit', {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    
    



});

 

// Scroll Reveal 
let _scrollReveal = function () {
    // set common reveal properties on all alement 
    let SR = ScrollReveal({
        distance: '30px',
        duration: 1500,


    });

    

    // apply animation on element by selecting classes or ids

    ScrollReveal().reveal('.tags ul li', { origin: 'bottom', interval: 100, duration: 800, distance: '30px' });

    SR.reveal('.cert-item ,#certificate h2 ', { origin: 'bottom', interval: 200 })
    SR.reveal(
        `  .edu-details,
           .break-line ,
            .about-me h2 , 
            .about-me p ,
             .about-content .col-md-12 ,
             edu-left h2 , exp-right h2 ,
             #contact h2 , #projects h2
         `,
        { origin: 'bottom', interval: 200 });

    SR.reveal('.contact-content , .contact .row .col-md-9 p , .about-img', { origin: 'left', interval: 200 });
    SR.reveal('.contact-map , .contact .row .col-md-9 ul ', { origin: 'right', interval: 200 });


    // SR.reveal(".edu-details" , {origin: 'bottom', interval: 200 });


}
_scrollReveal();

$(document).ready(function(){

    // close loading screen
     
    $("#loading").fadeOut(1000 ,function () {
        $("body").css("overflow","auto");
    
      });
    
  });