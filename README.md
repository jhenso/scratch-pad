# scratch-pad

## Overview

This is a minimal TypeScript + Vite project. It uses modern TypeScript settings, Vite for development/build, and Biome/Ultracite for linting and formatting.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is recommended if you want to match the lockfile)

### Install dependencies

```sh
pnpm install
```

### Development server

Start the Vite dev server:

```sh
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```sh
pnpm build
```

### Preview production build

```sh
pnpm preview
```

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) and [Ultracite](https://github.com/biomejs/ultracite):

- Lint: `pnpm lint`
- Format: `pnpm format`

## Project Structure

```
src/
  main.ts      # Entry point
  style.css    # Styles
  vite-env.d.ts
public/        # Static assets
index.html     # Main HTML file
```

## TypeScript

Strict settings are enabled. See `tsconfig.json` for details.
