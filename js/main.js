// ===== LI Tech Support - Main JavaScript =====

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const headerCta = document.querySelector('.header-cta');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isOpen);
      if (mainNav) mainNav.classList.toggle('mobile-open');
      if (headerCta) headerCta.classList.toggle('mobile-open');
      document.body.classList.toggle('menu-open');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Simple form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // In production, this would submit to your backend
      alert('Thank you! We will be in touch within 1 business day.');
      contactForm.reset();
    });
  }

  // Intersection Observer for animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .why-item, .area-card').forEach(el => {
    observer.observe(el);
  });
});
