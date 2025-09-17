// Common types used across QCMS applications

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'admin' | 'editor' | 'viewer'

export interface Question {
  id: string
  title: string
  description?: string
  type: QuestionType
  required: boolean
  options?: QuestionOption[]
  validation?: ValidationRule[]
  createdAt: Date
  updatedAt: Date
}

export type QuestionType = 
  | 'text' 
  | 'textarea' 
  | 'select' 
  | 'multiselect' 
  | 'radio' 
  | 'checkbox' 
  | 'date' 
  | 'number' 
  | 'email' 
  | 'url'

export interface QuestionOption {
  id: string
  label: string
  value: string
  order: number
}

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'email' | 'url'
  value?: string | number
  message: string
}

export interface Form {
  id: string
  title: string
  description?: string
  sections: FormSection[]
  settings: FormSettings
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

export interface FormSection {
  id: string
  title: string
  description?: string
  questions: Question[]
  order: number
}

export interface FormSettings {
  allowAnonymous: boolean
  requireAuth: boolean
  enableNotifications: boolean
  redirectUrl?: string
  submitButtonText: string
}

export interface FormResponse {
  id: string
  formId: string
  userId?: string
  answers: FormAnswer[]
  submittedAt: Date
  ipAddress?: string
}

export interface FormAnswer {
  questionId: string
  value: string | string[]
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export interface SortOptions {
  field: string
  direction: 'asc' | 'desc'
}

export interface FilterOptions {
  [key: string]: string | number | boolean | string[]
}

export interface SearchOptions {
  query?: string
  filters?: FilterOptions
  sort?: SortOptions
  page?: number
  limit?: number
}