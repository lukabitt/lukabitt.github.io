const concertDate = new Date("2025-09-06T20:00:00"); // Konzertdatum
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date();
    const diff = concertDate - now;

    if (diff <= 0) {
        countdownElement.setAttribute("data-text", "00:00:00:00");
        countdownElement.innerHTML = "00:00:00:00";
        return;
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    const timerText = `${days}:${hours}:${minutes}:${seconds}`;
    countdownElement.setAttribute("data-text", timerText);
    countdownElement.innerHTML = timerText;
}

setInterval(updateCountdown, 1000);
updateCountdown();