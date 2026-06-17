const whatsappQuoteUrl = 'https://wa.me/5517981856044?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20A%C3%A7o%20Forte.%20Segue%20minha%20lista%20de%20materiais%3A';

const products = [
  {
    title: 'Chapas',
    description: 'Materiais para fabricacao, manutencao, reforco, acabamento e demandas tecnicas de producao.',
    image: '/images/chapas-empilhadas.jpg'
  },
  {
    title: 'Tubos de aco',
    description: 'Tubos em formatos e aplicacoes variadas para portoes, grades, estruturas e uso industrial.',
    image: '/images/tubos-empilhados.jpg'
  },
  {
    title: 'Perfis metalicos',
    description: 'Opcoes para estruturas, reforcos, serralheria, galpoes e montagens sob consulta comercial.',
    image: '/images/perfis-metalicos.jpg'
  },
  {
    title: 'Estruturas',
    description: 'Linhas para apoio estrutural, montagem e aplicacoes de obra conforme necessidade do projeto.',
    image: '/images/obra-estrutura-metalica.jpg'
  },
  {
    title: 'Aplicacoes',
    description: 'Orientacao para obras, manutencao, serralheria, compras recorrentes e demandas industriais.',
    image: '/images/componentes-industriais.jpg'
  }
];

const features = [
  {
    icon: 'message-circle',
    title: 'Orcamento rapido',
    description: 'Contato direto pelo WhatsApp para reduzir etapas e acelerar a primeira resposta comercial.'
  },
  {
    icon: 'clipboard-check',
    title: 'Compra orientada',
    description: 'Apoio para organizar medidas, bitolas, aplicacoes e prioridades do pedido.'
  },
  {
    icon: 'warehouse',
    title: 'Categorias sob consulta',
    description: 'Linhas apresentadas por categoria para facilitar a solicitacao de orcamento.'
  },
  {
    icon: 'handshake',
    title: 'Atendimento B2B',
    description: 'Relacionamento com obras, empresas, serralherias, manutencao e compras recorrentes.'
  }
];

const posts = [
  {
    title: 'Como escolher aco para construcao',
    summary: 'Criterios praticos para organizar medidas, quantidades, aplicacao e prazo antes da cotacao.',
    image: '/images/equipe-reuniao.jpg',
    url: '/conteudo/como-escolher-aco-para-construcao/'
  },
  {
    title: 'Diferenca entre chapas e perfis',
    summary: 'Entenda quando cada categoria costuma aparecer em obras, fabricacao e manutencao.',
    image: '/images/chapas-empilhadas.jpg',
    url: '/conteudo/diferenca-entre-chapas-e-perfis/'
  },
  {
    title: 'Dicas para orcamento industrial',
    summary: 'Como enviar uma lista mais clara para acelerar o retorno comercial da distribuidora.',
    image: '/images/whatsapp-smartphone.jpg',
    url: '/conteudo/dicas-para-orcamento-industrial/'
  },
  {
    title: 'Tendencias do setor de aco',
    summary: 'Atendimento digital, organizacao de compra e comunicacao direta ganham espaco no setor.',
    image: '/images/caminhao-industrial.jpg',
    url: '/conteudo/tendencias-do-setor-de-aco/'
  }
];

const homeProducts = [
  {
    title: 'Chapas',
    description: 'Materiais para fabricacao, manutencao, reforco, acabamento e demandas tecnicas de producao.',
    image: '/images/chapas-empilhadas.jpg'
  },
  {
    title: 'Tubos de aco',
    description: 'Tubos em formatos e aplicacoes variadas para portoes, grades, estruturas e uso industrial.',
    image: '/images/tubos-empilhados.jpg'
  },
  {
    title: 'Perfis metalicos',
    description: 'Opcoes para estruturas, reforcos, serralheria, galpoes e montagens sob consulta comercial.',
    image: '/images/perfis-metalicos.jpg'
  }
];

const homePosts = [
  {
    title: 'Como escolher aco para construcao',
    summary: 'Criterios praticos para organizar medidas, quantidades, aplicacao e prazo antes da cotacao.',
    image: '/images/equipe-reuniao.jpg',
    url: '/conteudo/como-escolher-aco-para-construcao/'
  },
  {
    title: 'Diferenca entre chapas e perfis',
    summary: 'Entenda quando cada categoria costuma aparecer em obras, fabricacao e manutencao.',
    image: '/images/componentes-industriais.jpg',
    url: '/conteudo/diferenca-entre-chapas-e-perfis/'
  },
  {
    title: 'Dicas para orcamento industrial',
    summary: 'Como enviar uma lista mais clara para acelerar o retorno comercial da distribuidora.',
    image: '/images/whatsapp-smartphone.jpg',
    url: '/conteudo/dicas-para-orcamento-industrial/'
  }
];

