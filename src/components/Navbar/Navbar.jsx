import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [overLight, setOverLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const stopScrollTimer = useRef(null)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      const sectionAtNav = document
        .elementFromPoint(window.innerWidth / 2, 90)
        ?.closest('[data-navbar-theme]')
      setOverLight(sectionAtNav?.dataset.navbarTheme === 'light')

      lastScrollY.current = currentScrollY

      clearTimeout(stopScrollTimer.current)
      stopScrollTimer.current = setTimeout(() => {
        setHidden(false)
      }, 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(stopScrollTimer.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`navbar ${hidden && !menuOpen ? 'navbar--hidden' : ''} ${overLight ? 'navbar--over-light' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar__container container">

        <a href="#home" className="navbar__logo" onClick={closeMenu}>
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

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      <div className="navbar__mobile-menu">
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#reserve" className="navbar__cta navbar__cta--mobile" onClick={closeMenu}>
          Reserve a Table
        </a>
      </div>
    </nav>
  )
}

export default Navbar
