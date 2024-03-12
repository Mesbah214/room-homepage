// Set accessibility features
(function accessibilityFeatures() {
  const media = window.matchMedia("(width < 992px");
  const mainNav = document.querySelector(".navbar__nav-list");

  media.addEventListener("change", changeHandler);
  setNavAttr(media);

  function changeHandler(e) {
    setNavAttr(e);
  }

  function setNavAttr(e) {
    if (e.matches) {
      mainNav.setAttribute("inert", "");
    } else {
      mainNav.removeAttribute("inert");
    }
  }
})();

// Slider
(function slider() {
  const imgSlider = document.querySelector("[img-slides]");
  const textSlider = document.querySelector("[hero-copies]");

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let counter = 1;
  let animationDuration = 1000;
  let lastTime = 0;

  // EventListeners
  prevBtn.addEventListener("click", prevBtnClickHandler);
  nextBtn.addEventListener("click", nextBtnClickHandler);
  imgSlider.addEventListener("transitionend", counterIncrementHandler);

  // Set the proper slide initially
  changeSlides();

  function nextBtnClickHandler() {
    moveHandler("right");
  }

  function prevBtnClickHandler() {
    moveHandler("left");
  }

  // Moves the slide container horizontally
  function changeSlides() {
    imgSlider.style.transform = `translateX(-${counter * 20}%)`;
    textSlider.style.transform = `translateX(-${counter * 20}%)`;
  }

  // Add transitions and update counter
  function moveHandler(direction) {
    let currentTime = new Date().getTime();
    if (currentTime - lastTime < animationDuration) {
      return;
    }
    direction === "right" ? counter++ : counter--;
    imgSlider.style.transition = "all 0.8s cubic-bezier(0.87, 0, 0.13, 1)";
    textSlider.style.transition = "all 0.8s cubic-bezier(0.87, 0, 0.13, 1)";
    changeSlides();

    lastTime = currentTime;
  }

  //reset the counter and transition and then change slides
  function counterIncrementHandler() {
    if (counter === 0) {
      imgSlider.style.transition = "none";
      textSlider.style.transition = "none";
      counter = 3;
      changeSlides();
    } else if (counter === 4) {
      imgSlider.style.transition = "none";
      textSlider.style.transition = "none";
      counter = 1;
      changeSlides();
    }
  }
})();

// Hamburger menu
(function menu() {
  const menu = document.querySelector(".navbar__navigation-button");
  const nav = document.querySelector(".navbar__navigation");
  const overlay = document.querySelector(".overlay");
  const mainNav = document.querySelector(".navbar__nav-list");
  const main = document.querySelector("main");

  const nav_close = document.getElementById("nav_close");
  const nav_open = document.getElementById("nav_open");

  menu.addEventListener("click", menuHandler);

  function menuHandler() {
    nav.classList.toggle("nav__open");
    overlay.classList.toggle("overlay__show");

    if (nav.classList.contains("nav__open")) {
      nav_open.style.display = "none";
      nav_close.style.display = "block";

      // accessibility features
      menu.setAttribute("aria-expanded", "true");
      mainNav.removeAttribute("inert");
      main.setAttribute("inert", "");
      menu.focus();
    } else {
      nav_open.style.display = "block";
      nav_close.style.display = "none";

      // accessibility features
      menu.setAttribute("aria-expanded", "false");
      mainNav.setAttribute("inert", "");
      main.removeAttribute("inert");
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

  // Make visible the menu icon when scrolling
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 320) {
      menu.classList.add("pos-fixed");
    } else {
      menu.classList.remove("pos-fixed");
    }
  });
})();
