const truck = document.querySelector(".truck > div");
const header1 = document.querySelector(".title");
const header2 = document.querySelector(".hq");
const header3 = document.querySelector(".h24");
const roadSign = document.querySelector(".road-sign");
const phone = document.querySelector(".phone");
const animationDuration = 0.8;
const halfAnimationDuration = animationDuration / 2;

export function initParallax() {
    truck.addEventListener('animationend', () => {
        playMainHeaderAppearAnimation();
        playPhoneAppearAnimation();
    });
    header1.addEventListener('animationend', playSubHeadersAppearAnimation);
    header3.addEventListener('animationend', playCallButtonAppearAnimation);
    roadSign.addEventListener("pointerup", playCallButtonOnTapAnimation);
    playTruckAppearAnimation();
}

function playTruckAppearAnimation() {
    truck.style.animation = getAnimationParams('truckSlideInAnimation', animationDuration);
}

function playMainHeaderAppearAnimation() {
    header1.style.visibility = "visible";
    header1.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
}

function playSubHeadersAppearAnimation() {
    header2.style.visibility = "visible";
    header3.style.visibility = "visible";
    header2.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
    header3.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
}

function playCallButtonAppearAnimation() {
    roadSign.style.visibility = "visible";
    roadSign.style.animation = getAnimationParams('callButtonAppearAnimation', animationDuration);
}

function playPhoneAppearAnimation() {
    phone.style.visibility = "visible";
    phone.style.animation = getAnimationParams('phoneSlideInAnimation', halfAnimationDuration);
}

function playCallButtonOnTapAnimation() {
    roadSign.style.animation = getAnimationParams('callButtonOnTapAnimation', animationDuration / 4);
}

function getAnimationParams(animation, duration) {
    return `${duration}s ease-out 0s 1 ${animation}`;
}
