var mySwiper = new Swiper('.swiper-container', {
    // Options du slider
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        gradCursos: true,
    // Pagination du slider
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    })
    