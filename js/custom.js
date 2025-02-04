

/*************** GOOGLE ANALYTICS ***********/

window.onload = function () { gaSSDSLoad(""); }; //load after page onload



/*
|--------------------------------------------------------------------------
| DOCUMENT READY
|--------------------------------------------------------------------------
*/

$(document).ready(function() {


    /*
    |--------------------------------------------------------------------------
    | PRETTY PHOTOS
    |--------------------------------------------------------------------------
    */
    if( $("a.prettyPhoto").length){
        $("a.prettyPhoto").prettyPhoto({
            animation_speed:'fast',
            slideshow:10000,
            hideflash: true
        });
    }


    /*
    |--------------------------------------------------------------------------
    | TOOLTIP
    |--------------------------------------------------------------------------
    */

    $('.tips').tooltip({placement:'top'});



    /*
    |--------------------------------------------------------------------------
    | COLLAPSE
    |--------------------------------------------------------------------------
    */

    $('.accordion').on('show hide', function(e){
        $('.accordion-toggle').removeClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus', 200);

    });

    /*
    |--------------------------------------------------------------------------
    | CONTACT
    |--------------------------------------------------------------------------
    */
    $('.slideContact').click(function(e){

        if ( $(window).width() >= 800){

            $('#contact').slideToggle('normal', 'easeInQuad',function(){

                $('#contactinfoWrapper').css('margin-left', 0);
                $('#mapSlideWrapper').css('margin-left', 3000);
                $('#contactinfoWrapper').fadeToggle();


            });
            $('#closeContact').fadeToggle();
            return false;

        }else{

            return true;

        }
    });


    $('#closeContact').click(function(e){


        $('#contactinfoWrapper').fadeOut('normal', 'easeInQuad',function(){
            $('#contactinfoWrapper').css('margin-left', 0);
            $('#mapSlideWrapper').css('margin-left', 3000);
        });

        $('#contact').slideUp('normal', 'easeOutQuad');

        $(this).fadeOut();

        e.preventDefault();

    });






    /* MAP */
    $('#mapTrigger').click(function(e){


        $('#mapSlideWrapper').css('display', 'block');
        initialize('mapWrapper');

        $('#contactinfoWrapper, #contactinfoWrapperPage').animate({
            marginLeft:'-2000px'
        }, 400, function() {});


        $('#mapSlideWrapper').animate({
            marginLeft:'25px'
        }, 400, function() {});

        appendBootstrap();

        e.preventDefault();
    });


    $('#mapTriggerLoader').click(function(e){


        $('#mapSlide').css('display', 'block');

        $('#contactSlide').animate({
            marginLeft:'-2000px'
        }, 400, function() {});


        $('#mapSlide').animate({
            marginLeft:'0'
        }, 400, function() {
            $('#contactSlide').css('display', 'none');
        });


        appendBootstrap();

        e.preventDefault();
    });


    $('#mapReturn').click(function(e){
        //$('#mapWrapper').css('margin-bottom', '3em');

        $('#contactSlide').css('display', 'block');
        $('#mapSlide').animate({
            marginLeft:'3000px'
        }, 400, function() {});


        $('#contactSlide').animate({
            marginLeft:'0'
        }, 400, function() {
            $('#mapSlide').css('display', 'none');
        });

        e.preventDefault();
    });



    /*
    |--------------------------------------------------------------------------
    | FLEXSLIDER
    |--------------------------------------------------------------------------
    */
    if($('.flexFullScreen').length){

        $('.flexFullScreen').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshow: true,
            slideshowSpeed:5500,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',
            nextText: '<i class="icon-right-open"></i>',
            start: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);
            },
            before: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+")", 100);
            },
            after: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);
            }
        });

    }


    if($('.flexScreenSlider').length){

        $('.flexScreenSlider').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',
            nextText: '<i class="icon-right-open"></i>'
        });
    }

    if($('.flexPortfolio').length){

        $('.flexPortfolio').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',
            nextText: '<i class="icon-right-open"></i>'
        });
    }


    if($('.flexProject').length){

        $('.flexProject').flexslider({
            animation: "slide",
            controlNav:true,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',
            nextText: '<i class="icon-right-open"></i>'
        });
    }

    /*
    |--------------------------------------------------------------------------
    | MAIN ROLLOVER EFFECTS
    |--------------------------------------------------------------------------
    */

    if($('.imgHover').length){

        $('.imgHover article').hover(
            function () {

                var $this=$(this);

                var fromTop = ($('.imgWrapper', $this).height()/2 - $('.iconLinks', $this).height()/2);
                $('.iconLinks', $this).css('margin-top',fromTop);

                $('.media-hover', $this).height($('.imgWrapper', $this).height());

                $('.mask', this).css('height', $('.imgWrapper', this).height());
                $('.mask', this).css('width', $('.imgWrapper', this).width());
                $('.mask', this).stop(true, false).fadeIn('fast', function() {}).end();

                if(Modernizr.csstransitions) {
                    $('.iconLinks a').addClass('animated');
                    $('.iconLinks', $this).css('display', 'block');

                    $('.iconLinks a:first-child', $this).removeClass('flipOutX');
                    $('.iconLinks a:first-child', $this).addClass('bounceInDown');

                    $('.iconLinks a:gt(0)', $this).removeClass('flipOutX');
                    $('.iconLinks a:gt(0)', $this).addClass('bounceInUp');
                }else{

                    $('.iconLinks', $this).stop(true, false).fadeIn('fast');
                }

                $this.find('.boxInfo > h3').addClass('hoverState', 300);

                $('.newBadge', this).addClass('animated swing');



            },
            function () {
                var $this=$(this);
                $('.mask', $this).stop(true, false).fadeOut('fast', function() {

                    if(Modernizr.csstransitions) {

                        $('.iconLinks a:first-child', $this).removeClass('bounceInDown');
                        $('.iconLinks a:first-child', $this).addClass('flipOutX');

                        $('.iconLinks a:gt(0)', $this).removeClass('bounceInUp');
                        $('.iconLinks a:gt(0)', $this).addClass('flipOutX');


                    }else{

                        $('.iconLinks', $this).stop(true, false).fadeOut('fast');

                    }
                    $this.find('.boxInfo > h3').removeClass('hoverState', 300);

                }).end();

                $('.newBadge', this).removeClass('animated swing');


            });
}



    /*
    |--------------------------------------------------------------------------
    | ROLLOVER BTN
    |--------------------------------------------------------------------------
    */

    $('.socialIcon').hover(
        function () {
            $(this).stop(true, true).addClass('socialHoverClass', 300);
        },
        function () {
            $(this).removeClass('socialHoverClass', 300);
        });





    $('.tabs li, .accordion h2').hover(
        function () {
            $(this).stop(true, true).addClass('speBtnHover', 300);
        },
        function () {
            $(this).stop(true, true).removeClass('speBtnHover', 100);
        });





    /*
    |--------------------------------------------------------------------------
    | ALERT
    |--------------------------------------------------------------------------
    */
    $('.alert').delegate('button', 'click', function() {
        $(this).parent().fadeOut('fast');
    });


    /*
    |--------------------------------------------------------------------------
    | CLIENT
    |--------------------------------------------------------------------------
    */

    if($('.colorHover').length){
        var array =[];
        $('.colorHover').hover(

            function () {

                array[0] = $(this).attr('src');
                $(this).attr('src', $(this).attr('src').replace('-off', ''));

            },

            function () {

                $(this).attr('src', array[0]);

            });
    }



    /*
    |--------------------------------------------------------------------------
    | Rollover boxIcon
    |--------------------------------------------------------------------------
    */
    if($('.boxIcon').length){

        $('.boxIcon').hover(function() {
            var $this = $(this);

            $this.css('opacity', '1');
            //$this.find('.boxContent>p').stop(true, false).css('opacity', 0);
            $this.addClass('hover');
            $('.boxContent>p').css('bottom', '-50px');
            $this.find('.boxContent>p').stop(true, false).css('display', 'block');

            $this.find('.iconWrapper i').addClass('triggeredHover');

            $this.find('.boxContent>p').stop(true, false).animate({
                'margin-top': '0px'},
                300, function() {
            // stuff to do after animation is complete
        });


        }, function() {
            var $this = $(this);
            $this.removeClass('hover');

            $this.find('.boxContent>p').stop(true, false).css('display', 'none');
            $this.find('.boxContent>p').css('margin-top', '250px');
            $this.find('.iconWrapper i').removeClass('triggeredHover');


        });
    }






    $('#quoteTrigger').click(function (e) {


        var $this = $(this);
        $('#quoteFormWrapper').slideToggle('fast', function() {

            $this.text($('#quoteFormWrapper').is(':visible') ? "Close form" : "I have a project");

        });


        e.preventDefault();
    });

