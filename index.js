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

// btn menu hamburger 
const burger = document.querySelector(".line-menu");
const navItem = document.querySelector(".nav-links");
const btnClose = document.querySelector(".btn-close");
const containerAfter = document.getElementById('container');


// Btn left left image

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


// btn left right mobile

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



// btn menu hamburger 

function menuHamburger(){
    navItem.style.left = 0

    containerAfter.style.opacity = 0.5


    btnClose.addEventListener('click', (e) => {
        if(e){
            navItem.style.left  = "-101%";
            containerAfter.style.opacity = 1
        }
    })

}

burger.addEventListener('click', menuHamburger);
