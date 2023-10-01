import { initHeader } from "./header.js";
import { initParallax } from "./parallax.js";
import { initSlideshow } from "./slideshow.js";

const root = document.querySelector(".root");
const header = document.querySelector("header");
const hook = document.querySelector(".hook");
const hookHitArea = document.querySelector(".hit-area");

window.addEventListener("load", () => {
    initHeader();
    initParallax();
    initSlideshow();
});
screen.orientation.addEventListener("change", onOrientationChange);
root.addEventListener("scroll", setHookTranslateYOnScroll);
hookHitArea.addEventListener("pointerup", scrollToTop);

function setHookTranslateYOnScroll() {
    const currentTranslateY = (root.scrollTop / (root.scrollHeight - window.innerHeight)) * 100;
    if (currentTranslateY <= 100) {
        hook.style.transform = `translateY(${currentTranslateY - 100}%)`;
    }
}

function scrollToTop() {
    header.scrollIntoView({ behavior: "smooth" });
}

function onOrientationChange() {
    root.scroll(0, root.scrollTop - 1);
}
