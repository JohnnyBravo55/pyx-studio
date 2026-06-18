# Pyx Studio

Static marketing site for Pyx Studio, built with [Astro](https://astro.build).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build

```bash
npm run build
```

The static output is written to the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Updating the site

Most copy lives in one file: [`src/config/site.ts`](src/config/site.ts) (site name, tagline, email, vision, products).

After editing:

```bash
npm run dev      # preview changes locally
git add .
git commit -m "Update site copy"
git push
```

Cloudflare Pages rebuilds automatically on every push to the default branch.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the [Cloudflare Pages dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the `pyx-studio` repository.
4. Configure the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 (or latest LTS)
5. Deploy. Cloudflare assigns a `*.pages.dev` URL.
6. Optional: add a custom domain under **Custom domains**.

The site URL is configured in `astro.config.mjs` (`site` field). Update it when you add a custom domain.
