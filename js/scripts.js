// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    const expanded = navbarMenu.getAttribute('aria-expanded') === 'true' || false;
    navbarMenu.setAttribute('aria-expanded', !expanded);
    navbarToggle.setAttribute('aria-expanded', !expanded);
});

// Modal functionality for case studies
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('aria-controls');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.setAttribute('aria-hidden', 'false');
        }
    });
});

document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});

// Accessibility enhancements
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const button = this.querySelector('.btn');
            button.click();
        }
    });
});

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
