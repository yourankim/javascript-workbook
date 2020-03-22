import { fetchRandomCats } from "../api.js";

const constants = {
  PLACEHOLDER_IMAGE: "../assets/placeholder.png",
  TARGET_SELECTOR: "#cats"
};
const $cats = document.querySelector(constants.TARGET_SELECTOR);
let data = [];
let page = 1;
let isFetched = false;

async function init() {
  data = await fetchRandomCats(page);
  render();
  handleLazyLoad();
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
}

async function getCatsByPage() {
  const newData = await fetchRandomCats(page);
  data = data.concat(newData);
  isFetched = false;
  render();
  handleLazyLoad();
}

function handleLazyLoad() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if (
            lazyImage.getBoundingClientRect().top <= window.innerHeight &&
            lazyImage.getBoundingClientRect().bottom >= 0 &&
            getComputedStyle(lazyImage).display !== "none"
          ) {
            lazyImage.src = lazyImage.dataset.src;
            //lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", function() {
    lazyLoad();
    handleScrollPaging();
  });
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
  lazyLoad();
}

function handleScrollPaging() {
  const clientHeight = document.documentElement.clientHeight;
  const bottom = document.documentElement.getBoundingClientRect().bottom;
  if (bottom < clientHeight + 100) {
    if (isFetched) return;
    console.log("bottom of the page");
    isFetched = true;
    page = page + 1;
    getCatsByPage();
  }
}

init();
