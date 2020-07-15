$(document).ready(function() {
    $("html,body").animate({scrollTop: 0}, 100); 
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })
  });

