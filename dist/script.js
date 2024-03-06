// Slider
(function slider() {
  const imgSlider = document.querySelector(".header__img-container");
  const textSlider = document.querySelector(".header__hero-copy-container");

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", prevBtnClickHandler);
  nextBtn.addEventListener("click", nextBtnClickHandler);

  let counter = 0;

  function prevBtnClickHandler() {
    if (counter > 0) counter--;
    imgSlider.style.transform = "translateX("+ -counter * 33.33 +"%)";
    textSlider.style.transform = "translateX("+ -counter * 33.33 +"%)";
  }

  function nextBtnClickHandler() {
    if (counter < 2) counter++;
    imgSlider.style.transform = "translateX("+ -counter * 33.33 +"%)";
    textSlider.style.transform = "translateX("+ -counter * 33.33 +"%)";
  }
})();
