var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  initialSlide: 0,
  //truewrapper adoptsheight of active slide
  autoHeight: false,
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // delay between transitions in ms
  autoplay: {
    delay: 3000,
  }, // loop false also
  breakpoints: {
    // when window width is >= 767px
    768: {
      effect: "coverflow",
      slidesPerView: 1,
      initialSlide: 0,
      speed: 400,
      autoplay: {
        delay: 3000,
      },
    },
  },

  // And if we need scrollbar
  //scrollbar: '.swiper-scrollbar',
  // "slide", "fade", "cube", "coverflow" or "flip"
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 600,
    modifier: 0.13,
    slideShadows: true,
  }, // Distance between slides in px.
  spaceBetween: 80,
  //
  slidesPerView: 3,
  //
  centeredSlides: true,
  //
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  //
  grabCursor: true,
});
