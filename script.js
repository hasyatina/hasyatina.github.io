(function () {
  "use strict";

  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Without IntersectionObserver, or with reduced motion on, leave everything
  // in its default visible state and do nothing else.
  if (reduced || !("IntersectionObserver" in window)) return;

  // Only now do we opt into hiding content, so a JS failure above can never
  // leave the page blank.
  document.body.classList.add("js-reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
