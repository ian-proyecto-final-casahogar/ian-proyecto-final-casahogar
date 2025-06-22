document.addEventListener('DOMContentLoaded', function() {
  // Resaltar enlace activo
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});