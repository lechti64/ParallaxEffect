window.addEventListener("scroll", effectParallax);

function effectParallax() {

    var effect = 1.8;
    var elm = document.getElementsByClassName("parallax");
    var i = 0;

    while (elm[i]) {
        elmoffsetTop = elm[i].offsetTop;
        elmoffsetWidth = elm[i].offsetWidth;
        scrollPos = window.pageYOffset;
        scrollElm = scrollPos-elmoffsetWidth;

        if (scrollPos >= elmoffsetTop) {

          if (scrollElm <= elmoffsetTop) {

              elm[i].style.transform =  "translateY(" + ((scrollPos-elmoffsetTop)/effect) +"px" + ")";

          }

        }
        i++;
    }

}
