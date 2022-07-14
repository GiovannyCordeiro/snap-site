const menuHamburguer = document.getElementById('menuHamburguer');
const closeMenu = document.getElementById('closeMenu');
const links = document.getElementById('links');
const blackWindow = document.getElementById('blackwindow');

function activeMenuMobile(){
    links.classList.add('active');
    blackWindow.classList.add('active');
}

function removeMenuMobile(){
    links.classList.remove('active');
    blackWindow.classList.remove('active');
}

menuHamburguer.addEventListener('click', activeMenuMobile)
closeMenu.addEventListener('click', removeMenuMobile)
blackWindow.addEventListener('click', removeMenuMobile)