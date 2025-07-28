const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slider = document.querySelector(".slider");

let currentPosition = 0;
const cards = 10;
const cardwidth = 240;

let maxLength = cardwidth*cards - 4*cardwidth;

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

