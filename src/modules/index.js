import { eSwiper } from "./eSwiper/index.js"

const Home = {
  init: () => {
    Home.slideBanners()
  },

  slideBanners: () => {
    eSwiper({
      configs: {
        swiperContainer: "first__container",
        arrows: true,
        direction: "horizontal",
        isZoom: true,
        thumbs: true,
        autoplay: {
          delay: 1000,
        },
        thumbsConfigs: {
          thumbsContainer: "first__container--thumbs",
          direction: "horizontal",
          slidesPerView: 4,
        },
      },
    })
  },
}

Home.init()
