document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.screen-block'));
    const params = new URLSearchParams(window.location.search);
    const singleScreenId = params.get('screen');

    if (singleScreenId) {
        document.body.classList.add('single-screen');
        cards.forEach((card) => {
            card.hidden = card.id !== singleScreenId;
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.04}s, transform 0.5s ease ${index * 0.04}s`;
        observer.observe(card);
    });
});
