/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.header-link')

function linkAction() {
    const navMenu = document.getElementById('header-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//sleder 

$(document).ready(function() {
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="assets/img/slider/prev.png">',
        nextArrow: '<img src="assets/img/slider/next.png">'
    })
});