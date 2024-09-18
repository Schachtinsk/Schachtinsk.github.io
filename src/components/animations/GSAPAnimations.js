import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateLetters(selector, speed, activateOnScroll = false) {
  const wordElement = document.querySelector(selector);

  if (wordElement) {
    const letters = wordElement.textContent.split("").map(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      return span;
    });

    wordElement.textContent = "";
    letters.forEach(span => wordElement.appendChild(span));

  
    if (activateOnScroll) {
      gsap.fromTo(letters, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: speed,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wordElement,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    } else {

      gsap.fromTo(letters, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: speed,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  } else {
    console.error("NOT FOUND");
  }
}