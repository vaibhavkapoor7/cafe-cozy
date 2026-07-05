import { navLinks } from '../../data/navigation'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__container container">

        <a href="#home" className="navbar__logo">
          <img src={logo} alt="Cafe Cozy logo" className="navbar__logo-img" />
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