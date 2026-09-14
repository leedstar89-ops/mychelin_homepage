/* Mychelin — main.js
   Vanilla JS, zero dependencies. Progressive enhancement:
   the site works fully with JavaScript disabled. */

(function () {
  'use strict';

  /* ── Smooth scroll for hash links ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
        // Close mobile nav if present
        var nav = document.querySelector('.site-nav');
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
        }
      }
    });
  });

  /* ── Header scroll effect ─────────────────────────────────── */
  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial state
  }

  /* ── Scroll-reveal (IntersectionObserver) ──────────────────── */
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Respect prefers-reduced-motion ───────────────────────── */
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyReducedMotion(m) {
    if (m.matches) {
      document.documentElement.style.setProperty('--transition', '0.01ms');
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  applyReducedMotion(mq);
  mq.addEventListener('change', applyReducedMotion);
})();
