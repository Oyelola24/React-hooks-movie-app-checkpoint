// Import React's StrictMode for additional development checks
import { StrictMode } from 'react'

// Import ReactDOM's createRoot for React 18+ rendering
import { createRoot } from 'react-dom/client'

// Import global CSS styles
import './index.css'

// Import the main App component
import App from './App.jsx'

// Create the root React element and render the application
// This is the entry point of the React application
createRoot(document.getElementById('root')).render(
  // StrictMode helps identify potential problems during development
  <StrictMode>
    {/* Main App component that contains the entire application */}
    <App />
  </StrictMode>,
)