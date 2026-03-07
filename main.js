document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Add glassmorphic effect to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animation for all sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el, index) => {
        // Set initial state for elements that will be revealed
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';

        // slight stagger for items in a grid
        const delay = el.classList.contains('feature-card') || el.classList.contains('pricing-card')
            ? (index % 3) * 0.15
            : 0;

        el.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}s`;
        observer.observe(el);
    });
});
