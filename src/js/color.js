const imageBig = document.querySelector(".image-big");
const firstPallete = document.querySelector(".first-color");
const secondPallete = document.querySelector(".second-color");
const thirdPallete = document.querySelector(".third-color");
const imageShowcase = document.querySelector(".image-showcase");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let slideCounter = 1;
const LENGTH_OF_SLIDE = "500";
const moveSlide = () =>
  (imageShowcase.style.transform = `translateX(-${
    LENGTH_OF_SLIDE * slideCounter
  }px)`);
moveSlide();

nextBtn.addEventListener("click", () => {
  if (slideCounter >= slide.length - 1) return;
  imageShowcase.style.transition = "transform 0.2s ease-in-out";
  slideCounter++;
  moveSlide();
});
prevBtn.addEventListener("click", () => {
  if (slideCounter <= 0) return;
  imageShowcase.style.transition = "transform 0.2s ease-in-out";
  console.log(slide[slideCounter].id);
  slideCounter--;
  moveSlide();
});

imageShowcase.addEventListener("transitionend", () => {
  if (slide[slideCounter].id === "last-clone") {
    imageShowcase.style.transition = "none";
    slideCounter = slide.length - 2;
    moveSlide();
  }
  if (slide[slideCounter].id === "first-clone") {
    imageShowcase.style.transition = "none";
    slideCounter = slide.length - slideCounter;
    moveSlide();
  }
});

imageShowcase.addEventListener("click", (e) => {
  const selectedImage = e.target;
  if (!selectedImage.className == "image-small") return;
  imageBig.style.backgroundImage = `url(${selectedImage.currentSrc})`;

  const firstColor = selectedImage.dataset.firstcolor;
  const secondColor = selectedImage.dataset.secondcolor;
  const thirdColor = selectedImage.dataset.thirdcolor;

  firstPallete.innerHTML = firstColor;
  firstPallete.style.backgroundColor = firstColor;
  secondPallete.innerHTML = secondColor;
  secondPallete.style.backgroundColor = secondColor;
  thirdPallete.innerHTML = thirdColor;
  thirdPallete.style.backgroundColor = thirdColor;
});
