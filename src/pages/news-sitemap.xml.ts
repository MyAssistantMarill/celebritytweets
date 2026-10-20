import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const siteUrl = 'https://celebritytweets.com';

  // Google News sitemap only includes articles from last 2 days
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const recentPosts = posts.filter(p =>
    new Date(p.data.pubDate) >= twoDaysAgo
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentPosts.map(post => `  <url>
    <loc>${siteUrl}/posts/${post.id}</loc>
    <news:news>
      <news:publication>
        <news:name>CelebrityTweets</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.data.pubDate).toISOString()}</news:publication_date>
      <news:title>${post.data.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
