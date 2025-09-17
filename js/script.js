document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navUl = document.querySelector('.nav ul');

  mobileToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Плавный скролл при клике на навигацию
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scroll({
          top: targetEl.offsetTop - 70, // учитываем высоту хедера
          behavior: 'smooth'
        });
      }
    });
  });
});
