import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogContextProvider from './context/BlogContext.jsx'
import DarkModeProvider from './context/DarkmodeContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BlogContextProvider>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </BlogContextProvider>
  </BrowserRouter>
  
)
