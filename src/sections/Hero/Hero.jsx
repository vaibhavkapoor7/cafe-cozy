import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { HiOutlinePlay } from 'react-icons/hi2'
import { fadeIn, staggerContainer, staggerItem } from '../../lib/motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home" data-navbar-theme="dark">
      <div className="hero__overlay"></div>
      <div className="hero__vertical-text">
  Premium Coffee · Warm Moments
</div>

      <div className="hero__container container">

        <motion.div
          className="hero__content"
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero__title" variants={staggerItem}>
            <span className="hero__title-line">Cafe</span>
            <span className="hero__title-line">Cozy</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={staggerItem}>
            The Best Café in Vancouver
          </motion.p>

          <motion.div className="hero__buttons" variants={staggerItem}>
            <a href="#reserve" className="hero__btn hero__btn--primary">
              Reserve a Table
            </a>
            <a href="#story" className="hero__btn hero__btn--outline">
              <HiOutlinePlay className="hero__btn-icon" />
              Watch Our Story
            </a>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        className="hero__socials"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
      </motion.div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line"></span>
      </div>

    </section>
  )
}

export default Hero