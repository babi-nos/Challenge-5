// Btn left right iamge
const allImg = document.getElementsByClassName("img-slide");
const nbSlide = allImg.length;
const right = document.querySelector(".right");
const left = document.querySelector(".left");
// Btn left right iamge
const allDescription = document.getElementsByClassName("description");
const numberDescritpion = allDescription.length;
let count = 0;



function slideSuivante(){
    allImg[count].classList.remove('active');
    allDescription[count].classList.remove('active');

    if ((count < nbSlide - 1), (count <  numberDescritpion - 1 )){
        count++;
    } else {
        count = 0;
    }
    
    allImg[count].classList.add('active')
    allDescription[count].classList.add('active')
}

right.addEventListener('click', slideSuivante);

function slidePrecedent(){
    allImg[count].classList.remove('active');
    allDescription[count].classList.remove('active');


    if (count > 0 ){
        count--;
    } else {
        count = nbSlide - 1;
    }
    
    allImg[count].classList.add('active')
    allDescription[count].classList.add('active')


} 

left.addEventListener('click', slidePrecedent);

// allDescription.addEventListener('click', slideSuivante);
// allDescription.addEventListener('click', slidePrecedent);

