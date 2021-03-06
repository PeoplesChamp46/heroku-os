/* header scroll background animation */

const body = document.body;

window.addEventListener("scroll", () => {
  const scrollValue = window.pageYOffset;

  const scrollPoint = scrollValue / 100;

  document.querySelector("#index-head").style.backgroundColor =
    "rgba(0, 0, 0," + scrollPoint + ")";
});

/* menu button  */

function showmenu() {
  document.querySelector(".mob-nav").style.transform = "translateX(0%)";
}

function closemenu() {
  document.querySelector(".mob-nav").style.transform = "translateX(100%)";
}

function expandMenu() {
  const valuen = "-";
  const valuep = "+";
  let content =
    document.querySelector("#inner-mob-list"); /* .style.display = "block" */

  if (content.style.height) {
    content.style.height = null;
    content.style.opacity = 0;
    content.style.display = "none";
    document.querySelector("span").innerHTML = valuep;
  } else {
    content.style.height = "100%";
    content.style.opacity = 1;
    content.style.display = "block";

    document.querySelector("span").innerHTML = valuen;
  }
}

/* back to top */

window.addEventListener("scroll", () => {
  const scrollValue = window.pageYOffset;

  const topBtn = document.querySelector(".back-to-top");

  if (scrollValue > 200) {
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
  }
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}

/* preload animation */

function preLoader() {
  let loadTl = gsap.timeline({
    defaults: { Easings: Expo.EaseOut },
  });
  loadTl.to(".loader>img", {
    top: 5,
    left: 20,
    scale: 1,
    duration: 3,
    delay: 2,
  });
  loadTl.fromTo(".loader", { opacity: 1 }, { opacity: 0, duration: 3 }, "<");
  loadTl.to(".preloader", { zIndex: -2 });
}

/* carousel */

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const slider = document.querySelector(".slider");

var slideIndex = 0;

var sIndex = slider.children.length - 1;

function reset() {
  for (var i = 0; i < slider.children.length; i++) {
    slider.children[i].style.opacity = 0;
    slider.children[i].style.zIndex = -1;
  }
}

function slideMech() {
  slider.children[slideIndex].style.zIndex = 0;
  slider.children[slideIndex].style.opacity = 1;
  slider.children[slideIndex].style.transform = "scale(1.1)";
}

textIntro();

let timer = 10000;

let slideSet = setInterval(() => {
  nextSlide();
}, timer);

/* function slides() {
  reset();
  textIntro();

  slideIndex = slideIndex < sIndex ? slideIndex + 1 : 0;
  slideMech();

  setTimeout(textOutro, 9000);
} */

function nextSlide() {
  textOutro();
  loadingBar();

  setTimeout(() => {
    reset();

    slideIndex = slideIndex < sIndex ? slideIndex + 1 : 0;
    slideMech();
  }, 1000);

  setTimeout(textIntro, 1000);
}

next.addEventListener("click", () => {
  nextSlide();
});

prev.addEventListener("click", () => {
  reset();
  textOutro();

  slideIndex = slideIndex > 0 ? slideIndex - 1 : sIndex;
  slideMech();

  setTimeout(textIntro, 1000);
});

function textIntro() {
  let tl = gsap.timeline({ defaults: { duration: 1, Easings: Expo.EaseOut } });

  tl.fromTo(".heading", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
  tl.fromTo(".hero-button", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
}

function textOutro() {
  let tl = gsap.timeline({ defaults: { duration: 1, Easings: Expo.EaseOut } });

  tl.fromTo(".heading", { opacity: 1, y: 0 }, { opacity: 0, y: -50 });
  tl.fromTo(".hero-button", { opacity: 1, y: 0 }, { opacity: 0, y: 50 }, "=");
}

function loadingBar() {
  gsap.fromTo(".loadbar-in", { width: "0%" }, { width: "100%", duration: 10 });
}