//END DOCUMENT READY
});



/*
|--------------------------------------------------------------------------
| EVENTS TRIGGER AFTER ALL IMAGES ARE LOADED
|--------------------------------------------------------------------------
*/
$(window).load(function() {



    /*
    |--------------------------------------------------------------------------
    | ISOTOPE USAGE FILTERING
    |--------------------------------------------------------------------------
    */
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope

        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }



        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });


        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });


}


/**PROCESS ICONS**/
$('.iconBoxV3 a').hover(function() {

    if(Modernizr.csstransitions) {

        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(360deg)');
        $('i', this).css('-moz-transform', 'rotateZ(360deg)');
        $('i', this).css('-o-transform', 'rotateZ(360deg)');
        $('i', this).css('transform', 'rotateZ(360deg)');

    }else{

       $(this).stop(false, true).toggleClass( 'hover', 150);

   }

}, function() {

    if(Modernizr.csstransitions) {
        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(0deg)');
        $('i', this).css('-moz-transform', 'rotateZ(0deg)');
        $('i', this).css('-o-transform', 'rotateZ(0deg)');
        $('i', this).css('transform', 'rotateZ(0deg)');

    }else{

        $(this).stop(false, true).toggleClass( 'hover', 150);
    }

});



    if($('.scrollMenu').length){



     $(window).scroll(function() {

            if($(window).width() > 1024){
                if($(window).scrollTop() > 0){
                    $('#mainHeader').addClass('fixedHeader');
                    $('body').css('padding-top', $('#mainHeader').outerHeight(true));
                    if(Modernizr.csstransitions){
                        $('.fixedHeader').css('display', 'block');
                        $('#mainHeader').addClass('animated fadeInDown')
                    }

                }else{
                    $('#mainHeader').removeClass('fixedHeader');
                    $('body').css('padding-top', 0);
                    if(Modernizr.csstransitions){
                        $('#mainHeader').removeClass('animated fadeInDown');
                    }

                }
            }
        });


        var $offset = $('#mainHeader').outerHeight(true)/2 - 5;

        if($('.localscroll').length){
            $('.localscroll').localScroll({
                lazy: true,
                offset: {
                    top:  -($offset)
                }
            });
        }

        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }


        if (isMobile == false && ($('#paralaxSlice1').length  ||isMobile == false &&  $('#paralaxSlice2').length  ||isMobile == false &&  $('#paralaxSlice4').length  || isMobile == false &&  $('#paralaxSlice5').length  || isMobile == false &&  $('#paralaxSlice6').length  || isMobile == false &&  $('#paralaxSlice7').length ))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }



    }


