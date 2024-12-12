const projects = [
  {
    title: "Projeto Pokedex",
    image: "src/imagens/Telas/pokedex.png",
    description: "Projeto feito usando React.js, Axios, style-components, Context API, React Router DOM e test Jest",
    github: "https://github.com/nahinMSM/quest-react-pokedex",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Fetch GitHub API",
    image: "src/imagens/Telas/githube_fetcher_api.png",
    description: "Projeto feito usando HTML, CSS, JavaScript e API do GitHub",
    github: "https://github.com/nahinMSM/Projeto-fetch-GitHub-api",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Age calculator",
    image: "src/imagens/Telas/age_calculator.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/age-calculator-app-main",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Interative card",
    image: "src/imagens/Telas/interative_card.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/interative-card",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Landing page Advogada Trabalhista",
    image: "src/imagens/Telas/advogada_trb_landing_page.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/Advogada-Landing-page",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Multi Step Form",
    image: "src/imagens/Telas/multi_step_form.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/Multi-Step-Form-Main",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Advice generator",
    image: "src/imagens/Telas/active-states.png",
    description: "Projeto feito usando HTML, CSS, JavaScript e API",
    github: "https://github.com/nahinMSM/advice-generator-app-html-css-js",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Formulário com validação",
    image: "src/imagens/Telas/formulario_com_validacao.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/Quest-HTML-CSS-JS-intermediario-Formulario-com-validacao",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto XYZ Agência",
    image: "src/imagens/Telas/xyz_agencia.png",
    description: "Projeto feito usando HTML e CSS",
    github: "https://github.com/nahinMSM/landing-page-com-grid-agencia-xyz",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Huddle landing page",
    image: "src/imagens/Telas/huddle_landing_page.png",
    description: "Projeto feito usando HTML e CSS",
    github: "https://github.com/nahinMSM/huddle-landing-page-with-single-introductory-section-master",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Room homepage master",
    image: "src/imagens/Telas/room_homepage_master.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/room-homepage-master",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto News homepage",
    image: "src/imagens/Telas/news_homepage.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/news-homepage-main",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Boletim informativo",
    image: "src/imagens/Telas/boletim_informativo.png",
    description: "Projeto feito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/newsletter-sign-up-with-success-message-main",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Atividade Extra como Adestrador",
    image: "src/imagens/Telas/galeria_lithbox.png",
    description: "Galeria LightBox de imagens e videos feito em HTML, CSS, JavaScript E Jquery",
    github: "https://nahinmoreira.netlify.app/",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Landing page PetShop",
    image: "src/imagens/Telas/landing_page_petshop_lyrios.png",
    description: "Landing Page de PetShop feito com HTML, CSS e JavaScript",
    github: "https://lyriospet.netlify.app/",
    pages: "🔗 Ver no GitHub Pages",
  },
  {
    title: "Projeto Carnalita",
    image: "src/imagens/Telas/carnalita.png",
    description: "Projeto feito no AdobeFlash com ActionScript 3.0 e refeito usando HTML, CSS e JavaScript",
    github: "https://github.com/nahinMSM/Projeto-Carnalita/tree/main",
    pages: "🔗 Ver no GitHub Pages",
  },
]

const projectContainer = document.querySelector(".container-projetos")

projects.forEach((project) => {
  const projectElement = document.createElement("div")
  projectElement.classList.add("projeto");

  projectElement.innerHTML = `
    <a href="${project.github}" target="_blank">
      <img src="${project.image}" alt="Lyout do projeto" />
      <h3>${project.title}</h3>
      <div class="informacoes-projeto">
        <p>${project.description}</p>
        <p>${project.pages}</p>
      </div>
    </a>
  `

  projectContainer.appendChild(projectElement)
})
