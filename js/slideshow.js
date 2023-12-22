const ghPagesRootURL = "https://boobzzz.github.io/towing-services/";
const gallerySlideUrl = "assets/img/gallery/slide-";
const SLIDE_BASE_URL = window.location.origin === ghPagesRootURL
    ? ghPagesRootURL + gallerySlideUrl
    : gallerySlideUrl;

const slideshow = document.querySelector(".slideshow");
const list = document.querySelector(".slides");
const btns = document.querySelectorAll(".arrow");
const nextBtn = document.querySelector(".arrow-next");
const autoplayInterval = parseInt(slideshow.dataset.autoplayInterval) || 5000;
const activeClassName = "is-active";
const slidesCount = 14;
let intervalID;

export function initSlideshow() {
    initSlides();
    changeSlide();
    launchAutoPlay();
    stopAutoPlayOnHover();
    restoreAutoPlayOnHoverEnd();
}

function initSlides() {
    for (let i = 0; i < slidesCount; i++) {
        const slide = document.createElement("li");
        const cover = document.createElement("div");

        slide.classList.add("slide");
        if (i === 0) {
            slide.classList.add(activeClassName);
        }
        cover.classList.add("cover");
        cover.style.backgroundImage = `url(${SLIDE_BASE_URL}${i + 1}.jpg)`;
        slide.append(cover);
        list.append(slide);
    }
}

function switchNextSlide() {
    const activeSlide = getActiveSlide();
    activeSlide.nextElementSibling
        ? activeSlide.nextElementSibling.classList.add(activeClassName)
        : list.firstElementChild.classList.add(activeClassName);
}

function switchPrevSlide() {
    const activeSlide = getActiveSlide();
    activeSlide.previousElementSibling
        ? activeSlide.previousElementSibling.classList.add(activeClassName)
        : list.lastElementChild.classList.add(activeClassName);
}

function changeSlide() {
    for (const btn of btns) {
        btn.addEventListener("pointerup", (e) => {
            if (e.currentTarget === nextBtn) {
                switchNextSlide();
            } else {
                switchPrevSlide();
            }
        });
    }
}

function launchAutoPlay() {
    if (slideshow.dataset.autoplay === "true") {
        intervalID = setInterval(() => {
            switchNextSlide();
        }, autoplayInterval);
    }
}

function stopAutoPlayOnHover() {
    if (
        slideshow.dataset.autoplay === "true" &&
        slideshow.dataset.stopAutoplayOnHover === "true"
    ) {
        slideshow.addEventListener("pointerover", () => {
            clearInterval(intervalID);
        });
    }
}

function restoreAutoPlayOnHoverEnd() {
    slideshow.addEventListener("pointerout", launchAutoPlay);
}

function getActiveSlide() {
    const activeSlide = document.querySelector(".slide.is-active");
    activeSlide.classList.remove(activeClassName);
    return activeSlide;
}
