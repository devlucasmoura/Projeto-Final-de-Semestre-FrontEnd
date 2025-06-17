//código para criar um menu hamburguer para telas mobiles
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".menuMobile");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})