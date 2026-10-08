"use strict";
const preview = document.querySelector('.image-preview');
const previewImage = preview.querySelector('img');
const previewCaption = preview.querySelector('p');
const closeButton = preview.querySelector('.preview-close');
let lastTrigger;
const text = (tag, value, className) => {
  const node = document.createElement(tag);
  node.textContent = value;
  if (className) node.className = className;
  return node;
};
function openPreview(button, work) {
  lastTrigger = button;
  previewImage.src = workImageURL(work.image);
  previewImage.alt = work.alt || work.title || UI_TEXT.artwork;
  previewCaption.textContent = [work.title, work.category, work.period, work.year, work.material, work.duration, work.theme ? `${SITE_LANGUAGE === 'ch' ? '题目' : 'テーマ'}：${work.theme}` : '', work.description ? '\n' + work.description : ''].filter(Boolean).join('\n');
  preview.inert = false;
  preview.setAttribute('aria-hidden', 'false');
  document.body.classList.add('preview-active');
  document.querySelector('main').inert = true;
  closeButton.focus();
}
function hidePreview() {
  if (preview.getAttribute('aria-hidden') === 'true') return;
  preview.setAttribute('aria-hidden', 'true');
  preview.inert = true;
  document.body.classList.remove('preview-active');
  document.querySelector('main').inert = false;
  previewImage.removeAttribute('src');
  lastTrigger?.focus({ preventScroll: true });
}
closeButton.addEventListener('click', hidePreview);
preview.addEventListener('click', event => { if (event.target === preview) hidePreview(); });
window.addEventListener('keydown', event => {
  if (preview.getAttribute('aria-hidden') === 'true') return;
  if (event.key === 'Escape') hidePreview();
  if (event.key === 'Tab') { event.preventDefault(); closeButton.focus(); }
});
let touchStart;
preview.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 ? event.touches[0] : null;
}, { passive: true });
preview.addEventListener('touchend', event => {
  if (!touchStart || event.changedTouches.length !== 1) return;
  const end = event.changedTouches[0];
  if (end.clientX - touchStart.clientX >= 56 && Math.abs(end.clientY - touchStart.clientY) <= 80) hidePreview();
  touchStart = null;
}, { passive: true });

for (const grid of document.querySelectorAll('[data-works]')) {
  const key = grid.dataset.works;
  const works = WORKS[key];
  if (!works.length) {
    const { label, count } = PLACEHOLDERS[key];
    for (let index = 1; index <= count; index++) {
      const figure = document.createElement('figure');
      figure.className = 'development-work';
      const slot = text('div', '', 'development-slot');
      slot.append(text('span', label), text('strong', String(index).padStart(2, '0')));
      figure.append(slot, text('figcaption', UI_TEXT.placeholder));
      grid.append(figure);
    }
    continue;
  }
  for (const item of works) {
    const work = { ...item };
    for (const field of ['title', 'category', 'period', 'year', 'alt', 'material', 'duration', 'theme', 'description']) work[field] = localized(item[field]);
    const figure = document.createElement('figure');
    const button = document.createElement('button');
    button.className = 'gallery-open';
    button.type = 'button';
    button.setAttribute('aria-label', `${UI_TEXT.preview} — ${work.title || work.category || ''}`);
    const image = document.createElement('img');
    image.loading = 'lazy';
    image.decoding = 'async';
    image.alt = work.alt || work.title || UI_TEXT.artwork;
    image.src = workImageURL(work.image);
    image.addEventListener('error', () => {
      button.replaceWith(text('div', UI_TEXT.imageError, 'image-error'));
    }, { once: true });
    button.append(image);
    button.addEventListener('click', () => openPreview(button, work));
    figure.append(button, text('figcaption', [work.title, work.year, work.material, work.duration].filter(Boolean).join(' / ')));
    grid.append(figure);
  }
}

// Original homepage scroll-driven blur and entrance motion, scoped to Support.
const support = document.querySelector('.support-section');
function updateScrollBlur() {
  const start = innerHeight * .92;
  const end = innerHeight * .48;
  const progress = matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : Math.min(1, Math.max(0, (start - support.getBoundingClientRect().top) / (start - end)));
  document.documentElement.style.setProperty('--about-progress', progress.toFixed(3));
}
updateScrollBlur();
window.addEventListener('scroll', updateScrollBlur, { passive: true });
window.addEventListener('resize', updateScrollBlur);

// Official X widget. No API keys, reconstructed post UI or engagement counts.
function initXPost() {
  if (!X_POST_URL.trim()) return;
  const status = document.querySelector('#x-status');
  const fallback = document.querySelector('#x-fallback');
  let url;
  try { url = new URL(X_POST_URL); } catch { status.textContent = 'X POST / URL INVALID'; return; }
  const id = url.pathname.match(/^\/(?:[^/]+|i\/web)\/status\/(\+?\d+)(?:\/|$)/)?.[1];
  if (url.protocol !== 'https:' || !['x.com', 'www.x.com', 'twitter.com', 'www.twitter.com'].includes(url.hostname) || !id || !/^\d+$/.test(id)) {
    status.textContent = 'X POST / URL INVALID'; return;
  }
  fallback.href = url.href;
  fallback.hidden = false;
  status.textContent = 'X POST / LOADING';
  const failure = () => {
    status.hidden = false;
    status.textContent = UI_TEXT.xError;
  };
  const timer = setTimeout(failure, 12000);
  const script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.addEventListener('error', () => { clearTimeout(timer); failure(); });
  script.addEventListener('load', async () => {
    try {
      const widget = await window.twttr.widgets.createTweet(id, document.querySelector('#x-embed'), { dnt: true, align: 'center', theme: 'dark' });
      clearTimeout(timer);
      if (widget) status.hidden = true;
      else failure();
    } catch { clearTimeout(timer); failure(); }
  });
  document.head.append(script);
}
initXPost();
