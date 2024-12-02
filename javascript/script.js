// Sélectionne le header
const header = document.getElementById("main-header");

// Événement scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 520) {
    // Ajout dynamique de styles via JavaScript
    header.style.backgroundColor = "var(--color2)"; // Change le fond du header
    header.style.transition="1s ease-in-out";
    const links = header.querySelectorAll("a");
    links.forEach(link => {
      link.style.color = "var(--color3)"; // Change la couleur des liens
    });
  } else {
    // Réinitialisation des styles
    header.style.backgroundColor = "var(--color3)";
    const links = header.querySelectorAll("a");
    links.forEach(link => {
      link.style.color = "var(--color4)"; // Rétablit la couleur des liens
    });
  }
});


