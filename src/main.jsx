import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar/navBar.jsx'
import Hero from './components/Hero/hero.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
  </StrictMode>,
)
