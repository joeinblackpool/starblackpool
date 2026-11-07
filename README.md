# The Star, Blackpool

Website for The Star, 29-31 Bond Street, Blackpool FY4 1BQ.

One Cloudflare Worker serves https://starblackpool.co.uk. starblackpool.com, starblackpool.uk
and every www. address 301-redirect to it, so all three domains open exactly the same site
without Google treating them as duplicate content.

- `src/index.js` – the whole site (pages, sitemap, robots.txt, llms.txt, JSON-LD, redirects)
- `public/` – share image and icons
- Deploy: `npx wrangler deploy` (or connect this repo in Cloudflare Workers Builds)
