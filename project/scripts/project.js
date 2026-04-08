const yearSpan = document.querySelector("#currentyear");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
