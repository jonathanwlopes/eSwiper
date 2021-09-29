eSwiper({
configs: {
swiperContainer: "first**container",
arrows: true,
direction: "horizontal",
isZoom: true,
lazy: true,
loop: true,
zoomMessage: "Passe o mouse para ampliar a imagem",
thumbs: true,
thumbsConfigs: {
thumbsContainer: "first**container--thumbs",
direction: "horizontal",
slidesPerView: 3,
loop: true,
slideToClickedSlide: true,
centeredSlides: true,
},
},
})

direction: 'horizontal' | 'vertical' --- Direção do swiper ---
loop: boolean --- Slides infinitos ---
arrows: boolean --- Setas ---
scrollbar: boolean --- Scroll no container ---
pagination: boolean --- Bolinhas de paginação ---
dynamicBullets: boolean
paginationType: 'bullets' | 'fraction' | 'progressbar' | 'custom' | undefined
clickable: boolean
centeredSlides: boolean
slidesPerView: number | 'auto' | undefined
rows: number
mousewheel: boolean
autoplay: boolean | AutoPlayProps
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
},

## 🚀 Começando

Essas instruções permitirão que você obtenha conhecimento de como utilizar o eSwiper.

Consulte **Mineiro** caso tenha dúvidas de como implementar o projeto.

### 🔧 Instalação

Siga o passo a passo abaixo para realizar a instalação do eSwiper.

```
1. Acessar a plataforma da VTEX.
2. Importar os arquivos que estão na pasta imports.
- jquery.min.js
- swiper-bundle.min.js
- swiper-bundle.min.css
- zoom.min.js
3. Referenciar os scripts e styles importados nos devidos templates.
```

## ⚙️ Exemplos de HTML Template.

Para utilizar um template com placeholder a estrutura abaixo deve ser criada.
```
<div class="first__container"> --placeholder-- </div>
```

Para utilizar o template mocado a estrutura abaixo deve ser criada.
```
    <div class="first__container">

      <div>
        <img src="./arquivos/banner01.png" />
      </div>

      <div>
        <img src="./arquivos/banner02.png" />
      </div>

    </div>
```
*** Caso queira utilizar o controle customizado para as imagens, basta substituir o conteudo da DIV "first__container" pelo CMC.




## 🔩 Chamando a função

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Desenvolvimento

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
- [Maven](https://maven.apache.org/) - Gerente de Dependência
- [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

- **Um desenvolvedor** - _Trabalho Inicial_ - [umdesenvolvedor](https://github.com/linkParaPerfil)
- **Fulano De Tal** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

- Conte a outras pessoas sobre este projeto 📢
- Convide alguém da equipe para uma cerveja 🍺
- Obrigado publicamente 🤓.
- etc.

---

⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
