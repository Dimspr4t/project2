This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Struktur Branch & App Deployment

- **main** → deploy ke `apps/moneysite`
- **staging** → deploy ke `apps/staging`
- **panel** → deploy ke `apps/panel`

## 2. Pengaturan Cloudflare Pages

Untuk setiap aplikasi, buat satu project Cloudflare Pages:

### Project moneysite
- **Source:** branch `main`
- **Root directory:** `apps/moneysite`

### Project staging
- **Source:** branch `staging`
- **Root directory:** `apps/staging`

### Project admin
- **Source:** branch `panel`
- **Root directory:** `apps/panel`

## 3. Build Settings (untuk setiap project Cloudflare Pages)

- **Build command:**
  ```
  npx turbo run build --filter=<app-name>...
  ```
  Contoh untuk moneysite:
  ```
  npx turbo run build --filter=moneysite...
  ```

- **Root directory:**
  - `apps/moneysite` (untuk moneysite)
  - `apps/staging` (untuk staging)
  - `apps/panel` (untuk admin/panel)

- **Output directory:**
  ```
  .vercel/output/static
  ```
  *(atau sesuai output Next.js/Cloudflare jika menggunakan @cloudflare/next-on-pages)*

## 4. Environment Variable

Pastikan setiap app punya environment variable yang sesuai di Cloudflare Pages dashboard, misal:
- `.env.production` untuk production (moneysite)
- `.env.staging` untuk staging
- `.env` atau `.env.local` untuk development

Setiap variable dapat diatur melalui menu **Environment Variables** di Cloudflare Pages dashboard untuk masing-masing project/app.

---

## 5. Contoh .gitignore (root project)
```
node_modules
.next
out
dist
.vercel
.env
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
```
