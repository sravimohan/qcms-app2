# QCMS Workspace Instructions for AI Assistants

## Project Overview

This is a QCMS (Quality Content Management System) monorepo containing multiple Next.js applications and shared components:

- **qcms-app**: Main application with dashboard, forms, questions, sections, and settings used by the form builders
- **qcms-form**: End user facing application used by the form fillers.
- **ui**: Shared component library with React Aria Components

## Tech Stack & Dependencies

- **Next.js 15.5.3** with App Router and Turbopack
- **React 19.1.1** with TypeScript 5.9.2
- **React Aria Components 1.12.2** for accessible UI components
- **Tailwind CSS 4.1.13** for styling with utilities
- **Biome 2.2.4** for linting and formatting (replaces ESLint/Prettier)
- **Lucide React** for icons
- **pnpm** for package management

## File Structure & Conventions

```
qcms-app/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   ├── forms/            # Form management pages
│   ├── questions/        # Question management
│   ├── sections/         # Section management
│   └── settings/         # Settings pages
├── components/           # Shared React components
│   ├── primitives/      # Basic UI primitives
│   └── [ComponentName].tsx
└── utils/               # Utility functions
```

## Coding Standards & Best Practices

### TypeScript

- Use strict TypeScript mode
- Prefer explicit typing over `any`
- Use interface for object shapes, type for unions/primitives
- Follow existing patterns for component props

### React Components

- Use functional components with hooks
- Follow React Aria Components patterns for accessibility
- Use PascalCase for component files (e.g., `UserMenu.tsx`)
- Prefer composition over inheritance
- Use React.forwardRef for components that need ref forwarding

### Styling

- Use Tailwind utility classes primarily
- Use `clsx` and `tailwind-merge` for conditional classes
- Follow existing design system patterns
- Use `tailwind-variants` for component variants
- Mobile-first responsive design approach

### Code Organization

- Use absolute imports with `@/` alias for internal modules
- Group imports: external libraries, internal modules, relative imports
- Export components as default exports
- Use named exports for utilities and hooks

### State Management

- Use React hooks for local state
- Prefer server components when possible
- Use client components only when necessary (interactivity, browser APIs)

## Development Workflow

- Run `pnpm dev` for development server with Turbopack
- Use `pnpm lint` for code checking with Biome
- Use `pnpm format` for code formatting
- Auto-formatting and import organization on save (configured in .vscode/settings.json)

## Component Patterns

### Layout Components

- Use `MainLayout` for consistent page structure
- Include `Header`, `LeftNavigation`, and `Footer`
- Support theme switching with `ThemeProvider`

### Form Components

- Build on React Aria Components foundation
- Use proper ARIA labels and descriptions
- Follow accessibility guidelines
- Validate inputs appropriately

### Navigation

- Use Next.js Link for internal navigation
- Implement proper focus management
- Support keyboard navigation

## Accessibility Requirements

- Follow WCAG 2.1 AA standards
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

## Performance Considerations

- Use Next.js Image component for images
- Implement proper loading states
- Use React.memo for expensive components
- Prefer server components for static content
- Optimize bundle size with dynamic imports

## When Making Changes

1. Check existing patterns before creating new ones
2. Ensure TypeScript compilation passes
3. Run Biome linting and formatting
4. Test accessibility with keyboard navigation
5. Verify responsive design on different screen sizes
6. Follow the existing component architecture

## Common Patterns to Follow

- Error boundaries for error handling
- Loading states for async operations
- Proper form validation and feedback
- Consistent spacing using Tailwind utilities
- Theme-aware components using CSS variables

## Debugging & Development

- Use React DevTools for component debugging
- Check browser console for accessibility warnings
- Use Next.js development tools for performance insights
- Validate HTML structure and ARIA attributes
