const navT = document.querySelector('.nav-toggle-open')
const navbar = document.querySelector('.nav-mobile')
const navClose = document.querySelector('.nav-toogle-close')


navT.addEventListener('click', ()=>{
    navbar.classList.toggle('show-nav');
})

navClose.addEventListener('click', ()=>{
    navbar.classList.toggle('show-nav');
})