"use strict";

const container = document.querySelector(".container");
const btns = document.querySelectorAll("i");

container.addEventListener("click", (event) => {

    console.log(event.target.dataset.filter);

});
