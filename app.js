const whatsappQuoteUrl = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20cota%C3%A7%C3%A3o%20com%20a%20A%C3%A7o%20Forte.';

const products = [
  {
    title: 'Perfis metálicos',
    description: 'Perfis estruturais para obras, serralherias, galpões, reforços e estruturas metálicas sob demanda.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=78'
  },
  {
    title: 'Ferragens',
    description: 'Ferragens para construção, manutenção e montagem, com atendimento ágil para listas recorrentes.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=78'
  },
  {
    title: 'Tubos',
    description: 'Tubos metálicos em diferentes formatos e aplicações para indústria, portões, grades e estruturas.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=78'
  },
  {
    title: 'Chapas',
    description: 'Chapas para fabricação, reforço, acabamento e projetos técnicos com qualidade controlada.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=78'
  },
  {
    title: 'Materiais para construção',
    description: 'Itens essenciais para abastecer obras com prazo, previsibilidade e suporte comercial.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=78'
  },
  {
    title: 'Linha industrial',
    description: 'Soluções metálicas para manutenção industrial, operação, montagem e compradores corporativos.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=78'
  }
];

const features = [
  {
    icon: 'truck',
    title: 'Entrega rápida',
    description: 'Logística organizada para obras e empresas que precisam de prazo confiável.'
  },
  {
    icon: 'warehouse',
    title: 'Estoque disponível',
    description: 'Variedade de linhas para reduzir espera e agilizar a compra.'
  },
  {
    icon: 'hard-hat',
    title: 'Atendimento técnico',
    description: 'Equipe preparada para entender medidas, aplicação e demanda comercial.'
  },
  {
    icon: 'shield-check',
    title: 'Qualidade garantida',
    description: 'Fornecimento com controle, procedência e compromisso com o pedido.'
  },
  {
    icon: 'handshake',
    title: 'Condições comerciais',
    description: 'Negociação para compras recorrentes, empresas, obras e volumes maiores.'
  }
];

const productGrid = document.querySelector('#products-grid');
const featureGrid = document.querySelector('#features-grid');
const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const year = document.querySelector('#year');

function renderProducts() {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card reveal">
      <img src="${product.image}" alt="${product.title} Aço Forte" loading="lazy">
      <div class="product-body">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a href="${whatsappQuoteUrl}" target="_blank" rel="noopener noreferrer">
          Solicitar cotação
          <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
        </a>
      </div>
    </article>
  `).join('');
}

function renderFeatures() {
  featureGrid.innerHTML = features.map((feature) => `
    <article class="feature-card reveal">
      <i data-lucide="${feature.icon}"></i>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </article>
  `).join('');
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries, counterObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.count);
      const duration = 1400;
      const start = performance.now();

      const update = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);
        counter.textContent = value.toLocaleString('pt-BR') + '+';

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
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
  menuButton?.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

renderProducts();
renderFeatures();
setupMenu();
animateCounters();
revealOnScroll();

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener('load', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
