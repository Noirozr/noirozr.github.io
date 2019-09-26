(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js5').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-23.06.07-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-23.06.07-248.jpg');
$('.js6').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-23.06.42-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-23.06.42-248.jpg');
$('.js7').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.51.44-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.51.44-248.jpg');
$('.js8').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.55.40-496.png' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.55.40-248.png');
$('.js9').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.56.08-496.png' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.56.08-248.png');
$('.js10').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.57.51-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.57.51-248.jpg');
$('.js').attr('src', (dpi>1) ? 'images/launchicon-480.png' : 'images/launchicon-240.png');
$('.js2').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.49.00-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.49.00-248.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.49.08-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.49.08-248.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.50.13-496.jpg' : 'images/simulator-screen-shot-iphone-11-pro-max-2019-09-26-at-22.50.13-248.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});