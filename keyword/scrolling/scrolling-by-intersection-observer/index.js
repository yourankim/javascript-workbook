import { fetchRandomCats } from "../api.js";

const constants = {
  PLACEHOLDER_IMAGE: "../assets/placeholder.png",
  TARGET_SELECTOR: "#cats"
};
const $cats = document.querySelector(constants.TARGET_SELECTOR);
let data = [];
let page = 1;

const observerForLazyload = new IntersectionObserver(handleLazyLoad, {
  threshold: 0.5
});
const observerForScrollPaging = new IntersectionObserver(handleScrollpaging, {
  rootMargin: "100px"
});

async function init() {
  data = await fetchRandomCats(page);
  render();
  setObserverForLazyload();
  observerForScrollPaging.observe(document.querySelector("#bottom"));
}

function setObserverForLazyload() {
  [].slice
    .call(document.querySelectorAll("img.lazy"))
    .forEach(image => observerForLazyload.observe(image));
}

function render() {
  $cats.innerHTML = data
    .map(
      item =>
        `<img class="lazy" 
              id="cat-image" 
              src=${constants.PLACEHOLDER_IMAGE}
              data-src="${item.url}" 
              alt="${item.name}">`
    )
    .join("");

  setObserverForLazyload();
}

async function getCatsByPage() {
  const newData = await fetchRandomCats(page);
  data = data.concat(newData);
  render();
}

function handleLazyLoad(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
  });
}

function handleScrollpaging(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    console.log("bottom of the page");
    page = page + 1;
    getCatsByPage();
  });
}

init();
