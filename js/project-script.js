$(function(){
    'use strict';

    $('#webapps button').click(function(){
        var btnId = $(this).attr('id');
        $('#webapps iframe').each(function(){
            var name = $(this).attr('name');            
            if (btnId === name){
                window.open($(this).attr('src'));
            }
        });
    });

     $('div.row button').mouseup(function(){//Let buttons loose the focus after click on them (social buttons)
		$('div.row button').blur();
	});
});