//END WINDOW LOAD
});


/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

/* CONTACT FROM */

jQuery(function() {

    if( jQuery("#contactfrm").length ){

      var v = jQuery("#contactfrm").validate({
        // debug: true,
        errorPlacement: function(error, element) {
            error.insertBefore( element );
        },
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
              target: ".result"
          });
        },
        onkeyup: false,
        onclick: false,
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                digits:true
            },
            comment: {
                required: true,
                minlength: 10,
                maxlength: 350
            }
        }
    });
  }

  if( jQuery("#projectQuote").length){

      var d = jQuery("#projectQuote").validate({
        // debug: true,
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
              target: ".quoteResult"
          });
        },
        onkeyup: false,


        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            company: {
                required: true,
                minlength: 2
            },
            quoteType:{
                required: true
            },
            comment: {
                required: true,
                minlength: 10,
                maxlength: 350
            }

        }
    });



  }

});

/* CONTACT FROM */

/* FLEXSLIDER INNER INFO CUSTOM ANIMATION */
function animateTxt(curSlide, action){

    if(action == 'in'){
        var i = 0;
        var animaDelay = 0;

        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'block');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
            if(Modernizr.csstransitions) {

                $(this).css('-webkit-animation-delay', animaDelay+'s');
                $(this).css('-moz-animation-delay', animaDelay+'s');
                $(this).css('-0-animation-delay', animaDelay+'s');
                $(this).css('-ms-animation-delay', animaDelay+'s');
                $(this).css('animation-delay-delay', animaDelay+'s');

                $(this).show().addClass('animated').addClass($(this).attr('data-animation'));

            }else{

                $('.slideN'+curSlide+':not([class*=clone])>.caption>div').hide();
                if (i == 0){timing = 0}else if(i == 1){timing = 300} else{ timing = 300 * i}
                    $(this).delay(timing).fadeIn('fast');
            }
            i++;
            animaDelay = animaDelay+0.2;


        });

    }else{
        var j = 0;
        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'none');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
         if(Modernizr.csstransitions) {

             $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

         }else{
            $(this).hide();
        }
        j++;
    });
    }

}





