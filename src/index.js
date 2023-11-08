import "./style.css";

// new

const container = document.querySelector(".carousel-container");
const slide = document.querySelector(".slides");

let slides = document.querySelectorAll(".slide");
let index = 1;
const interval = 3000;
let slideInterval; // Variable to hold the interval ID

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const secondClone = slides[1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);
slide.append(secondClone);

const slidesWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slidesWidth * index}px)`;

const startSlide = () => {
  slideInterval = setInterval(() => {
    index++;
    slide.style.transform = `translateX(${-slidesWidth * index}px)`;
    slide.style.transition = "0.7s";
  }, interval);
};

const pauseSlide = () => {
  clearInterval(slideInterval); // Clear the interval when not in focus
};

const resumeSlide = () => {
  startSlide(); // Resume the slide when the page regains focus
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    pauseSlide();
  } else {
    resumeSlide();
  }
});

slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".slide");
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
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

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".carousel");
//   var instances = M.Carousel.init(elems, {
//     indicators: true,
//     shift: 100,
//     duration: 250,
//   });
// });

//smooth scroll

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//animations



  gsap.registerPlugin(ScrollTrigger);

  function activateAnimations(){
    if (window.innerWidth <= 1200) { // Change the screen width threshold as needed
        // gsap.to(".bg-img", {
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: ".about-container",
        //     start: "-200px 20%",
        //     end: "200px 70%",
        //     scrub: true,
        //     markers: false,
        //   },
        //   // duration:2.5,
        //   clipPath:'inset(0 0 0 0)',
        // });
    
        gsap.to(".service-container", {
          scrollTrigger: {
            trigger: ".service-container",
            start: "-100px 60%",
            end: ".carousel",
            // scrub: 2,
            markers: false,
          },
          "--clip": 'circle(62.1% at 50% 50%)',
          duration: 3,
        });
    
        gsap.to(".company-container", {
          scrollTrigger: {
            trigger: ".company-container",
            start: "-100px 60%",
            end: ".csompany-info",
            scrub: true,
            markers: false,
          },
          "--clip": 'circle(62.1% at 50% 50%)',
          duration: 15,
        });
      }else {
        // gsap.to(".about-container", {
        //     scrollTrigger: {
        //       trigger: ".about-container",
        //       start: "-100px 60%",
        //       end: ".about-top-title_jp",
        //       scrub: true,
        //       markers: false,
        //     },
        //     borderRadius:"50%",
        //     duration: 15,
        //   });
    
          gsap.to(".service-container", {
            scrollTrigger: {
              trigger: ".service-container",
              start: "-100px 60%",
              end: ".carousel",
              scrub: 2,
              markers: false,
            },
            borderRadius:"50%",
            duration: 3,
          });
          gsap.to(".company-container", {
            scrollTrigger: {
              trigger: ".company-container",
              start: "-100px 60%",
              end: ".csompany-info",
              scrub: true,
              markers: false,
            },
            borderRadius:"50%",
            duration: 15,
          });
      }
    
  }

  activateAnimations();
  


  // const tl = gsap.timeline({
  //   scrollTrigger: ".about-container",
  //   start: "-200px 20%",
  //   end: "200px 70%",
  //   scrub: true,
  //   markers: true,
   
  // });
  
  // tl.to(".bg-img", { clipPath: 'circle(55% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(60% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(65% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(70% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(75% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(80% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'circle(85% at 50% 50%)' })
  // .to(".bg-img", { clipPath: 'inset(0 0 0 0)' });

  const tl = gsap.timeline();

  tl
  .to(".bg-img", { clipPath: 'circle(65% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(66% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(67% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(68% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(69% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(70% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(71% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(72% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(73% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(74% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(75% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(76% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(77% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(78% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(79% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(80% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(81% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(82% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(83% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(84% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(85% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'inset(0 0 0 0)' });



ScrollTrigger.create({
  trigger: ".bg-img",
  start: "top center",
  end: "bottom center",
  scrub: true, // Enable scrubbing
  animation: tl, // Specify the GSAP timeline to be scrubbed
});

  

const tl2 = gsap.timeline({
  scrollTrigger: ".animate-4",
  start: "60% bottom",
  markers:true,
 
});

tl2
  .from(".animate-1", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-2", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-3", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-4", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-5", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-6", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-7", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-8", { y: 100, opacity: 0, duration: 0.4 });