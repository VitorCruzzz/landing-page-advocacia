// Número oficial: somente dígitos, incluindo DDI e DDD. Vazio = demonstração.
const whatsapp = '';
const link = document.querySelector('#whatsapp');
const dialog = document.querySelector('#whatsapp-demo');
const loading = document.querySelector('#wa-loading');
const ready = document.querySelector('#wa-ready');
let timer;
if (/^[1-9]\d{9,14}$/.test(whatsapp)) {
  const message = 'Olá, gostaria de informações sobre o atendimento jurídico.';
  link.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.removeAttribute('aria-haspopup');
} else if (typeof dialog.showModal === 'function') {
  link.addEventListener('click', event => {
    event.preventDefault();
    if (dialog.open) return;
    clearTimeout(timer);
    loading.hidden = false;
    ready.hidden = true;
    dialog.setAttribute('aria-labelledby', 'wa-title');
    dialog.showModal();
    timer = setTimeout(() => {
      if (!dialog.open) return;
      loading.hidden = true;
      ready.hidden = false;
      const title = ready.querySelector('h2');
      title.id = 'wa-ready-title';
      dialog.setAttribute('aria-labelledby', title.id);
    }, 1600);
  });
  dialog.querySelector('.wa-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.wa-return').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { clearTimeout(timer); link.focus(); });
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
}
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
