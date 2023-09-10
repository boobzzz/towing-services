import "./header.js";
import { startHeaderAnimationSequence } from "./home.js";
import { initSlideshow } from "./slideshow.js";

const root = document.querySelector(".root");
const header = document.querySelector("header");
const gallery = document.querySelector(".gallery");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const hook = document.querySelector(".hook");
const hookHitArea = document.querySelector(".hit-area");
const sections = [gallery, services, testimonials];
let hookInitialTranslateY = 0;

window.addEventListener("load", () => {
    setHookInitialTranslateY();
    startHeaderAnimationSequence();
    initSlideshow();
});

function setHookInitialTranslateY() {
    hookInitialTranslateY = getTranslateY(hook);
}

function getTranslateY(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m42;
}

root.addEventListener("scroll", () => {
    const currentTranslateY = (root.scrollTop / (root.scrollHeight + hookInitialTranslateY)) * 100;
    hook.style.transform = `translateY(${currentTranslateY - 100}%)`;
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
