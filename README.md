# Hegota Repricings

A small, pretty website explaining the gas-repricing EIPs that let Ethereum scale to
**450M gas** in the Hegota upgrade.

🔗 **Live site:** <https://misilva73.github.io/hegota-repricings/>

It covers:

1. **The anchor analysis** — using the 21,000-gas ETH transfer as the fixed reference
   point for scaling execution and bandwidth ([ethresear.ch](https://ethresear.ch/t/scaling-in-hegota-using-the-eth-transfer-to-anchor-execution-and-bandwidth/25232)).
2. **The minimal set** — EIP-8131, EIP-8279, and EIP-8311 — the smallest change that
   safely reaches 450M.
3. **Why not reprice compute** — low leverage: many gas params to retune for only ~10%
   average throughput gain ([fracgas evidence](https://misilva73.github.io/hegota-compute-repricing/fracgas.html)).
4. **EIP-7999** — the comprehensive alternative: more complexity, far more benefits
   ([PR #11835](https://github.com/ethereum/EIPs/pull/11835)).

## Stack

- [Astro](https://astro.build) — static site, content in Markdown.
- Deployed to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`.
- Lives at <https://misilva73.github.io/hegota-repricings/>.

## Editing content

Each EIP is a single Markdown file in [`src/content/eips/`](src/content/eips/). To edit an
EIP, change its file; to add one, drop in a new `.md` with the same front-matter (see
[`src/content.config.ts`](src/content.config.ts) for the schema). The home-page narrative
lives in [`src/pages/index.astro`](src/pages/index.astro).

> ⚠️ **EIP-8311** was not yet published when this was built, so
> [`src/content/eips/8311.md`](src/content/eips/8311.md) carries an inferred description
> and a `needsReview: true` flag (which renders a verify banner). Update it once the spec
> is live.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321/hegota-repricings
npm run build    # build static site into dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds the site and
publishes it to GitHub Pages. **One-time setup:** in the repo settings, go to
**Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

> A Python `.venv/` is also present for any optional analysis/charting scripts; it is not
> used by the website itself.
