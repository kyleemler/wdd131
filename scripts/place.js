const currentYear = document.getElementById("year");
const lastModified = document.getElementById("last-modified");
const windChill = document.getElementById("wind-chill");

const temperature = 45;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * speed ** 0.16) + (0.4275 * temp * speed ** 0.16);
}

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = Math.round(calculateWindChill(temperature, windSpeed)) + " " + String.fromCharCode(176) + "F";
} else {
    windChill.textContent = "N/A";
}
