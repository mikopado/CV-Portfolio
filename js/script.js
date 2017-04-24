$(function () { 
	'use strict';

    $(document).click(function() { // To make sandwich menu button go away when the button looses the focus and let user clicks on menu links
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$("#menu-collapse").collapse('hide');
		}		
	});	

    var lastScroll = 0;
	
	$(window).scroll(function(event){ // Handles the transition from nav-bar with background to nav-bar without it while scrolling window
		if(window.innerWidth >= 768)
		{
			checkScrolled();
			$(".navbar.navbar-inverse.navbar-fixed-top").css("transition-duration", "2s");
		}		
	});
	function checkScrolled() {        
		var thisscroll = $(window).scrollTop();		
		if (thisscroll > lastScroll){ // If Scrolling Down	makes background color of navbar black        
	        $('.navbar.navbar-inverse.navbar-fixed-top').css("background-color", "#000");
	    } else {  // if Scroll Up makes the background color transparent if the scroll is at very top	       
	        if($(window).scrollTop() === 0) {
	            $('.navbar.navbar-inverse.navbar-fixed-top').css("background-color", "transparent");
	        }
	    }
	    lastScroll = thisscroll;       
	};

    $('.edit-buttons').mouseup(function(){//Let buttons loose the focus after click on them (social buttons)
		$('.edit-buttons').blur();
	});
	
	
	$('.work-btn').click(function(){//Clicking buttons in work experience session it displays the associated section and hides the rest
		hidesParagraph($('.work-sections'),$(this).attr('id'));		
		$(this).css('background-color', '#00CED1');
		swapButtonColors('.work-btn', $(this));		
	});	

	$('.work-btn').blur(function(){	//Let buttons in work experience keep the focus also when user clicks any key on page but other buttons	
		focusButtons($('.work-sections'), $(this));
		swapButtonColors('.work-btn', $(this));			
	});
	$('.edu-btn').click(function(){//Clicking buttons in work experience session it displays the associated section and hides the rest
		hidesParagraph($('.edu-sections'),$(this).attr('id'));		
		$(this).css('background-color', '#00CED1');
		swapButtonColors('.edu-btn', $(this));		
	});	
	$('.edu-btn').blur(function(){	//Let buttons in work experience keep the focus also when user clicks any key on page but other buttons	
		focusButtons($('.edu-sections'), $(this));
		swapButtonColors('.edu-btn', $(this));		
		
	});
	function swapButtonColors(selector, value){
		$(selector).each(function(ind,element){
			if ($(element).attr('id') !== value.attr('id')){
				$(element).css('background-color', '#008B8B');
			}
		});
	}
	function hidesParagraph(selector, value){
		$(selector).each(function(ind, element) {			
			if ($(element).attr('id').includes(value)){
				$(element).css("visibility", "visible");
			} else{
				$(element).css("visibility", "hidden");
			}
		});
	}
	function focusButtons(classSelector, btn){
		$(classSelector).each(function(index,element){			
			if($(element).attr('id').includes(btn.attr('id')) && $(element).css('visibility') === 'visible'){				
				btn.css('background-color', '#00CED1');				
			}
		});		
	}

	$(document).ready(function(){//Let focus on the latest year for work and education sessions when website is loaded. 
		if (window.innerWidth >= 768){
			$('.work-btn#2015').click();
			$('.edu-btn#2017').click();
		}
		
	});
})