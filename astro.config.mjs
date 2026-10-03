import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diquepiscuyaco.com',
  // Consistently emit clean URLs without trailing slash (canonical = /es, /en, …).
  // /es/ → /es etc. is handled by public/_redirects on Cloudflare Pages.
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/es',
  },
  integrations: [
    sitemap({
      // Keep low-value legal pages out of the sitemap so indexing signals
      // stay concentrated on the guide content.
      filter: (page) =>
        !['/privacy', '/terms', '/cookies'].includes(page),
      // NOTE: hreflang alternates are provided via HTML <link> tags in
      // BaseLayout (per-page, correct for both the 4-locale homepage and the
      // Spanish-only cluster pages). We deliberately do NOT use the sitemap
      // `i18n` option here, because it would otherwise emit hreflang alternates
      // for the Spanish-only subpages pointing to non-existent /en|/zh|/it URLs.
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
