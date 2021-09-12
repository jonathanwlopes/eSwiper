export const eSwiper = ({ principalParent, configs }) => {
  const {
    direction,
    loop,
    scrollbar,
    arrows,
    pagination,
    paginationType,
    dynamicBullets,
    clickable,
    slidesPerView,
    spaceBetween,
    rows,
    mousewheel,
    autoplay,
    lazy,
  } = configs

  const _principalParent = document.querySelector(`.${principalParent}`)
  _principalParent.classList.add("swiper")

  const _wrapperSwiper = Element({ type: "div", classList: ["swiper-wrapper"] })
  _principalParent.appendChild(_wrapperSwiper)

  const _banners = _principalParent.querySelectorAll(".box-banner")
  _banners.forEach((_banner) => {
    _banner.classList.add("swiper-slide")
    _wrapperSwiper.appendChild(_banner)

    if (lazy) {
      const _image = _banner.querySelector("img")
      _image.classList.add("swiper-lazy")
      _image.setAttribute("data-src", _image.src)
      _image.removeAttribute("src")
    }
  })

  const _shelfImages = _principalParent.querySelectorAll(".shelf > ul > li")
  _shelfImages.forEach((_shelfImage) => {
    _shelfImage.classList.add("swiper-slide")
    _wrapperSwiper.appendChild(_shelfImage)

    if (lazy) {
      const _image = _shelfImage.querySelector("img")
      _image.classList.add("swiper-lazy")
      _image.setAttribute("data-src", _image.src)
      _image.removeAttribute("src")
    }
  })

  if (scrollbar) {
    const _scrollbar = Element({ type: "div", classList: ["swiper-scrollbar"] })
    _principalParent.appendChild(_scrollbar)
  }

  if (arrows) {
    const _buttonNext = Element({ type: "div", classList: ["swiper-button-next"] })
    const _buttonPrev = Element({ type: "div", classList: ["swiper-button-prev"] })
    _principalParent.appendChild(_buttonNext)
    _principalParent.appendChild(_buttonPrev)
  }

  if (pagination) {
    const _pagination = Element({ type: "div", classList: ["swiper-pagination"] })
    _principalParent.appendChild(_pagination)
  }

  eSwiperGenerate({
    _principalParent,
    direction,
    loop,
    arrows,
    dynamicBullets,
    pagination,
    paginationType,
    clickable,
    slidesPerView,
    spaceBetween,
    rows,
    mousewheel,
    autoplay,
    scrollbar,
    lazy,
  })
}

export const eSwiperGenerate = ({
  _principalParent,
  direction,
  loop,
  arrows,
  dynamicBullets,
  pagination,
  paginationType = "bullets",
  clickable,
  slidesPerView = 1,
  spaceBetween = 2,
  rows = 1,
  mousewheel,
  autoplay,
  scrollbar,
  lazy,
}) => {
  new Swiper(_principalParent, {
    direction: direction,
    loop: loop,
    slidesPerView,
    spaceBetween,
    grid: {
      rows: rows ? rows : "1",
    },
    mousewheel,
    autoplay,
    lazy,

    pagination: {
      el: pagination ? ".swiper-pagination" : "",
      dynamicBullets,
      pagination,
      type: paginationType,
      clickable,
    },

    navigation: {
      nextEl: arrows ? ".swiper-button-next" : "",
      prevEl: arrows ? ".swiper-button-prev" : "",
    },

    scrollbar: {
      el: scrollbar ? ".swiper-scrollbar" : "",
    },
  })
}

export const Element = ({ type, classList }) => {
  const _element = document.createElement(type)
  for (let i = 0; i < classList.length; i++) {
    _element.classList.add(classList[i])
  }
  return _element
}
