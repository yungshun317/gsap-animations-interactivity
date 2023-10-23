"use strict";

gsap.to("#comet", {
    duration: 500,
    x: -500,
    y: 400,
    repeat: -1
});

window.addEventListener("mousemove", function(e) {
    gsap.set("#body", { transformOrigin: "50% 50%" });
    gsap.to("#body", { duration: 1, x: e.pageX, rotation: e.pageX });
    gsap.to("#head", { duration: 1 + 0.09, x: e.pageX });
    gsap.to("#space1", { duration: 1, x: -e.pageX / 3 });
    gsap.to("#space2", { duration: 1, x: -e.pageX / 5 });
    gsap.to("#plane", { duration: 1, x: -e.pageX / 2.5 });
}, false);