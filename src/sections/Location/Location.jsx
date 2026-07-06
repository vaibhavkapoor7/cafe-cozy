import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import storefront from '../../assets/images/gallery-6.png'
import { fadeIn, scaleIn, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import './Location.css'

const Location = () => {
  return (
    <section className="location section" id="location" data-navbar-theme="dark">
      <div className="location__container container">

        <motion.div
          className="location__map"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2138.7560812239844!2d-123.1186314192363!3d49.23222512777375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOakridge%20Park%20cafe!5e0!3m2!1sen!2sca!4v1783344621920!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Cafe Cozy location map"
          />
        </motion.div>

        <div className="location__info">
          <SectionTitle
            eyebrow="Visit Us"
            title="We'd Love To See You"
            align="left"
            light
          />

          <motion.ul
            className="location__details"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.li className="location__detail" variants={staggerItem}>
              <FiMapPin className="location__icon" />
              <span>123 Coffee Street, Vancouver, BC V6B 1A1</span>
            </motion.li>
            <motion.li className="location__detail" variants={staggerItem}>
              <FiPhone className="location__icon" />
              <span>(604) 555-1234</span>
            </motion.li>
            <motion.li className="location__detail" variants={staggerItem}>
              <FiMail className="location__icon" />
              <span>hello@cafecozy.ca</span>
            </motion.li>
            <motion.li className="location__detail" variants={staggerItem}>
              <FiClock className="location__icon" />
              <span>Mon–Fri: 7:00 AM – 8:00 PM<br />Sat–Sun: 8:00 AM – 9:00 PM</span>
            </motion.li>
          </motion.ul>

          <a href="#directions" className="location__btn">
            Get Directions
            <FiArrowRight />
          </a>
        </div>

        <motion.div
          className="location__image-wrapper"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img src={storefront} alt="Cafe Cozy storefront at dusk" className="location__image" />
        </motion.div>

      </div>
    </section>
  )
}

export default Location
