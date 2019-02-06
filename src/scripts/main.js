$(window).on('load', function () {
  //hide section
  $('.portfolio_js').hide();
  $('.fotos_js').hide();
  //menu item active
  $( ".home_js" ).addClass( "nav-item_active" );
  //preloader
  $(".cssload-box-loading").fadeOut();
  $(".preloader").delay(400).fadeOut("slow");

  //header
  // $(".header-content").find('.header-content__description:eq(0)').addClass('animated bounce');
  // $(".header-content").find('.header-content__foto').addClass('animated swing');
  $(".header-content").find('.header-content__name').addClass('animated zoomIn');
  // $(".header-content").find('.header-content__description:eq(1)').addClass('animated fadeInUp');
})

//Animation when scrolling
//https://github.com/matthieua/WOW
new WOW().init()

$(document).ready(function() {

//Animate.css
$(".my-demo_js").addClass('wow zoomIn');
$(".about-img_js").addClass('wow swing');
$(".contact-img_js").addClass('wow rubberBand');


//menu (click)
$('.video_js').click(function() {
  $(".home_js").removeClass( "nav-item_active");
  $(".galerie_js").removeClass( "nav-item_active");
  $(".video_js").addClass( "nav-item_active");
  $('.about_js').hide();
  $('.fotos_js').hide();
  $('.portfolio_js').show();
});

$('.galerie_js').click(function() {
  $(".home_js").removeClass( "nav-item_active" )
  $(".video_js").removeClass( "nav-item_active" );
  $(".galerie_js").addClass( "nav-item_active");
  $('.portfolio_js').hide();
  $('.about_js').hide();
  $('.fotos_js').show();
});

$('.home_js').click(function() {
  $(".galerie_js").removeClass( "nav-item_active" )
  $(".video_js").removeClass( "nav-item_active" );
  $(".home_js").addClass( "nav-item_active");
  $('.portfolo_js').hide();
  $('.fotos_js').hide();
  $('.about_js').show();
});


//portfolio

   //1,2,3
	// $(".portfolio__list").find('.portfolio__item:eq(0)').addClass('fadeInLeft wow');
	// $(".portfolio__list").find('.portfolio__item:eq(1)').addClass('fadeInUp wow');
	// $(".portfolio__list").find('.portfolio__item:eq(2)').addClass('fadeInRight wow');


 //   //4,5,6
 //  $(".portfolio__list").find('.portfolio__item:eq(3)').addClass('fadeInLeft wow');
	// $(".portfolio__list").find('.portfolio__item:eq(4)').addClass('fadeInUp wow');
	// $(".portfolio__list").find('.portfolio__item:eq(5)').addClass('fadeInRight wow');

	// //7,8,9
	// $(".portfolio__list").find('.portfolio__item:eq(6)').addClass('fadeInLeft wow');
	// $(".portfolio__list").find('.portfolio__item:eq(7)').addClass('fadeInUp wow');
	// $(".portfolio__list").find('.portfolio__item:eq(8)').addClass('fadeInRight wow');

	// //10,11,12
	// $(".portfolio__list").find('.portfolio__item:eq(9)').addClass('fadeInLeft wow');
	// $(".portfolio__list").find('.portfolio__item:eq(10)').addClass('fadeInUp wow');
	// $(".portfolio__list").find('.portfolio__item:eq(11)').addClass('fadeInRight wow');


  $('.foto-list_js').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
             }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});




/*------------portfolio video----------------*/

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if(!document.getElementsByClassName) {
        // IE8 support
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    }
    else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Based on the YouTube ID, we can easily find the thumbnail image
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        // Overlay the Play icon to make it look like a video player
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // Create an iFrame with autoplay set to true
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // iframe.id = "play";


            // The height and width of the iFrame should be the same as parent
            // iframe.style.width  = this.style.width;
            // iframe.style.height = this.style.height;

            this.parentNode.replaceChild(iframe, this);
        }
    }
});

/*----------------------------------------------------------------*/


