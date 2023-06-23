
burger =document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
navItems = document.querySelector('.nav-items');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
navList.addEventListener('click',()=>{
    navbar.classList(toggle('v-class-resp'))
})

navItems.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})