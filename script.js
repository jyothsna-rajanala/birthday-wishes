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

    document.getElementById("wishBox").innerText = wish;
}
function confettiEffect() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
