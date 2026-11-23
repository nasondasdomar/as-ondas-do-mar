const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('.lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.title = lang === 'gl' ? 'Nas Ondas do Mar | Música, tradición e sentimento' : 'Nas Ondas do Mar | Música, tradición e sentimento';
}
document.querySelectorAll('.lang').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
document.getElementById('year').textContent = new Date().getFullYear();
