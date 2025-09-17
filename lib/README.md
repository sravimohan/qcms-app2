# @qcms/lib

Shared utilities, types, and constants for QCMS applications.

## Overview

This package provides common functionality used across the QCMS monorepo:

- **Types**: TypeScript interfaces and types for forms, questions, users, etc.
- **Utils**: Utility functions for common operations (date formatting, validation, etc.)
- **Constants**: Application constants and configuration values

## Installation

Since this is a private package in the monorepo, it's automatically available to other packages via pnpm workspaces.

```bash
# In other packages, add to dependencies:
{
  "dependencies": {
    "@qcms/lib": "workspace:*"
  }
}
```

## Usage

```typescript
// Import specific modules
import { User, Question, Form } from '@qcms/lib/types'
import { cn, formatDate, generateId } from '@qcms/lib/utils'
import { APP_NAME, VALIDATION_LIMITS } from '@qcms/lib/constants'

// Or import everything
import { User, cn, APP_NAME } from '@qcms/lib'
```

## Available Modules

### Types (`@qcms/lib/types`)

Core TypeScript interfaces and types:

- `User`, `UserRole` - User management types
- `Question`, `QuestionType`, `QuestionOption` - Question/form field types
- `Form`, `FormSection`, `FormSettings` - Form structure types
- `FormResponse`, `FormAnswer` - Form submission types
- `ApiResponse`, `PaginatedResponse` - API response types
- `SearchOptions`, `FilterOptions`, `SortOptions` - Data query types

### Utils (`@qcms/lib/utils`)

Utility functions:

- `cn()` - Tailwind CSS class name merger
- `formatDate()`, `formatRelativeTime()` - Date formatting
- `generateId()` - Unique ID generation
- `debounce()`, `throttle()` - Function rate limiting
- `capitalize()`, `toTitleCase()`, `truncate()` - String manipulation
- `isValidEmail()`, `isValidUrl()` - Validation helpers
- `deepClone()`, `get()`, `set()` - Object manipulation

### Constants (`@qcms/lib/constants`)

Application constants:

- `APP_NAME`, `APP_DESCRIPTION` - Application metadata
- `VALIDATION_LIMITS` - Field validation limits
- `QUESTION_TYPES`, `USER_ROLES` - Enum-like constants
- `DEFAULT_FORM_SETTINGS` - Form default configuration
- `CACHE_KEYS`, `STORAGE_KEYS` - Storage identifiers
- `HTTP_STATUS` - HTTP status codes
- `BREAKPOINTS`, `ANIMATION_DURATION` - UI constants

## Development

```bash
# Build the library
pnpm build

# Build in watch mode
pnpm dev

# Type checking
pnpm type-check

# Linting and formatting
pnpm lint
pnpm format

# Clean build output
pnpm clean
```

## Architecture

- **TypeScript**: Strict mode with declaration files
- **tsup**: Modern bundler for both CJS and ESM outputs
- **Biome**: Code formatting and linting
- **Tree-shaking**: Optimized for bundler consumption

## Exports

The package provides multiple entry points for optimal tree-shaking:

```json
{
  ".": "./dist/index.js",
  "./types": "./dist/types.js", 
  "./utils": "./dist/utils.js",
  "./constants": "./dist/constants.js"
}
```