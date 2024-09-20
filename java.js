
const buttonElement = document.querySelector('.menuToggle');
var main111 = document.querySelector(".parent");
var cursorm = document.querySelector("#cursormover");
let navlist = document.querySelector('.menuitem');
var logo = document.querySelector(".logoz");
var upperimg = document.querySelector(".logoz .upper");

function menutogle() {
  navlist.classList.toggle('open');
  var expanded = buttonElement.getAttribute('aria-expanded') === 'true';
  buttonElement.setAttribute('aria-expanded', !expanded);
  event.preventDefault();
  cursorm.classList.toggle("close");
  document.querySelector("#header .menuitem #home").classList.toggle("open");
  document.querySelector("#header .menuitem .proj").classList.toggle("open");
  document.querySelector("#header .menuitem #abt").classList.toggle("open");
  document.querySelector(".menuitem .socialmedia .mail").classList.toggle("open");
  document.querySelector(".menuitem .socialmedia .insta").classList.toggle("open");
};

function loadinganimation() {
  gsap.to(".loader", {
    delay: 0.4,
    height: 0,
    ease: "expo.inOut",
    stagger: .1,
    onComplete: () => {
      document.querySelector(".loader").remove();
    }
  });
  gsap.to(".page123", {
    delay: 1,
    height: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: true,
    onComplete: () => {
      document.querySelector(".page123").remove();
    }
  });
};
loadinganimation();

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    touchMultiplier: 3,
    smoothMobile: true,
    smoothTablet: true,
    reloadOnContextChange: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


  document.querySelector("#page1 #button11 .archivebtn").addEventListener("click", () => {
    locoScroll.scrollTo(document.querySelector(".page2"), -100);
  });

  document.querySelector(".logoz").addEventListener("click", () => {
    locoScroll.scrollTo(0);
  });

  document.querySelector("#header .menuitem .proj").addEventListener("click", () => {
    menutogle()
    locoScroll.scrollTo(document.querySelector(".page2"), -100);
  });
};
locomotive();

/*window.addEventListener("scroll", (event) => {
  event.preventDefault();
});
window.addEventListener("touchmove", (event) => {
  event.preventDefault();
});*/

function mainlogo() {

  logo.addEventListener("mouseenter", function () {
    gsap.to(upperimg, {
      opacity: 1
    });
  });
  logo.addEventListener("mouseleave", function () {
    gsap.to(upperimg, {
      opacity: 0
    });
  });
};
mainlogo();

function menubtn() {
  buttonElement.addEventListener('click', () => menutogle());
  document.querySelector("#header .menuitem #home").addEventListener("click", () => menutogle());
};
menubtn();

function cursormover() {

  main111.addEventListener("mousemove", function (dets) {
    cursorm.style.top = (dets.y) + "px";
    cursorm.style.left = (dets.x) + "px";
  });

  main111.addEventListener("mouseenter", () => {
    cursorm.style.opacity = 1;
  });
  main111.addEventListener("mouseleave", () => {
    cursorm.style.opacity = 0;
  });
  main111.addEventListener("mousedown", () => {
    cursorm.style.width = "20px";
    cursorm.style.height = "20px";
  });
  main111.addEventListener("mouseup", () => {
    cursorm.style.width = "30px";
    cursorm.style.height = "30px";
  });
  logo.addEventListener("mouseenter", () => {
    cursorm.style.opacity = 0;
  });
  logo.addEventListener("mouseleave", () => {
    cursorm.style.opacity = 1;
  });
  buttonElement.addEventListener("mouseenter", () => {
    cursorm.style.opacity = 0;
  });
  buttonElement.addEventListener("mouseleave", () => {
    cursorm.style.opacity = 1;
  });
  navlist.addEventListener("mouseenter", () => {
    cursorm.style.opacity = 0;
  });
  navlist.addEventListener("mouseleave", () => {
    cursorm.style.opacity = 1;
  });
};
cursormover();

function revealanimation() {

  var t1 = gsap.timeline();


  gsap.from(".logoz", {
    y: -50,
    opacity: 0,
    delay: 2,
    duration: 0.8,
    stagger: 0.2,
    ease: "expo.inOut"
  });
  gsap.from("button", {
    y: -50,
    opacity: 0,
    delay: 2,
    duration: 0.8,
    stagger: 0.2,
    ease: "expo.inOut"
  });
  gsap.from("#page1 h1", {
    y: 50,
    opacity: 0,
    delay: 2,
    duration: 0.8,
    ease: "expo.inOut",
    stagger: 0.2,
  });
  t1.from("#page1 h2", {
    y: 50,
    opacity: 0,
    delay: 2.6,
    duration: 1,
    stagger: 0.2,
    ease: "expo.inOut",
  });
  t1.from("#page1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
  gsap.from("#page1 #button11 .aboutbtn", {
    y: 50,
    opacity: 0,
    delay: 4,
    duration: 1,
    stagger: 0.2,
    ease: "expo.inOut"
  });
  gsap.from("#page1 #button11 .archivebtn", {
    y: 50,
    opacity: 0,
    delay: 4.4,
    duration: 1,
    stagger: 0.2,
    ease: "expo.inOut"
  });
  gsap.to(".firstcircle", {
    scale: 1,
    delay: 4.8,
    stagger: 0.2,
    duration: 2
  });
  gsap.to(".secondcircle", {
    scale: 1,
    delay: 4.8,
    stagger: 0.2,
    duration: 2
  });
  gsap.from(".page2 h1", {
    y: 150,
    opacity: 0,
    stagger: true,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "#main",
      start: "top 80%",
    }
  });
  gsap.from(".page2 .projectpages", {
    y: 150,
    opacity: 0,
    stagger: true,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2 .projectpages",
      scroller: "#main",
      start: "top 80%",
    }
  });
  gsap.from(".page2 .projectpages2", {
    y: 150,
    opacity: 0,
    stagger: true,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2 .projectpages2",
      scroller: "#main",
      start: "top 80%",
    }
  });
  gsap.from(".email", {
    y: 100,
    opacity: 0,
    stagger: true,
    duration: 1,
    scrollTrigger: {
      trigger: "footer",
      scroller: "#main",
      start: "top 80%",
    }
  });
  gsap.from(".lastxt", {
    y: 100,
    opacity: 0,
    stagger: true,
    duration: 1,
    scrollTrigger: {
      trigger: ".email",
      scroller: "#main",
      start: "top 80%",
    }
  });
};
revealanimation();




