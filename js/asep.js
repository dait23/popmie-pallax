$(function(){
	if(!$.browser.msie){
		var a=0;for(;a<3;a+=1){setTimeout(function b(){var a=Math.random()*1e3+5e3,c=$("<div />",{"class":"smoke",css:{opacity:0,left:Math.random()*200+80}});$(c).appendTo("#popmie");$.when($(c).animate({opacity:1},{duration:a/4,easing:"linear",queue:false,complete:function(){$(c).animate({opacity:0},{duration:a/3,easing:"linear",queue:false})}}),$(c).animate({bottom:$("#popmie").height()},{duration:a,easing:"linear",queue:false})).then(function(){$(c).remove();b()})},Math.random()*3e3)}
	}else{		
	"use strict";var a=0;for(;a<3;a+=1){setTimeout(function b(){var a=Math.random()*1e3+5e3,c=$("<div />",{"class":"smoke",css:{left:Math.random()*200+80}});$(c).appendTo("#popmie");$.when($(c).animate({},{duration:a/4,easing:"linear",queue:false,complete:function(){$(c).animate({},{duration:a/3,easing:"linear",queue:false})}}),$(c).animate({bottom:$("#popmie").height()},{duration:a,easing:"linear",queue:false})).then(function(){$(c).remove();b()})},Math.random()*3e3)}}}())
