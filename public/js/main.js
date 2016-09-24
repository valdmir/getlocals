$(document).ready(function(){
  $('.slick').slick();
  $(window).scroll(function () {

    if($(document).scrollTop() > 10 )
    {
        $("#logoblue").css({opacity:1});
        $("#logowhite").css({opacity:0});
        $("#li-text-download").css({backgroundColor:"blue"});
        $("#text-download").css({color:"white"});

        $("#header_nav p").css({color:"black"});
      $("#header_background").animate({opacity:1,height:"60px;"},{
      queue: false,
      duration: 100
    });

    }
    else if($(document).scrollTop() < 10 ){
      $("#logoblue").css({opacity:0});
      $("#logowhite").css({opacity:1});
      $("#header_nav p").css({color:"white"});
      $("#li-text-download").css({backgroundColor:"white"});
      $("#text-download").css({color:"gray"});
      $("#header_background").animate({opacity:0,height:"100px;"},{
      queue: false,
      duration: 100
    });
    }
    if($(document).scrollTop()<50){
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

      $("#header_background").animate({opacity:1,height:"60px;"},{
      queue: false,
      duration: 100
    });
      $("#header_nav").animate({height:"60px"},{
        queue: false,
        duration: 200
      });
      $(".navbar-custom").animate({marginTop:"0px"},{
        queue: false,
        duration: 300
      });

    }
  });
  $(window).scrollTop(0);

});
