document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize particles if element exists
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3 },
                size: { value: 3, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: "#ffffff", 
                    opacity: 0.2, 
                    width: 1 
                },
                move: { enable: true, speed: 2, direction: "none" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
    
    // Highlight current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const btnPath = btn.getAttribute('href');
        btn.classList.toggle('active', 
            (currentPath === '/' && btnPath === '/') || 
            (currentPath === '/blog' && btnPath === '/blog')
        );
    });
});
