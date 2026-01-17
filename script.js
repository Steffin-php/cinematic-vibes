// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Simple Entrance Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
});

// 3. Search Bar Interaction
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.borderColor = '#e50914';
});
searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.borderColor = 'rgba(255,255,255,0.1)';
});
