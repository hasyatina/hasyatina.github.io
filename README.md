# Personal homepage — Hasya Hanizam

A single-page personal site. Plain HTML, CSS and JavaScript — no build step, no
dependencies, no npm.

## Viewing it

Double-click `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000

## Editing it

Everything you'd normally want to change is in one of two places.

**Content** — `index.html`. Each item on the page is one `<article class="entry">`
block that looks like this:

```html
<article class="entry">
  <div class="rail">May 2024</div>
  <div class="detail">
    <h3>Data Entry</h3>
    <p class="org">TrustQuay Viewpoint Research</p>
  </div>
</article>
```

`rail` is the date, `h3` is the role, `org` is the organisation. To add an entry,
copy an existing block and change the text. `<p class="note">` adds a smaller grey
line of explanation underneath, and `<span class="pill">` makes a small mint tag
like the ones on the BSc.

**Colours and spacing** — the top of `style.css`. The whole palette is a pastel
mint, defined once in the `:root` block, so changing `--sage` there changes every
green thing on the page at once. The block below it does the same for dark mode.

The token names are historical: `--sand` just means "page background" and `--sage`
means "accent colour". The text colours are contrast-checked for readability, so if
you make `--muted` or `--sage-dk` much lighter, check the small grey text is still
comfortable to read.

### Things you may want to do first

- **Rewrite the intro paragraph.** It's near the top of `index.html`, in
  `<section class="intro">`. It's a placeholder — replace it with something in
  your own voice.
- **Add a photo** (optional). Put the image in this folder, then in `index.html`
  uncomment the `<img class="avatar">` line and delete the `<div class="monogram">`
  line just below it. The circle is 72px, so a square image works best. The
  monogram looks fine on its own if you'd rather not.
- **Update the year** in the footer at the bottom of `index.html`.

## Hosting

The site is deployed in two places from this same repo. Both update automatically
when you push; you do not need to do anything different for either.

- **GitHub Pages** — https://hasyatina.github.io/
- **Vercel** — imported from this repo via the Vercel dashboard

`vercel.json` holds the Vercel settings. There is no build step: `cleanUrls` just
lets `/about` work as well as `/about.html` if you ever add more pages. GitHub Pages
ignores this file entirely.

## Publishing it free on GitHub Pages

1. Create a new repository on GitHub.
2. In this folder:

   ```sh
   git init
   git add .
   git commit -m "Personal homepage"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick `main` and `/ (root)`, save.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`.

If you name the repository `<username>.github.io`, the site lives at
`https://<username>.github.io/` with no path on the end.

To update it later: edit the files, then `git add . && git commit -m "..." && git push`.
The live site follows within a minute or so.

## Notes

- The page adapts to light and dark mode automatically, following the system setting.
- The fade-in on scroll turns itself off if "Reduce Motion" is enabled in accessibility
  settings, and the page is fully readable with JavaScript disabled.
- The heading font (DM Sans) loads from Google Fonts. If you're offline it falls back
  to the system font and the layout is unaffected.
