$('.owl-carousel').owlCarousel({
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    mouseDrag: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

var owl = $('#nmOwlBlock');
owl.owlCarousel();
$('#nmOwlPrv').click(function () {
    owl.trigger('next.owl.carousel');
})
$('#nmOwlNxt').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
})

var owl2 = $('#nmOwlTestimonial');
owl2.owlCarousel();
$('#nmOwlPrv2').click(function () {
    owl2.trigger('next.owl.carousel');
})
$('#nmOwlNxt2').click(function () {
    owl2.trigger('prev.owl.carousel', [300]);
})