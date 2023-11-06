import './style.css'


// new

const container = document.querySelector('.carousel-container');
const slide = document.querySelector('.slides');

let slides = document.querySelectorAll('.slide');
let index = 1;
const interval = 3000;
let slideInterval; // Variable to hold the interval ID

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const secondClone = slides[1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);
slide.append(secondClone);

const slidesWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slidesWidth * index}px)`;

const startSlide = () => {
    slideInterval = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slidesWidth * index}px)`;
        slide.style.transition = '0.7s';
    }, interval);
}

const pauseSlide = () => {
    clearInterval(slideInterval); // Clear the interval when not in focus
}

const resumeSlide = () => {
    startSlide(); // Resume the slide when the page regains focus
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        pauseSlide();
    } else {
        resumeSlide();
    }
});

slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');
    if (slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slidesWidth * index}px)`;
    }
});

startSlide();


//nav 


  document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox input and navigation links
    const checkbox = document.getElementById("hamburger-btn");
    const navLinks = document.querySelectorAll(".nav-links");

    // Add a click event listener to each navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Uncheck the checkbox to close the navigation menu
        checkbox.checked = false;
      });
    });
  });


  //service carosel

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators:true,
        shift:100,
        duration:250,});
        
  });



//smooth scroll 

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

  //animations

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.about-container',{
    borderRadius:0,
    duration:3,
    scrollTrigger:{
        toggleActions:"play none reverse restart",
        trigger:'.about-top',
        start:'top 80%',
        end:'bottom center',
        scrub:15,
        markers:true
    }
  })

 

//   gsap.from('.animate',{
//     y:100,
//     duration:2,
//     scrollTrigger:{
//         trigger:'.about-center',
//         start:'top center'
//     }
//   })

//   gsap.from('.animate',{
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:'.about-center',
//         start:'top center'
//     }
//   })


const tl = gsap.timeline({
    scrollTrigger:".about-center",
    start:"bottom 40%",
    

});

tl.from(".animate-1",{y:100,opacity:0,duration:0.7})
  .from(".animate-2",{y:100,opacity:0,duration:0.7})
  .from(".animate-3",{y:100,opacity:0,duration:0.7})
  .from(".animate-4",{y:100,opacity:0,duration:0.7})
  .from(".animate-5",{y:100,opacity:0,duration:0.7})
  .from(".animate-6",{y:100,opacity:0,duration:0.7})
  .from(".animate-7",{y:100,opacity:0,duration:0.7})
  .from(".animate-8",{y:100,opacity:0,duration:0.7})