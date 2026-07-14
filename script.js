// Smooth scrolling animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.8s ease-out`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-card').forEach(el => {
    observer.observe(el);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// Add glow effect on mouse move
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});

// Fade in sections as you scroll
const sections = document.querySelectorAll('.fade-in');

sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`;
});

// Interactive hover effects
document.querySelectorAll('.fav-card').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

console.log('🎨 Welcome to Da\'Var Burton\'s Portfolio!');