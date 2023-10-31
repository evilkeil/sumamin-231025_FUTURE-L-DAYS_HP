import './style.css'


const container = document.querySelector('.carousel-container');
const slide = document.querySelector('.slides');

let slides = document.querySelectorAll('.slide');
let index = 1;
const interval = 3000;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const secondClone = slides[1].cloneNode(true);


firstClone.id = 'first-clone';
lastClone.id = 'last-clone';


slide.append(firstClone);
slide.prepend(lastClone);
slide.append(secondClone); //add this clone so that when the carosel reaches the end we wont see it resetting


const slidesWidth = slides[index].clientWidth;

// const getSlides = ()=> document.querySelectorAll('.slide');

slide.style.transform= `translateX(${-slidesWidth * index}px)`;

const startSlide = () => {
    setInterval(()=>{
        index++;
        slide.style.transform= `translateX(${-slidesWidth * index}px)`;
        slide.style.transition= `0.7s`
    },interval)
}

slide.addEventListener('transitionend',()=>{
    slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id){
        slide.style.transition= `none`;
        index = 1;
        slide.style.transform= `translateX(${-slidesWidth * index}px)`;
    }
})




startSlide();
