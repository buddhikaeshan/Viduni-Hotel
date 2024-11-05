// Get all sections that we want to track
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add scroll event listener
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        // Get the distance from the top of the viewport to the section
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // If we've scrolled past the top of the section (with a 100px offset for better UX)
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    // Special case for home section (when at the top of the page)
    if (pageYOffset < 100) {
        current = 'home';
    }

    // Remove active class from all nav items
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add click event listeners to smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});