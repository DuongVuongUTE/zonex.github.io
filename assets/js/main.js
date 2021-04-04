window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-container");
    header.classList.toggle("sticky", window.scrollY >= 100);
  });
let topbar = document.querySelector('.top-bar');
let topbar_icon = document.querySelector('.top-bar__icon');
topbar_icon.addEventListener("click", event =>{
    topbar.classList.add('hide')
})


$(document).ready(function(){
  let owl_1 = $('.featured-owl-carousel')
  let owl_2 = $('.more-owl-carousel')
  let owl_slider = $('.slider-owl')
  owl_slider.owlCarousel({
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  })
  owl_1.owlCarousel({
      animateOut: 'fadeOut',
      lazyLoad : true,
      loop:false,
      margin: 30,
      dots:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          480:{
              items:2,
              nav:false
          },
          740:{
            items:3,
            nav:false
          },
          1023:{
            items:4,
            nav:false
          },
          1200:{
              items:5,
              nav:false,
              loop:false
          }
      }
  })
  owl_2.owlCarousel({
    animateOut: 'fadeOut',
    lazyLoad : true,
    loop:false,
    margin: 30,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        450:{
          items:2,
          nav:false
        },
        740:{
            items:3,
            nav:false
        },
        900:{
          items:4,
          nav:false
        },
        1200:{
          items:5,
          nav:false
        },
        1400:{
            items:6,
            nav:false,
            loop:false
        }
    }
  })

});

