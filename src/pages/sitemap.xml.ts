import type { APIRoute } from "astro";
import { FOCUSES, LANGS, SITE_URL, pathFor } from "../content/site";

// Every page with its language alternates, so search engines pair /x/ with /es/x/.
export const GET: APIRoute = () => {
  const urls = LANGS.flatMap((lang) =>
    FOCUSES.map((focus) => {
      const alternates = LANGS.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}${pathFor(alt, focus)}"/>`,
      ).join("\n");
      return `  <url>\n    <loc>${SITE_URL}${pathFor(lang, focus)}</loc>\n${alternates}\n  </url>`;
    }),
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
