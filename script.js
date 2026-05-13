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

    // Fetch Medium blog posts dynamically
    fetchMediumPosts();
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
// FETCH MEDIUM BLOG POSTS DYNAMICALLY
// =============================================

async function fetchMediumPosts() {
    try {
        // Using RSS2JSON API to fetch Medium posts (handles CORS)
        const mediumUsername = 'jaswant.vision';
        const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            // Get the blog grid container
            const blogGrid = document.querySelector('.blog-grid');
            if (!blogGrid) return;

            // Clear existing blog cards
            blogGrid.innerHTML = '';

            // Get first 3 posts
            const posts = data.items.slice(0, 3);

            // Create blog cards for each post
            posts.forEach(item => {
                // Extract date from the post
                const pubDate = new Date(item.pubDate);
                const formattedDate = pubDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                // Clean up description (remove HTML tags)
                const cleanDescription = item.description
                    .replace(/<[^>]*>/g, '')
                    .substring(0, 150)
                    .trim() + '...';

                // Create blog card HTML
                const blogCard = document.createElement('article');
                blogCard.className = 'blog-card';
                blogCard.innerHTML = `
                    <div class="blog-date">${formattedDate}</div>
                    <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                    <p>${cleanDescription}</p>
                    <a href="${item.link}" class="read-more" target="_blank">Read on Medium →</a>
                `;

                blogGrid.appendChild(blogCard);

                // Observe new blog cards for animation
                observer.observe(blogCard);
            });
        }
    } catch (error) {
        console.log('Could not fetch Medium posts:', error);
        // Fallback - keep existing blog cards if fetch fails
    }
}

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
// DYNAMIC FAVICON GENERATOR
// =============================================

function generateDynamicFavicon() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 64, 64);
    gradient.addColorStop(0, '#0066cc');
    gradient.addColorStop(1, '#0052a3');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    // Add border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 62, 62);

    // Add "JS" text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('JS', 32, 32);

    // Convert canvas to data URL and set as favicon
    const faviconUrl = canvas.toDataURL('image/png');
    
    // Remove old favicon if exists
    const oldFavicon = document.querySelector("link[rel*='icon']");
    if (oldFavicon) {
        oldFavicon.remove();
    }

    // Create and append new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);
}

// Generate favicon on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateDynamicFavicon);
} else {
    generateDynamicFavicon();
}

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
