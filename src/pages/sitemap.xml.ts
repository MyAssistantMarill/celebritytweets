import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const siteUrl = 'https://celebritytweets.com';

  const urls = [
    { loc: siteUrl, changefreq: 'daily', priority: '1.0' },
    { loc: `${siteUrl}/about`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${siteUrl}/contact`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${siteUrl}/throwback-thursday`, changefreq: 'weekly', priority: '0.7' },
    { loc: `${siteUrl}/category/feuds`, changefreq: 'daily', priority: '0.7' },
    { loc: `${siteUrl}/category/drama`, changefreq: 'daily', priority: '0.7' },
    { loc: `${siteUrl}/category/shade`, changefreq: 'daily', priority: '0.7' },
    { loc: `${siteUrl}/category/collabs`, changefreq: 'daily', priority: '0.7' },
    ...posts
      .sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())
      .map(post => ({
        loc: `${siteUrl}/posts/${post.id}`,
        lastmod: new Date(post.data.pubDate).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.8',
      })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
