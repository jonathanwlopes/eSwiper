import { eSwiper } from "./eSwiper/index.js"

eSwiper({
  configs: {
    swiperContainer: "first__container",
    direction: "horizontal",
    loop: true,
    arrows: true,
    lazy: true,
    isZoom: true,
    thumbs: true,
    thumbsConfigs: { thumbsContainer: "first__container--thumbs", direction: "horizontal", slideToClickedSlide: true, slidesPerView: 4 },
  },
})

/*
direction: 'horizontal' | 'vertical'
loop: boolean
arrows: boolean
scrollbar: boolean
pagination: boolean
dynamicBullets: boolean
paginationType: 'bullets' | 'fraction' | 'progressbar' | 'custom' | undefined
clickable: boolean
slidesPerView: number | 'auto' | undefined
rows: number
mousewheel: boolean
autoplay: boolean | AutoPlayProps
lazy: boolean
spaceBetween: number
isZoom: boolean
slideToClickedSlide: boolean - Voltar pra o slide clicado
thumbs: boolean
thumbsConfigs: { isActive: boolean, thumbsContainer: string, ...configs}
*/
