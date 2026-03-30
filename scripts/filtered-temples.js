document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oklahoma City Oklahoma",
        location: "Yukon, Oklahoma, United States",
        dedicated: "2000, July, 30",
        area: 10890,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oklahoma-city-oklahoma-temple/oklahoma-city-oklahoma-temple-55657-main.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    {
        templeName: "London England",
        location: "Newchapel, Surrey, England, United Kingdom",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
    }
];

const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
const templeContainer = document.querySelector(".temples");
const mainHeading = document.querySelector("main h2");

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} square feet`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

function getTempleYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

function showHome() {
    mainHeading.textContent = "Home";
    displayTemples(temples);
}

function showOld() {
    mainHeading.textContent = "Old Temples";
    displayTemples(temples.filter((temple) => getTempleYear(temple) < 1900));
}

function showNew() {
    mainHeading.textContent = "New Temples";
    displayTemples(temples.filter((temple) => getTempleYear(temple) > 2000));
}

function showLarge() {
    mainHeading.textContent = "Large Temples";
    displayTemples(temples.filter((temple) => temple.area > 90000));
}

function showSmall() {
    mainHeading.textContent = "Small Temples";
    displayTemples(temples.filter((temple) => temple.area < 10000));
}

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "X" : "\u2630";
});

document.getElementById("home").addEventListener("click", (event) => {
    event.preventDefault();
    showHome();
});

document.getElementById("old").addEventListener("click", (event) => {
    event.preventDefault();
    showOld();
});

document.getElementById("new").addEventListener("click", (event) => {
    event.preventDefault();
    showNew();
});

document.getElementById("large").addEventListener("click", (event) => {
    event.preventDefault();
    showLarge();
});

document.getElementById("small").addEventListener("click", (event) => {
    event.preventDefault();
    showSmall();
});

showHome();
