$(function() {

    var aboutFlag = 1;
    var skillFlag = 1;
    var educationFlag = 1;
    var experienceFlag = 1;
    var contactFlag = 1;
    var portfolioFlag = 1;
    var animated;

    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });

    function coverAnimation() {
        $(".firstname-animate").animateCss('bounceInLeft');
        $(".lastname-animate").animateCss('bounceInUp');
        $(".nickname-animate").animateCss('bounceInDown');
        $(".avatar-wrapper").animateCss('fadeIn');
        $(".strong-point_1, .strong-point_2").animateCss('zoomIn');
    }

    function aboutAnimation() {

        /*DESKTOP*/

        $("#about").css('opacity', '1');
        $("#about-header").animateCss('bounceInDown');
        $("#about-avatar").animateCss('bounceInUp');
        $("#about-elem-1, #about-elem-3, #about-elem-5, #animate-about-sub-mini-divider-1, #animate-about-sub-mini-divider-3").animateCss('bounceInLeft');
        $("#about-elem-2, #about-elem-4, #about-elem-6, #animate-about-sub-mini-divider-2, #animate-about-sub-mini-divider-4").animateCss('bounceInRight');
        $(".profile-desc").animateCss('bounceIn');

        /*TABLET*/

        $(".about-info-lv1").animateCss('bounceIn');
        $(".about-divider-lv1").animateCss('fadeIn');
        $(".about-info-lv2").animateCss('bounceIn');
        $(".about-info-lv3").animateCss('bounceIn');
        $(".about-divider-lv3").animateCss('fadeIn');
        $(".profile-desc-tablet").animateCss('bounceIn');
        $(".profile-desc-mobile").animateCss('bounceIn');
    }

    function skillAnimation() {
        $("#skill").css('opacity', '1');
        $("#skill-header").animateCss('bounceInDown');
        $(".skill-wrapper").animateCss('fadeIn');
        setTimeout(function() {
            $(".circle_1").circleProgress({
                value: 0.89
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_1").html(parseInt(89 * progress) + '<i>%</i>');
            });

            $(".circle_2").circleProgress({
                value: 0.71
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_2").html(parseInt(71 * progress) + '<i>%</i>');
            });

            $(".circle_3").circleProgress({
                value: 0.91
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_3").html(parseInt(91 * progress) + '<i>%</i>');
            });

            $(".circle_4").circleProgress({
                value: 0.91
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_4").html(parseInt(91 * progress) + '<i>%</i>');
            });

            $(".circle_5").circleProgress({
                value: 0.91
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_5").html(parseInt(91 * progress) + '<i>%</i>');
            });

            $(".circle_6").circleProgress({
                value: 0.69
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_6").html(parseInt(69 * progress) + '<i>%</i>');
            });

            $(".circle_7").circleProgress({
                value: 0.51
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_7").html(parseInt(51 * progress) + '<i>%</i>');
            });

            $(".circle_8").circleProgress({
                value: 0.51
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find(".circle-percent_8").html(parseInt(51 * progress) + '<i>%</i>');
            });
        }, 1000);
    }

    function educationAnimation() {
        $("#education").css('opacity', '1');
        $("#education-header").animateCss('bounceInDown');
        $("#education-item-wrapper-01, #education-item-wrapper-02, #education-item-wrapper-03").animateCss('fadeIn');
        $("#education-info-holder-01, #education-info-holder-02, #education-info-holder-03").animateCss('bounceInLeft');
        $("#education-desc-holder-01, #education-desc-holder-02, #education-desc-holder-03").animateCss('bounceInRight');
        $(".education-item-mobile-lv1, .education-item-mobile-lv2, .education-item-mobile-lv3").animateCss('fadeIn');
    }

    function experienceAnimation() {
        $("#experience").css('opacity', '1');
        $("#experience-header").animateCss('bounceInDown');
        $("#experience-item-wrapper-01, #experience-item-wrapper-02, #experience-item-wrapper-03").animateCss('fadeIn');
        $("#experience-info-holder-01, #experience-info-holder-02, #experience-info-holder-03").animateCss('bounceInLeft');
        $("#experience-desc-holder-01, #experience-desc-holder-02, #experience-desc-holder-03").animateCss('bounceInRight');
        $(".experience-item-mobile-lv1, .experience-item-mobile-lv2, .experience-item-mobile-lv3").animateCss('fadeIn');
    }

    function contactAnimation() {
        /*DESKTOP*/
        $("#contact").css('opacity', '1');
        $("#contact-header").animateCss('bounceInDown');
        $("#socialNetwork").animateCss('zoomIn');
        $("#socialNetwork-mobile").animateCss('fadeIn');
        $("#email-wrapper").animateCss('bounceInDown');
        $("#email-wrapper-mobile").animateCss('fadeIn');
        $("#address-wrapper").animateCss('bounceInLeft');
        $("#phone-wrapper").animateCss('bounceInRight');
        $("#form-wrapper").animateCss('bounceInUp');
        $(".contact-form-mobile").animateCss('bounceIn');
        $(".address-wrapper-mobile, .phone-wrapper-mobile").animateCss('fadeIn');
        /*TABLET*/
        $("#form-wrapper-tablet").animateCss('bounceInUp');
        $("#address-wrapper-tablet").animateCss('bounceIn');
        $("#phone-wrapper-tablet").animateCss('bounceIn');
        $(".address-wrapper-mobile, .phone-wrapper-mobile").animateCss('fadeIn');
    }

    function portfolioAnimation() {

        /*DESKTOP*/

        $("#portfolio").css('opacity', '1');
        $("#portfolio-header").animateCss('bounceInDown');
        $(".elem-wrapper-below").animateCss('zoomIn');
        $(".elem-wrapper-upper").animateCss('zoomIn');

        /*TABLET*/

        $(".elem-wrapper-lv1, .elem-wrapper-lv2, .elem-wrapper-lv3, .elem-wrapper-lv4, .elem-wrapper-lv5, .elem-wrapper-lv6, .elem-wrapper-lv7, .elem-wrapper-lv8").animateCss('zoomIn');
    }    

    function animateOnScrollDesktop() {
        $(window).scroll(function() {
            var aboutTop = $("#about").offset().top,
                skillTop = $("#skill").offset().top,
                educationTop = $("#education").offset().top,
                experienceTop = $("#experience").offset().top,
                contactTop = $("#contact").offset().top,
                portfolioTop = $("#portfolio").offset().top,
                windowScrollTop = $(window).scrollTop();
            if (windowScrollTop > aboutTop - (52 + 100 + 120)) {
                if (aboutFlag == 1) {
                    aboutAnimation();
                    aboutFlag = 0;
                }
            }
            if (windowScrollTop > skillTop - (52 + 120 + 120)) {
                if (skillFlag == 1) {
                    skillAnimation();
                    skillFlag = 0;
                }
            }
            if (windowScrollTop > educationTop - (52 + 120 + 120)) {
                if (educationFlag == 1) {
                    educationAnimation();
                    educationFlag = 0;
                }
            }
            if (windowScrollTop > experienceTop - (52 + 120)) {
                if (experienceFlag == 1) {
                    experienceAnimation();
                    experienceFlag = 0;
                }
            }
            if (windowScrollTop > contactTop - (52 + 120 + 120)) {
                if (contactFlag == 1) {
                    contactAnimation();
                    contactFlag = 0;
                }
            }
            if (windowScrollTop > portfolioTop - (52 + 120 + 120)) {
                if (portfolioFlag == 1) {
                    portfolioAnimation();
                    portfolioFlag = 0;
                }
            }
        });
    }

    function animateOnScrollMobile() {
        $(window).scroll(function() {
            var skillTop = $("#skill").offset().top,
                educationTop = $("#education").offset().top,
                experienceTop = $("#experience").offset().top,
                contactTop = $("#contact").offset().top,
                portfolioTop = $("#portfolio").offset().top,
                windowScrollTop = $(window).scrollTop();

            if (windowScrollTop > skillTop - (52 + 120 + 120)) {
                if (skillFlag == 1) {
                    skillAnimation();
                    skillFlag = 0;
                }
            }
            if (windowScrollTop > educationTop - (52 + 120 + 120)) {
                if (educationFlag == 1) {
                    educationAnimation();
                    educationFlag = 0;
                }
            }
            if (windowScrollTop > experienceTop - (52 + 80)) {
                if (experienceFlag == 1) {
                    experienceAnimation();
                    experienceFlag = 0;
                }
            }
            if (windowScrollTop > contactTop - (52 + 120 + 120)) {
                if (contactFlag == 1) {
                    contactAnimation();
                    contactFlag = 0;
                }
            }
            if (windowScrollTop > portfolioTop - (52 + 120 + 120)) {
                if (portfolioFlag == 1) {
                    portfolioAnimation();
                    portfolioFlag = 0;
                }
            }
        });
    }

    function loadAnimation() {

        coverAnimation();

        var windowWidth = $(window).outerWidth();

        if (windowWidth > 767) {
            animateOnScrollDesktop();
        } else {
            aboutAnimation();
            animateOnScrollMobile();
        }
    }  

    function clickOnMeAnimation() {
        $(".click-me").animateCss('rubberBand');
    }

    $(".click-me-wrapper").hover( function() {
        clickOnMeAnimation(); 
    });

    $(".click-me-wrapper").mouseout( function() {
        $(".click-me").removeClass('rubberBand'); 
    });

    function downloadResumeAnimation() {
        $(".download-icon").animateCss('bounceIn');        
    }

    $(".download-resume").hover( function(e) {
        downloadResumeAnimation(); 
        e.preventdefault();
    });

    $(".download-resume").mouseout( function() {
        $(".download-icon").removeClass('bounceIn'); 
        alert("aaS");
        e.preventdefault();
    });

    setTimeout(function() { 
        $("body").css("opacity", "1");
        loadAnimation();
    }, 1000);

});



