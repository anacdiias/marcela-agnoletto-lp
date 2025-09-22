// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initWhatsAppLinks();
    initLoadingAnimations();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger lines
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Reset hamburger animation
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('features-grid') || 
                    entry.target.classList.contains('steps-grid') || 
                    entry.target.classList.contains('plans-grid')) {
                    
                    const items = entry.target.querySelectorAll('.feature-card, .step-card, .plan-card');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step-card, .plan-card, .testimonial-card, .section-header');
    elementsToAnimate.forEach(el => {
        // Set initial state for animation
        if (el.classList.contains('feature-card') || 
            el.classList.contains('step-card') || 
            el.classList.contains('plan-card')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
        }
        
        observer.observe(el);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// WhatsApp Links Configuration
function initWhatsAppLinks() {
    // You can customize the phone number here
    const phoneNumber = '5511999999999'; // Replace with actual phone number
    
    // Update all WhatsApp links with the correct number
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${phoneNumber}`);
        link.setAttribute('href', newHref);
    });
    
    // Add click tracking for analytics (optional)
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track WhatsApp clicks (you can integrate with Google Analytics here)
            console.log('WhatsApp link clicked:', this.getAttribute('href'));
        });
    });
}

// Loading Animations
function initLoadingAnimations() {
    // Add loading class to elements
    const elementsToLoad = document.querySelectorAll('.hero-content > *, .section-header, .feature-card, .step-card, .plan-card');
    
    elementsToLoad.forEach((el, index) => {
        el.classList.add('loading');
        
        // Stagger the loading animation
        setTimeout(() => {
            el.classList.add('loaded');
        }, index * 100);
    });
}

// Counter Animation for Numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Form Validation (if you add forms later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Testimonial Carousel (if you want to add more testimonials)
function initTestimonialCarousel() {
    const testimonialCard = document.querySelector('.testimonial-card');
    const testimonials = [
        {
            name: "Rafaela Costa",
            period: "Transformação em 3 meses",
            rating: "★★★★★",
            text: "O feedback constante e os ajustes me ajudaram a manter o foco. Melhor investimento que fiz para minha saúde!"
        },
        {
            name: "Mariana Silva",
            period: "Transformação em 2 meses",
            rating: "★★★★★",
            text: "A Marcela é incrível! O suporte via WhatsApp é fundamental para manter a motivação. Recomendo muito!"
        },
        {
            name: "Ana Paula",
            period: "Transformação em 4 meses",
            rating: "★★★★★",
            text: "Treinos personalizados que realmente funcionam. Consegui alcançar todos os meus objetivos!"
        }
    ];
    
    let currentIndex = 0;
    
    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        const content = testimonialCard.querySelector('.testimonial-content');
        
        content.innerHTML = `
            <div class="testimonial-avatar">
                <img src="img/container.jpg" alt="${testimonial.name}">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.period}</p>
                </div>
            </div>
            <div class="testimonial-rating">
                <span class="stars">${testimonial.rating}</span>
            </div>
            <blockquote>${testimonial.text}</blockquote>
        `;
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
}

// Initialize testimonial carousel (uncomment if you want multiple testimonials)
// initTestimonialCarousel();

// Add CSS for header scroll effect
const style = document.createElement('style');
style.textContent = `
    .header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .header.scrolled {
        background: rgba(0, 0, 0, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loading {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .loading.loaded {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Add error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Console message for developers
console.log('%c🚀 Landing Page Marcela Agnoletto', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript puro', 'color: #666; font-size: 12px;');
