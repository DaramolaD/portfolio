

// PRELOADER

const preloader = document.querySelector("[data-preloader]")

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


const header = document.querySelector("[data-header]");

const activeHeader = () => {
    if(window.scrollY > 50) {
        header.classList.add("hovered")
    } else {header.classList.remove("hovered")}
}

window.addEventListener("scroll", activeHeader);


// MOBILE NAV TOGGLE

const navbar = document.querySelector("[data-navbar]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");


const toggleNavbar = function () { 
    navbar.classList.toggle("active"); 
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".navbar-link");

function linkAction() {
    navbar.classList.remove("active")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))


navToggler.addEventListener("click", toggleNavbar);
