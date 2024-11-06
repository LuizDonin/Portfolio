const projects = {
  project1: [
    'assets/Tabuleiro 02.png',
    'assets/Caça Palavras 02.png',
    'assets/Arco e flecha 01.png',
    'assets/Quiz.png',
  ],
  project2: [
    'assets/Mapa6.png',
    'assets/Mapa5.png',
    'assets/Mapa7.png',
  ],
  project3: [
    'assets/Scrooge.png',
  ],
  project4: [
    'assets/LazyProfessor.png',
  ],
  project5: [
    'assets/Shooter.png',
  ],
  project6: [
    'assets/Despertar-01.png',
    'assets/Despertar-02.png',
  ],
  project7: [
    'assets/Entrelaços-01.png',
    'assets/Entrelaços-02.png',
  ],
  // Add more projects as needed
};
const navLinks = document.getElementById("nav-links");



navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__list li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".footer__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer__container .mail__to", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".footer__socials", {
  ...scrollRevealOption,
  delay: 1500,
});



let currentProject = [];
  let currentIndex = 0;

  // Abre o modal do carrossel para um projeto específico
  function openCarousel(projectId) {
    currentProject = projects[projectId];  // Pega as imagens do projeto específico
    if (!currentProject) return;  // Verifica se o projeto existe
    currentIndex = 0;
    updateCarousel();
    const modal = document.getElementById('carousel-modal');
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
  }

  // Fecha o modal do carrossel
  function closeCarousel() {
    document.getElementById('carousel-modal').style.display = 'none';
  }

  // Muda o slide do carrossel
  function changeSlide(step) {
    if (currentProject.length === 0) return;
    currentIndex = (currentIndex + step + currentProject.length) % currentProject.length;
    updateCarousel();
  }

  // Atualiza o conteúdo do carrossel
  function updateCarousel() {
    const carouselContent = document.getElementById('carousel-content');
    if (carouselContent && currentProject[currentIndex]) {
      carouselContent.innerHTML = `<img src="${currentProject[currentIndex]}" alt="Project Image">`;
    }
  }

  // Eventos de clique para fechar o modal quando o usuário clica fora do conteúdo
  window.onclick = function(event) {
    const modal = document.getElementById('carousel-modal');
    if (event.target === modal) {
      closeCarousel();
    }
  };
