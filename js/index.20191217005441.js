(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js3').attr('src', (dpi>1) ? 'images/tfintrocn2-1612.jpg' : 'images/tfintrocn2-806.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/tfintrocn3-1422.jpg' : 'images/tfintrocn3-711.jpg');
$('.js').attr('src', (dpi>1) ? 'images/time-flow-welcome-300.png' : 'images/time-flow-welcome-150.png');
$('.js2').attr('src', (dpi>1) ? 'images/tfintrocn1-1242.jpg' : 'images/tfintrocn1-621.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});