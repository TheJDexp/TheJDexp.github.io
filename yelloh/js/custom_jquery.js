/* Preloader brand animation */

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

$(window).on('beforeunload', function() {
	$("#preloader-background").fadeIn();
});

/* Function to highlight current menu URL */

$(function () {
  setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".top-nav a, .mobile a").each(function () {
        var href = $(this).attr('href');
        lastPath = path.substr(path.lastIndexOf('/') + 1)
        if (lastPath === href) {
            $(this).closest('li').addClass('active');
          }
        });
      }
