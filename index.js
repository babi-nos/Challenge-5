// Btn left right image
const allImg = document.getElementsByClassName("img-slide");
const nbSlide = allImg.length;
const right = document.querySelector(".right");
const left = document.querySelector(".left");

// description of image
const allDescription = document.getElementsByClassName("description");
const numberDescritpion = allDescription.length;
let count = 0;

// btn left right mobile
const allImgMobile = document.getElementsByClassName("img-slide-mobile");
const nbSlideMobile = allImg.length;
const rightMobile = document.querySelector(".right-mobile");
const leftMobile = document.querySelector(".left-mobile");



function slideSuivante(){
    allImg[count].classList.remove('active');
    allImgMobile[count].classList.remove('active');
    allDescription[count].classList.remove('active');

    if ((count < nbSlide - 1), (count <  numberDescritpion - 1 ), (count <  nbSlideMobile - 1 )){
        count++;
    } else {
        count = 0;
    }
    
    allImg[count].classList.add('active')
    allImgMobile[count].classList.add('active')
    allDescription[count].classList.add('active')
}

right.addEventListener('click', slideSuivante);
rightMobile.addEventListener('click', slideSuivante);

function slidePrecedent(){
    allImg[count].classList.remove('active');
    allImgMobile[count].classList.remove('active');
    allDescription[count].classList.remove('active');


    if (count > 0 ){
        count--;
    } else {
        count = nbSlide - 1;
    }
    
    allImg[count].classList.add('active')
    allImgMobile[count].classList.add('active')
    allDescription[count].classList.add('active')

} 

left.addEventListener('click', slidePrecedent);
leftMobile.addEventListener('click', slidePrecedent);

