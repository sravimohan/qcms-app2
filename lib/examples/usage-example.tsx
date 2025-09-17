// Example usage of @qcms/lib in qcms-app
import { cn, formatDate, generateId } from '@qcms/lib/utils'
import { User, Form, Question } from '@qcms/lib/types'
import { APP_NAME, VALIDATION_LIMITS } from '@qcms/lib/constants'

// Example component using shared utilities
export function ExampleComponent() {
  const userId = generateId()
  const currentDate = formatDate(new Date())
  
  const buttonClasses = cn(
    'px-4 py-2 rounded',
    'bg-blue-500 text-white',
    'hover:bg-blue-600'
  )
  
  const user: User = {
    id: userId,
    email: 'user@example.com',
    name: 'Example User',
    role: 'editor',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  const question: Question = {
    id: generateId(),
    title: 'Sample Question',
    type: 'text',
    required: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  return (
    <div>
      <h1>{APP_NAME} - Example Component</h1>
      <p>Created on: {currentDate}</p>
      <p>User: {user.name} ({user.role})</p>
      <p>Max name length: {VALIDATION_LIMITS.USER_NAME_MAX_LENGTH}</p>
      <button className={buttonClasses}>
        Sample Button
      </button>
      <div>
        <h2>Question: {question.title}</h2>
        <p>Type: {question.type}</p>
        <p>Required: {question.required ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}