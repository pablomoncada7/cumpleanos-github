const startBtn = document.getElementById("startBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");
const hearts = document.querySelector(".hearts");

startBtn.addEventListener("click", () => {
  document.querySelector(".letter").scrollIntoView({ behavior: "smooth" });
  createHearts(18);
  // Los navegadores suelen permitir audio después de una interacción del usuario.
  music.play().then(() => musicBtn.textContent = "❚❚").catch(() => {});
});

surpriseBtn.addEventListener("click", () => {
  hiddenMessage.classList.toggle("show");
  createHearts(35);
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => musicBtn.textContent = "❚❚").catch(() => {});
  } else {
    music.pause();
    musicBtn.textContent = "♫";
  }
});

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDelay = Math.random() * 1.5 + "s";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
