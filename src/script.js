const menuMobile = document.getElementById('menu-mobile');
const allLinks = document.getElementById('all-links');
const blackWindow = document.getElementById('black-window')
const closeMenu = document.getElementById('close-menu');

const openMenuMobile = () => {
    allLinks.classList.add('active');
    blackWindow.classList.add('active');
}

const closeMenuMobile = () => {
    allLinks.classList.remove('active');
    blackWindow.classList.remove('active');
}


menuMobile.addEventListener('click', openMenuMobile);
closeMenu.addEventListener('click', closeMenuMobile);
blackWindow.addEventListener('click', closeMenuMobile)