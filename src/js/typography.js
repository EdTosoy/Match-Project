const TypographyTop = document.querySelector(".typography-top");
const sampleText = document.querySelector("#sample-text");
const alignment = document.querySelector(".allignment");
const fonts = document.querySelector(".fonts");

alignment.addEventListener("click", (e) => {
  const selectedAlignment = e.target.dataset.alignment;
  if (!selectedAlignment) return;
  sampleText.style.textAlign = selectedAlignment;
});
fonts.addEventListener("click", (e) => {
  const selectedFont = e.target.dataset.font;
  if (!selectedFont) return;
  TypographyTop.style.fontFamily = selectedFont;
});
