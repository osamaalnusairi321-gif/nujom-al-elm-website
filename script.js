(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const english = document.documentElement.lang === 'en';
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', english ? 'Open menu' : 'فتح القائمة');
  };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('open', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? (english ? 'Close menu' : 'إغلاق القائمة') : (english ? 'Open menu' : 'فتح القائمة'));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  const languageLink = document.querySelector('.language');
  languageLink.addEventListener('click', () => {
    const section = window.location.hash;
    if (section) languageLink.href = languageLink.href.split('#')[0] + section;
  });
  const subject = english ? 'Print enquiry | Nujom Al Elm' : 'استفسار عن طباعة | نجوم العلم';
  document.querySelectorAll('.email-link').forEach(link => {
    link.href = 'mailto:Cs6780056@gmail.com?subject=' + encodeURIComponent(subject);
  });
})();
