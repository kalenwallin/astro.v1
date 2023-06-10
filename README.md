# Astro.v1

[![Netlify Status](https://api.netlify.com/api/v1/badges/94048ce9-2abf-440a-bf8e-4ebf71d525f0/deploy-status)](https://app.netlify.com/sites/astrov1/deploys)

## 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                               |
| :-------------------------- | :--------------------------------------------------- |
| `npm install`             | Installs dependencies                                |
| `npm run dev`             | Starts local dev server at `localhost:3000`        |
| `npm run build`           | Build your production site to `./dist/`            |
| `npm run preview`         | Preview your build locally, before deploying         |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                         |

## 👀 Want to learn more?

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into their [Astro Discord server](https://astro.build/chat).
