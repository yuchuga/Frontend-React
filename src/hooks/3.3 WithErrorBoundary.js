import React from 'react'

class WithErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  };

  componentDidCatch(error, info) {
    logErrorToMyService(error, info)
  };

  handleRetry = () => {
    this.setState({ hasError: false })
  };

  render() {
    const { fallback, enableRetry, children } = this.props

    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, textAlign: 'center' }}>
          {fallback}
          {enableRetry && (
            <button onClick={this.handleRetry}>
              Try Again
            </button>
          )}
        </div>
      )
    };

    return children
  }
}

export default WithErrorBoundary