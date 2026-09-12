/* Mychelin — main.js
   Minimal, no dependencies. Progressive enhancement only:
   the site works fully with JavaScript disabled. */

(function () {
  'use strict';

  // Smooth-scroll fallback for older browsers (native via CSS on modern ones)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
      }
    });
  });

  // Header scroll effect - glassmorphism transition
  var header = document.querySelector('.site-header');
  if (header) {
    var headerInner = header.querySelector('.header-inner');
    var lastScrollY = window.scrollY;
    var ticking = false;

    function onScroll() {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (lastScrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll reveal animation (IntersectionObserver)
  var revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Respect prefers-reduced-motion
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition', '0.01ms');
  }

})();