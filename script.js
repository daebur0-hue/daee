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
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
    });
});

sections.forEach(section => observer.observe(section));
// Touch-friendly scroll
document.documentElement.style.scrollBehavior = 'smooth';

// Disable hover on touch devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.section-card').forEach(card => {
        card.style.transition = 'transform 0.3s';
    });
}
// Mouse glow orb
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// GSAP example (add <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script> in head)
gsap.from(".glitch", {duration: 1.5, y: 100, opacity: 0, ease: "bounce.out"});

// Scroll trigger magic for cards
document.querySelectorAll('.section-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: card,
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1
    });
});
const knowledge = {
  "what's your name": "Da'Var Burton",
  "who are you": "Da'Var Burton",
  "when were you born": "2008",
  "how old are you": "Born in 2008.",
  "how many kids do you have": "0",
  "how many bodies do you have": "0",
  "how many siblings do you have": "11",
  "how much money do you have": "$15,432",
  "are you gay": "No.",
  "who are you": "A smart, kind, loving person who values trust."
};
