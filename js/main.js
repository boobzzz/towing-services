import "./header.js";
import { startHeaderAnimationSequence } from "./parallax.js";
import { initSlideshow } from "./slideshow.js";

const root = document.querySelector(".root");
const header = document.querySelector("header");
const gallery = document.querySelector(".gallery");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const hook = document.querySelector(".hook");
const hookHitArea = document.querySelector(".hit-area");
const sections = [gallery, services, testimonials];

window.addEventListener("load", () => {
    startHeaderAnimationSequence();
    initSlideshow();
});

screen.orientation.addEventListener("change", () => {
    root.scroll(0, root.scrollTop - 1);
});

root.addEventListener("scroll", () => {
    setHookTranslateYOnScroll();
});

sections.forEach((section) => {
    const button = document.querySelector("." + section.className + "-btn");
    button.addEventListener("pointerup", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
});

hookHitArea.addEventListener("pointerup", () => {
    header.scrollIntoView({ behavior: "smooth" });
});

function setHookTranslateYOnScroll() {
    const currentTranslateY = (root.scrollTop / (root.scrollHeight - window.innerHeight)) * 100;
    if (currentTranslateY <= 100) {
        hook.style.transform = `translateY(${currentTranslateY - 100}%)`;
    }
}
