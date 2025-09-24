const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('October 1, 2025 07:00:00').getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
        <span class="number">${days}d</span>
        <span class="number">${hours}h</span>
        <span class="number">${minutes}m</span>
        <span class="number">${seconds}s</span>
    `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "Happy New Year!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

document.querySelector('.take-a-look').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#take-a-look').scrollIntoView({ 
        behavior: 'smooth'
    });

});
