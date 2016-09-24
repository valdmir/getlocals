$(document).ready(function(){
  $('.slick').slick();
  $(window).scroll(function () {
    console.log($(document).scrollTop() );

    if($(document).scrollTop() > 10 &&$(document).scrollTop() <30 )
    {

        $("#logoblue").css({opacity:1});
        $("#logowhite").css({opacity:0});

        $("#header_nav p").css({color:"black"});
      $("#header_background").animate({opacity:1},{
      queue: false,
      duration: 100
    });

    }
    else if($(document).scrollTop() < 10 )
    {
      $("#logoblue").css({opacity:0});
      $("#logowhite").css({opacity:1});
      $("#header_nav p").css({color:"white"});
      $("#header_background").animate({opacity:0},{
      queue: false,
      duration: 100
    });

    }
    else if($(document).scrollTop()>30 &&$(document).scrollTop()<50){
      $("#header_nav").animate({height:"100px"},{
        queue: false,
        duration: 300
      });
      $(".navbar-custom").animate({marginTop:"20px"},{
        queue: false,
        duration: 300
      });
    }
    else if($(document).scrollTop()>50 ){
      $("#header_nav").animate({height:"60px"},{
        queue: false,
        duration: 300
      });
      $(".navbar-custom").animate({marginTop:"0px"},{
        queue: false,
        duration: 300
      });
    }
});
});
