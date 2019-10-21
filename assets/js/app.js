$(document).ready(function () {
    //First slide
    var featuredSlide = $("#featured-carousel")
    var salesSlide = $("#sales-carousel")
    var featuredNavLeft = $('#featuredNavLeft')
    var featuredNavRight = $('#featuredNavRight')
    var salesNavLeft = $('#salesNavLeft')
    var salesNavRight = $('#salesNavRight')

    //General setting for slide on home page
    var generalSetting = {
        stagePadding: 0,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            768:{
                items:4,
                nav:false
            },
            992:{
                items:6,
                nav:false
            }
        }
    }
    featuredSlide.owlCarousel(generalSetting);
    salesSlide.owlCarousel(generalSetting);

    /**
     * @description Trigger event for pushing to previous slide in featured carousel
     */
    featuredNavLeft.on('click',function(e) {
        e.preventDefault()
        featuredSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in featured carousel
     */
    featuredNavRight.on('click',function(e) {
        e.preventDefault()
        featuredSlide.trigger('next.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to previous slide in sales carousel
     */
    salesNavLeft.on('click',function(e) {
        e.preventDefault()
        salesSlide.trigger('prev.owl.carousel')
    })

    /**
     * @description Trigger event for pushing to next slide in sales carousel
     */
    salesNavRight.on('click',function(e) {
        e.preventDefault()
        salesSlide.trigger('next.owl.carousel')
    })
});