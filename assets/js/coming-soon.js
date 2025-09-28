// Coming Soon Page JavaScript
$(document).ready(function() {
    'use strict';
    
    // Hide preloader after page load
    $(window).on('load', function() {
        $('#preloader').fadeOut(500);
        $('body').addClass('loaded');
    });
    
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    
    // Parallax effect for floating shapes
    function initParallax() {
        $(window).on('scroll', function() {
            const scrolled = $(window).scrollTop();
            const parallax = $('.floating-shapes');
            const speed = scrolled * 0.5;
            
            parallax.css('transform', 'translateY(' + speed + 'px)');
        });
    }
    
    // Initialize parallax
    initParallax();
    
    // Add typing effect to main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.text('');
        
        function type() {
            if (i < text.length) {
                element.text(element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect after page load
    setTimeout(function() {
        const titleElement = $('.main-title');
        const originalText = titleElement.text();
        typeWriter(titleElement, originalText, 80);
    }, 1000);
    
    // Add pulse animation to maintenance icon
    function pulseIcon() {
        $('.maintenance-icon').addClass('pulse-animation');
        setTimeout(function() {
            $('.maintenance-icon').removeClass('pulse-animation');
        }, 2000);
    }
    
    // Pulse icon every 5 seconds
    setInterval(pulseIcon, 5000);
    
    // Add loading animation to contact link
    $('.contact-link').on('click', function(e) {
        e.preventDefault();
        const originalText = $(this).html();
        $(this).html('<i class="fas fa-spinner fa-spin"></i> Sending...');
        
        setTimeout(function() {
            $('.contact-link').html(originalText);
        }, 2000);
    });
    
    // Add entrance animations
    function initEntranceAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe elements for animation
        $('.logo-section, .coming-soon-content').each(function() {
            observer.observe(this);
        });
    }
    
    // Initialize entrance animations
    initEntranceAnimations();
    
    // Add keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            $('.contact-link').focus().click();
        }
    });
    
    // Add touch gestures for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    $(document).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });
    
    $(document).on('touchend', function(e) {
        touchEndY = e.originalEvent.changedTouches[0].clientY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger refresh
                console.log('Swipe up detected');
            } else {
                // Swipe down
                console.log('Swipe down detected');
            }
        }
    }
    
    // Add performance monitoring
    function logPerformance() {
        if (window.performance && window.performance.timing) {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }
    }
    
    // Log performance after load
    $(window).on('load', logPerformance);
    
    // Add error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });
    
    // Add resize handler for responsive adjustments
    $(window).on('resize', function() {
        // Recalculate positions on resize
        const windowWidth = $(window).width();
        // Responsive adjustments can be added here if needed
    });
    
    // Initialize on resize
    $(window).trigger('resize');
});

// Additional CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .time-update {
        animation: timeUpdate 0.3s ease-in-out;
    }
    
    @keyframes timeUpdate {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .hover-effect {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
    }
    
    .click-animation {
        animation: clickPulse 0.3s ease-in-out;
    }
    
    @keyframes clickPulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
    
    .pulse-animation {
        animation: iconPulse 2s ease-in-out;
    }
    
    @keyframes iconPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease-out;
    }
    
    @keyframes slideInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
`;
document.head.appendChild(style);
