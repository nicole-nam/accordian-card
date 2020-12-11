$(document).ready(function () {
  $('.card-question').on('click', function(){    
    if($(this).parents('.card-item').hasClass('open')){
     $(this).parents('.card-item').find('.card-answer').slideUp();
     $(this).parents('.card-item').removeClass('open');
    }
    else{
     $('.card-answer').slideUp();
     $('.card-item').removeClass('open');

     $(this).parents('.card-item').find('.card-answer').slideDown();
     $(this).parents('.card-item').addClass('open');        
    }
 });
});
