const burgerContainer = document.querySelector("header .wrapper");
const burgerBtn = document.querySelector(".burger");
const navMenu = document.querySelector('nav');
const menu = document.querySelector(".menu-toggle");
const gallery = document.querySelector(".gallery");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const sections = [gallery, services, testimonials];
const classOpen = "nav-open";
let isMenuVisible = false;

export function initHeader() {
    initMenuButtons();
    menu.addEventListener("pointerup", toggleBurgerContainer);
    burgerBtn.addEventListener("pointerup", toggleBurgerMenu);
}

function initMenuButtons() {
    sections.forEach((section) => {
        const button = document.querySelector("." + section.className + "-btn");
        button.addEventListener("pointerup", () => {
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
}

function toggleBurgerContainer() {
    burgerContainer.classList.toggle(classOpen);
}

function toggleBurgerMenu() {
    isMenuVisible = burgerContainer.classList.contains(classOpen);
    navMenu.style.transform = `translateX(${isMenuVisible ? 0 : -100}%)`;
}