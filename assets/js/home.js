$(document).ready(function() {
  
    var windowSize = $(window).width();
    if (windowSize < 992) {
      console.log("HERE IS A SMALL SCREEN")
      $('#navbar-main').addClass("shrink-header");
      $('..hideClass').hide();
    } else {
      $('#navbar-main').removeClass("shrink-header");
      $('..hideClass').show();
    }
  
  
  checkSmallScreen();
  
  $(window).on('resize', function(event) {
        var windowSize = $(window).width();
    if (windowSize < 992) {
      console.log("HERE IS A SMALL SCREEN")
      $('#navbar-main').addClass("shrink-header");
      $('.hideClass').hide();
    } else {
      $('#navbar-main').removeClass("shrink-header");
      $('.hideClass').show();
    }
  });

});
