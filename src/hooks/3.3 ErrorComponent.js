import React from 'react'
import WithErrorBoundary from './3.3 WithErrorBoundary'

const ErrorComponent = () => {
  return (
    <WithErrorBoundary fallback={<h1>An Error Occurred!</h1>} enableRetry={true}>
      <MyComponent />
    </WithErrorBoundary>
  )
}

export default ErrorComponent