var categoriesSlider = new Swiper('.categories-slider', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 26,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is >= 767px
      767:{
        slidesPerView: 3,
        spaceBetween: 17
      },
      // when window width is >= 576px
      576:{
        slidesPerView: 2,
        spaceBetween: 16
      },
      // when window width is >= 320px
      320:{
        slidesPerView: 4,
        slidesPerColumn: 3,
        spaceBetween: 10
      }
    },
  
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