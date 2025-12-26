const sections = document.querySelectorAll(".section");
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = document.body.scrollHeight - innerHeight;
  const progress = scrollY / height;

  // Dynamic accent color change
  const hue = Math.floor(progress * 360);
  document.documentElement.style.setProperty(
    "--accent1",
    `hsl(${hue}, 90%, 60%)`
  );
  document.documentElement.style.setProperty(
    "--accent2",
    `hsl(${(hue + 60) % 360}, 90%, 60%)`
  );
  document.documentElement.style.setProperty(
    "--accent3",
    `hsl(${(hue + 120) % 360}, 90%, 60%)`
  );

  // Section reveal
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("show");
    }
  });

  // Scroll button
  scrollBtn.style.display = scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function sendMail(e) {
  e.preventDefault();

  const msg = document.querySelector(".success-msg");
  msg.classList.add("show");

  setTimeout(() => {
    msg.classList.remove("show");
  }, 3000);

  // OPTIONAL: mailto redirect
  window.location.href =
    "mailto:iamayush1209@gmail.com?subject=Portfolio Contact";
}
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("scroll-progress").style.width = `${progress}%`;
});
const text =
  "Full-Stack Web Developer focused on building modern, scalable, and user-centric applications.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 35);
  }
}

typeEffect();
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
