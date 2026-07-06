import { useState } from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import logo from '../../assets/images/logo.png'
import './Footer.css'

const openingHours = [
  { id: 'weekdays', days: 'Mon – Fri', time: '7:00 AM – 8:00 PM' },
  { id: 'saturday', days: 'Saturday', time: '8:00 AM – 9:00 PM' },
  { id: 'sunday', days: 'Sunday', time: '8:00 AM – 7:00 PM' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer className="footer">
      <div className="footer__container container">

        <div className="footer__brand">
          <img src={logo} alt="Cafe Cozy Vancouver" className="footer__logo" />
          <p className="footer__tagline">
            Great coffee. Good people. Beautiful moments.
          </p>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
          </div>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Opening Hours</h4>
          <ul className="footer__hours">
            {openingHours.map((row) => (
              <li key={row.id} className="footer__hours-row">
                <span className="footer__hours-days">{row.days}</span>
                <span className="footer__hours-time">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Stay Connected</h4>
          <p className="footer__newsletter-text">
            Subscribe to our newsletter for updates and exclusive offers.
          </p>
          <form className="footer__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="footer__input"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="footer__submit" aria-label="Subscribe">
              <FiArrowRight />
            </button>
          </form>
          {submitted && (
            <p className="footer__success">Thank you for subscribing!</p>
          )}
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Cafe Cozy. All rights reserved.</p>
          <p>Designed with love in Vancouver.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer