"use strict";

// small__navbar click scrolling
const listVideo = document.querySelector(".list.video"),
    listMusic = document.querySelector(".list.music");

listVideo.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});
listMusic.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

// more__recos btn click scrolling
const moreBtn = document.querySelector(".more__recos");

moreBtn.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

// slide btn
let leftBtns = document.querySelectorAll(".fa-chevron-left"),
    rightBtns = document.querySelectorAll(".fa-chevron-right");

for(let i = 0; i < leftBtns.length; i++) {
    leftBtns[i].addEventListener("click", () => {
        console.log("click");
    });
}
for(let i = 0; i < rightBtns.length; i++) {
    rightBtns[i].addEventListener("click", () => {
        console.log("click");
    });
}

// like heart
const like1 = document.querySelector(".btn__like1"),
    like2 = document.querySelector(".btn__like2"),
    unlike1 = document.querySelector(".btn__unlike1"),
    unlike2 = document.querySelector(".btn__unlike2");

const INVISIBLE_CLASS = ("invisible");

like1.addEventListener("click", () => {
    like1.classList.add(INVISIBLE_CLASS);
    unlike1.classList.remove(INVISIBLE_CLASS);
});
unlike1.addEventListener("click", () => {
    unlike1.classList.add(INVISIBLE_CLASS);
    like1.classList.remove(INVISIBLE_CLASS);
});
like2.addEventListener("click", () => {
    like2.classList.add(INVISIBLE_CLASS);
    unlike2.classList.remove(INVISIBLE_CLASS);
});
unlike2.addEventListener("click", () => {
    unlike2.classList.add(INVISIBLE_CLASS);
    like2.classList.remove(INVISIBLE_CLASS);
});