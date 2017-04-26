$(function(){
    'use strict';

    $('#webapps button').click(function(){//When click on open app buttons in webapps page, gets the URL from iframe src attribute to open the link
        var btnId = $(this).attr('id');
        $('#webapps iframe').each(function(){
            var name = $(this).attr('name');            
            if (btnId === name){
                window.open($(this).attr('src'));
            }
        });
    });
     $('div.row button').mouseup(function(){//Let buttons loose the focus after click on them 
		$('div.row button').blur();
	});
});