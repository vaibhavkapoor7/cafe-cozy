import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../data/navigation'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`} aria-label="Main navigation">
      <div className="navbar__container container">

        <a href="#home" className="navbar__logo">
          <img src={logo} alt="Cafe Cozy Vancouver" className="navbar__logo-img" />
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reserve" className="navbar__cta">
          Reserve a Table
        </a>

      </div>
    </nav>
  )
}

export default Navbar