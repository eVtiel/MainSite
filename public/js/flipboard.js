var main = function(){
    $('.dropdown-toggleTwo').click(function(){
        $('.dropdown-menu').toggle(100);
    });
    
    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextSlide.length == 0){
            nextSlide = $('.slide').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        if(nextDot.length == 0){
            nextDot = $('.dot').first();
        }
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        });
        
        $('.arrow-prev').click(function(){
            var currentSlide = $('.active-slide');
            var prevSlide = currentSlide.prev();
            
            var currentDot = $('.active-dot');
            var prevDot = currentDot.prev();
            
            if(prevSlide.length == 0){
            prevSlide = $('.slide').last();
        }
            
            currentSlide.fadeOut(600).removeClass('active-slide')
            prevSlide.fadeIn(600).addClass('active-slide');
            
            if(prevDot.length == 0){
                prevDot = $('.dot').last();
            }
            
            currentDot.removeClass('active-dot');
            prevDot.addClass('active-dot')
        });

};

$(document).ready(main);