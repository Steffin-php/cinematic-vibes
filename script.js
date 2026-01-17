window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#0a0a0b';
        navbar.style.padding = '12px 5%';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
        navbar.style.padding = '20px 5%';
    }
});
