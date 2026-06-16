# Portfolio Site

A minimal Next.js portfolio designed for job-seeking developers. This project includes a home page, projects list, project case studies, about page, and contact page.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 to preview the site locally.

## Build and export

First build the app:

```bash
npm run build
```

Then export the static site:

```bash
npm run export
```

The static output is placed in the `out/` directory.

## Deploy

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and deploys the `out/` folder to the `gh-pages` branch.

## Customize

- Replace email and profile links in `pages/contact.tsx`
- Update project metadata in `content/projects.ts`
- Replace the placeholder resume at `public/resume.txt` with your real `resume.pdf` file when ready
- Replace placeholder demo/source links with your real repo URLs
