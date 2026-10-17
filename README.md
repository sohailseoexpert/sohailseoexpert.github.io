# Sohail SEO Expert: Portfolio Website

Static site (HTML, CSS, JavaScript). No build step. Works on GitHub Pages.

## 1. Replace placeholders
- Open `script.js` and edit the `CONFIG` block at the top: email, WhatsApp number and all social URLs. Links across the site update automatically.
- Case studies: in `index.html` search for `Placeholder` and replace each card with a real, verified project.
- When you have real profile URLs, add them as a `"sameAs"` list inside the JSON-LD block in `index.html`.
- Optional: add `assets/og-image.jpg` (1200x630) and uncomment the `og:image` line in `index.html`.

## 2. Publish on GitHub Pages
1. Create a new public repository on GitHub (any name; use `username.github.io` for a root URL).
2. Upload all files so `index.html` sits in the repository root.
3. Go to Settings > Pages. Under Build and deployment choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
4. After a minute or two the site is live at the URL shown on that page.

## 3. Connect SohailSEOExpert.com
1. In Settings > Pages, type `sohailseoexpert.com` under Custom domain and Save (GitHub creates a `CNAME` file).
2. At your domain registrar add four `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Add a `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`.
3. Wait for DNS to update, then tick "Enforce HTTPS".
4. Check these GitHub IP addresses against GitHub's current docs before use.

## 4. Contact form
The form builds a `mailto:` message, so no backend is needed. To get a real form later, create a free account with a service such as Formspree or Web3Forms, then change the form's `action` to the endpoint they give you and remove the submit handler in `script.js`.

## 5. After launch
Add the site to Google Search Console, submit `sitemap.xml`, and create a Google Business Profile as a service-area business (no public address). Indexing and rankings cannot be guaranteed.
