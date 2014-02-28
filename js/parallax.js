$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.makin-hits').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.pertama-dengan-rasa-sosis').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#pertama-dengan-rasa-sosis').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.sosis-spesial-chunky-bits').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sosis-spesial-chunky-bits').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.sosis-bakar-pedas-chili-flake').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sosis-bakar-pedas-chili-flake').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.main').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#main').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#pertama-dengan-rasa-sosis').offset().top - (($('#sosis-spesial-chunky-bits').offset().top - $('#pertama-dengan-rasa-sosis').offset().top) / 2);
	var section3Top =  $('#sosis-spesial-chunky-bits').offset().top - (($('#sosis-bakar-pedas-chili-flake').offset().top - $('#sosis-spesial-chunky-bits').offset().top) / 2);
    var section4Top =  $('#sosis-bakar-pedas-chili-flake').offset().top - (($('#main').offset().top - $('#sosis-bakar-pedas-chili-flake').offset().top) / 2);
	var section5Top =  $('#main').offset().top - (($(document).height() - $('#main').offset().top) / 1.5);;	
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.makin-hits').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.pertama-dengan-rasa-sosis').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.sosis-spesial-chunky-bits').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.sosis-bakar-pedas-chili-flake').addClass('active');
	} else if ($(document).scrollTop() >= section5Top){
		$('nav#primary a.main').addClass('active');
	}
	
}