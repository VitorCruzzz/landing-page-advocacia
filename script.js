// Número oficial, somente dígitos, incluindo DDI e DDD. Deixe vazio no protótipo.
const whatsapp = '';
const link = document.querySelector('#whatsapp');
if (/^\d{10,15}$/.test(whatsapp)) link.href = `https://wa.me/${whatsapp}`;
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
