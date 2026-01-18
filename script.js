// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Active navigation based on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize Swiper for research slider
const researchSwiper = new Swiper('.research-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// Load publications from JSON
async function loadPublications() {
    try {
        const response = await fetch('data/publications.json');
        const publications = await response.json();
        displayPublications(publications.slice(0, 6)); // Show first 6 publications
    } catch (error) {
        console.error('Error loading publications:', error);
        displaySamplePublications();
    }
}

function displayPublications(publications) {
    const container = document.getElementById('publications-container');
    container.innerHTML = '';
    
    publications.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'publication-card fade-in';
        card.innerHTML = `
            <div class="publication-header">
                <span class="publication-year">${pub.year}</span>
                <span class="journal-impact">IF: ${pub.impactFactor}</span>
            </div>
            <span class="publication-journal">${pub.journal}</span>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-abstract">${pub.abstract.substring(0, 150)}...</p>
            <div class="publication-metrics">
                <div class="metric">
                    <i class="fas fa-quote-right"></i>
                    <span>${pub.citations} citations</span>
                </div>
                <div class="metric">
                    <i class="fas fa-external-link-alt"></i>
                    <a href="${pub.doi}" target="_blank">DOI</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function displaySamplePublications() {
    const samplePublications = [
        {
            year: '2023',
            journal: 'Nature Communications',
            title: 'Genomic surveillance reveals early detection of SARS-CoV-2 variants in Nigeria',
            authors: 'Caroline Afolabi et al.',
            citations: 45,
            impactFactor: '17.69',
            doi: 'https://doi.org/10.1038/s41467-023-XXXXX'
        },
        {
            year: '2022',
            journal: 'The Lancet Microbe',
            title: 'Antimicrobial resistance patterns in clinical isolates from West Africa',
            authors: 'Caroline Afolabi et al.',
            citations: 32,
            impactFactor: '86.21',
            doi: 'https://doi.org/10.1016/S2666-5247(22)XXXXX'
        }
    ];
    displayPublications(samplePublications);
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // In production, replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success message
            alert('Thank you for your message! I will get back to you within 24-48 hours.');
            this.reset();
            
        } catch (error) {
            alert('There was an error sending your message. Please try again.');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load publications
    loadPublications();
    
    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Update copyright year
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});

// Dynamic skill tags animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
});