/* MAIN MENU (submenu slide and setting up of a select box on small screen)*/
(function() {

    var $mainMenu = $('#mainMenu').children('ul');

    $mainMenu.on('mouseenter', 'li', function() {


        var $this = $(this),

        $subMenu = $this.children('ul');


        if( $subMenu.length ) $this.addClass('hover').stop();
        else {
            if($this.parent().is($(':gt(1)', $mainMenu))){
                $this.stop(false, true).hide().fadeIn('slow');
            }else{
                $this.stop(false, true);
            }
        }


        if($this.parent().is($(':gt(1)', $mainMenu))){

            $subMenu.css('display', 'block');
            $subMenu.stop(false, true).animate({
                left:150,
                opacity:1
            }, 250,'easeInOutQuad');

        }else{

            $subMenu.stop(false, true).slideDown(200,'easeInOutQuad');

        }


    }).on('mouseleave', 'li', function() {


        var $nthis = $(this);
        if($nthis.parent().is($(':gt(1)', $mainMenu))){

            //$nthis.children('ul').stop(false, true).css('left', 130).css('opacity', 0).css('display', 'none');

            $nthis.children('ul').stop(false, true).animate({
                left:130,
                opacity:0
            }, 250,'easeInOutQuad', function() {
                $nthis.children('ul').css('display', 'none');
            });

        }else{

            $nthis.removeClass('hover').removeClass('Shover').children('ul').stop(false, true).hide();
        }

        $subMenu = $nthis.children('ul');

        if( $subMenu.length ) $nthis.removeClass('hover');
        else $nthis.removeClass('Shover');


    });


    // ul to select
    var optionsList = '<option value="" selected>Навигация...</option>';
    $mainMenu.find('li').each(function() {
        var $this   = $(this),
        $anchor = $this.children('a'),
        depth   = $this.parents('ul').length - 1,
        indent  = '';

        if( depth ) {
            while( depth > 0 ) {
                indent += ' - ';
                depth--;
            }
        }

        optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
    }).end().after('<select class="responsive-nav">' + optionsList + '</select>');

    $('.responsive-nav').on('change', function() {
        window.location = $(this).val();
    });

})();


/*
|--------------------------------------------------------------------------
| GOOGLE MAP
|--------------------------------------------------------------------------
*/

function appendBootstrap() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
}




