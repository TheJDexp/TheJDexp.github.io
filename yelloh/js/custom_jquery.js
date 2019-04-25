$(".quote").addClass("inspire");

$("#preloader").children().addClass("inspire")

$(document).ready(function() {
  $("#preloader > h2").each(function(index) {
    $(this).delay(100*index).queue(function(){
      $(this).addClass('animLetters').dequeue();
    });
  });
});

$(window).on('load', function() {
	$("#preloader-background").delay(2000).fadeOut();
  $("#preloader").delay(2000).fadeOut();
});







/*

  var $letters =("#preloader > h2");
  var delay = 500;

  $cards.each(function(index) {
    $(this).delay(500*index).addClass('position');
});

});
  var $letters =("#preloader > h2");
  var

});



  var time = 0;

  setTimeout(function() {
      $(".testBox").append('<p class="box">' + value + '</p>');
      console.log('yes');
    }, time * 1000)
    time++;
  });


  $("#preloader > h2").each(function(){
    $(this).delay(500 * index).addClass("animLetters");
    console.log(index);
  })*/


/*$( window ).on( "load", function() {

  preloader background opacity fade out

 })*/
