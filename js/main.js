var categoriesSlider = new Swiper('.categories-slider', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 26,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.categories-slider__button--next',
      prevEl: '.categories-slider__button--prev',
    },

    // Navigation keyboard
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

  });