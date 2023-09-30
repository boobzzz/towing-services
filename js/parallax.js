const truck = document.querySelector(".truck > div");
const callButton = document.querySelector(".call-button");
const roadSign = document.querySelector(".road-sign");
const infoItemH1 = document.querySelector(".info-panel h1");
const infoItemH2 = document.querySelector(".hq");
const infoItemH3 = document.querySelector(".h24");
const phone = document.querySelector(".phone");
const animationDutation = 0.8;
const halfAnimationDuration = animationDutation / 2;

export function startHeaderAnimationSequence() {
    playTruckAnimation();
}

function playTruckAnimation() {
    truck.style.animation = `${animationDutation}s ease-out 0s 1 truckSlideInFromLeft`;
}

function playInfoAnimation() {
    infoItemH1.style.visibility = "visible";
    infoItemH1.style.animation = `${halfAnimationDuration}s ease-out 0s 1 infoSlideInFromTop`;
    infoItemH2.style.animation = `${halfAnimationDuration}s ease-out ${halfAnimationDuration}s 1 infoSlideInFromTop`;
    infoItemH3.style.animation = `${halfAnimationDuration}s ease-out ${halfAnimationDuration}s 1 infoSlideInFromTop`;
}

function playPhoneAnimation() {
    phone.style.visibility = "visible";
    phone.style.animation = `${animationDutation}s ease-out 0s 1 phoneSlideInFromBottom`;
}

function playCallButtonAnimation() {
    callButton.style.visibility = "visible";
    roadSign.style.animation = `${animationDutation}s ease-out 0s 1 roadSignRotationOnLoad`;
}

truck.onanimationend = () => {
    playInfoAnimation();
    playPhoneAnimation();
};

infoItemH1.onanimationend = () => {
    infoItemH2.style.visibility = "visible";
    infoItemH3.style.visibility = "visible";
};

infoItemH3.onanimationend = () => {
    playCallButtonAnimation();
};

roadSign.addEventListener("pointerup", (e) => {
    roadSign.style.animation = `${animationDutation / 4}s ease-out 0s 1 roadSignRotationOnTap`;
});

// roadSign.onanimationend = () => {
//     roadSign.style.animation = "";
// }
