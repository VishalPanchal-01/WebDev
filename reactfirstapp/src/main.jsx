import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App,Info} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Info/>
  </StrictMode>,
)
