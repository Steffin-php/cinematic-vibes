window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.padding = '10px 5%';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)';
        navbar.style.padding = '15px 5%';
    }
});
