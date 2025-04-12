# 🛠️ Developer Notes – Portfolio by Cevher Dogan

This file provides context for developers who may be running, modifying, or deploying the portfolio.

---

## 📦 Dependency Management

### ✅ Check In `package-lock.json`

- Ensures **consistent dependency resolution** across machines.
- Required for **reliable Vercel and CI/CD builds**.
- Speeds up `npm install` by avoiding version re-resolution.

---

## 🔧 Node Environment

- Node.js version: **>=16**
- Package Manager: **npm** (Yarn can be added if needed)

---

## 🔌 Optional Dependencies to Add

| Feature           | Suggestion                   |
| ----------------- | ---------------------------- |
| Animations        | `framer-motion`              |
| Fonts             | `@next/font` or Google Fonts |
| SEO customization | `next-seo` (optional)        |

---

## 🧪 Dev Setup Tips

```bash
npm install
npm run dev
```

This will launch the site at `http://localhost:3000`.

---

## Add a domain

```bash
open https://vercel.com/cevhers-projects/cevherdogan-com/settings/domains
```

---

## 🌐 Deployment Notes

- Ideal for Vercel with GitHub integration
- Custom domain support
- GitHub Pages fallback optional
