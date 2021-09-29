import { eSwiper } from "./eSwiper/index.js"

eSwiper({
  configs: {
    swiperContainer: "first__container",
    arrows: true,
    direction: "horizontal",
    isZoom: true,
    lazy: true,
    loop: true,
    zoomMessage: "Passe o mouse para ampliar a imagem",
    thumbs: true,
    thumbsConfigs: {
      thumbsContainer: "first__container--thumbs",
      direction: "horizontal",
      slidesPerView: 3,
      loop: true,
      slideToClickedSlide: true,
      centeredSlides: true,
    },
  },
})


