"use strict";

// title scrolling transparent
const title = document.querySelector(".title__container");
const titleHeight = title.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    title.style.opacity = 1 - window.scrollY / titleHeight;
});

// title__arrow btn click scrolling
const titleBtn = document.querySelector(".title__arrow");

titleBtn.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});