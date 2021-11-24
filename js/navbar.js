const toggleBtn = document.querySelector(".navbar__toggle__btn"),
    menu = document.querySelector(".navbar__menu"),
    signbtns = document.querySelector(".navbar__btns");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    signbtns.classList.toggle("active");
});