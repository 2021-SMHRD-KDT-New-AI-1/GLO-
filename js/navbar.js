"use strict";

// navbar transparent
const navbar = document.querySelector("#navbar"),
    navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

// navbar toggle button
const toggleBtn = document.querySelector(".navbar__toggle__btn"),
    menu = document.querySelector(".navbar__menu"),
    signbtns = document.querySelector(".navbar__btns");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    signbtns.classList.toggle("active");
});