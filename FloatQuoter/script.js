const main = document.querySelector("main");

const quotes = [
  "Start before you're ready.",
  "Tiny steps still move you forward.",
  "Discipline beats motivation.",
  "Your future self is watching.",
  "Done is better than perfect.",
  "Focus is a superpower.",
  "Consistency makes you dangerous.",
  "Every expert was a beginner.",
  "Small progress is still progress.",
  "Build the life you keep imagining.",
];

let lastQuote = 0;
const quoteDelay = 250;

main.addEventListener("mousemove", function (e) {
  // glow particle
  const p = document.createElement("div");
  p.classList.add("particle");

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  p.style.background = `rgb(${r}, ${g}, ${b})`;
  p.style.left = e.clientX + "px";
  p.style.top = e.clientY + "px";

  main.appendChild(p);
  setTimeout(() => p.remove(), 900);

  // floating quotes
  const now = Date.now();
  if (now - lastQuote > quoteDelay) {
    lastQuote = now;

    const q = document.createElement("div");
    q.classList.add("quote");

    const idx = Math.floor(Math.random() * quotes.length);
    q.innerText = quotes[idx];

    const scale = (Math.random() * 1)+ 0.5;

    q.style.color = `rgb(${r}, ${g}, ${b})`;
    q.style.left = e.clientX + "px";
    q.style.top = e.clientY + "px";

    q.style.transform = `translate(-50%, -50%) scale(${scale})`;

    main.appendChild(q);

    setTimeout(() => {
      q.style.opacity = 1;
      q.style.transform = `translate(-50%, -220%) scale(${scale})`;
    }, 50);

    setTimeout(() => {
      q.style.opacity = 0;
    }, 3000);

    setTimeout(() => q.remove(), 4000);
  }
});