// Slider
(function slider() {
  const imgSlider = document.querySelector(".header__img-container");
  const textSlider = document.querySelector(".header__hero-copy-container");

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", prevBtnClickHandler);
  nextBtn.addEventListener("click", nextBtnClickHandler);

  let counter = 0;

  function styleBtn() {
    if (counter === 0) {
      prevBtn.children[0].style.opacity = "30%";
      prevBtn.disabled = true;
    } else {
      prevBtn.children[0].style.opacity = "100%";
      prevBtn.disabled = false;
    }

    if (counter === 2) {
      nextBtn.disabled = true;
      nextBtn.children[0].style.opacity = "30%";
    } else {
      nextBtn.children[0].style.opacity = "100%";
      nextBtn.disabled = false;
    }
  }

  function prevBtnClickHandler() {
    if (counter > 0) counter--;
    styleBtn();
    imgSlider.style.transform = "translateX(" + -counter * 33.33 + "%)";
    textSlider.style.transform = "translateX(" + -counter * 33.33 + "%)";
  }

  function nextBtnClickHandler() {
    if (counter < 2) counter++;
    styleBtn();
    imgSlider.style.transform = "translateX(" + -counter * 33.33 + "%)";
    textSlider.style.transform = "translateX(" + -counter * 33.33 + "%)";
  }

  styleBtn();
})();

// Hamburger menu
(function menu() {
  const menu = document.querySelector(".navbar__navigation-button");
  const nav = document.querySelector(".navbar__navigation");
  const overlay = document.querySelector(".overlay");

  const nav_close = document.getElementById("nav_close");
  const nav_open = document.getElementById("nav_open");

  menu.addEventListener("click", menuHandler);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 320) {
      menu.classList.add("pos-fixed");
    } else {
      menu.classList.remove("pos-fixed");
    }
  });

  function menuHandler() {
    nav.classList.toggle("nav__open");
    overlay.classList.toggle("overlay__show");

    if (nav.classList.contains("nav__open")) {
      nav_open.style.display = "none";
      nav_close.style.display = "block";
    } else {
      nav_open.style.display = "block";
      nav_close.style.display = "none";
    }
    // Ban scrolling when overlay is active
    if (overlay.classList.contains("overlay__show")) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }
})();
