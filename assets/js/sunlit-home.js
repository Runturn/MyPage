(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".sunlit-header");
  var menuToggle = document.querySelector(".sunlit-menu-toggle");
  var heroStage = document.querySelector("[data-parallax-root]") || document.querySelector("[data-parallax-stage]");
  var heroImage = document.querySelector("[data-parallax-image]");
  var heroVine = document.querySelector("[data-vine]");
  var notePreview = document.querySelector("[data-note-preview]");
  var noteRows = Array.prototype.slice.call(document.querySelectorAll("[data-preview]"));
  var revealNodes = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var frameRequested = false;

  root.classList.add("motion-ready");
  window.requestAnimationFrame(function () {
    root.classList.add("is-ready");
    body.classList.add("is-ready");
  });

  if (menuToggle && header) {
    menuToggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-menu-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    header.addEventListener("click", function (event) {
      if (event.target.closest(".sunlit-nav a")) {
        header.classList.remove("is-menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
        header.classList.remove("is-menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  function updateMotion() {
    frameRequested = false;
    if (reducedMotion) return;

    var y = Math.min(window.scrollY, 760);
    if (heroImage) {
      heroImage.style.setProperty("--image-y", (y * 0.035).toFixed(1) + "px");
    }
    if (heroVine) {
      heroVine.style.setProperty("--vine-y", (y * -0.025).toFixed(1) + "px");
    }
  }

  function requestMotionUpdate() {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateMotion);
    }
  }

  window.addEventListener("scroll", requestMotionUpdate, { passive: true });
  updateMotion();

  if (heroStage && heroImage && !reducedMotion) {
    heroStage.addEventListener("pointermove", function (event) {
      var rect = heroStage.getBoundingClientRect();
      var dx = (event.clientX - rect.left) / rect.width - 0.5;
      var dy = (event.clientY - rect.top) / rect.height - 0.5;
      heroImage.style.setProperty("--image-x", (dx * -10).toFixed(1) + "px");
      heroImage.style.setProperty("--image-y", (dy * -8 + window.scrollY * 0.035).toFixed(1) + "px");
      if (heroVine) {
        heroVine.style.setProperty("--vine-x", (dx * 8).toFixed(1) + "px");
        heroVine.style.setProperty("--vine-rotate", (dx * 1.2).toFixed(2) + "deg");
      }
    });

    heroStage.addEventListener("pointerleave", function () {
      heroImage.style.setProperty("--image-x", "0px");
      heroVine && heroVine.style.setProperty("--vine-x", "0px");
      heroVine && heroVine.style.setProperty("--vine-rotate", "0deg");
      requestMotionUpdate();
    });
  }

  function changePreview(row) {
    if (!notePreview || !row) return;
    var source = row.getAttribute("data-preview");
    var alt = row.getAttribute("data-preview-alt") || "Selected note preview";
    if (!source || notePreview.getAttribute("src") === source) return;

    notePreview.classList.add("is-changing");
    window.setTimeout(function () {
      notePreview.src = source;
      notePreview.alt = alt;
      notePreview.addEventListener("load", function onLoad() {
        notePreview.removeEventListener("load", onLoad);
        notePreview.classList.remove("is-changing");
      });
    }, reducedMotion ? 0 : 120);
  }

  noteRows.forEach(function (row) {
    var source = row.getAttribute("data-preview");
    if (source) {
      var preload = new Image();
      preload.src = source;
    }
    row.addEventListener("mouseenter", function () { changePreview(row); });
    row.addEventListener("focus", function () { changePreview(row); });
  });

  if ("IntersectionObserver" in window && !reducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealNodes.forEach(function (node, index) {
      node.style.transitionDelay = Math.min(index * 70, 280) + "ms";
      observer.observe(node);
    });
  } else {
    revealNodes.forEach(function (node) { node.classList.add("is-visible"); });
  }
})();
