const sigin_in_btn = document.querySelector("#sign-in-btn");
const sigin_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sigin_in_btn2 = document.querySelector("#sign-in-btn2");
const sigin_up_btn2 = document.querySelector("#sign-up-btn2");

sigin_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sigin_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sigin_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sigin_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});