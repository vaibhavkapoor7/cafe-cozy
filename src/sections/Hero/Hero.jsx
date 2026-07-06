import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { HiOutlinePlay } from 'react-icons/hi2'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home" data-navbar-theme="dark">
      <div className="hero__overlay"></div>
      <div className="hero__vertical-text">
  Premium Coffee · Warm Moments
</div>

      <div className="hero__container container">

        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">Cafe</span>
            <span className="hero__title-line">Cozy</span>
          </h1>

          <p className="hero__subtitle">
            The Best Café in Vancouver
          </p>

          <div className="hero__buttons">
            <a href="#reserve" className="hero__btn hero__btn--primary">
              Reserve a Table
            </a>
            <a href="#story" className="hero__btn hero__btn--outline">
              <HiOutlinePlay className="hero__btn-icon" />
              Watch Our Story
            </a>
          </div>
        </div>

        <div className="hero__socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line"></span>
      </div>

    </section>
  )
}

export default Hero