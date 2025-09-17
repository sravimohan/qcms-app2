// Application constants used across QCMS applications

export const APP_NAME = 'QCMS' as const
export const APP_DESCRIPTION = 'Quality Content Management System' as const

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'
export const API_TIMEOUT = 10000 // 10 seconds

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 20
export const MAX_PAGE_SIZE = 100

// Validation limits
export const VALIDATION_LIMITS = {
  USER_NAME_MIN_LENGTH: 2,
  USER_NAME_MAX_LENGTH: 100,
  EMAIL_MAX_LENGTH: 255,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  QUESTION_TITLE_MAX_LENGTH: 255,
  QUESTION_DESCRIPTION_MAX_LENGTH: 1000,
  FORM_TITLE_MAX_LENGTH: 255,
  FORM_DESCRIPTION_MAX_LENGTH: 2000,
  SECTION_TITLE_MAX_LENGTH: 255,
  SECTION_DESCRIPTION_MAX_LENGTH: 1000,
} as const

// Question types
export const QUESTION_TYPES = [
  'text',
  'textarea', 
  'select',
  'multiselect',
  'radio',
  'checkbox',
  'date',
  'number',
  'email',
  'url',
] as const

// User roles
export const USER_ROLES = ['admin', 'editor', 'viewer'] as const

// Form settings defaults
export const DEFAULT_FORM_SETTINGS = {
  allowAnonymous: false,
  requireAuth: true,
  enableNotifications: true,
  submitButtonText: 'Submit',
} as const

// Date formats
export const DATE_FORMATS = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  FULL: 'EEEE, MMMM d, yyyy',
  ISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const

// File upload limits
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/plain',
    'text/csv',
  ],
} as const

// Cache keys
export const CACHE_KEYS = {
  USER_PROFILE: 'user_profile',
  FORMS: 'forms',
  QUESTIONS: 'questions',
  FORM_RESPONSES: 'form_responses',
} as const

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
} as const

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const

// Themes
export const THEMES = ['light', 'dark', 'system'] as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const

// Debounce delays (in milliseconds)
export const DEBOUNCE_DELAY = {
  SEARCH: 300,
  RESIZE: 100,
  SCROLL: 50,
} as const