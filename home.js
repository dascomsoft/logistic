
let closeBtn = document.querySelector('.close-btn');
let openBtn =document.querySelector('.open-btn');

let navLinks = document.querySelector('.nav-links');

let display = document.querySelector('.display-container');


openBtn.addEventListener('click',function(){
    navLinks.style.height = '100%'
})

closeBtn.addEventListener('click', function(){
    navLinks.style.height = '0'
})
