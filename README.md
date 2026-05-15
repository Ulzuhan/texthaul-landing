# TextHaul Landing Page

Public landing page and privacy policy for [TextHaul](https://github.com/YOUR_USERNAME/text-haul) — a Chrome Extension that captures screenshots and extracts text with OCR.

## Live Site

Hosted on **GitHub Pages** at `https://<username>.github.io/texthaul-landing/`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page (hero, features, how-it-works, privacy, FAQ, CTA) |
| `privacy.html` | Privacy policy (required for Chrome Web Store) |
| `.nojekyll` | Disables Jekyll processing for clean static serving |
| `CNAME` | Custom domain configuration (optional) |

## Tech

- **Tailwind CSS** via CDN — zero build step
- **Vanilla HTML/JS** — no frameworks, fast loading
- **Dark mode** — auto-detects system preference + manual toggle
- **Responsive** — mobile, tablet, desktop

## Setup

1. Push this repo to GitHub (can be **public** or **private** — GitHub Pages works with both)
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)` folder
4. Site goes live

## Custom Domain (Optional)

1. Buy a domain (e.g., `texthaul.app`)
2. Uncomment the domain in `CNAME`
3. Add DNS records pointing to GitHub Pages
4. Enable HTTPS in repository settings

## Post-Publication Checklist

- [ ] Replace `#` CTA links in `index.html` with your actual Chrome Web Store URL
- [ ] Update GitHub repository link in footer
- [ ] Add real screenshots to replace the CSS mockup
- [ ] Set up custom domain (optional)

## License

MIT License — feel free to use this landing page template for your own projects.
