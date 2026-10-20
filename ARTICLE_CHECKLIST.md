# CelebrityTweets Article Checklist

Use this before publishing every article. Check every item.

---

## ✅ Pre-Writing
- [ ] Checked today's day of week (Mon/Wed/Fri = compilation, Tue = Top X, Thu = Throwback, other = breaking news)
- [ ] Read CONTENT_IDEAS.md for format guidance
- [ ] Researched topic thoroughly with web_search
- [ ] For compilations: found 25+ REAL tweet status URLs (https://x.com/username/status/ID format)

## ✅ Article Content
- [ ] Title includes specific number if compilation ("25 Celebrity Tweets..." not "Some...")
- [ ] Title includes date range for compilations (e.g. "Week of Oct 13-19, 2026")
- [ ] Description is 150-160 characters, SEO optimized
- [ ] Category is correct (Drama / Feuds / Shade / Collabs / Apologies / Throwback Thursday)
- [ ] Tags include: "celebrity tweets", "viral tweets", current month + year
- [ ] Voice is sassy and fun — not dry or formal
- [ ] No political content

## ✅ Tweet Embeds
- [ ] Every embed uses FULL official format with real status URL in <a> tag:
  ```
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">Tweet text</p>
    &mdash; Name (@handle) <a href="https://twitter.com/handle/status/TWEETID">Date</a>
  </blockquote>
  ```
- [ ] No fake or made-up tweet URLs
- [ ] If status URL not found, used pull quote format instead (> "text" — @handle)
- [ ] At least 2 embeds for regular articles, 25+ for compilations

## ✅ Images
- [ ] Hero image downloaded from Unsplash to /public/images/filename.jpg
- [ ] Image filename is descriptive (not "image1.jpg")
- [ ] Image path set in frontmatter: image: "/images/filename.jpg"

## ✅ Frontmatter
- [ ] title: present
- [ ] description: present (150-160 chars)
- [ ] pubDate: today's date (YYYY-MM-DD)
- [ ] category: valid enum value
- [ ] tags: array with at least 3 tags
- [ ] image: path set

## ✅ Technical
- [ ] File saved to src/content/posts/descriptive-slug.md
- [ ] npm run build — PASSED with no errors
- [ ] git add . && git commit -m "Daily article: [title]"
- [ ] git push — successful
- [ ] Google Indexing API pinged: python3 /Users/marill/.hermes/scripts/ping_google_index.py https://celebritytweets.com/posts/[slug]

## ✅ Post-Publish Verify
- [ ] Article live at https://celebritytweets.com/posts/[slug]
- [ ] Article appears on homepage
- [ ] Read Next section shows related articles
- [ ] Tweet embeds rendering correctly (requires Twitter widget)
- [ ] Hero image loading

---

## Quick Frontmatter Template
```
---
title: "25 Celebrity Tweets That Had Everyone Talking This Week (Oct 13-19, 2026)"
description: "From VS Fashion Show chaos to Kelly Clarkson's bird beef — the 25 best celebrity tweets from the week of October 13-19, 2026."
pubDate: "2026-10-20"
category: "Drama"
tags: ["celebrity tweets", "funny tweets", "viral tweets", "october 2026", "celebrity drama"]
image: "/images/weekly-tweets-oct20.jpg"
---
```
