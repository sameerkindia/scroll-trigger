// gsap.from("#page1 #circle", {
//   scale: 0,
//   rotate: 360,
//   delay: 1,
//   duration: 2,
// });

// gsap.from("#page2 #circle", {
//   scale: 0,
//   rotate: 360,

//   scrollTrigger: {
//     trigger: "#page2 #circle",
//     scroller: "body",
//     markers: true,
//     start: "top 90%",
//     scrub: 5,
//   },
// });

// gsap.from("#page3 #circle", {
//   scale: 0,
//   rotate: 360,
//   delay: 1,
//   duration: 2,
//   scrollTrigger: "#page3 #circle",
// });

// gsap.to("#page2 img", {
//   width: "100%",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 0",
//     end: "top -100%",
//     scrub: 3,
//     pin: true,
//   },
// });

// gsap.to("#heading", {
//   transform: "translateX(-550%)",
//   scrollTrigger: {
//     trigger: "#page4",
//     scroller: "body",
//     markers: true,
//     start: "top 0",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//   },
// });

// Locomotive

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
