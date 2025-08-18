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
