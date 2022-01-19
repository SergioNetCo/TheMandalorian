posicionarMenu();
        
        $(window).scroll(function() {    
            posicionarMenu();
        });
        
        function posicionarMenu() {
            var altura_del_header = $('.portada').outerHeight(true);
            var altura_del_menu = $('nav').outerHeight(true);
        
            if ($(window).scrollTop() >= altura_del_header){
                $('nav').addClass('fixed');
                $('.main').css('margin-top', (altura_del_menu) + 'px');
            } else {
                $('nav').removeClass('fixed');
                $('.main').css('margin-top', '0');
            }
        }