/* header scroll background animation */

const body = document.body;

window.addEventListener("scroll", () => {
  const scrollValue = window.pageYOffset;

  const scrollPoint = scrollValue / 100;

  document.querySelector("#index-head").style.backgroundColor =
    "rgba(0, 0, 0," + scrollPoint + ")";
});

/* preloader animation */

/* let loader;
function preLoader() {
  loader = setTimeout(showPage, 000);
}

function showPage() {
  document.querySelector(".preloader").style.display = "none";
} */


