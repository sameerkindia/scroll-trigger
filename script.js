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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Locomotive + GSAP
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform
//     ? "transform"
//     : "fixed",
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// gsap.to("#page1 .box", {
//   rotate: 360,
//   backgroundColor: "white",
//   duration: 3,
//   delay: 2,
// });

// gsap.to("#page2 .box", {
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "100px",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "#main",
//     scrub: 1,
//     pin: true,
//     start: "top 0",
//   },
// });

// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////
// /////////////////////////////////////////////

// const allH1 = document.querySelectorAll("#page2 h1");
// let allLines = "";

// allH1.forEach((elem) => {
//   allLines += elem.textContent;
// });

// let splitedWords = allLines.split(" ")

// console.log(allLines);

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const allH1 = document.querySelectorAll("#page2 h1");

allH1.forEach((elem) => {
  let h1Text = elem.textContent;
  let allWords = h1Text.split("");
  let singleWord = "";
  allWords.forEach((el) => {
    singleWord += `<span>${el}</span>`;
  });
  elem.innerHTML = singleWord;
});

// let h1Text = allH1.textContent;
// let allWords = h1Text.split("");
// let singleWord = "";
// allWords.forEach((el) => {
//   singleWord += `<span>${el}</span>`;
// });

// allH1.innerHTML = singleWord;

// console.log(h1Text);
// console.log(allWords);
// console.log(singleWord);

gsap.to("#page2 h1 span", {
  color: "#002a16",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    scrub: 1,
    start: "top 50%",
    // end: "top 10%",
    markers: true,
  },
});
