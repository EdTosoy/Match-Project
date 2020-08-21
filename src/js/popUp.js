import mantras from "./mantrasData.json"
const popUp = document.querySelector(".pop-up");
const closePopUp = document.querySelector(".close-pop-up");
const mantrasNumber = document.querySelector(".mantras-number");
const mantrasContent = document.querySelector(".mantras-content");

setTimeout(() => {
  popUp.style.display = "grid";
}, 1000);
closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});


const NUMBER_OF_MANTRAS = mantras.length;
const randomIndex = Math.random() * NUMBER_OF_MANTRAS;
const designMantras = mantras[Math.floor(randomIndex)];

mantrasNumber.innerHTML = `${designMantras.id}`;
mantrasContent.innerHTML = `${designMantras.mantras}`;

const rules = document.querySelectorAll("li.rule");

for (let i = 0; i < rules.length; i++) {
  rules[i].addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });
}
