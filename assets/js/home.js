$(document).ready(function() {
  var windowSize = $(window).width();
  if (windowSize < 992) {
    $('#navbar-main').addClass("shrink-header");
  } else {
    $('#navbar-main').removeClass("shrink-header");
  }
  
  $(window).on('scroll', function(event) {
    var scrollPos = $(event.target).scrollTop();
    if (scrollPos > 20) {
      
    }
    else {
      $('#navbar-main').removeClass("shrink-header");
    }
  });

});
