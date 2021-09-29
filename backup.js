export const eSwiper = ({ configs }) => {
  const { swiperContainer } = configs
  const _swiperContainer = swiperStructure(swiperContainer, configs)
  eSwiperGenerate({
    _swiperContainer,
    configs,
  })
}

export const swiperStructure = (swiperContainer, configs) => {
  const { scrollbar, arrows, pagination, lazy, isZoom, zoomMessage } = configs

  const _swiperContainer = document.querySelector(`.${swiperContainer}`)
  _swiperContainer.classList.add("swiper")

  const _wrapperSwiper = Element({ type: "div", classList: ["swiper-wrapper"] })

  const desktopWidth = screen.width >= 1024

  const _slides = [..._swiperContainer.children]
  _slides.forEach((_slide) => {
    const _swiperSlideContent = Element({ type: "div", classList: ["swiper-slide-content"] })

    const _image = _slide.querySelector("img")

    _slide.classList.add("swiper-slide")
    _wrapperSwiper.appendChild(_slide)

    _slide.appendChild(_swiperSlideContent)

    _swiperSlideContent.appendChild(_image)

    if (lazy) {
      const _preLoader = Element({
        type: "div",
        classList: ["swiper-lazy-preloader"],
      })
      _image.classList.add("swiper-lazy")
      _image.setAttribute("data-src", _image.src)
      _image.removeAttribute("src")
      _swiperSlideContent.appendChild(_image)
      _swiperSlideContent.appendChild(_preLoader)
    }

    if (isZoom && desktopWidth) {
      const _wrapperZoom = Element({ type: "div", classList: ["wrapper-zoom"] })
      const _messageZoom = Element({ type: "div", classList: ["message-zoom"] })
      _swiperSlideContent.appendChild(_wrapperZoom)
      _wrapperZoom.appendChild(_image)
      _messageZoom.textContent = zoomMessage
      _swiperSlideContent.appendChild(_messageZoom)
    }
  })

  _swiperContainer.appendChild(_wrapperSwiper)

  if (isZoom && desktopWidth) $(".wrapper-zoom").zoom()

  if (scrollbar) {
    const _scrollbar = Element({ type: "div", classList: ["swiper-scrollbar"] })
    _swiperContainer.appendChild(_scrollbar)
  }

  if (arrows) {
    const _buttonNext = Element({
      type: "div",
      classList: ["swiper-button-next"],
    })
    const _buttonPrev = Element({
      type: "div",
      classList: ["swiper-button-prev"],
    })
    _swiperContainer.appendChild(_buttonNext)
    _swiperContainer.appendChild(_buttonPrev)
  }

  if (pagination) {
    const _pagination = Element({
      type: "div",
      classList: ["swiper-pagination"],
    })
    _swiperContainer.appendChild(_pagination)
  }

  return _swiperContainer
}

export const eSwiperGenerate = ({ _swiperContainer, configs }) => {
  const {
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
    thumbs,
  } = configs

  var swiper = new Swiper(_swiperContainer, {
    direction,
    loop,
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

  if (thumbs) thumbsGenerate(swiper, configs)
}

export const thumbsGenerate = (swiper, configs) => {
  const { thumbsConfigs, lazy } = configs
  const { slidesPerView = 1, spaceBetween = 2, direction, arrows, loop } = thumbsConfigs

  const _thumbsContainer = thumbsStructure(configs)

  var swiperThumbs = new Swiper(_thumbsContainer, {
    direction,
    loop,
    arrows,
    spaceBetween,
    lazy,
    slidesPerView,
    slideToClickedSlide: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    thumbs: {
      swiper: swiper,
    },
  })
}

export const thumbsStructure = (configs) => {
  const { thumbsConfigs, lazy } = configs
  const { thumbsContainer, arrows } = thumbsConfigs

  const _thumbsContainer = document.querySelector(`.${thumbsContainer}`)
  _thumbsContainer.classList.add("swiper")
  _thumbsContainer.setAttribute("thumbsSlider", "")

  const _wrapperSwiper = Element({ type: "div", classList: ["swiper-wrapper"] })

  const _slides = [..._thumbsContainer.children]
  _slides.forEach((_slide) => {
    const _swiperSlideContent = Element({ type: "div", classList: ["swiper-slide-content"] })
    const _image = _slide.querySelector("img")
    _slide.classList.add("swiper-slide")
    _wrapperSwiper.appendChild(_slide)

    _slide.appendChild(_swiperSlideContent)

    _swiperSlideContent.appendChild(_image)

    if (lazy) {
      const _preLoader = Element({
        type: "div",
        classList: ["swiper-lazy-preloader"],
      })
      _image.classList.add("swiper-lazy")
      _image.setAttribute("data-src", _image.src)
      _image.removeAttribute("src")
      _swiperSlideContent.appendChild(_image)
      _swiperSlideContent.appendChild(_preLoader)
    }
  })

  _thumbsContainer.appendChild(_wrapperSwiper)

  if (arrows) {
    const _buttonNext = Element({
      type: "div",
      classList: ["swiper-button-next"],
    })
    const _buttonPrev = Element({
      type: "div",
      classList: ["swiper-button-prev"],
    })
    _thumbsContainer.appendChild(_buttonNext)
    _thumbsContainer.appendChild(_buttonPrev)
  }

  return _thumbsContainer
}

export const Element = ({ type, classList }) => {
  const _element = document.createElement(type)
  for (let i = 0; i < classList.length; i++) {
    _element.classList.add(classList[i])
  }
  return _element
}
