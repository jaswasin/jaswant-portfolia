// =============================================
// SMOOTH SCROLLING AND NAVIGATION
// =============================================

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to nav links on scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// =============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for fade-in effect
document.querySelectorAll('.project-card, .experience-item, .achievement-item, .blog-card').forEach(el => {
    observer.observe(el);
});

// =============================================
// SCROLL TO TOP BUTTON
// =============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 12px 15px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: none;
    z-index: 99;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = '#0052a3';
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = '#0066cc';
    scrollToTopBtn.style.transform = 'scale(1)';
});

// =============================================
// CSS FOR FADE-IN ANIMATION
// =============================================

const style = document.createElement('style');
style.textContent = `
    .project-card, .experience-item, .achievement-item, .blog-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links a.active {
        color: #0066cc;
        font-weight: 700;
        border-bottom: 2px solid #0066cc;
    }
`;
document.head.appendChild(style);

// =============================================
// FORM HANDLING (if you add a contact form)
// =============================================

// Example: Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    // You can add form handling logic here
    // For now, this is just a placeholder
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// Uncomment this if you add a contact form to your HTML
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.contact-form');
//     if (form) {
//         form.addEventListener('submit', handleFormSubmit);
//     }
// });
