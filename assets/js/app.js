$(document).ready(function () {
    //First slide
    var featuredSlide = $("#featured-carousel")
    var salesSlide = $("#sales-carousel")
    var featuredNavLeft = $('#featuredNavLeft')
    var featuredNavRight = $('#featuredNavRight')
    var salesNavLeft = $('#salesNavLeft')
    var salesNavRight = $('#salesNavRight')
    var poloSlide = $('#polo-carousel')
    var poloNavLeft = $('#poloNavLeft')
    var poloNavRight = $('#poloNavRight')
    var tShirtSlide = $('#tShirt-carousel')
    var tShirtNavLeft = $('#tShirtNavLeft')
    var tShirtNavRight = $('#tShirtNavRight')
    var heroSlide = $('#hero-carousel');

    //General setting for slide on home page
    var generalSetting = {
        stagePadding: 0,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            768: {
                items: 4,
                nav: false
            },
            992: {
                items: 6,
                nav: false
            }
        }
    }
    featuredSlide.owlCarousel(generalSetting);
    salesSlide.owlCarousel(generalSetting);
    poloSlide.owlCarousel(generalSetting)
    tShirtSlide.owlCarousel(generalSetting);
    heroSlide.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop:true,
        dotsEach: true,
    });


    /**
     * @description Trigger event for pushing to previous slide in featured carousel
     */
    featuredNavLeft.on('click', function (e) {
        e.preventDefault()
        featuredSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in featured carousel
     */
    featuredNavRight.on('click', function (e) {
        e.preventDefault()
        featuredSlide.trigger('next.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to previous slide in sales carousel
     */
    salesNavLeft.on('click', function (e) {
        e.preventDefault()
        salesSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in sales carousel
     */
    salesNavRight.on('click', function (e) {
        e.preventDefault()
        salesSlide.trigger('next.owl.carousel')
    })
    /**
     * @description Trigger event for pushing to previous slide in polo carousel
     */
    poloNavLeft.on('click', function (e) {
        e.preventDefault()
        poloSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in polo carousel
     */
    poloNavRight.on('click', function (e) {
        e.preventDefault()
        poloSlide.trigger('next.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to previous slide in tshirt carousel
     */
    tShirtNavLeft.on('click', function (e) {
        e.preventDefault()
        tShirtSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in tshirt carousel
     */
    tShirtNavRight.on('click', function (e) {
        e.preventDefault()
        tShirtSlide.trigger('next.owl.carousel')
    })


    /*
     **Switch between two modals
     */

    function SwitchModals(e) {
        e.preventDefault();
        var currentModal = e.target.dataset.from;
        var targetModal = e.target.dataset.to;
        $(currentModal).modal('hide')
        $(targetModal).modal('show')
    }

    $('.loginLink').click(SwitchModals);
    $('.regLink').click(SwitchModals);

    /*
     **Toggle Navlink categories
     */
    $('#categoryToggle').click(function (e) {
        e.preventDefault();
        var category = e.target.dataset.tag;
        $(category).toggleClass('d-none');
        e.target.classList.toggle('is-open');
    })

    $(document).on('click', function (e) {
        $closest = $(e.target)
        //Close category links if it is not the targeted element
        if (!$closest.closest('#categoryNavLink').length && !$(e.target).is('#categoryToggle')) {
            $('#categoryNavLink').addClass('d-none');
            $('#categoryToggle').removeClass('is-open');
        }
    })
});