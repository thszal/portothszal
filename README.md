# Mayzal Pratama — Portfolio

Minimal, dark, editorial portfolio site. Next.js + Tailwind CSS.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you should see the site with placeholder
sample images from Cloudinary's demo account.

## 2. Swap in your own photos (Cloudinary)

1. Go to https://cloudinary.com and create a free account.
2. Upload your photos from the Media Library (drag and drop works).
3. Click a photo → copy its URL. It looks like:
   `https://res.cloudinary.com/<your-cloud-name>/image/upload/v1234567890/filename.jpg`
4. Open `data/photos.js` in this project.
5. Replace the `src` values with your Cloudinary URLs, and write a real
   `alt` description for each (this is what shows if the image fails to
   load, and what screen readers read aloud).
6. Set `width`/`height` to match the original photo's pixel dimensions —
   Cloudinary shows these on the photo's detail page. This stops the page
   from jumping around while images load.
7. `heroPhoto` is the one image behind the homepage headline — pick
   something that still reads well when mostly covered by text.
8. `portrait` is optional (About section). Set it to `null` in
   `data/photos.js` if you'd rather not show a portrait.

You can add or remove entries in the `photos` array freely — the gallery
grid and the numbered frames (001, 002, ...) update automatically.

## 3. Put your real Instagram link in

Open `components/Footer.js` and replace both the `href` and the visible
`@your-handle` text with your actual Instagram username.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Then create a new empty repository on https://github.com/new (don't
initialize it with a README), and follow the "push an existing
repository" instructions it shows you — usually:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## 5. Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click "Add New Project" and import the repository you just pushed.
3. Leave all settings as default (Vercel auto-detects Next.js) and click
   Deploy.
4. You'll get a live `.vercel.app` URL. You can attach a custom domain
   later from the project's Settings → Domains tab if you get one.

From now on, any time you `git push` (e.g. after swapping photos in
`data/photos.js`), Vercel redeploys automatically — no extra steps.

## Project structure

```
app/
  layout.js       — fonts, page metadata
  page.js          — assembles the homepage sections
  globals.css      — base styles, film-grain texture
components/
  Hero.js          — headline + hero photo
  About.js         — bio, principle, portrait
  Gallery.js        — contact-sheet grid + lightbox
  Footer.js        — Instagram link, contact
data/
  photos.js        — ← the file you edit to change photos
```
