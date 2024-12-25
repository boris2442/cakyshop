// Sélectionne le header

// const header = document.getElementById("main-header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 520) {
  
//     header.style.backgroundColor = "var(--color2)"; 
//     header.style.transition="1s ease-in-out";
//     links.forEach(link => {
//       link.style.color = "var(--color4)"; 
//     });
//   } else {
 
//     header.style.backgroundColor = "var(--color3)";
//     const links = header.querySelectorAll("a");
//     links.forEach(link => {
//       link.style.color = "var(--color2)"; 
//       link.style.fontWeight="bold";
//     });
//   }
// });


// const header2 = document.getElementById("main-header2");
// const headerText = header.querySelector("h2");


// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {

//     headerText.style.color = "black";
//     header.style.backgroundColor = "red"; 
//   } else {
   
//     headerText.style.color = "black";
//     header2.style.backgroundColor = "transparent"; 
//   }
// });


///////////////////////////////////////////////////////autre code javascript

// const active= document.querySelector("header>ul");
// const burgerMenu=document.querySelector(".burger");
// burgerMenu.addEventListener("click", ()=>{
// if(window.scrollX<815){
//   active.classList.toggle("active")

// }else{
//   active.classList.add("active2")
//   active.classList.toggle("active")
// }


  // if(window.scrollY>200){
  //   links.forEach(link => {
  //     link.style.color = "black" // Rétablit la couleur des liens
  //     link.style.fontWeight="bold";
  //   });
  // }
// })





// code reservee au burger menu

const burger=document.querySelector(".burger");
const rem=document.querySelector(".remov")
const navigation=document.querySelector("header ul")

burger.addEventListener("click", ()=>{
  navigation.classList.add("scrool")
  burger.style.display='none'
  rem.style.display='block'
  navigation.classList.remove("scrool2")
});
rem.addEventListener("click", ()=>{
  rem.style.display='none'
    burger.style.display='block'
    navigation.classList.remove("scrool")
    navigation.classList.add("scrool2")
})

window.addEventListener("scroll", ()=>{
  rem.style.display='none'
    burger.style.display='block'
    
  navigation.classList.add("scrool2")
})






//####################### librairie typewriter########################333

const secondTitle=document.querySelector("#accueil h2");
const typewriter= new Typewriter (secondTitle, {
  loop:true,
  delay:100
})

typewriter
.typeString("Bienvenue au Palais du Gout")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start();


const title=document.querySelector("h1");
const app= new Typewriter(title, {
loop:true,
delay:100
})

app
.typeString("L'écrin gourmand <br> <br> Douceurs Artisanales")
.pauseFor(2000)
.deleteAll()
.start();



//############################# partie destinee au swiper library 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  delay:2500,
  autoplay:{
      disableOnInteraction: false, 
  },
speed:500,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// insertion de la librairie scrollreveal
const sr= ScrollReveal({
    duration:1500,
    distance:"30px",
    reset:true,
   origin:"top"

})

sr.reveal(".reservation-one, .avis, .et-a-decouvrir, produits, .about, .home, .father-avis",{interval:200})