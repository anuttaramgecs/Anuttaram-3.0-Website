/* small accessibility improvement: pause marquee on hover/focus */
(function () {
    const marquee = document.querySelector(".live-update .marquee");
    if (!marquee) return;
    marquee.addEventListener("mouseenter", () => marquee.style.animationPlayState = "paused");
    marquee.addEventListener("mouseleave", () => marquee.style.animationPlayState = "running");
    marquee.addEventListener("focusin", () => marquee.style.animationPlayState = "paused");
    marquee.addEventListener("focusout", () => marquee.style.animationPlayState = "running");
})();