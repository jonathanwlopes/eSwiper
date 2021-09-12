import { eSwiper } from "./eSwiper/index.js"

eSwiper({
  principalParent: "first__container",
  configs: {
    direction: "horizontal",
    loop: true,
    arrows: true,
  },
})

/*
-- O que faz --
principalParent -- Classe do container que irá receber o swiper.
direction -- Direção dos slides na horizontal ou vertical.
loop -- Slides infinitos.
arrows -- Setas.
scrollbar -- Scroll nos slides.
pagination -- Botões de paginação.
dynamicBullets -- Efeito nos botões de paginação.
paginationType -- Tipo da paginação.
clickable -- Botões de paginação clicaveis.
slidesPerView -- Quantidade de slides em cada visualização.
spaceBetween -- Espaçamento entre os elementos.
rows -- Número de linhas.
mousewheel -- Controle bolinha do mouse.
lazy -- Carregamento da imagem somente quando o slide for ativado.

eSwiper({
principalParent: "container__class",

configs: {
direction: 'horizontal' | 'vertical',
loop: boolean,
arrows: boolean,
scrollbar: boolean
dynamicBullets: boolean,
pagination: boolean,
paginationType: 'progressbar' | 'fraction' ,
clickable: boolean,
slidesPerView: number
rows: number,
mousewheel: boolean,
autoplay: boolean || { delay: 2500, disableOnInteraction: true }
lazy: boolean,
})
*/
