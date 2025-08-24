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

document.querySelectorAll('.projeto').forEach(projeto => {
  projeto.addEventListener('click', function (e) {
    e.preventDefault();

    const videoSrc = this.getAttribute('data-video');
    const container = document.getElementById('video-container');

    // Renderiza o vídeo com autoplay
    container.innerHTML = `
      <button id="fechar-video" aria-label="Fechar vídeo">&times;</button>
      <iframe width="100%" height="500"
              src="${videoSrc}?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
      </iframe>
    `;

    container.style.display = "block";
    container.scrollIntoView({ behavior: "smooth",block: "center" });

    if (window.innerWidth > 600) {
      setTimeout(() => {
        window.scrollBy({ top: -90, left: 0, behavior: "smooth" });
      }, 400);
    }

    document.getElementById('fechar-video').onclick = function(){
      container.innerHTML = "";
      container.style.display = "none";
    }
  });
});
