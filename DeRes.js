// Mostra navbar com animação
window.addEventListener('load', () => {
    // Fade-in da navbar
    document.querySelector('header').classList.add('visible');
  
    // Fade-in das seções (formulários)
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('visible');
      }, index * 300);
    });
  });
  