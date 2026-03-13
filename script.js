function showWish(option) {

  let wish = "";

  if (option === 1) {
    wish = "Today and everyday wishing only the best for you💞🫂";
  }
  else if (option === 2) {
    wish = "Wishing you happiness , success and lots of beautiful moments from this year🩷🤗";
  }
  else if (option === 3) {
    wish = "I was going to get you a perfect gift but then i realized meeting me already a best gift😁💓";
  }

  const box = document.getElementById("wishBox");

  box.classList.remove("pop");
  void box.offsetWidth;
  box.classList.add("pop");

  box.innerText = wish;
}


/* Falling hearts effect */

function confettiEffect() {

  const hearts = ["🩷","🩵"];

  for (let i = 0; i < 25; i++) {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    confetti.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

}


/* Background floating hearts */

function backgroundHearts() {

  const hearts = ["🩷","🩵"];

  setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("bg-heart");

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    },12000);

  },800);

}

backgroundHearts();


/* Celebrate button */

function celebrate() {

  alert("I Love Youuu Mohituuu 😘💖");

  confettiEffect();

  const box = document.getElementById("wishBox");

  box.classList.remove("pop");

  void box.offsetWidth;

  box.classList.add("pop");

  box.innerText =
  "You are such a special person in my life whom i cherish dearly may your birthday today bring you a step closer to realizing every beautiful dream of yours 💗💙✨";

}
