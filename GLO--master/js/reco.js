"use strict";

// small__navbar click scrolling
const listVideo = document.querySelector(".list.video"),
    listMusic = document.querySelector(".list.music");

listVideo.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});
listMusic.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

// more__recos btn click scrolling
const moreBtn = document.querySelector(".more__recos");

moreBtn.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

