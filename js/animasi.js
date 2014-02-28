$(window).scroll(function() {
			$('.one').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("fadeInx");
					$(this).css('opacity','1');
				}
			});
			$('.two').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("fadeInx2");
					$(this).css('opacity','1');
				}
			});
			$('.three').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+700) {
					$(this).addClass("fadeInx3");
					$(this).css('opacity','1');
				}
			});
			
			$('#bg2-4').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("skew");
					
				}
			});

			$('#bg2-4x-kiri').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("skew");
					
				}
			});						

           $('#bg2-4x-kanan').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("skew");
					
				}
			});	
			$('#main').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					window.location.replace("index.html");
					
				}
			});			
		});