// Animaciones para elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Observar elementos para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observar todas las tarjetas y secciones
    document.querySelectorAll('.card, .explore-card, .team-member, .instrument, .result-item, .proposal-card, .phase').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Resaltar enlace activo en el menú
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
    
    // Efecto hover para tarjetas de equipo
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.member-avatar').style.transform = 'scale(1.1)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.querySelector('.member-avatar').style.transform = 'scale(1)';
        });
    });
});

// Función para mostrar mensaje al enviar formulario (si lo hubiera)
if (document.getElementById('survey-form')) {
    document.getElementById('survey-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por participar en nuestra encuesta! Tus respuestas han sido registradas.');
        this.reset();
    });
}