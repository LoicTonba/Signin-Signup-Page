const sign_in_btn = document.querySelector("#sign-in-btn");
console.log(sign_in_btn)
const sign_up_btn = document.querySelector("#sign-up-btn");
console.log(sign_up_btn)
const container = document.querySelector(".container");
console.log(container)
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
console.log(sign_in_btn2)
const sign_up_btn2 = document.querySelector('#sign-up-btn2');
console.log(sign_up_btn2)

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    console.log(container)
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    console.log(container)
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
    console.log(container)
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
    console.log(container)
});