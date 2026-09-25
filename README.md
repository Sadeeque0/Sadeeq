# Young Sadeeque — Official Website

The official personal identity website of **Abubakar S Abdullahi**, publicly known as **Young Sadeeque** (`@young_sadeeque`).

Static site. No build step, no backend, no database. Every file sits flat in one folder — no subfolders.

## The one file you'll actually edit: `config.js`

Almost everything on the site — the photo, About text, My Services list, Contact info/buttons, the chatbot, and the accent colors — comes from **`config.js`**. Open it, change the text/values, save, and re-upload that one file to GitHub. Nothing else needs to change.

| To change...              | Edit this in `config.js`         |
|----------------------------|-----------------------------------|
| Profile photo               | `photo` — or just overwrite `hoto.jpg` with a new file of the same name |
| About me text                | `about` — one array item per paragraph |
| Services list                | `services` — add/remove/edit items freely; new ones automatically appear as a new card, same style |
| Contact intro line            | `contactIntro` |
| Social / contact buttons      | `contacts` — add/remove/edit freely; a brand-new `type` you invent still renders correctly with a plain icon |
| Chatbot                      | `bot.src` — paste your bot provider's iframe URL here |
| Colors                       | `theme` — any valid CSS color |

Every field in `config.js` has a comment explaining it.

## Other files (you normally won't need to touch these)

```
index.html          Page structure — reads config.js to fill itself in
config.js            <-- the file you actually edit
style.css            All visual styling
main.js               Renders config.js into the page + all interactions
404.html
robots.txt
sitemap.xml
manifest.webmanifest
favicon.ico / favicon.svg / apple-touch-icon.png / icon-192.png / icon-512.png
hoto.jpg              Profile photo
og-cover.jpg           Preview image for WhatsApp/Facebook/X link shares
```

## Deploying to GitHub Pages

1. Create a GitHub repository (e.g. `YoungSadeeque`).
2. **Add file → Upload files**, drag in *every file* above, all at once, flat (no folders).
3. Commit.
4. **Settings → Pages** → Deploy from a branch → `main` → `/ (root)`.
5. Live in a minute or two at something like `https://sirdique0.github.io/YoungSadeeque/`.
6. If your actual URL differs from `https://sirdique0.github.io/YoungSadeeque/`, update it in: `index.html` (`<link rel="canonical">`, `og:*`/`twitter:*` meta tags, the JSON-LD script block), `robots.txt` (`Sitemap:` line), and `sitemap.xml` (`<loc>`).

## Updating the site later

1. Edit `config.js` for content/colors (see table above), or replace `hoto.jpg` for a new photo.
2. In your GitHub repo, open the file, click the pencil (edit) icon, paste in the updated content, commit.
3. Refresh the live site (hard-refresh / clear cache if you don't see the change).

**Note on the chatbot's "memory":** whether the bot remembers who it's talking to depends on your bot provider, not this site. Most providers accept extra info as URL parameters on the iframe link — check your provider's docs for the exact parameter names, then add them to `bot.src` in `config.js`.

## After deployment

- Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).
- If you move to a custom domain later, update the URLs from step 6 above and add a `CNAME` file at the repo root containing just the domain name.
