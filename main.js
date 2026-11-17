const languageButton = document.getElementById('language-toggle');
let language = 'zh';
try { language = new URLSearchParams(location.search).get('lang') || localStorage.getItem('language') || 'zh'; } catch {}
function setLanguage(next) {
  language = next === 'en' ? 'en' : 'zh';
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-zh][data-en]').forEach(el => { el.textContent = el.dataset[language]; });
  languageButton.textContent = language === 'en' ? '中文' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? '切换至中文' : 'Switch to English');
  document.title = language === 'en' ? 'Zikang Li | Embodied AI & Robotics' : '李子康 · Zikang Li | 具身智能与机器人';
  try { localStorage.setItem('language', language); } catch {}
}
setLanguage(language);
languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
const dialog = document.getElementById('media-dialog');
const content = document.getElementById('media-content');
document.querySelectorAll('[data-image], [data-video]').forEach(button => {
  button.addEventListener('click', () => {
    content.replaceChildren();
    document.getElementById('media-title').textContent = button.dataset.title;
    document.querySelector('.dialog-hint').hidden = Boolean(button.dataset.video);
    if (button.dataset.video) {
      const video = document.createElement('video');
      video.src = button.dataset.video; video.controls = true; video.playsInline = true; video.preload = 'metadata';
      content.append(video);
    } else {
      const link = document.createElement('a'); link.href = button.dataset.image; link.target = '_blank'; link.rel = 'noopener noreferrer';
      const image = document.createElement('img'); image.src = button.dataset.image; image.alt = button.dataset.title + ' — architecture overview';
      link.append(image); content.append(link);
    }
    dialog.showModal(); document.body.classList.add('modal-open');
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { if (dialog.open) return; const video = content.querySelector('video'); if (video) video.pause(); content.replaceChildren(); document.body.classList.remove('modal-open'); });
