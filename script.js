$(function () {

    // Navbar Sticky & Color changes on scroll End

    $(window).on('scroll', function (e) {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".navbar").removeClass("sticky-top");
            $(".navbar-brand").removeClass("text-dark");
            $(".nav-link").removeClass("text-dark");
            $(".navbar-toggler").removeClass("navbar-toggler-icon-black");

        } else {
            $(".navbar").addClass("sticky-top");
            $(".navbar-brand").addClass("text-dark");
            $(".nav-link").addClass("text-dark");
            $(".navbar-toggler").addClass("navbar-toggler-icon-black");

        }
    });

    // Navbar Sticky & Color changes on scroll End

    // Navbar Smooth Scroll Start
    // Init Scrollspy
    $('body').scrollspy({ target: '#main-nav' });

    // Add smooth scrolling
    $('#main-nav a').on('click', function (e) {
        // Check for a hash value
        if (this.hash !== '') {
            // Prevent default behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash to URL after scroll
                window.location.hash = hash;
            });
        }
    });

    // Navbar Smooth Scroll End

    // Adding Border and color to nav-links Start

    const navItem = document.querySelectorAll('.nav-item')
    const navLink = document.querySelectorAll('.nav-link')

    function selectItem(e) {
        removeBorder();
        // Add border to nav-item
        this.classList.add('active');
    }

    function selectColor(e) {
        removeColor();
        // Add color to current nav-item
        this.classList.add('text-warning');
    }

    function removeBorder() {
        navItem.forEach(item => item.classList.remove('active'));
    }

    function removeColor() {
        navLink.forEach(item => item.classList.remove('text-warning'));
    }

    // Listen for click
    navItem.forEach(item => item.addEventListener('click', selectItem));
    navLink.forEach(item => item.addEventListener('click', selectColor));

    // Adding Border and color to nav-links End

    // Activate WOW Start

    var wow = new WOW({
        boxClass: 'wow',
        mobile: false,
    })
    wow.init();

    // Activate WOW End

    // Swiper Brand Start 

    var swiper = new Swiper('.brand', {
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        spaceBetween: 10,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });

    // Swiper Brand End


    // Swiper Mobiles Start

    var swiper = new Swiper('#mobiles', {
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 5,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChange: function () {
                var activeIndex = this.activeIndex;
                var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
                $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
                $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
                $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
            },
        }

    });

    // Swiper Mobiles End

    // Back To Top Start

    // Show or hide arrow button

    $(window).on('scroll', function (e) {
        if ($(this).scrollTop() > 700) {
            $('.back-to-top').fadeIn(250)
        } else {
            $('.back-to-top').fadeOut(250)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (e) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    // Back To Top End

});
