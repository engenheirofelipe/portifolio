const menuBtn = document.querySelector(".menu-mobile-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");

  // Alterna ícone (list ↔ X)
  menuBtn.innerHTML = menuMobile.classList.contains("active") 
    ? '<i class="bi bi-x-lg"></i>' 
    : '<i class="bi bi-list"></i>';
});

// Fecha menu ao clicar em link
document.querySelectorAll(".menu-mobile a").forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuBtn.innerHTML = '<i class="bi bi-list"></i>';
  });
});


const videoContainer = document.getElementById("video-container");
const projetos = document.querySelectorAll(".projeto");

function abrirVideo(url) {
  // cria player
  videoContainer.innerHTML = `
    <button class="close-btn">Fechar</button>
    <video controls autoplay>
      <source src="${url}" type="video/mp4">
      Seu navegador não suporta vídeos.
    </video>
  `;

  // exibe e faz scroll
  videoContainer.style.display = "block";
  videoContainer.scrollIntoView({ behavior: "smooth" });

  // botão fechar
  videoContainer.querySelector(".close-btn").addEventListener("click", () => {
    videoContainer.style.display = "none";
    videoContainer.innerHTML = "";
  });
}

// adiciona evento em todos os projetos
projetos.forEach(projeto => {
  projeto.addEventListener("click", (e) => {
    e.preventDefault();
    const url = projeto.getAttribute("data-video");
    abrirVideo(url);
  });
});
