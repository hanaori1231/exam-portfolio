"use strict";
const SITE_LANGUAGE = document.documentElement.lang === 'ja' ? 'jp' : 'ch';
// Register a detail page only after its HTML exists. Missing translations use home.
// Example: 'works/exam-color-01.html': { ch: '/ch/works/exam-color-01.html', jp: '/jp/works/exam-color-01.html' }
const LANGUAGE_PAGES = { '': { ch: '/ch/', jp: '/jp/' } };
const UI_TEXT = {
  ch: { placeholder: 'DEVELOPMENT PLACEHOLDER / 素材待补充', preview: '预览', artwork: '作品', imageError: 'IMAGE UNAVAILABLE / 图片无法加载', xError: '暂时无法加载，请前往 X 查看。' },
  jp: { placeholder: 'DEVELOPMENT PLACEHOLDER / 作品準備中', preview: 'プレビュー', artwork: '作品', imageError: 'IMAGE UNAVAILABLE / 画像を読み込めません', xError: '投稿を読み込めません。X でご覧ください。' }
}[SITE_LANGUAGE];
// Optional localized metadata: title: { ch: '中文标题', jp: '日本語タイトル' }.
function localized(value) { return value && typeof value === 'object' ? (value[SITE_LANGUAGE] || '') : value; }
function workImageURL(image) { return new URL(image, location.origin + '/').href; }
function updateLanguageLinks() {
  const key = location.pathname.replace(/^\/(ch|jp)\//, '').replace(/^index\.html$/, '');
  let hash = location.hash;
  if (!hash && !key) {
    const sections = [...document.querySelectorAll('main > section[id], main > footer[id]')];
    const current = sections.filter(section => section.getBoundingClientRect().top <= innerHeight * .35).at(-1);
    if (current && current.id !== 'profile') hash = '#' + current.id;
  }
  for (const link of document.querySelectorAll('[data-language]')) {
    const target = link.dataset.language;
    const page = LANGUAGE_PAGES[key]?.[target];
    link.href = (page || LANGUAGE_PAGES[''][target]) + location.search + (page ? hash : '');
  }
}
updateLanguageLinks();
window.addEventListener('hashchange', updateLanguageLinks);
window.addEventListener('scroll', updateLanguageLinks, { passive: true });
window.addEventListener('pageshow', updateLanguageLinks);
