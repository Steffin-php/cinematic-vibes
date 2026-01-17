document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('bg');
    
    // Calculate mouse position relative to center
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    // Apply smooth parallax shift to the background image
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

// Simple reveal animation on load
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});
