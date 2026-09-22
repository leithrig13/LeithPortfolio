/* Scroll reveals, nav shadow and page transitions. Skipped when the visitor prefers reduced motion. */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const root = document.documentElement;

  // Reveal on scroll
  const targets = document.querySelectorAll(
    "#work .sec-head, .stone-top, .hero-mid, .hero-bottom, .sheet, .empty, .about > div, " +
    "#credentials .sec-head, .credentials > div, " +
    ".back, .p-head, .results, .case section, .gallery figure, #project > .btns, .next"
  );
  targets.forEach(el => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      let i = 0;
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.setProperty("--d", Math.min(i++, 5) * 0.08 + "s");
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add("in"));
  }

  // Nav shadow once scrolled
  const nav = document.querySelector("nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Page transition: fade out, then follow the link
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if ((a.target && a.target !== "_self") || a.hasAttribute("download")) return;
    if (!/^(https?|file):$/.test(a.protocol) || a.origin !== location.origin) return;
    if (a.pathname === location.pathname && a.search === location.search) return; // same-page anchor: smooth scroll handles it
    e.preventDefault();
    root.classList.add("leaving");
    setTimeout(() => { location.href = a.href; }, 260);
    setTimeout(() => root.classList.remove("leaving"), 1500);
  });
  addEventListener("pageshow", e => { if (e.persisted) root.classList.remove("leaving"); });
})();
