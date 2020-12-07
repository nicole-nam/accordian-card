$( document ).ready(function() {
    console.log( "ready!" );

    $('.card-question').on('click', function(){    
        if($(this).parents('.accordian-box').hasClass('open')){
         $(this).parents('.accordian-box').find('.card-answer').slideUp();
         $(this).parents('.accordian-box').removeClass('open');
        }
        else{
         $('.card-answer').slideUp();
         $('.accordian-box').removeClass('open');
         $(this).parents('.accordian-box').find('.card-answer').slideDown();
         $(this).parents('.accordian-box').addClass('open');        
        }
     });


});

