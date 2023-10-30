jQuery(document).ready(function () {
    // sticky_header
    jQuery(window).scroll(function () {
        if (jQuery(document).scrollTop() > jQuery(".top-header-outer").outerHeight()) {
            jQuery('header').addClass('sticky');
        } else {
            jQuery('header').removeClass('sticky');
        }
    });


    // Responsive_navigation
    jQuery(".menu_btn").click(function () {
        jQuery("body").toggleClass("mobile_menu_active");
        jQuery(".overlay").click(function () {
            jQuery("body").removeClass("mobile_menu_active");
        })
    });

    // Sub_menu
    jQuery(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='fas fa-chevron-down'></i></div>");
    jQuery(".sub_menu_opener").click(function () {
        jQuery('.hdr_menu .sub-menu').slideUp();
        jQuery("body").removeClass("sub_menu_active");
        if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
            jQuery(this).parent().find(".sub-menu").slideDown();
            jQuery("body").addClass("sub_menu_active");
        } else {
            jQuery(this).parent().find(".sub-menu").slideUp();
            jQuery("body").removeClass("sub_menu_active");
        }
    });

    jQuery(".sub_menu_opener").click(function () {
        if (jQuery(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
            jQuery(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
        } else {
            jQuery('.hdr_menu ul > li').removeClass("sub_menu_open");
            jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
        }
    });

    // show_modal
    // jQuery("#case_study_dtls_modal").modal({})

    // Scroll_top_top
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery(".scrollup").addClass("active");
        } else {
            jQuery(".scrollup").removeClass("active");
        }
    });

    jQuery(".scrollup").on("click", function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



    // Leadership Slider
    new Swiper(".leadershipSlider", {
        spaceBetween: 30,
        speed: 1500,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".leadershipSlider .swiper-pagination",
        },
    });

    // Testimonial Slider
    new Swiper(".testimonialSlider", {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonialSlider .slider-nav .swiper-button-next",
            prevEl: ".testimonialSlider .slider-nav .swiper-button-prev",
        },
    });
});