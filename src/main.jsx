import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import PlayerContexProvider from './Context/PlayerContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContexProvider>
      <App />
    </PlayerContexProvider>
    </BrowserRouter>
  </StrictMode>,
)
