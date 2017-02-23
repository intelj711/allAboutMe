$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#collapsable-nav").mouseleave(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});


// To Top Button
$(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});

//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e(".ws_list",b),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},f=e("<div>").addClass("ws_effect ws_fade").css(h).css("overflow","hidden").appendTo(b);this.go=function(i,j){var k=e(a.get(i)),m={width:k.width(),height:k.height()};k=k.clone().css(h).css(m).appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).css(m).appendTo(f);wowAnimate(l,{opacity:1},{opacity:0},c.duration,function(){l.remove()})}wowAnimate(k,{opacity:.4},{opacity:1},c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container0").wowSlider({effect:"fade",prev:"",next:"",duration:14*100,delay:95*100,width:1200,height:675,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:1,caption:false,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:function(i,c){return (i+1 + Math.floor((c-1)*Math.random()))},images:0});