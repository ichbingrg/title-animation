//timeline
let tl1 = gsap.timeline({
    scrollTrigger : {
        trigger : ".home",
        start : "0%",
        end : "80%",
        scrub: 1,
    },
});
let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : ".home",
        start : "0%",
        end : "60%",
        scrub: 1,
    },
});
let tl4 = gsap.timeline({
    scrollTrigger : {
        trigger : ".home",
        start : "0%",
        end : "100%",
        scrub: 1,
    },
});


tl1.fromTo(".sliding-text",{ y : 0 } , { y : -400 });
tl2.fromTo(".logo", {scale: 6 },{ scale:1.5, top: "1rem", left: "3rem", x: "70%", y: "70%", backgroundColor:"white", color:"black"} );
tl4.fromTo(".square",{left:"70%"},{left:"100%", opacity: 0, rotation: 90, scale: 0});

let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : ".home",
        start : "0%",
        end : "200%",
        scrub: 1,
        pin: true,
        pinSpacing: false
    },
});