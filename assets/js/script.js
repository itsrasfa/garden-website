// menu hamburger

const menu = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuLinks.classList.toggle('active');
});

document.querySelectorAll(".menu").forEach(item => item.addEventListener("click", () => {
  menu.classList.remove("active");
  menuLinks.classList.remove("active");
}));

// navegação por click

const click = document.querySelectorAll('.plants-nav li');
const plants = document.querySelectorAll('.plants-list');

plants[0].classList.add('ativo');

function mostrarCategoria(index) {
  plants.forEach((item) => {
    item.classList.remove('ativo');
  });
  plants[index].classList.add('ativo');
};

click[0].classList.add('ativo');

function mostrarBorda(index) {
  click.forEach((item) => {
    item.classList.remove('ativo');
  });
  click[index].classList.add('ativo');
};

click.forEach((item, index) => {

  item.addEventListener('click', () => {
    mostrarBorda(index);
    mostrarCategoria(index);
  });
});

// slide 

let tempo = 2000,
  currentImageIndex = 0,
  imagens = document.querySelectorAll('#slide img'),
  max = imagens.length;

function slideImagem() {
  imagens[currentImageIndex].classList.remove('ativo');

  currentImageIndex++

  if (currentImageIndex >= max)
    currentImageIndex = 0

  imagens[currentImageIndex].classList.add('ativo');
}

function iniciar() {
  setInterval(() => {
    slideImagem();
  }, tempo);
}

window.addEventListener('load', iniciar)

// animar scroll

function animarScrollAtivo() {
  const sections = document.querySelectorAll('.animar-scroll');
  const windowHeight = window.innerHeight * 0.6;
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - windowHeight) < 0
        if (sectionVisivel) {
          section.classList.add('ativo')
        }
      });
    }
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll)
}
animarScrollAtivo();
