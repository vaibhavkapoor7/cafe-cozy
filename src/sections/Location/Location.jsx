import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import storefront from '../../assets/images/gallery-6.png'
import './Location.css'

const Location = () => {
  return (
    <section className="location section" id="location">
      <div className="location__container container">

        <div className="location__map">
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
        </div>

        <div className="location__info">
          <SectionTitle
            eyebrow="Visit Us"
            title="We'd Love To See You"
            align="left"
            light
          />

          <ul className="location__details">
            <li className="location__detail">
              <FiMapPin className="location__icon" />
              <span>123 Coffee Street, Vancouver, BC V6B 1A1</span>
            </li>
            <li className="location__detail">
              <FiPhone className="location__icon" />
              <span>(604) 555-1234</span>
            </li>
            <li className="location__detail">
              <FiMail className="location__icon" />
              <span>hello@cafecozy.ca</span>
            </li>
            <li className="location__detail">
              <FiClock className="location__icon" />
              <span>Mon–Fri: 7:00 AM – 8:00 PM<br />Sat–Sun: 8:00 AM – 9:00 PM</span>
            </li>
          </ul>

          <a href="#directions" className="location__btn">
            Get Directions
            <FiArrowRight />
          </a>
        </div>

        <div className="location__image-wrapper">
          <img src={storefront} alt="Cafe Cozy storefront at dusk" className="location__image" />
        </div>

      </div>
    </section>
  )
}

export default Location