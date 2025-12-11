/**
 * Portfolio V2 - Accordion & Animations
 */

document.addEventListener('DOMContentLoaded', function() {
  initAccordion();
  initScrollReveal();
  initHeroAnimation();
});

/**
 * Accordion Functionality
 */
function initAccordion() {
  const accordions = document.querySelectorAll('.pf-accordion__header');

  accordions.forEach(header => {
    header.addEventListener('click', function() {
      const accordion = this.closest('.pf-accordion');
      const content = accordion.querySelector('.pf-accordion__content');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close all other accordions (optional - remove for multi-open)
      // closeAllAccordions();

      // Toggle current accordion
      if (isExpanded) {
        this.setAttribute('aria-expanded', 'false');
        content.classList.remove('is-open');
      } else {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('is-open');

        // Smooth scroll to accordion
        setTimeout(() => {
          accordion.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    });
  });
}

/**
 * Close all accordions
 */
function closeAllAccordions() {
  const accordions = document.querySelectorAll('.pf-accordion');

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.pf-accordion__header');
    const content = accordion.querySelector('.pf-accordion__content');

    header.setAttribute('aria-expanded', 'false');
    content.classList.remove('is-open');
  });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
  const accordions = document.querySelectorAll('.pf-accordion');

  // Use GSAP ScrollTrigger if available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    accordions.forEach((accordion, index) => {
      gsap.fromTo(accordion,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordion,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Clients animation
    const clients = document.querySelectorAll('.pf-clients__item');
    clients.forEach((client, index) => {
      gsap.fromTo(client,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pf-clients__list',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

  } else {
    // Fallback: Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    accordions.forEach(accordion => {
      observer.observe(accordion);
    });
  }
}

/**
 * Hero Section Animation
 */
function initHeroAnimation() {
  if (typeof gsap === 'undefined') return;

  const logo = document.querySelector('.pf-hero__logo');
  const slogan = document.querySelector('.pf-hero__slogan');
  const scroll = document.querySelector('.pf-hero__scroll');

  gsap.timeline()
    .fromTo(logo,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(slogan,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(scroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );
}

/**
 * Filter by category (optional - for future use)
 */
function filterByCategory(category) {
  const accordions = document.querySelectorAll('.pf-accordion');

  accordions.forEach(accordion => {
    const cat = accordion.dataset.category;

    if (category === 'all' || cat === category) {
      accordion.style.display = 'block';
      gsap.fromTo(accordion,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );
    } else {
      gsap.to(accordion, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          accordion.style.display = 'none';
        }
      });
    }
  });
}
