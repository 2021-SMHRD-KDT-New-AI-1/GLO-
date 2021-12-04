"use strict";

// more__recos btn click scrolling
const moreBtn = document.querySelector(".more__recos");

moreBtn.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

