gsap.from("#page1 #circle", {
  scale: 0,
  rotate: 360,
  delay: 1,
  duration: 2,
});

gsap.from("#page2 #circle", {
  scale: 0,
  rotate: 360,

  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 90%",
    scrub: 5,
  },
});

gsap.from("#page3 #circle", {
  scale: 0,
  rotate: 360,
  delay: 1,
  duration: 2,
  scrollTrigger: "#page3 #circle",
});
