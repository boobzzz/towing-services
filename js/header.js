const root = document.querySelector(".root");
const burgerBtn = document.querySelector(".burger");
const burgerContainer = burgerBtn.parentElement;
const navMenu = document.querySelector('nav');
const menu = document.querySelector(".menu-toggle");
const gallery = document.querySelector(".gallery");
const services = document.querySelector(".services");
const testimonials = document.querySelector(".testimonials");
const sections = [gallery, services, testimonials];
const classOpen = "nav-open";
let isMenuVisible = false;

export function initHeader() {
    gsap.registerPlugin(ScrollToPlugin);
    menu.addEventListener("pointerup", toggleBurgerContainer);
    burgerBtn.addEventListener("pointerup", toggleBurgerMenu);
    initMenuButtons();
}

function initMenuButtons() {
    sections.forEach((section) => {
        const button = document.querySelector("." + section.className + "-btn");
        const sectionHeader = document.querySelector("." + section.className + " h3");
        button.addEventListener("pointerup", () => menuItemClickHandler(section, 1));
        sectionHeader.addEventListener("pointerup", () => menuItemClickHandler(section, 0.5));
    });
}

function menuItemClickHandler(section, duration) {
    gsap.to(root, {
        duration,
        scrollTo: { y: section }
    });
}

function toggleBurgerContainer() {
    burgerContainer.classList.toggle(classOpen);
}

function toggleBurgerMenu() {
    isMenuVisible = burgerContainer.classList.contains(classOpen);
    navMenu.style.transform = `translateX(${isMenuVisible ? 0 : -100}%)`;
}