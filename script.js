const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  nav.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const salonVideo = document.querySelector('#salon-video');
const filmPlay = document.querySelector('.film-play');
const filmError = document.querySelector('.film-error');
if (salonVideo && filmPlay) {
  filmPlay.hidden = false;
  filmPlay.addEventListener('click', async () => {
    filmPlay.hidden = true;
    salonVideo.focus();
    try {
      await salonVideo.play();
    } catch {
      filmError.hidden = false;
    }
  });
  salonVideo.addEventListener('play', () => {
    filmPlay.hidden = true;
    filmError.hidden = true;
  });
  salonVideo.addEventListener('error', () => {
    filmPlay.hidden = true;
    filmError.hidden = false;
  });
}
