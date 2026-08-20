import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArrayHandling from './components/ArrayHandling'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrayHandling />
  </StrictMode>,
)
