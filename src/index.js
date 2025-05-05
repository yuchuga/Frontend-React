import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

//4.2 SSR Hydration
//hydrateRoot(document.getElementById('root'), <React.StrictMode><App /></React.StrictMode>)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)