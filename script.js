function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed"*/
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".main",
      scrub: true,
      start: "top bottom",
      end: "top top",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

function page1Animation() {
  const text = document.querySelector(".hero1 h1");

  const letter = text.textContent.split("");

  text.textContent = "";

  letter.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    text.append(span);
  });

  var tl1 = gsap.timeline();

  tl1.from(".short-heading h6", {
    y: 10,
    opacity: 0,
    duration: 0.5,
  });

  tl1.from(".letter", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });

  tl1.from(".hero1 h4", {
    opacity: 0,
    y: 10,
    duration: 0.5,
  });

  tl1.from(".mid-heading p ,i", {
    opacity: 0,
    y: 10,
    duration: 0.5,
  });

  tl1.from(".year", {
    opacity: 0,
    y: 10,
    duration: 0.5,
  });
}

page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      trigger: ".hero2",
      start: "top 25%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl2.from(".nav h4", {
    opacity: 0,
    y: 10,
    duration: 0.5,
    stagger: 0.5,
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      trigger: ".hero2-content",
      scroller: ".main",
      start: "top 40%",
      end: "top 20%",
      scrub: 2,
    },
  });

  tl3.from(".hero2-content h1", {
    opacity: 0,
    y: 10,
    duration: 1,
  });

  tl3.from(".hero2-content p", {
    opacity: 0,
    y: 10,
    duration: 1,
  });

  tl3.from(".hero2-bottom .bottom-content", {
    opacity: 0,
    y: 10,
    duration: 1,
  });
}

page2Animation();

function page3Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      trigger: ".container1",
      start: "top 40%",
      end: "top 20%",
      scrub: 3,
    },
  });

  tl4.from(".hero3-left h1", {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".hero3-left p", {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".hero3-left button", {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container1 .brand1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container1 .brand2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container1 .brand3", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container2 .brand1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container2 .brand2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container2 .brand3", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container3 .brand1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container3 .brand2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });

  tl4.from(".container3 .brand3", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
  });
}

page3Animation();
