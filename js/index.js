'use strict'

$(function() {
    var headerPos = $('header').offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > headerPos){
            $('header').css('position', 'fixed');
        }else {
            $('header').css('position', 'static');
        }
    });
});

$(function(){
    $('.skill-box').click(function(){

    },function(){

    });
});