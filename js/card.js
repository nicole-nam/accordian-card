$(document).ready(function () {
  $('.card-question').on('click', function(){    
    if($(this).parents('.card-item').hasClass('open')){
     $(this).parents('.card-item').find('.card-answer').slideUp();
     $(this).parents('.card-item').removeClass('open');
     $(this).children('a').css("color"," hsl(240, 6%, 50%)");
     $(this).removeClass('arrowUp');
     

    }
    else{
     $('.card-answer').slideUp();
     $('.card-item').removeClass('open');
     $(this).children('a').css("color","hsl(238, 29%, 16%)");
     $(this).addClass('arrowUp');



     $(this).parents('.card-item').find('.card-answer').slideDown();
     $(this).parents('.card-item').addClass('open');   
    }
 });
});
