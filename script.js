const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slider = document.querySelector(".slider");
const box = document.querySelector(".box");
const page = document.querySelector(".page");



let currentPosition = 0;
const cards = 10;
const cardwidth = 240;
const visibleCards = 3;

let maxLength = cardwidth*(cards - visibleCards);

nextButton.addEventListener('click', ()=>{
    // if(currentPosition<()){
    if(currentPosition<maxLength){
        currentPosition+=cardwidth;
        slider.style.transform = `translate(-${currentPosition}px)`;   
    }
});

prevButton.addEventListener('click',()=>{
    
    if(currentPosition>0){
        currentPosition -= cardwidth;
        
        slider.style.transform = `translate(-${currentPosition}px)`;
    }
});

box.addEventListener('click',()=>{
    page.style.transform = `translateX(200px) rotateY(180deg)`;
    
})

