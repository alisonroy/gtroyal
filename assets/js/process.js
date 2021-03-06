var swiper = new Swiper(".swiper-process", {
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 0,
  effect: "fade",
  loop: true,
  speed: 300,
  // loop: false,
  // delay between transitions in ms
  // autoplay: {
  //   delay: 5000,
  //   loop: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
