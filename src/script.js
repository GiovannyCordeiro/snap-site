const menuHamburguer = document.getElementById('menuHamburguer');
const closeMenu = document.getElementById('closeMenu');
const links = document.getElementById('links');

function activeMenuMobile(){
    links.classList.add('active');
}

function removeMenuMobile(){
    links.classList.remove('active');
}

menuHamburguer.addEventListener('click',activeMenuMobile)
closeMenu.addEventListener('click',removeMenuMobile)