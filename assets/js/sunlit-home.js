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

  function setupLeafTrail() {
    var finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion || !finePointer.matches) return;

    var leafIcons = [
      "fa-solid fa-leaf",
      "fa-solid fa-seedling",
      "fa-solid fa-clover",
      "fa-solid fa-spa"
    ];
    var leafColors = ["#70885b", "#8ca36b", "#a6b47a", "#b8943e", "#5e754d"];
    var activeLeaves = new Set();
    var lastX = null;
    var lastY = null;
    var lastSpawnTime = 0;
    var maxLeaves = 48;
    var minDistance = 9;
    var minInterval = 22;

    function removeLeaf(leaf) {
      if (!leaf) return;
      activeLeaves.delete(leaf);
      leaf.remove();
    }

    function createLeaf(x, y, directionX, directionY) {
      if (activeLeaves.size >= maxLeaves) {
        removeLeaf(activeLeaves.values().next().value);
      }

      var leaf = document.createElement("i");
      var iconIndex = Math.floor(Math.random() * leafIcons.length);
      var size = 11 + Math.random() * 12;
      var sideDrift = (Math.random() - 0.5) * 34;
      var fall = 28 + Math.random() * 42;
      var pathLength = Math.hypot(directionX, directionY) || 1;
      var normalX = -directionY / pathLength;
      var normalY = directionX / pathLength;
      var driftX = normalX * sideDrift - directionX * 0.08;
      var driftY = normalY * sideDrift * 0.3 + fall;
      var startRotation = Math.round(Math.random() * 120 - 60);
      var endRotation = startRotation + Math.round((Math.random() < 0.5 ? -1 : 1) * (90 + Math.random() * 210));
      var duration = Math.round(1050 + Math.random() * 650);

      leaf.className = "sunlit-cursor-leaf " + leafIcons[iconIndex];
      leaf.setAttribute("aria-hidden", "true");
      leaf.dataset.leafShape = String(iconIndex + 1);
      leaf.style.left = x.toFixed(1) + "px";
      leaf.style.top = y.toFixed(1) + "px";
      leaf.style.fontSize = size.toFixed(1) + "px";
      leaf.style.color = leafColors[Math.floor(Math.random() * leafColors.length)];
      leaf.style.setProperty("--leaf-drift-x", driftX.toFixed(1) + "px");
      leaf.style.setProperty("--leaf-drift-y", driftY.toFixed(1) + "px");
      leaf.style.setProperty("--leaf-drift-x-mid", (driftX * 0.42).toFixed(1) + "px");
      leaf.style.setProperty("--leaf-drift-y-mid", (driftY * 0.34).toFixed(1) + "px");
      leaf.style.setProperty("--leaf-rotate-start", startRotation + "deg");
      leaf.style.setProperty("--leaf-rotate-mid", Math.round((startRotation + endRotation) / 2) + "deg");
      leaf.style.setProperty("--leaf-rotate-end", endRotation + "deg");
      leaf.style.setProperty("--leaf-duration", duration + "ms");

      document.body.appendChild(leaf);
      activeLeaves.add(leaf);
      leaf.addEventListener("animationend", function () { removeLeaf(leaf); }, { once: true });
      window.setTimeout(function () { removeLeaf(leaf); }, duration + 120);
    }

    function spawnAlongPath(event) {
      if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      var now = performance.now();
      if (lastX === null || lastY === null) {
        lastX = event.clientX;
        lastY = event.clientY;
        return;
      }

      var dx = event.clientX - lastX;
      var dy = event.clientY - lastY;
      var distance = Math.hypot(dx, dy);
      if (distance < minDistance || now - lastSpawnTime < minInterval) return;

      var count = Math.min(4, Math.max(1, Math.floor(distance / 18)));
      for (var index = 1; index <= count; index += 1) {
        var progress = index / count;
        createLeaf(
          lastX + dx * progress + (Math.random() - 0.5) * 6,
          lastY + dy * progress + (Math.random() - 0.5) * 6,
          dx,
          dy
        );
      }

      lastX = event.clientX;
      lastY = event.clientY;
      lastSpawnTime = now;
    }

    document.documentElement.dataset.leafTrail = "active";
    document.addEventListener("pointermove", spawnAlongPath, { passive: true });
    document.addEventListener("pointerleave", function () {
      lastX = null;
      lastY = null;
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "hidden") return;
      activeLeaves.forEach(removeLeaf);
      lastX = null;
      lastY = null;
    });
  }

  root.classList.add("motion-ready");
  setupLeafTrail();
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
