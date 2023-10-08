const truck = document.querySelector(".truck > div");
const header1 = document.querySelector(".title");
const header2 = document.querySelector(".hq");
const header3 = document.querySelector(".h24");
const roadSign = document.querySelector(".road-sign");
const phone = document.querySelector(".phone");
const animationDuration = 0.8;
const halfAnimationDuration = animationDuration / 2;

export function initParallax() {
    truck.addEventListener('animationend', onTruckAnimationEnd);
    truck.addEventListener('webkitAnimationEnd', onTruckAnimationEnd);
    header1.addEventListener('animationend', onMainHeaderAppearAnimationEnd);
    header1.addEventListener('webkitAnimationEnd', onMainHeaderAppearAnimationEnd);
    header3.addEventListener('animationend', onSubHeadersAppearAnimationEnd);
    header3.addEventListener('webkitAnimationEnd', onSubHeadersAppearAnimationEnd);
    roadSign.addEventListener('animationend', onCallButtonAppearAnimationEnd);
    roadSign.addEventListener('webkitAnimationEnd', onCallButtonAppearAnimationEnd);
    roadSign.addEventListener("pointerup", playCallButtonOnTapAnimation);
    playTruckAppearAnimation();
}

function playTruckAppearAnimation() {
    if (truck.style.display !== 'none') {
        truck.style.animation = getAnimationParams('truckSlideInAnimation', animationDuration);
    }
}

function onTruckAnimationEnd() {
    truck.style.opacity = 1;
    truck.style.animation = '';
    playMainHeaderAppearAnimation();
    playPhoneAppearAnimation();
}

function playMainHeaderAppearAnimation() {
    // header1.style.visibility = "visible";
    header1.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
}

function playPhoneAppearAnimation() {
    // phone.style.visibility = "visible";
    phone.style.animation = getAnimationParams('phoneSlideInAnimation', halfAnimationDuration);
}

function onMainHeaderAppearAnimationEnd() {
    header1.style.opacity = 1;
    phone.style.opacity = 1;
    header1.style.animation = '';
    phone.style.animation = '';
    playSubHeadersAppearAnimation();
}

function playSubHeadersAppearAnimation() {
    // header2.style.visibility = "visible";
    // header3.style.visibility = "visible";
    header2.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
    header3.style.animation = getAnimationParams('infoHeadersSlideInAnimation', halfAnimationDuration);
}

function onSubHeadersAppearAnimationEnd() {
    header2.style.opacity = 1;
    header3.style.opacity = 1;
    header2.style.animation = '';
    header3.style.animation = '';
    playCallButtonAppearAnimation();
}

function playCallButtonAppearAnimation() {
    // roadSign.style.visibility = "visible";
    roadSign.style.animation = getAnimationParams('callButtonAppearAnimation', animationDuration);
}

function onCallButtonAppearAnimationEnd() {
    roadSign.style.opacity = 1;
    roadSign.style.animation = '';
}

function playCallButtonOnTapAnimation() {
    roadSign.style.animation = getAnimationParams('callButtonOnTapAnimation', animationDuration / 4);
}

function getAnimationParams(animation, duration) {
    return `${duration}s ease-out 0s 1 ${animation}`;
}
