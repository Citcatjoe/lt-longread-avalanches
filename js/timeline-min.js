jQuery(document).ready(function($){function e(e){e.each(function(){var e=$(this),i={};i.timelineWrapper=e.find(".events-wrapper"),i.eventsWrapper=i.timelineWrapper.children(".events"),i.fillingLine=i.eventsWrapper.children(".filling-line"),i.timelineEvents=i.eventsWrapper.find("a"),i.timelineDates=c(i.timelineEvents),i.eventsMinLapse=g(i.timelineDates),i.timelineNavigation=e.find(".cd-timeline-navigation"),i.eventsContent=e.children(".events-content"),s(i,y);var r=o(i,y);e.addClass("loaded"),i.timelineNavigation.on("click",".next",function(e){e.preventDefault(),t(i,r,"next")}),i.timelineNavigation.on("click",".prev",function(e){e.preventDefault(),t(i,r,"prev")}),i.eventsWrapper.on("click","a",function(e){e.preventDefault(),i.timelineEvents.removeClass("selected"),$(this).addClass("selected"),p($(this)),l($(this),i.fillingLine,r),f($(this),i.eventsContent)}),i.eventsContent.on("swipeleft",function(){"mobile"==w()&&n(i,r,"next")}),i.eventsContent.on("swiperight",function(){"mobile"==w()&&n(i,r,"prev")}),$(document).keyup(function(t){"37"==t.which&&h(e.get(0))?n(i,r,"prev"):"39"==t.which&&h(e.get(0))&&n(i,r,"next")})})}function t(e,t,n){var i=v(e.eventsWrapper),r=Number(e.timelineWrapper.css("width").replace("px",""));"next"==n?a(e,i-r+y,r-t):a(e,i+r-y)}function n(e,t,n){var i=e.eventsContent.find(".selected");if(("next"==n?i.next():i.prev()).length>0){var a=e.eventsWrapper.find(".selected"),s="next"==n?a.parent("li").next("li").children("a"):a.parent("li").prev("li").children("a");l(s,e.fillingLine,t),f(s,e.eventsContent),s.addClass("selected"),a.removeClass("selected"),p(s),r(n,s,e,t)}}function r(e,t,n,i){var r=window.getComputedStyle(t.get(0),null),l=Number(r.getPropertyValue("left").replace("px","")),s=Number(n.timelineWrapper.css("width").replace("px","")),i=Number(n.eventsWrapper.css("width").replace("px","")),o=v(n.eventsWrapper);("next"==e&&l>s-o||"prev"==e&&l<-o)&&a(n,s/2-l,s-i)}function a(e,t,n){var i=e.eventsWrapper.get(0);t=t>0?0:t,t=void 0!==n&&t<n?n:t,d(i,"translateX",t+"px"),0==t?e.timelineNavigation.find(".prev").addClass("inactive"):e.timelineNavigation.find(".prev").removeClass("inactive"),t==n?e.timelineNavigation.find(".next").addClass("inactive"):e.timelineNavigation.find(".next").removeClass("inactive")}function l(e,t,n){var i=window.getComputedStyle(e.get(0),null),r=i.getPropertyValue("left"),a=i.getPropertyValue("width");r=Number(r.replace("px",""))+Number(a.replace("px",""))/2;var l=r/n;d(t.get(0),"scaleX",l)}function s(e,t){for(i=0;i<e.timelineDates.length;i++){var n=m(e.timelineDates[0],e.timelineDates[i]),r=Math.round(n/e.eventsMinLapse)+2;e.timelineEvents.eq(i).css("left",r*t+"px")}}function o(e,t){var n=m(e.timelineDates[0],e.timelineDates[e.timelineDates.length-1]),i=n/e.eventsMinLapse,i=Math.round(i)+4,r=i*t;return e.eventsWrapper.css("width",r+"px"),l(e.timelineEvents.eq(0),e.fillingLine,r),r}function f(e,t){var n=e.data("date"),i=t.find(".selected"),r=t.find('[data-date="'+n+'"]'),a=r.height();if(r.index()>i.index())var l="selected enter-right",s="leave-left";else var l="selected enter-left",s="leave-right";r.attr("class",l),i.attr("class",s).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){i.removeClass("leave-right leave-left"),r.removeClass("enter-left enter-right")}),t.css("height",a+"px")}function p(e){e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")}function v(e){var t=window.getComputedStyle(e.get(0),null),n=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform");if(n.indexOf("(")>=0){var n=n.split("(")[1];n=n.split(")")[0],n=n.split(",");var i=n[4]}else var i=0;return Number(i)}function d(e,t,n){e.style["-webkit-transform"]=t+"("+n+")",e.style["-moz-transform"]=t+"("+n+")",e.style["-ms-transform"]=t+"("+n+")",e.style["-o-transform"]=t+"("+n+")",e.style.transform=t+"("+n+")"}function c(e){var t=[];return e.each(function(){var e=$(this).data("date").split("/"),n=new Date(e[2],e[1]-1,e[0]);t.push(n)}),t}function u(e){var t=[];return e.each(function(){var e=$(this),n=e.data("date").split("T");if(n.length>1)var i=n[0].split("/"),r=n[1].split(":");else if(n[0].indexOf(":")>=0)var i=["2000","0","0"],r=n[0].split(":");else var i=n[0].split("/"),r=["0","0"];var a=new Date(i[2],i[1]-1,i[0],r[0],r[1]);t.push(a)}),t}function m(e,t){return Math.round(t-e)}function g(e){var t=[];for(i=1;i<e.length;i++){var n=m(e[i-1],e[i]);t.push(n)}return Math.min.apply(null,t)}function h(e){for(var t=e.offsetTop,n=e.offsetLeft,i=e.offsetWidth,r=e.offsetHeight;e.offsetParent;)e=e.offsetParent,t+=e.offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+r>window.pageYOffset&&n+i>window.pageXOffset}function w(){return window.getComputedStyle(document.querySelector(".cd-horizontal-timeline"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}var x=$(".cd-horizontal-timeline"),y=60;x.length>0&&e(x)});