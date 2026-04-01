document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('[data-track]');
    const images = Array.from(track.querySelectorAll('img'));
    const dots = Array.from(document.querySelectorAll('[data-dot]'));
    const prevBtn = document.querySelector('[data-prev]');
    const nextBtn = document.querySelector('[data-next]');

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
