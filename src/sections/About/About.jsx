import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import aboutImg from '../../assets/images/about-cafe.png'
import { fadeUp, scaleIn, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import './About.css'

const About = () => {
  return (
    <section className="about section" id="about" data-navbar-theme="light">
      <div className="about__container container">

        <motion.div
          className="about__image-wrapper"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src={aboutImg}
            alt="The warm interior of Cafe Cozy with wooden tables and soft lighting"
            className="about__image"
          />
        </motion.div>

        <div className="about__content">
          <SectionTitle
            eyebrow="Our Story"
            title="A Vancouver Café With Heart"
          />

          <motion.p
            className="about__text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            At Cafe Cozy, we believe great coffee brings people together.
            Every cup is crafted with passion using the finest ingredients,
            in a warm space designed for meaningful moments. Proudly serving
            our community in the heart of Vancouver.
          </motion.p>

          <motion.div
            className="about__stats"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div className="about__stat" variants={staggerItem}>
              <span className="about__stat-number">2024</span>
              <span className="about__stat-label">Established</span>
            </motion.div>
            <motion.div className="about__stat" variants={staggerItem}>
              <span className="about__stat-number">50K+</span>
              <span className="about__stat-label">Happy Guests</span>
            </motion.div>
            <motion.div className="about__stat" variants={staggerItem}>
              <span className="about__stat-number">12</span>
              <span className="about__stat-label">Awards Won</span>
            </motion.div>
            <motion.div className="about__stat" variants={staggerItem}>
              <span className="about__stat-number">1</span>
              <span className="about__stat-label">Location</span>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default About
