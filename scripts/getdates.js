const today = new Date();
const year = today.getFullYear();

document.getElementById("current-year").textContent = year;
document.getElementById("last-modified").textContent = document.lastModified;