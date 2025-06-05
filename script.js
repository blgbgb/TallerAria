    document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling;
    const isVisible = text.classList.toggle('hidden-text');
    button.setAttribute('aria-expanded', !isVisible);
    button.textContent = isVisible ? 'Ver más' : 'Ver menos';
  });
});
