$(function() {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1920,
        auto: true
    });
});

$(function() {
    $('.banner-slide').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1920,
        auto: true,
        pager: false
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

var owl = $('.eventos-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

/* ### AOS ### */
AOS.init();
/* ### /AOS ### */

/* ### Swiper ### */
var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    }
});

var swiper = new Swiper('.swiper-container');
/* ### /Swiper ### */

/* Layer Slider */
$(document).ready(function() {

    $("#slider").on('sliderDidLoad', function(event, slider) {

        jQuery(this).on('click', '[data-share]', function(e) {

            var url = jQuery(this).data('share');
            url += url.indexOf('facebook.com/') !== -1 ? '&p[url]=' : '&url=';
            url += encodeURI(location.href);

            window.open(url, 'ls-share', 'width=500,height=500');
        });

    });


    $('#slider').layerSlider({
        sliderVersion: '6.6.4',
        type: 'popup',
        skin: 'noskin',
        globalBGSize: 'cover',
        navPrevNext: false,
        hoverPrevNext: false,
        navStartStop: false,
        navButtons: false,
        showCircleTimer: false,
        popupShowOnTimeout: 1,
        popupShowOnce: false,
        popupDisableOverlay: true,
        popupShowCloseButton: false,
        popupOverlayClickToClose: false,
        popupStartSliderImmediately: true,
        popupPositionHorizontal: 'left',
        popupDistanceLeft: 0,
        popupDistanceRight: 0,
        popupDistanceTop: 0,
        popupDistanceBottom: 0,
        popupDelayIn: 0,
        popupTransitionIn: 'slidefromleft',
        popupTransitionOut: 'slidetoleft',
        skinsPath: 'skins/',
        plugins: ["popup"]
    });

    $('#slider-inicio').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1280,
        layersContainer: 1280,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        thumbnailNavigation: 'disabled',
        skinsPath: 'skins/'
    });

    $('#slider-oferta').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1280,
        layersContainer: 1280,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        thumbnailNavigation: 'disabled',
        skinsPath: 'skins/'
    });

    $('#slider-tour').layerSlider({
        sliderVersion: '6.5.0b2',
        type: 'fullwidth',
        pauseOnHover: 'disabled',
        skin: 'photogallery',
        globalBGSize: 'cover',
        navStartStop: false,
        hoverBottomNav: true,
        showCircleTimer: false,
        thumbnailNavigation: 'always',
        tnContainerWidth: '100%',
        tnHeight: 70,
        popupShowOnTimeout: 1,
        popupShowOnce: false,
        popupCloseButtonStyle: 'background: rgba(0,0,0,.5); border-radius: 2px; border: 0; left: auto; right: 10px;',
        popupResetOnClose: 'disabled',
        popupDistanceLeft: 20,
        popupDistanceRight: 20,
        popupDistanceTop: 20,
        popupDistanceBottom: 20,
        popupDurationIn: 750,
        popupDelayIn: 500,
        popupTransitionIn: 'scalefromtop',
        popupTransitionOut: 'scaletobottom',
        skinsPath: 'skins/',
    });

    $('#slider-coronavirus').layerSlider({
        createdWith: '1.6.7',
        sliderVersion: '6.11.1',
        type: 'popup',
        skin: 'noskin',
        sliderFadeInDuration: 0,
        globalBGSize: 'cover',
        showCircleTimer: false,
        popupShowOnTimeout: 1,
        popupDisableOverlay: true,
        popupShowCloseButton: false,
        popupStartSliderImmediately: true,
        popupPositionVertical: 'bottom',
        popupDistanceBottom: 20,
        popupTransitionIn: 'slidefrombottom',
        popupTransitionOut: 'slidetobottom',
        useSrcset: false,
        skinsPath: 'skins/',
        plugins: ["popup"]
    });
});
/* /Layer Slider */

/* ### Wow ### */
new WOW().init();
/* ### /Wow ### */