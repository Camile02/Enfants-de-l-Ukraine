document.addEventListener('DOMContentLoaded', () => {
  const donateMenu = document.querySelector('.donate-menu');
  const donateBtn = document.querySelector('.donate-btn');

  if (donateBtn && donateMenu) {
    donateBtn.addEventListener('click', () => {
      const isOpen = donateMenu.classList.toggle('open');
      donateBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!donateMenu.contains(event.target)) {
        donateMenu.classList.remove('open');
        donateBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
