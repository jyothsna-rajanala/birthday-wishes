function showAlert() {
    alert("Best Friend Forever 💖");
}

function showWish(option) {
    let wish = "";

    if (option === 1) {
        wish = "Nuvvu naa life lo unna best gift ra 💖 Always stay happy!";
    } 
    else if (option === 2) {
        wish = "Birthday wishes cake kosam kadhu… nee kosam 😄 Party ekkada ra?";
    } 
    else if (option === 3) {
        wish = "Nuvvu lekapothe naa life chala dull ga undedhi 🥹 Thanks for everything!";
    }

    const box = document.getElementById("wishBox");

    /* retrigger fade animation every time */
    box.style.animation = "none";
    box.offsetHeight; // magic ✨
    box.style.animation = "fadeIn 0.8s ease-in";

    box.innerText = wish;
}

function confettiEffect() {
    const colors = ["red", "yellow", "blue", "green", "pink"];

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