function getLimit(container, fallback) {
  const limit = Number(container.dataset.limit);
  return Number.isFinite(limit) && limit > 0 ? limit : fallback;
}

function renderProducts() {
  document.querySelectorAll('.js-products').forEach((container) => {
    const source = container.dataset.variant === 'home' ? homeProducts : products;
    const items = source.slice(0, getLimit(container, source.length));
    container.innerHTML = items.map((product) => `
      <article class="product-card reveal">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title} para cotacao na Aco Forte" loading="eager" decoding="sync">
        </div>
        <div class="product-body">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <a href="${whatsappQuoteUrl}" target="_blank" rel="noopener noreferrer" class="btn">
            Solicitar orcamento
            <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
          </a>
        </div>
      </article>
    `).join('');
  });
}

function renderFeatures() {
  document.querySelectorAll('.js-features').forEach((container) => {
    container.innerHTML = features.map((feature) => `
      <article class="feature-card reveal">
        <i data-lucide="${feature.icon}"></i>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `).join('');
  });
}

function renderConteudoLists() {
  document.querySelectorAll('.js-blog-list').forEach((container) => {
    const source = container.dataset.variant === 'home' ? homePosts : posts;
    const items = source.slice(0, getLimit(container, source.length));
    container.innerHTML = items.map((post) => `
      <article class="blog-card reveal">
        <a href="${post.url}" class="blog-media">
          <img src="${post.image}" alt="${post.title}" loading="eager" decoding="sync">
        </a>
        <div class="blog-body">
          <span>Artigo</span>
          <h3><a href="${post.url}">${post.title}</a></h3>
          <p>${post.summary}</p>
          <a href="${post.url}" class="blog-link">Ler artigo <i data-lucide="arrow-up-right" class="h-4 w-4"></i></a>
        </div>
      </article>
    `).join('');
  });
}

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function setupMenu() {
  const menuButton = document.querySelector('#menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  menuButton?.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupHeaderScroll() {
  const header = document.querySelector('#site-header');
  if (!header) return;

  const syncHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
}

function createLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function normalizeVisibleText(root = document.body) {
  const replacements = [
    [/\bAco\b/g, 'A\u00e7o'],
    [/\baco\b/g, 'a\u00e7o'],
    [/\bOrcamento\b/g, 'Or\u00e7amento'],
    [/\borcamento\b/g, 'or\u00e7amento'],
    [/\bCotacao\b/g, 'Cota\u00e7\u00e3o'],
    [/\bcotacao\b/g, 'cota\u00e7\u00e3o'],
    [/\bConstrucao\b/g, 'Constru\u00e7\u00e3o'],
    [/\bconstrucao\b/g, 'constru\u00e7\u00e3o'],
    [/\bDistribuicao\b/g, 'Distribui\u00e7\u00e3o'],
    [/\bNavegacao\b/g, 'Navega\u00e7\u00e3o'],
    [/\bmetalicos\b/g, 'met\u00e1licos'],
    [/\bmetalicas\b/g, 'met\u00e1licas'],
    [/\bmetalica\b/g, 'met\u00e1lica'],
    [/\bmetelica\b/g, 'met\u00e1lica'],
    [/\bMetalicos\b/g, 'Met\u00e1licos'],
    [/\bindustria\b/g, 'ind\u00fastria'],
    [/\bIndustria\b/g, 'Ind\u00fastria'],
    [/\brapido\b/g, 'r\u00e1pido'],
    [/\brapida\b/g, 'r\u00e1pida'],
    [/\bRapido\b/g, 'R\u00e1pido'],
    [/\boperacao\b/g, 'opera\u00e7\u00e3o'],
    [/\boperacoes\b/g, 'opera\u00e7\u00f5es'],
    [/\bOperacao\b/g, 'Opera\u00e7\u00e3o'],
    [/\bmanutencao\b/g, 'manuten\u00e7\u00e3o'],
    [/\bproducao\b/g, 'produ\u00e7\u00e3o'],
    [/\binstalacao\b/g, 'instala\u00e7\u00e3o'],
    [/\bfabricacao\b/g, 'fabrica\u00e7\u00e3o'],
    [/\baplicacao\b/g, 'aplica\u00e7\u00e3o'],
    [/\baplicacoes\b/g, 'aplica\u00e7\u00f5es'],
    [/\bcondicoes\b/g, 'condi\u00e7\u00f5es'],
    [/\bsolicitacao\b/g, 'solicita\u00e7\u00e3o'],
    [/\binformacoes\b/g, 'informa\u00e7\u00f5es'],
    [/\binformaçeo\b/g, 'informa\u00e7\u00e3o'],
    [/\bcomunicacao\b/g, 'comunica\u00e7\u00e3o'],
    [/\bcomunicaçeo\b/g, 'comunica\u00e7\u00e3o'],
    [/\borientacao\b/g, 'orienta\u00e7\u00e3o'],
    [/\borganizacao\b/g, 'organiza\u00e7\u00e3o'],
    [/\bOrganizacao\b/g, 'Organiza\u00e7\u00e3o'],
    [/\bSolucoes\b/g, 'Solu\u00e7\u00f5es'],
    [/\bsolucoes\b/g, 'solu\u00e7\u00f5es'],
    [/\bmissao\b/g, 'miss\u00e3o'],
    [/\bMissao\b/g, 'Miss\u00e3o'],
    [/\bAtuacao\b/g, 'Atua\u00e7\u00e3o'],
    [/\batuacao\b/g, 'atua\u00e7\u00e3o'],
    [/\bAplicacoes\b/g, 'Aplica\u00e7\u00f5es'],
    [/\bagil\b/g, '\u00e1gil'],
    [/\bconfiavel\b/g, 'confi\u00e1vel'],
    [/\bformulario\b/g, 'formul\u00e1rio'],
    [/\bHorario\b/g, 'Hor\u00e1rio'],
    [/\bpadrao\b/g, 'padr\u00e3o'],
    [/\bConteudos\b/g, 'Conte\u00fados'],
    [/\bConteudo\b/g, 'Conte\u00fado'],
    [/\bseguranca\b/g, 'seguran\u00e7a'],
    [/\btecnicas\b/g, 't\u00e9cnicas'],
    [/\btecnica\b/g, 't\u00e9cnica'],
    [/\bportoes\b/g, 'port\u00f5es'],
    [/\bCriterios\b/g, 'Crit\u00e9rios'],
    [/\bcriterios\b/g, 'crit\u00e9rios'],
    [/\bpraticos\b/g, 'pr\u00e1ticos'],
    [/\bDiferenca\b/g, 'Diferen\u00e7a'],
    [/\bdiferencas\b/g, 'diferen\u00e7as'],
    [/\bbasicas\b/g, 'b\u00e1sicas'],
    [/\bsao\b/g, 's\u00e3o'],
    [/\bpecas\b/g, 'pe\u00e7as'],
    [/\bJa\b/g, 'J\u00e1'],
    [/\btem\b/g, 't\u00eam'],
    [/\barmacoes\b/g, 'arma\u00e7\u00f5es'],
    [/\bdimensoes\b/g, 'dimens\u00f5es'],
    [/\bduvida\b/g, 'd\u00favida'],
    [/\breferencias\b/g, 'refer\u00eancias'],
    [/\bavanca\b/g, 'avan\u00e7a'],
    [/\bTendencias\b/g, 'Tend\u00eancias'],
    [/\btendencias\b/g, 'tend\u00eancias'],
    [/\bespaco\b/g, 'espa\u00e7o'],
    [/\bdecisoes\b/g, 'decis\u00f5es'],
    [/\bpresenca\b/g, 'presen\u00e7a'],
    [/\bexperiencia\b/g, 'experi\u00eancia'],
    [/\bpossiveis\b/g, 'poss\u00edveis'],
    [/\bhistorico\b/g, 'hist\u00f3rico'],
    [/\bmedios\b/g, 'm\u00e9dios'],
    [/\blogistica\b/g, 'log\u00edstica'],
    [/\bTambem\b/g, 'Tamb\u00e9m'],
    [/\btambem\b/g, 'tamb\u00e9m'],
    [/\bmantem\b/g, 'mant\u00e9m'],
    [/\bserio\b/g, 's\u00e9rio'],
    [/\bdielogo\b/g, 'di\u00e1logo'],
    [/\bsere\b/g, 'ser\u00e1'],
    [/\bsera\b/g, 'ser\u00e1'],
    [/\bproximos\b/g, 'pr\u00f3ximos']
  ];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    let value = node.nodeValue;
    replacements.forEach(([pattern, replacement]) => {
      value = value.replace(pattern, replacement);
    });
    node.nodeValue = value;
  });

  document.title = replacements.reduce((title, [pattern, replacement]) => title.replace(pattern, replacement), document.title);
}

renderProducts();
renderFeatures();
renderConteudoLists();
normalizeVisibleText();
setupMenu();
setupHeaderScroll();
revealOnScroll();
createLucideIcons();

document.querySelectorAll('#year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

window.addEventListener('load', createLucideIcons);
