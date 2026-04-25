document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('[data-track]');
    const dotsContainer = document.querySelector('[data-dots]');
    const images = Array.from(track.querySelectorAll('img'));
    const prevBtn = document.querySelector('[data-prev]');
    const nextBtn = document.querySelector('[data-next]');
    const dots = images.map((_, i) => {
        const dot = document.createElement('button');
        dot.className = i === 0 ? 'dot is-active' : 'dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.dataset.dot = i;
        dotsContainer.appendChild(dot);
        return dot;
    });

    let active = 0;
    let timer;

    const goTo = (index) => {
        active = (index + images.length) % images.length;
        track.style.transform = `translateX(-${active * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    };

    const startAuto = () => {
        clearInterval(timer);
        timer = setInterval(() => goTo(active + 1), 4000);
    };

    prevBtn.addEventListener('click', () => { goTo(active - 1); startAuto(); });
    nextBtn.addEventListener('click', () => { goTo(active + 1); startAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));

    goTo(0);
    startAuto();
});
