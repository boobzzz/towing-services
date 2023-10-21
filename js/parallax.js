const truck = document.querySelector(".truck > div");
const header1 = document.querySelector(".title");
const header2 = document.querySelector(".hq");
const header3 = document.querySelector(".h24");
const callButton = document.querySelector(".call-button");
const phone = document.querySelector(".phone-number");
const phoneSpan = document.querySelector(".phone-number span");
const animationDuration = 0.8;
const halfAnimationDuration = animationDuration / 2;
const phoneNumber = "+380676768998";

export function initParallax() {
    truck.addEventListener("animationend", onTruckAnimationEnd);
    truck.addEventListener("webkitAnimationEnd", onTruckAnimationEnd);
    header1.addEventListener("animationend", onMainHeaderAppearAnimationEnd);
    header1.addEventListener("webkitAnimationEnd", onMainHeaderAppearAnimationEnd);
    header3.addEventListener("animationend", onSubHeadersAppearAnimationEnd);
    header3.addEventListener("webkitAnimationEnd", onSubHeadersAppearAnimationEnd);
    callButton.addEventListener("animationend", onCallButtonAppearAnimationEnd);
    callButton.addEventListener("webkitAnimationEnd", onCallButtonAppearAnimationEnd);
    callButton.addEventListener("pointerup", playCallButtonOnTapAnimation);
    // callButton.addEventListener("touchend", playCallButtonOnTapAnimation);

    if (window.getComputedStyle(truck.parentElement).display === "none") {
        playMainHeaderAppearAnimation();
        playPhoneAppearAnimation();
    } else {
        playTruckAppearAnimation();
    }
}

function playTruckAppearAnimation() {
    truck.style.animation = getAnimationParams("truckSlideInAnimation", animationDuration);
}

function onTruckAnimationEnd() {
    truck.style.opacity = "1";
    truck.style.animation = "";
    playMainHeaderAppearAnimation();
    playPhoneAppearAnimation();
}

function playMainHeaderAppearAnimation() {
    header1.style.animation = getAnimationParams("infoHeadersSlideInAnimation", halfAnimationDuration);
}

function playPhoneAppearAnimation() {
    phone.style.animation = getAnimationParams("phoneSlideInAnimation", halfAnimationDuration);
}

function onMainHeaderAppearAnimationEnd() {
    header1.style.opacity = "1";
    phone.style.opacity = "1";
    header1.style.animation = "";
    phone.style.animation = "";
    playSubHeadersAppearAnimation();
}

function playSubHeadersAppearAnimation() {
    header2.style.animation = getAnimationParams("infoHeadersSlideInAnimation", halfAnimationDuration);
    header3.style.animation = getAnimationParams("infoHeadersSlideInAnimation", halfAnimationDuration);
}

function onSubHeadersAppearAnimationEnd() {
    header2.style.opacity = "1";
    header3.style.opacity = "1";
    header2.style.animation = "";
    header3.style.animation = "";
    playCallButtonAppearAnimation();
}

function playCallButtonAppearAnimation() {
    callButton.style.animation = getAnimationParams("callButtonAppearAnimation", animationDuration);
}

function onCallButtonAppearAnimationEnd() {
    callButton.style.opacity = "1";
    callButton.style.animation = "";
}

function playCallButtonOnTapAnimation(e) {
    console.log(e);
    callButton.style.animation = getAnimationParams("callButtonOnTapAnimation", animationDuration / 4);
    phoneSpan.innerHTML = e.target.className;
    simulateCall(phoneNumber);
}

function getAnimationParams(animation, duration) {
    return `${duration}s ease-out 0s 1 ${animation}`;
}

function simulateCall(phoneNumber) {
    window.open(`tel:${phoneNumber}`, "_self");
}
