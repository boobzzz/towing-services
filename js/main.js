import { initHeader } from "./header.js";
import { initParallax } from "./opening.js";
import { initSlideshow } from "./slideshow.js";

const root = document.querySelector(".root");
const header = document.querySelector("header");
const testimonialsList = document.querySelector(".testimonials_list");
const hook = document.querySelector(".hook");
const hookHitArea = document.querySelector(".hit-area");
const testimonials = [
    {
        text: `Задоволений послугами компанії. Зробили все оперативно і якісно. Викликав евакуатор, мені відразу ж 
               повідомили вартість послуги. Це говорить про високий рівень сервісу. Приїхали вчасно, швидко завантажили 
               мій автомобіль і доставили в найближчий автосервіс. Велике спасибі за пунктуальність.`,
        author: "Ігор"
    },
    {
        text: `Послугами цієї фірми задоволена. Приїхали вчасно, все зробили швидко і акуратно. Окрема подяка Ярославу 
               за якісно зроблену роботу. Рекомендую всім.`,
        author: "Наталя"
    },
    {
        text: `Cпасибі компанії за оперативність. Все уважно вислухали, відразу назвали точну вартість і час прибуття 
               евакуатора, вчасно приїхали, швидко завантажили і доставили. Велике спасибі, ви молодці!`,
        author: "Мар'яна"
    },
    {
        text: `Приїхали швидко. Завантажили моє авто та відвезли. Жодних націнок, що дуже порадувало. Все як 
               домовлялися при розмові. Вартість послуг теж порадувала.`,
        author: "Роман"
    }
];

window.addEventListener("load", () => {
    initHeader();
    initParallax();
    initSlideshow();
    initTestimonials();
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

function initTestimonials() {
    testimonials.forEach((item) => {
        const testimonialsItem = createTestimonialsItem(item.text, item.author);
        testimonialsList.append(testimonialsItem);
    });
}

function createTestimonialsItem(text, author) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const openingBracket = document.createElement("b");
    const closingBracket = document.createElement("b");

    li.classList.add("testimonials_item");
    span.innerHTML = text;
    openingBracket.innerHTML = `"`;
    closingBracket.innerHTML = `" - ${author}`;
    li.append(openingBracket);
    li.append(span);
    li.append(closingBracket);

    return li;
}
