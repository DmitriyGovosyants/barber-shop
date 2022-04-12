const showOnPx = 300;
const backToTopBtn = document.querySelector(".back-to-top");

document.addEventListener("scroll", toggleBackToTopBtn);
backToTopBtn.addEventListener("click", goToTop);

function toggleBackToTopBtn() {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopBtn.classList.remove("is-hidden")
  } else {
    backToTopBtn.classList.add("is-hidden")
  }
};

function scrollContainer() {
  return document.documentElement || document.body;
};

function goToTop() {
  document.body.scrollIntoView({behavior: "smooth",});
};