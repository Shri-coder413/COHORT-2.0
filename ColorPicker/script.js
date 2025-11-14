const btn = document.querySelector("#change");
const boxes = document.querySelectorAll(".box");

btn.addEventListener("click", function () {
  boxes.forEach((box) => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random().toFixed(2);

    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    const hex = rgbaToHex(r, g, b);

    // Box ka background set
    box.style.backgroundColor = rgba;

    // Box ke andar ka <h2> select
    const heading = box.querySelector("h2");
    heading.textContent = `${rgba} | ${hex}`;
  });
});

function rgbaToHex(r, g, b) {
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return "#" + toHex(r) + toHex(g) + toHex(b);
}


// Copy button logic
const copyBtn = document.querySelectorAll(".copy-btn");

copyBtn.forEach((btn) => {

  btn.addEventListener("click", () => {

    const text = btn.parentElement.querySelector("h2").textContent;
    navigator.clipboard.writeText(text)
      .then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = "Copy", 1000);
      });
  });
});

