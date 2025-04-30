import React from 'react'
import ReactDOM, { hydrateRoot } from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

//4.2 SSR Hydrations
//hydrateRoot(document.getElementById('root'), <React.StrictMode><App /></React.StrictMode>)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)