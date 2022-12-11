const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== PLANET SWIPER ===============*/
let planetSwiper = new Swiper(".planet-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    // reset: true,
})

sr.reveal(`.home-container, .footer-container, .footer-rights`)
sr.reveal(`.explore-banner`, {delay:500, origin: 'right'})
sr.reveal(`.explore-content`, {delay:500, origin: 'left'})
sr.reveal(`.home-subtitle, .home-title, .home-desc`, {delay:500, origin:'top'})
sr.reveal(``, {delay:500, origin:'bottom'})
sr.reveal(`.details-item, .about-card`, {interval: 100})

/*
sr.reveal(`.footer-container, .footer-rights, .newsletter-container`)
sr.reveal(`.about-content, .contactForm`, {delay:500, origin: 'right'})
sr.reveal(`.contactInfo`, {delay:500, origin: 'left'})
sr.reveal(`.home-subtitle, .home-title, .home-desc`, {delay:500, origin:'bottom'})
sr.reveal(`.button, .home-buttons, .home-title, .home-desc2, .card-content,
.card-price, .box-data, .about-item, .service-item`, {interval: 100})

*/