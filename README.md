# Digital Garden

Welcome to my personal site! This project is a digital garden - a place to share my thoughts, projects, and resources in a living, evolving format.

## Features

- Built with [Next.js](https://nextjs.org/) for fast, modern web experiences
- Monorepo structure powered by [Turborepo](https://turbo.build/)
- Custom UI components in a shared package
- Linting and formatting with ESLint and custom configs
- TypeScript for type safety

## Monorepo Structure

```
apps/
  digital-garden/      # Main Next.js app (this site)
packages/
  ui/                  # Shared UI components
  config/              # Shared configuration
  typescript-config/   # Shared TypeScript configs
  eslint-config/       # Shared ESLint configs
```

## Getting Started

1. **Install dependencies**
   ```sh
   pnpm install
   ```
2. **Run the development server**
   ```sh
   pnpm dev --filter=apps/digital-garden
   ```
3. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `pnpm dev` – Start the development server
- `pnpm build` – Build the app for production
- `pnpm lint` – Lint all packages and apps

## About

This site is a personal knowledge base, blog, and project showcase. Inspired by the digital garden movement, it is always growing and changing.

---

Made with ❤️ by Kirill Mikhaylov
