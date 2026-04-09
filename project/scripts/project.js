const yearSpan = document.querySelector("#currentyear");
const leaderboardHeading = document.querySelector("#leaderboard-heading");
const leaderboardImage = document.querySelector("#leaderboard-image");
const leaderboardCaption = document.querySelector("#leaderboard-caption");
const leaderboardList = document.querySelector("#leaderboard-list");
const leaderboardButtons = document.querySelectorAll("[data-division]");

const leaderboardData = {
    fpo: {
        title: "Top 10 FPO Players",
        image: "images/kristin-latt.jpg",
        alt: "Kristin Latt at a disc golf event",
        caption: "Kristin Latt",
        players: [
            { name: "Kristin Latt", url: "https://www.pdga.com/player/73986" },
            { name: "Silva Saarinen", url: "https://www.pdga.com/player/107335" },
            { name: "Missy Gannon", url: "https://www.pdga.com/player/85942" },
            { name: "Holyn Handley", url: "https://www.pdga.com/player/133547" },
            { name: "Ohn Scoggins", url: "https://www.pdga.com/player/48976" },
            { name: "Eveliina Salonen", url: "https://www.pdga.com/player/64927" },
            { name: "Ella Hansen", url: "https://www.pdga.com/player/144112" },
            { name: "Henna Blomroos", url: "https://www.pdga.com/player/59227" },
            { name: "Paige Pierce", url: "https://www.pdga.com/player/29190" },
            { name: "Valerie Mandujano", url: "https://www.pdga.com/player/62879" }
        ]
    },
    mpo: {
        title: "Top 10 MPO Players",
        image: "images/gannon-buhr.jpg",
        alt: "Gannon Buhr at a disc golf event",
        caption: "Gannon Buhr",
        players: [
            { name: "Gannon Buhr", url: "https://www.pdga.com/player/75412" },
            { name: "Richard Wysocki", url: "https://www.pdga.com/player/38008" },
            { name: "Calvin Heimburg", url: "https://www.pdga.com/player/45971" },
            { name: "Paul McBeth", url: "https://www.pdga.com/player/27523" },
            { name: "Isaac Robinson", url: "https://www.pdga.com/player/50670" },
            { name: "Anthony Barela", url: "https://www.pdga.com/player/44382" },
            { name: "Niklas Anttila", url: "https://www.pdga.com/player/91249" },
            { name: "Kyle Klein", url: "https://www.pdga.com/player/85132" },
            { name: "Ezra Robinson", url: "https://www.pdga.com/player/50671" },
            { name: "Adam Hammes", url: "https://www.pdga.com/player/57365" }
        ]
    }
};

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

function updateToggleButtons(activeDivision) {
    leaderboardButtons.forEach((button) => {
        if (button.dataset.division === activeDivision) {
            button.classList.add("is-active");
        } else {
            button.classList.remove("is-active");
        }
    });
}

function renderLeaderboard(division) {
    const selectedDivision = leaderboardData[division];

    if (!selectedDivision || !leaderboardHeading || !leaderboardImage || !leaderboardCaption || !leaderboardList) {
        return;
    }

    leaderboardHeading.textContent = selectedDivision.title;
    leaderboardImage.src = selectedDivision.image;
    leaderboardImage.alt = selectedDivision.alt;
    leaderboardCaption.textContent = selectedDivision.caption;
    leaderboardList.innerHTML = selectedDivision.players
        .map((player) => `<li><a href="${player.url}" target="_blank" rel="noopener">${player.name}</a></li>`)
        .join("");

    updateToggleButtons(division);
    localStorage.setItem("selectedDivision", division);
}

if (leaderboardButtons.length > 0) {
    const savedDivision = localStorage.getItem("selectedDivision");
    const initialDivision = leaderboardData[savedDivision] ? savedDivision : "fpo";

    renderLeaderboard(initialDivision);

    leaderboardButtons.forEach((button) => {
        button.addEventListener("click", () => {
            renderLeaderboard(button.dataset.division);
        });
    });
}
