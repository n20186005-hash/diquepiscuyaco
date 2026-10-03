import type { APIRoute } from 'astro';

const site = (import.meta.env.SITE as string) || 'https://diquepiscuyaco.com';

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\nDisallow: /privacy\nDisallow: /terms\nDisallow: /cookies\n\nSitemap: ${site}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
