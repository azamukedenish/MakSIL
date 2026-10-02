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
- `content/`: page copy. People and Opportunities intentionally await verified profiles, vacancies, and contact information.
- `config/_default/menus.yaml`: the nine navigation destinations.
- `config/_default/params.yaml`: site description and optional public contact email. Setting `contact_email` adds a contact button to Opportunities.
- `assets/css/maksil.css`: palette, typography, layout, and mobile styles.
- `Logo/MakSIL-Logo.png`: original logo; `static/maksil-logo.png` is the identical served copy. CSS frames the original image without modifying it.

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

## Original template

The site began with the Hugo Research Group starter. Its example authors, papers, posts, and auxiliary pages are preserved in `example-content/`, outside Hugo's published content directory. They are reference material, not MakSIL records. Some use legacy Wowchemy shortcodes and must be adapted before being copied into the new site. The original media, theme metadata, and Go manifest remain as reference; external module imports are disabled.
