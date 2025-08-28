// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Cerrar navbar en móviles después de hacer clic
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 41, 59, 0.98)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.95)';
        navbar.style.padding = '15px 0';
    }
}

// Validación y envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar campos obligatorios
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    let isValid = true;
    
    // Validar nombre
    if (!nombre.value.trim()) {
        nombre.classList.add('is-invalid');
        isValid = false;
    } else {
        nombre.classList.remove('is-invalid');
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }
    
    if (!isValid) {
        // Mostrar mensaje de error general
        alert('Por favor, completa correctamente los campos obligatorios.');
        return;
    }
    
    // Si la validación es exitosa
    this.classList.add('was-validated');
    
    // Simulación de envío (puedes reemplazar por AJAX o integración real)
    alert('¡Gracias por registrarte, ' + nombre.value + '! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar formulario
    this.reset();
    this.classList.remove('was-validated');
});

// Event listeners
window.addEventListener('scroll', () => {
    animateOnScroll();
    handleNavbarScroll();
});

window.addEventListener('load', () => {
    animateOnScroll();
    handleNavbarScroll();
});

// Inicializar tooltips de Bootstrap
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});