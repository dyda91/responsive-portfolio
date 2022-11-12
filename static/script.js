/*Abre e fecha menu lateral no modo mobile*/

const menuMobile =document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu-nav-active')
});


/*fecha o menu ao clickar em algum item*/

const navItem = document.querySelectorAll('.nav-item');
navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x', 'bi-list')
        }
    })
})

/*Anima itens da tela*/

const itemsAnimate = document.querySelectorAll('[data-animate]')

const animeteScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85
    itemsAnimate.forEach(Element => {
        if (windowTop > Element.offsetTop){
            Element.classList.add('animate')
        } else {
            Element.classList.remove('animate')
        }
    })
}

animeteScroll()

window.addEventListener('scroll', () => {
    animeteScroll();
})