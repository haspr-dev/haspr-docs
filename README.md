<div align="center">
  <img src="static/img/logo.svg" alt="pbolt Documentation" width="280">
  <br><br>
  <h1>pbolt Documentation</h1>
  <p><strong>Official documentation for pbolt — the community-driven open source password manager for teams.</strong></p>
  <p>
    <a href="https://doc.pbolt.dev"><strong>doc.pbolt.dev »</strong></a>
  </p>
  <p>
    <a href="https://github.com/pbolt-dev/pbolt-docs/actions/workflows/deploy-pages.yml"><img src="https://github.com/pbolt-dev/pbolt-docs/actions/workflows/deploy-pages.yml/badge.svg" alt="Deploy Pages"></a>
    <a href="https://github.com/pbolt-dev/pbolt-docs/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg" alt="License: AGPL v3"></a>
  </p>
</div>

---

## Overview

This repository contains the documentation source for **pbolt**, published to [doc.pbolt.dev](https://doc.pbolt.dev) via GitHub Pages.

It covers:
- **User Guide**: Everyday usage, credential management, browser integration, and security features.
- **Admin Guide**: User provisioning, groups, roles, policy enforcement, and administration workflows.
- **Hosting Guide**: Deploying and operating self-hosted pbolt installations (Docker, Debian/Ubuntu packages, etc.).
- **API Reference**: Detailed OpenAPI / REST specifications for developers and integrators.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 20.x` (Node 22 LTS recommended)
- `npm` `>= 9.x`

### Local Development

```bash
git clone git@github.com:pbolt-dev/pbolt-docs.git
cd pbolt-docs
npm install
npm run start
```

This starts a local development server with hot-reload at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|:---|:---|
| `npm run start` | Start the local development server |
| `npm run build` | Build the production static site into `build/` |
| `npm run serve` | Preview the production build locally |
| `npm run lint` | Lint JS and JSX source files |
| `npm run lint:mdx` | Lint MDX documentation pages |
| `npm run lint:fix` | Automatically fix linting issues |

---

## Deployment

The documentation site is automatically built and deployed to GitHub Pages at [doc.pbolt.dev](https://doc.pbolt.dev) whenever commits are pushed to the `main` branch.

---

## License & Trademark Notice

- **Code**: Distributed under the [GNU Affero General Public License v3 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html).
- **Documentation Text**: Distributed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

### Trademark Notice

> **Important**: **pbolt** is an independent, community-driven fork and is **not affiliated with, endorsed by, or sponsored by Passbolt SA**. Passbolt is a registered trademark of Passbolt SA. Any references to "Passbolt" within upstream documentation texts and technical identifiers are retained purely for historical context, compatibility, and nominative descriptive use under Section 7(e) of the AGPLv3. All original Passbolt corporate identity assets and registered marks remain the property of Passbolt SA.
