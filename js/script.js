window.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelector('.menu__list'),
      closeOverl = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close');
      

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');

});

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');

});

menuItem.addEventListener('click', () =>{
    menu.classList.remove('active');

});

closeOverl.addEventListener('click', () =>{
    menu.classList.remove('active');

});

});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines [i].style.width = item.innerHTML;


});


new WOW().init();