**## 🚀 Começando**

Essas instruções permitirão que você obtenha conhecimento de como utilizar o eSwiper.

Consulte ***\*Mineiro\**** caso tenha dúvidas de como implementar o projeto.



**### 🔧 Instalação**

Siga o passo a passo abaixo para realizar a instalação do eSwiper.

1. Acessar a plataforma da VTEX.

2.  Importar os arquivos que estão na pasta imports.
    * jquery.min.js
    * swiper-bundle.min.js
    * zoom.min.js
    * swiper-bundle.min.css
    
3. Referenciar os scripts e styles importados nos devidos templates.

   

**## ⚙️ Exemplos de HTML Template**

Para utilizar placeholder:

```html
<div class="first__container"> --placeholder-- </div>
```

Para utilizar o template mocado:

```html
    <div class="first__container">

      <div>
        <img src="./arquivos/banner01.png" />
      </div>

      <div>
        <img src="./arquivos/banner02.png" />
      </div>

    </div>
```

Para utilizar o controle customizado:

```html
 <div class="first__container">

      <div>
        --CMC--
      </div>

      <div>
        --CMC--
      </div>

 	</div>
```



**## 🔩 Chamando a função**

Exemplo de chamada da função:

```js
import { eSwiper } from "...caminho do modulo eSwiper.js"

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
      },
    })
  },
}

Home.init()
```

**## 🛠️ Construindo o objeto**

```js
direction: 'horizontal' | 'vertical'
loop: boolean
arrows: boolean
scrollbar: boolean
pagination: boolean
dynamicBullets: boolean
paginationType: 'bullets' | 'fraction' | 'progressbar' | 'custom' | undefined
clickable: boolean
centeredSlides: boolean
slidesPerView: number | 'auto' | undefined
rows: number
mousewheel: boolean
autoplay: boolean | { delay: number }
lazy: boolean
spaceBetween: number
isZoom: boolean

	thumbs: boolean
	thumbsConfigs: {
					thumbsContainer: "first\_\_container--thumbs",
					direction: 'horizontal' | 'vertical',
					slidesPerView: number,
					loop: boolean,
					slideToClickedSlide: boolean,
					centeredSlides: boolean,
					arrows: boolean,
					spaceBetween: number,
					lazy: boolean,
					}
```

##  :cherry_blossom: Estilizando o componente

1. O arquivo swiper-styles.scss está disponível, mas não recomendo altera-lo.

2. Para estilizar utilize o exemplo abaixo:

   * Selecione o container que foi modulado.
   * Altere os elementos dentro da seleção do container.
   * Modifique global somente se tiver certeza da alteração.

   ```scss
   .first__container {
     width: 50%;
   
     .swiper-slide-content{
       position: relative;
       width: max-content;
       margin: 0 auto;
     }
   
     .wrapper-zoom{
       border: 1px solid;
       padding: 20px;
       min-height: 300px;
     }
   
     .message-zoom{
       text-align: center;
       color: #565959;
     }
   
     & img {
       width: 300px;
       height: auto;
     }
   }
   ```



*** Essa documentação esta em processo de desenvolvimento, assim como o eSwiper!

*** Use com cuidado bugs podem ocorrer.
