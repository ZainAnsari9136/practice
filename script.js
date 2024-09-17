const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle navigation menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
