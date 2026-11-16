(function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.site-header__nav');
  if (!burger || !nav) return;

  function setOpen(open) {
    burger.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  }

  burger.addEventListener('click', function () {
    setOpen(!burger.classList.contains('is-open'));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });

  const desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();
