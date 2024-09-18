function hideHeader() {
    document.querySelector("header").classList.add("hide");
}

function showHeader() {
    document.querySelector("header").classList.remove("hide");
}

/**
 * The function below was taken from Stack Overflow and adapted for this use case.
 * https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
 */
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)){
       hideHeader();
   } else {
       showHeader();
   }
   lastScrollTop = st;
});

$(document).ready(function () {
    let leftNavs = document.querySelector('.left-nav-tabs');
    let rightNavs = document.querySelector('.right-nav-tabs');

    if (screen.width <= 1024) {
        leftNavs.classList.add("hide");
    }
    if (screen.width <= 768) {
        rightNavs.classList.add("hide");
    }

    $(".hamburguer").click(function() {
        if (leftNavs.classList.contains("hide")) {
            leftNavs.classList.remove("hide");
            if (!rightNavs.classList.contains("hide")) {
                rightNavs.classList.add("hide");
            }
        }
        else {
            leftNavs.classList.add("hide");
        }
    });
    $(".personal").click(function() {
        if (rightNavs.classList.contains("hide")) {
            rightNavs.classList.remove("hide");
            if (!leftNavs.classList.contains("hide")) {
                leftNavs.classList.add("hide");
            }
        }
        else {
            rightNavs.classList.add("hide");
        }
    });
});