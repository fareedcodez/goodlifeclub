/*---------------------------------------------------
# Good Life Club - Main JavaScript File
---------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle navigation bar styles
            if (navToggle.classList.contains('active')) {
                // Change toggle bars to X
                const bars = navToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                // Reset toggle bars
                const bars = navToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Add scrolled class to navbar on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Testimonial Slider
    initTestimonialSlider();
    
    // Animate on scroll initialization is handled in the base.html template
});

// Testimonial Slider Function
function initTestimonialSlider() {
    const testimonials = [
        {
            content: "Good Life Club transformed my business vision into reality. Their expert guidance in sales and marketing strategies helped me increase revenue by 150% in just one year.",
            author: "Sarah Johnson",
            position: "Entrepreneur"
        },
        {
            content: "The leadership training program at Good Life Club was a game-changer for my management approach. I've seen remarkable improvements in team cohesion and productivity.",
            author: "Michael Robertson",
            position: "Chief Operating Officer"
        },
        {
            content: "Their cryptocurrency consulting services provided the clarity I needed to make informed investment decisions. The team's expertise in the digital landscape is truly impressive.",
            author: "David Chen",
            position: "Investor"
        }
    ];
    
    let currentSlide = 0;
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        const testimonialSlide = testimonialSlider.querySelector('.testimonial-slide');
        const dots = testimonialSlider.querySelectorAll('.dot');
        const prevButton = testimonialSlider.querySelector('.testimonial-prev');
        const nextButton = testimonialSlider.querySelector('.testimonial-next');
        
        // Functions to update testimonial content
        function updateTestimonial() {
            const testimonial = testimonials[currentSlide];
            const quote = testimonialSlide.querySelector('p');
            const authorName = testimonialSlide.querySelector('.author-info h4');
            const authorPosition = testimonialSlide.querySelector('.author-info p');
            
            // Fade out
            testimonialSlide.style.opacity = '0';
            
            setTimeout(() => {
                // Update content
                quote.textContent = testimonial.content;
                authorName.textContent = testimonial.author;
                authorPosition.textContent = testimonial.position;
                
                // Update active dot
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Fade in
                testimonialSlide.style.opacity = '1';
            }, 300);
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }
            updateTestimonial();
        }
        
        // Previous slide function
        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = testimonials.length - 1;
            }
            updateTestimonial();
        }
        
        // Event listeners for next and previous buttons
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateTestimonial();
            });
        });
        
        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);
    }
}

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to the server here
            // For this demo, we'll just show a success message
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate network delay
            setTimeout(() => {
                // Display success message
                const formSection = contactForm.closest('.form-section');
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                `;
                
                formSection.innerHTML = '';
                formSection.appendChild(successMessage);
                
                // Reset form (though it's not visible anymore)
                contactForm.reset();
            }, 2000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simulate form submission
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            submitButton.disabled = true;
            
            // Simulate network delay
            setTimeout(() => {
                // Update button text
                submitButton.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                
                // Show success message
                const newsletterContent = document.querySelector('.newsletter-content');
                const successMessage = document.createElement('p');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `Thank you for subscribing! We've sent a confirmation email to <strong>${email}</strong>.`;
                
                newsletterContent.appendChild(successMessage);
                
                // Reset form after a delay
                setTimeout(() => {
                    newsletterForm.reset();
                    submitButton.innerHTML = 'Subscribe';
                    submitButton.disabled = false;
                    
                    // Remove success message after a while
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        setTimeout(() => {
                            successMessage.remove();
                        }, 500);
                    }, 5000);
                }, 3000);
            }, 1500);
        });
    }
});