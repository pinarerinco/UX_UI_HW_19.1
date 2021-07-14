$(document).ready(function(){
 
 // Hover Code
    $(".topnav a").hover(function(){
        $(this).css("text-decoration", "underline").css("color", "white");
        }, function(){
        $(this).css("text-decoration", "none"). css("color", "#494949");
      });

// Scroll Code

var scrollLink = $(".scroll");

scrollLink.click(function(e){
    e.preventDefault();
    $("body,html").animate({
        scrollTop: $(this.hash).offset().top
    }, 1300 )

    });

// CTA scroll & bounce
var cta = $(".cta");

cta.click(function(){
    $("body,html").animate({
        scrollTop: $(this.hash).offset().top
    }, 800 )

    });

    $("#button").hover(function(){
        $(this).effect("bounce", { times:5 }, 300);
  });

});

/// Button Bounce