function initialize(id) {

    var image = 'images/icon-map.png';

    var overlayTitle = 'Agencies';

    var locations = [

        ['Варшавское 28 А','Москва']

         //['Ленина 280', 'Ставрополь'],


        //['Мира 1', 'Ставрополь'],


        //['Пушкина 1', 'Ставрополь'],


        //['Васильева 1', 'Ставрополь']


        ];

        /*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
        id = (id == undefined) ? 'mapWrapper' : id;

        var map = new google.maps.Map(document.getElementById(id), {
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControl:true,
        scaleControl:false,
        zoom: 14

    });

        var myLatlng;
        var marker, i;
        var bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow({ content: "Загрузка..." });

        for (i = 0; i < locations.length; i++) {


            if(locations[i][2] != undefined && locations[i][3] != undefined){
                var content = '<div class="infoWindow">'+locations[i][0]+'<br>'+locations[i][1]+'</div>';
                (function(content) {
                    myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

                    marker = new google.maps.Marker({
                        position: myLatlng,
                        icon:image,
                        title: overlayTitle,
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                          infowindow.setContent(content);
                          infowindow.open(map, this);
                      }

                  })(this, i));

                    if(locations.length > 1){
                        bounds.extend(myLatlng);
                        map.fitBounds(bounds);
                    }else{
                        map.setCenter(myLatlng);
                    }

                })(content);
            }else{

               geocoder   = new google.maps.Geocoder();
               var info   = locations[i][0];
               var addr   = locations[i][1];
               var latLng = locations[i][1];

               (function(info, addr) {

                   geocoder.geocode( {

                    'address': latLng

                }, function(results, status) {

                    myLatlng = results[0].geometry.location;

                    marker = new google.maps.Marker({
                        position: myLatlng,
                        icon:image,
                        title: overlayTitle,
                        map: map
                    });
                    var $content = '<div class="infoWindow">'+info+'<br>'+addr+'</div>';
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                          infowindow.setContent($content);
                          infowindow.open(map, this);
                      }
                  })(this, i));

                    if(locations.length > 1){
                        bounds.extend(myLatlng);
                        map.fitBounds(bounds);
                    }else{
                        map.setCenter(myLatlng);
                    }
                });
})(info, addr);

}
}
}





/*
|--------------------------------------------------------------------------
| SHARRRE
|--------------------------------------------------------------------------
*/
if($('#shareme').length){
    $('#shareme').sharrre({

    share: {
        googlePlus: true,
        facebook: true,
        twitter: true,
        linkedin: true
    },

    buttons: {
        googlePlus: {size: 'tall', annotation:'bubble'},
        facebook: {layout: 'box_count'},
        twitter: {count: 'vertical'},
        linkedin: {counter: 'top'}
    },

    enableHover: false,
    enableCounter: false,
    enableTracking: true,
      //url:'document.location.href'
  });
}

/* ANALYTICS */
function gaSSDSLoad (acct) {
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."),
  pageTracker,
  s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
}
s.onload = function () {
    s.onloadDone = true;
    init();
};
s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
  }
};
document.getElementsByTagName('head')[0].appendChild(s);
}




jQuery(function($){
    if($('#home').length){
        $.supersized({

                    // Functionality
                    slideshow               :   1,          // Slideshow on/off
                    autoplay                :   1,          // Slideshow starts playing automatically
                    start_slide             :   1,          // Start slide (0 is random)
                    stop_loop               :   0,          // Pauses slideshow on last slide
                    random                  :   0,          // Randomize slide order (Ignores start slide)
                    slide_interval          :   12000,      // Length between transitions
                    transition              :   6,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                    transition_speed        :   1000,       // Speed of transition
                    new_window              :   1,          // Image links open in new window/tab
                    pause_hover             :   0,          // Pause slideshow on hover
                    keyboard_nav            :   1,          // Keyboard navigation on/off
                    performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
                    image_protect           :   1,          // Disables image dragging and right click with Javascript

                    // Size & Position
                    min_width               :   0,          // Min width allowed (in pixels)
                    min_height              :   0,          // Min height allowed (in pixels)
                    vertical_center         :   1,          // Vertically center background
                    horizontal_center       :   1,          // Horizontally center background
                    fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
                    fit_portrait            :   1,          // Portrait images will not exceed browser height
                    fit_landscape           :   0,          // Landscape images will not exceed browser width

                    // Components
                    slide_links             :   'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
                    thumb_links             :   0,          // Individual thumb links for each slide
                    thumbnail_navigation    :   0,          // Thumbnail navigation
                    slides                  :   [           // Slideshow Images
                    {image : './images/slider/super/supersized-1.jpg', title : '<h1 class="bigTitle">Sun is shining<br /> <small>the weather is sweet</small></h1><a href="#news" class="btn sliderBtn" >Read more</a>', thumb : '', url : ''},

                    {image : './images/slider/super/supersized-2.jpg', title : '<h1 class="bigTitle">Moon is rising<br /> <small>the night is bitter</small></h1><a href="#works" class="btn sliderBtn" >Check our work</a>', thumb : '', url : ''},

					 {image : './images/slider/super/supersized-3.jpg', title : '<h1 class="bigTitle">Groove is in the heart<br /> <small>ahaaanhaan</small></h1><a href="#works" class="btn sliderBtn" >More info</a>', thumb : '', url : ''}
                    ],

                    // Theme Options
                    progress_bar            :   0,          // Timer for each slide
                    mouse_scrub             :   0

                });
}
});



