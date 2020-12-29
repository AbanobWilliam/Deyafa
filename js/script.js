 $(document).ready(function () {
     $('ul.mobile-menu > li.has-child > a').click(function (e) {
         e.preventDefault();
         $(this).next('ul').slideToggle();
         if ($(this).children('i').hasClass('fa-plus')) {
             $(this).children('i').removeClass('fa-plus').addClass('fa-minus');
         } else {
             $(this).children('i').removeClass('fa-minus').addClass('fa-plus');
         }
     });
     $('a.mobile-button').click(function(e){
         e.preventDefault();
         $(this).toggleClass('opened');
         $('.mobile-menu').toggleClass('opened');
     });
     $('#work-carousel').lightSlider({
         item: 4,
         loop: true,
         slideMove: 1,
         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         speed: 1000,
         auto: true,
         responsive: [
             {
                 breakpoint: 800,
                 settings: {
                     item: 2,
                     slideMove: 1,
                     slideMargin: 6,
                 }
            },
             {
                 breakpoint: 480,
                 settings: {
                     item: 1,
                     slideMove: 1
                 }
            }
        ]
     });
     $('#signature-carousel').lightSlider({
         item: 4,
         loop: true,
         slideMove: 1,
         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         speed: 1000,
         auto: true,
         responsive: [
             {
                 breakpoint: 800,
                 settings: {
                     item: 2,
                     slideMove: 1,
                     slideMargin: 6,
                 }
            },
             {
                 breakpoint: 480,
                 settings: {
                     item: 1,
                     slideMove: 1
                 }
            }
        ]
     });
     $('#restaurant-carousel').lightSlider({
         gallery: true,
         item: 1,
         loop: true,
         auto: true,
         thumbItem: 5,
         slideMargin: 20,
         enableDrag: true,
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         currentPagerPosition: 'left',
         onSliderLoad: function (el) {
             el.lightGallery({
                 selector: '#restaurant-carousel .lslide'
             });
         }
     });
     $('#restaurant-one-carousel').lightSlider({
         gallery: true,
         item: 1,
         loop: true,
         auto: true,
         thumbItem: 5,
         slideMargin: 20,
         enableDrag: true,
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         currentPagerPosition: 'left',
         onSliderLoad: function (el) {
             el.lightGallery({
                 selector: '#restaurant-carousel .lslide'
             });
         }
     });
     $('#restaurant-two-carousel').lightSlider({
         gallery: true,
         item: 1,
         loop: true,
         auto: true,
         thumbItem: 5,
         slideMargin: 20,
         enableDrag: true,
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         currentPagerPosition: 'left',
         onSliderLoad: function (el) {
             el.lightGallery({
                 selector: '#restaurant-carousel .lslide'
             });
         }
     });
     $('#feedback-carousel').lightSlider({
         item: 2,
         loop: true,
         slideMove: 2,
         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
         prevHtml: '<i class="fas fa-angle-left"></i>',
         nextHtml: '<i class="fas fa-angle-right"></i>',
         speed: 1000,
         auto: true,
         responsive: [
             {
                 breakpoint: 800,
                 settings: {
                     item: 1,
                     slideMove: 1,
                     slideMargin: 6,
                 }
            },
             {
                 breakpoint: 480,
                 settings: {
                     item: 1,
                     slideMove: 1
                 }
            }
        ]
     });
 });