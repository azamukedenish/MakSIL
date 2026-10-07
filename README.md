# MakSIL — Makerere Safe Intelligence Lab

A responsive Hugo site using the supplied MakSIL logo and its dominant colours: deep red `#770611`, black `#262626`, and white. It uses local layouts with no external theme, font, or JavaScript dependencies. Hugo 0.135.0 is the version configured for deployment.

## Preview and build

```sh
hugo server
hugo --gc --minify
```

The preview is at `http://localhost:1313/`; production files are written to `public/`. GitHub Pages and Netlify build configurations are retained. Set `baseURL` in `config/_default/hugo.yaml` to the final domain before publishing, or supply it with `hugo --baseURL` as the deployment workflows do.

## Editing the website

- `layouts/index.html`: homepage hero and section introductions.
- `data/research.json`: the six research areas, shared by the homepage and Research page.
- `content/`: page copy. Opportunities intentionally awaits vacancies and contact information.
- `data/people.yaml`: names, roles, portrait filenames, and groups on the People page. Leadership currently lists the PI and Co-PI; add future profiles to the PhD, MSc, undergraduate, or alumni group's `members` list.
- `people/`: original portraits. This folder is mounted into Hugo's image pipeline, so replacing a portrait here updates the website on rebuild. The site generates smaller WebP versions for display while preserving the original framing. A profile's `photo` value must match its filename, including case.
- `content/publication/`: one folder and `index.md` per paper. Publications are grouped by year and automatically appear on the homepage. Each paper records `authors`, `publication`, `publication_type`, `publication_year`, `doi`, `url_paper`, and `summary`; `date` controls ordering. Use publisher publication years, even when a conference edition has an earlier year. When metadata provides only a month or year, use the first day for ordering; publication pages display the year. `content/publication/_index.md` holds the page introduction and separate thesis summary/link.
- `config/_default/menus.yaml`: the nine navigation destinations.
- `config/_default/params.yaml`: site description, homepage video, and optional public contact email. Setting `contact_email` adds a contact button to Opportunities.
- `hero_video` in that file: set the YouTube ID, title, description, and poster filename to change the homepage preview. Its poster lives in `static/note-scan-preview.jpg`; replace it with the new video's thumbnail when changing videos. The play button opens a portrait YouTube player; the video loads only after a click. `layouts/partials/hero-video.html` and `static/hero-video.js` control the preview and player.
- `assets/css/maksil.css`: palette, typography, layout, and mobile styles.
- `Logo/MakSIL-Logo.png`: original logo; `static/maksil-logo.png` is the served copy. After replacing the original, run `cp Logo/MakSIL-Logo.png static/maksil-logo.png` and rebuild the site. Hugo publishes files from `static/`, so changing `Logo/` alone does not update the website. CSS preserves the complete 3:1 artwork.
- `Logo/Icon.png`: original shield icon for browser tabs; `static/maksil-icon.png` is the served favicon. After replacing it, run `cp Logo/Icon.png static/maksil-icon.png` and rebuild. Its URL includes a content hash so browsers refresh the icon when it changes.

To publish a project, news update, publication, or resource, add a Markdown page under `content/projects/`, `content/post/`, `content/publication/`, or `content/resources/`. For example:

```yaml
---
title: Your research title
date: 2026-10-02
summary: A short, factual description of the work.
draft: true
featured: true
---

Add the full details here. Set draft to false when ready to publish.
```

The homepage automatically displays the three newest publications and news updates, and up to three projects marked `featured: true`. Collection pages list all published entries. Empty collections show a clear forthcoming message.

Publication frontmatter example:

```yaml
---
title: Your paper title
date: 2026-08-01
publication_year: 2026
authors:
  - Author Name
publication: Journal or conference, volume and pages
publication_type: Journal article
doi: 10.xxxx/example
url_paper: https://doi.org/10.xxxx/example
summary: A brief description in your own words.
---

A short overview of the work.
```

## Original template

The site began with the Hugo Research Group starter. Its example authors, papers, posts, and auxiliary pages are preserved in `example-content/`, outside Hugo's published content directory. They are reference material, not MakSIL records. Some use legacy Wowchemy shortcodes and must be adapted before being copied into the new site. The original media, theme metadata, and Go manifest remain as reference; external module imports are disabled.
