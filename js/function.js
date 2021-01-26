$(function(){

    $('.border').addClass('top'),
    $('.mv-video').addClass('top')

    var last = 0;
    $(document).on('scroll', function(){

        var st = $(this).scrollTop();
        $('.border').addClass('top'),
        $('.mv-video').addClass('top');
        // $('.slogan-group').addClass('top')
        if( st > 500 ){
            $('.border').removeClass('top'),
            $('.mv-video').removeClass('top');
            // $('.slogan-group').removeClass('top');
            // $('.slogan-group').addClass('escape');
        } 
        // if( st > 800 ){
        //     $('.slogan-group').removeClass('top'),
        //     $('.slogan-group').addClass('escape');
        // }
        // if( st > 1500 ){
        //     $('.slogan-group').removeClass('escape');
        // }
        last = st;

    });

    $('.menubar').on('click', function(){

        $(this).children().toggleClass('change');
        $('.menu-contents').toggleClass('active');
        $('.logo').toggleClass('active');
        $('.contents').toggleClass('active');

    });

    // fade-in
    $(document).scroll(function(){
        $('.slogan-group').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var windowH = $(window).scrollTop() + $(window).height();
            
            if( windowH > bottom_of_element ){
                $(this).animate({'opacity':'1',}, 1000);
            }
            
        }); 
    });
    


    $('.work-group-image').on('mouseenter', function(){
        $(this).addClass('scale');
    });
    $('.work-group-image').on('mouseleave', function(){
        $(this).removeClass('scale');
    });


    var contentsIndex;
    var intervalID;

    contentsIndex = 0;

    intervalID = setInterval(function(){

        if(contentsIndex == 3){
            contentsIndex = 0;
        }

        $('.slogan-text').removeClass('active');
        $('.slogan-text').eq(contentsIndex).addClass('active'); 

        $('.bottom-group-image-number').removeClass('active');
        $('.bottom-group-image-number').eq(contentsIndex).addClass('active');  

        contentsIndex++;

    }, 2000);
   
});




