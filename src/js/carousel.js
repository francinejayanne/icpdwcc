$(document).ready(function(){
  $('.carousel-images').slick({
    slidesToShow:7,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(".carousel div .left").click(function() {
  $('.carousel-images').slick('slickPrev');
});

$(".carousel div .right").click(function() {
  $('.carousel-images').slick('slickNext');
});