# QCMS Monorepo - Shared Library Setup

## ✅ Successfully Created `@qcms/lib` Package

The shared library package has been created and configured for use across all QCMS applications.

## 📁 Project Structure

```
qcms-app2/                          # Monorepo root
├── lib/                           # 🆕 Shared library package
│   ├── src/
│   │   ├── types/index.ts         # TypeScript interfaces & types
│   │   ├── utils/index.ts         # Utility functions
│   │   ├── constants/index.ts     # Application constants
│   │   └── index.ts               # Main export file
│   ├── dist/                      # Built output (CJS + ESM)
│   ├── package.json               # Package configuration
│   ├── tsconfig.json              # TypeScript config
│   ├── tsup.config.ts             # Build configuration
│   ├── biome.json                 # Linting & formatting
│   └── README.md                  # Documentation
├── qcms-app/                      # Main application
├── qcms-form/                     # Form builder app
├── ui/                            # UI component library
├── package.json                   # 🆕 Root package.json
└── pnpm-workspace.yaml            # 🆕 Workspace configuration
```

## 🚀 What's Included

### Types (`@qcms/lib/types`)
- **User management**: `User`, `UserRole`
- **Forms & Questions**: `Form`, `Question`, `FormSection`, `FormResponse`
- **API responses**: `ApiResponse`, `PaginatedResponse`
- **Data operations**: `SearchOptions`, `FilterOptions`, `SortOptions`

### Utils (`@qcms/lib/utils`)
- **Styling**: `cn()` - Tailwind class merger
- **Date formatting**: `formatDate()`, `formatRelativeTime()`
- **Validation**: `isValidEmail()`, `isValidUrl()`
- **String manipulation**: `capitalize()`, `truncate()`, `toTitleCase()`
- **Performance**: `debounce()`, `throttle()`
- **Data operations**: `deepClone()`, `get()`, `set()`
- **ID generation**: `generateId()`

### Constants (`@qcms/lib/constants`)
- **App metadata**: `APP_NAME`, `APP_DESCRIPTION`
- **Validation limits**: `VALIDATION_LIMITS`
- **Enums**: `QUESTION_TYPES`, `USER_ROLES`, `THEMES`
- **Configuration**: `DEFAULT_FORM_SETTINGS`, `FILE_UPLOAD`
- **Storage keys**: `CACHE_KEYS`, `STORAGE_KEYS`
- **UI constants**: `BREAKPOINTS`, `ANIMATION_DURATION`

## 💻 Usage Examples

```typescript
// Import specific modules for better tree-shaking
import { User, Question } from '@qcms/lib/types'
import { cn, formatDate, generateId } from '@qcms/lib/utils'
import { APP_NAME, VALIDATION_LIMITS } from '@qcms/lib/constants'

// Or import everything from main entry
import { User, cn, APP_NAME } from '@qcms/lib'

// Example usage
const userId = generateId()
const user: User = {
  id: userId,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'editor',
  createdAt: new Date(),
  updatedAt: new Date()
}

const buttonClasses = cn(
  'px-4 py-2 rounded',
  'bg-blue-500 text-white',
  'hover:bg-blue-600'
)

const formattedDate = formatDate(user.createdAt)
```

## 🔧 Development Commands

```bash
# Root level commands (run all packages)
pnpm dev          # Start all packages in development mode
pnpm build        # Build all packages
pnpm lint         # Lint all packages
pnpm format       # Format all packages

# Library specific commands
cd lib
pnpm build        # Build the library
pnpm dev          # Build in watch mode
pnpm type-check   # TypeScript checking
pnpm clean        # Clean build output
```

## 📦 Package Dependencies

All packages now reference the shared library:

- **qcms-app**: `"@qcms/lib": "workspace:*"`
- **qcms-form**: `"@qcms/lib": "workspace:*"`
- **ui**: `"@qcms/lib": "workspace:*"`

## 🎯 Benefits

1. **Consistency**: Shared types ensure consistent data structures
2. **DRY Principle**: Common utilities prevent code duplication
3. **Type Safety**: Full TypeScript support with declaration files
4. **Tree Shaking**: Optimized imports for smaller bundles
5. **Maintainability**: Central location for shared code
6. **Performance**: Built with modern bundler (tsup)
7. **Standards**: Consistent code formatting with Biome

## 🔄 Adding New Shared Code

To add new functionality to the library:

1. **Add types**: Edit `lib/src/types/index.ts`
2. **Add utilities**: Edit `lib/src/utils/index.ts`
3. **Add constants**: Edit `lib/src/constants/index.ts`
4. **Build**: Run `pnpm build` in the lib directory
5. **Use**: Import in other packages as needed

## 🏗️ Architecture

- **TypeScript**: Strict mode with full type safety
- **tsup**: Modern bundler producing CJS + ESM outputs
- **Biome**: Unified linting and formatting
- **pnpm Workspaces**: Efficient monorepo management
- **Tree-shakable**: Optimized for modern bundlers

The shared library is now ready for use across all QCMS applications! 🎉