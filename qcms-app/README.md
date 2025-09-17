# QCMS Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## For AI Assistants 🤖

When working with this codebase, please note:

- **Project Type**: QCMS (Quality Content Management System) built with Next.js 15 and React 19
- **Monorepo Structure**: Contains qcms-app (main), qcms-form (forms), and ui (components)
- **Tech Stack**: Next.js + TypeScript + React Aria Components + Tailwind CSS + Biome
- **Package Manager**: Use `pnpm` (not npm/yarn)
- **Styling**: Tailwind utility classes with React Aria Components for accessibility
- **Code Quality**: Biome handles linting/formatting (replaces ESLint/Prettier)
- **Architecture**: Follow existing patterns in components/ and utils/
- **Accessibility**: WCAG 2.1 AA compliance required for all UI components

📋 See `.vscode/instructions.md` for comprehensive development guidelines and coding standards.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
