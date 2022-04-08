window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
    menuItem = document.querySelectorAll('.header__link'),
    close = document.querySelectorAll('.closer'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__links_active');
        
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            
            menu.classList.toggle('header__links_active');
            
        })
    });

    close.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            
            menu.classList.toggle('header__links_active');
            
        })
    })
})

new WOW().init();