(function() {
  const swiper = new Swiper('.device-card__slider-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();
