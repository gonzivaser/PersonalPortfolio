import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe  from './components/About Me/aboutMe.jsx'
import NavBar from './components/NavBar/navBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <AboutMe />
  </StrictMode>,
)
