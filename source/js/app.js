var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.toggle("main-nav--opened");
});

// Оживление слайдера

var buttonBefore = document.querySelector(".photo-mover__label--before");
var buttonAfter = document.querySelector(".photo-mover__label--after");
var imgBefore = document.querySelector(".photo-mover__image--before");
var imgAfter = document.querySelector(".photo-mover__image--after");

if (buttonBefore) {
  buttonBefore.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!imgBefore.classList.contains("photo-mover__image--show")) {
      imgBefore.classList.add("photo-mover__image--show");
      if (imgBefore.classList.contains("photo-mover__image--no-show")) {
        imgBefore.classList.remove("photo-mover__image--no-show");
      }
    }
    if (!imgAfter.classList.contains(".photo-mover__image--no-show")) {
      imgAfter.classList.add("photo-mover__image--no-show");
      if (imgAfter.classList.contains("photo-mover__image--show")) {
        imgAfter.classList.remove("photo-mover__image--show");
      }
    }
  });
}

if (buttonAfter) {
  buttonAfter.addEventListener("click", function(evt1) {
    evt1.preventDefault();
    if (!imgAfter.classList.contains("photo-mover__image--show")) {
      imgAfter.classList.add("photo-mover__image--show");
      if (imgAfter.classList.contains("photo-mover__image--no-show")) {
        imgAfter.classList.remove("photo-mover__image--no-show");
      }
    }
    if (!imgBefore.classList.contains(".photo-mover__image--no-show")) {
      imgBefore.classList.add("photo-mover__image--no-show");
      if (imgBefore.classList.contains("photo-mover__image--show")) {
        imgBefore.classList.remove("photo-mover__image--show");
      }
    }
  });
}
