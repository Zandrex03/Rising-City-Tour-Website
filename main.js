const btn = document.querySelector("button");
const links = document.querySelector(".nav-links");
const hero = document.querySelector(".hero")


btn.addEventListener('click' , () => {
    links.classList.toggle('active');
    hero.classList.toggle('active');
});