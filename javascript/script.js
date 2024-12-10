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
      link.style.color = "var(--color3)"; 
    });
  } else {
    // Réinitialisation des styles
    header.style.backgroundColor = "var(--color3)";
    const links = header.querySelectorAll("a");
    links.forEach(link => {
      link.style.color = "var(--color2)"; // Rétablit la couleur des liens
      link.style.fontWeight="bold";
    });
  }
});

// Sélection du header et du h2
const header2 = document.getElementById("main-header2");
const headerText = header.querySelector("h2");

// Ajout de l'événement scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Change la couleur du texte de h2 en blanc
    headerText.style.color = "black";
    header.style.backgroundColor = "red"; // Facultatif : Change le fond du header
  } else {
    // Réinitialise la couleur du texte
    headerText.style.color = "black";
    header2.style.backgroundColor = "transparent"; // Facultatif : Réinitialise le fond
  }
});


///////////////////////////////////////////////////////autre code javascript

const active= document.querySelector("header>ul");
const burgerMenu=document.querySelector(".burger");
burgerMenu.addEventListener("click", ()=>{
if(window.scrollX<815){
  active.classList.toggle("active")

}else{
  active.classList.add("active2")
  active.classList.toggle("active")
}


  // if(window.scrollY>200){
  //   links.forEach(link => {
  //     link.style.color = "black" // Rétablit la couleur des liens
  //     link.style.fontWeight="bold";
  //   });
  // }
})