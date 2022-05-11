let swiper = new Swiper(".team-inners__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});