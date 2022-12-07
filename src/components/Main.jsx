import { useEffect } from "react";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  // Lazy images loading

  const loadImg = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
      setTimeout(() => {
        entry.target.classList.remove("lazy-img");
      }, 200);
    });

    observer.unobserve(entry.target);
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
  });

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section__hidden");
    observer.unobserve(entry.target);
  };

  const observeNavs = function (entries, observer) {
    const [entry] = entries;

    if (
      !entry.isIntersecting ||
      entry.target.classList.contains("projects--message")
    )
      return;

    let className;
    const list = [...entry.target.classList];

    if (list) {
      if (list.length > 2)
        className = list.find(
          (name) => name !== "section" && name !== "section__hidden"
        );
      if (list.length <= 2) className = list.find((name) => name !== "section");
    }

    const navItems = document.querySelectorAll(".nav");

    navItems.forEach((nav) => {
      nav.classList.contains(className)
        ? nav.classList.add("nav--active")
        : nav.classList.remove("nav--active");
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  const navObserver = new IntersectionObserver(observeNavs, {
    root: null,
    threshold: 0,
  });

  // Sticky nav bar

  const stickyNav = function (entries) {
    const header = document.querySelector("header");
    const [entry] = entries;

    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-300px`,
  });
  useEffect(() => {
    document
      .querySelectorAll("img[data-src]")
      .forEach((img) => imgObserver.observe(img));

    document.querySelectorAll(".section").forEach(function (section) {
      sectionObserver.observe(section);

      navObserver.observe(section);

      headerObserver.observe(document.querySelector("#home"));
    });
  }, []);

  return (
    <div id="main">
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
