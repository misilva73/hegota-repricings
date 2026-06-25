// @ts-check
import { defineConfig } from 'astro/config';

// The site is deployed to GitHub Pages at:
//   https://misilva73.github.io/hegota-repricings
// `site` + `base` make absolute links, the sitemap, and asset URLs resolve
// correctly under the /hegota-repricings/ sub-path.
export default defineConfig({
  site: 'https://misilva73.github.io',
  base: '/hegota-repricings',
  trailingSlash: 'ignore',
});
