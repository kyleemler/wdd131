document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const menu = document.getElementById("menu");
const nav = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menu.textContent = "&#9776";
    } else {
        nav.style.display = "flex";
        menu.textContent = "X";
    }
});