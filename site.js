const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
const year = document.querySelector('[data-year]');
const themeColor = document.querySelector('meta[name="theme-color"]');

function preferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

const sunIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>`;
const moonIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.7 8.7 0 1 0 20 15.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/></svg>`;

function applyTheme(theme) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0f1527' : '#f6f7fb');
  if (toggle) {
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.innerHTML = isDark ? sunIcon : moonIcon;
  }
}

applyTheme(preferredTheme());
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}
if (year) year.textContent = new Date().getFullYear();
