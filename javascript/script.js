


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



// partie destinee a l'ajout d'une classe active à un lien lors du défilement
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("header ul li a")

const activeLink=()=>{
sections.forEach(section => {
  let scroll=window.scrollY;
  let height=section.offsetHeight;
  let top=section.offsetTop;
  let id=section.getAttribute("id");
  if(scroll>=top - 400 && scroll<top+height){
links.forEach(link => {
  link.classList.remove("active-link")
});
let recuperationId=document.querySelector(`header ul li a[href*=${id}]`)
recuperationId.classList.add("active-link")
  }
});
}

window.addEventListener("scroll",activeLink );

// chargement  de la page
window.onload = function() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.loader').style.transition='5s ease-out'
};


// partie darkmode

const sun=document.querySelector('.sun');
sun.addEventListener("click", ()=>{
  document.body.classList.toggle("dark")
console.log("hey")
})
