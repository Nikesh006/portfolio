import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  const mainElement = document.querySelector("main") || document.querySelector(".main-body");
  if (mainElement) {
    mainElement.classList.add("main-active");
  }
  document.body.style.overflowY = "auto";
  if (smoother) {
    try {
      smoother.paused(false);
    } catch (e) {
      console.warn("Smoother error:", e);
    }
  }
  
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  try {
    const landingSelectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
    landingSelectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        const text = new SplitText(selector, {
          type: "chars,lines",
          linesClass: "split-line",
        });
        gsap.fromTo(
          text.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.3,
          }
        );
      }
    });

    const landingH2Info = document.querySelector(".landing-h2-info");
    if (landingH2Info) {
      const text2 = new SplitText(".landing-h2-info", { type: "chars,lines", linesClass: "split-h2" });
      gsap.fromTo(
        text2.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
      
      const landingH2Info1 = document.querySelector(".landing-h2-info-1");
      if (landingH2Info1) {
        const text3 = new SplitText(".landing-h2-info-1", { type: "chars,lines", linesClass: "split-h2" });
        LoopText(text2, text3);
      }
    }

    const landingInfoH2 = document.querySelector(".landing-info-h2");
    if (landingInfoH2) {
      gsap.fromTo(
        ".landing-info-h2",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power1.inOut",
          y: 0,
          delay: 0.8,
        }
      );
    }

    const headerIconsFade = [".header", ".icons-section", ".nav-fade"];
    headerIconsFade.forEach(selector => {
      if (document.querySelector(selector)) {
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power1.inOut",
            delay: 0.1,
          }
        );
      }
    });

    const landingH2_1 = document.querySelector(".landing-h2-1");
    const landingH2_2 = document.querySelector(".landing-h2-2");
    if (landingH2_1 && landingH2_2) {
      const text4 = new SplitText(".landing-h2-1", { type: "chars,lines", linesClass: "split-h2" });
      const text5 = new SplitText(".landing-h2-2", { type: "chars,lines", linesClass: "split-h2" });
      LoopText(text4, text5);
    }
  } catch (err) {
    console.error("InitialFX error:", err);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
