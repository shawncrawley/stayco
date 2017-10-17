'use strict';

var MAIN_IMGS = 2;
var TRANSITION_SECS = 5000;
var IMG_COUNTER = 1;
var menuToggled = false;

$(function () {
    $(window).on('scroll', function (e) {
        var $parallax = $('#parallax');
        var yPos = Math.round(window.scrollY / 2).toString();
        var xPos = $parallax.css('background-position').split(' ')[0];
        $parallax.css('background-position', xPos + ' -' + yPos + 'px');
    });

    window.setInterval(function () {
        if (IMG_COUNTER > 2) IMG_COUNTER = 1;
        $('#parallax').css('background-image', 'url("images/main_' + IMG_COUNTER + '.png")').fadeOut(1000, function () {
            IMG_COUNTER += 1;
            if (IMG_COUNTER > 2) IMG_COUNTER = 1;
            $('#parallax').css('background-image', 'url("images/main_' + IMG_COUNTER + '.png")').fadeIn(1000);
        });
    }, TRANSITION_SECS);

    $('#menu').on('click', function () {
        var $thisBtn = $(this);
        menuToggled = !menuToggled;
        var imgSrc = menuToggled ? 'images/logo_good.png' : 'images/logo.png';

        $('#img-logo').attr('src', imgSrc);

        $('#left-nav').slideToggle(function () {
            if (menuToggled) {
                $thisBtn.css({'left': 'calc(205px - 50pt)'});
            } else {
                $thisBtn.css({'left': ''});
            }
        });
    });

    $(window).on('resize', function () {
        if ($(this).width() > 450) {
            $('#img-logo').attr('src', 'images/logo.png');
//            $('#left-nav').css({'display': ''});
        }
    });
});