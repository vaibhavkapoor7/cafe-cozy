import SectionTitle from '../../components/SectionTitle/SectionTitle'
import aboutImg from '../../assets/images/about-cafe.png'
import './About.css'

const About = () => {
  return (
    <section className="about section" id="about" data-navbar-theme="light">
      <div className="about__container container">

        <div className="about__image-wrapper">
          <img
            src={aboutImg}
            alt="The warm interior of Cafe Cozy with wooden tables and soft lighting"
            className="about__image"
          />
        </div>

        <div className="about__content">
          <SectionTitle
            eyebrow="Our Story"
            title="A Vancouver Café With Heart"
          />

          <p className="about__text">
            At Cafe Cozy, we believe great coffee brings people together.
            Every cup is crafted with passion using the finest ingredients,
            in a warm space designed for meaningful moments. Proudly serving
            our community in the heart of Vancouver.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">2024</span>
              <span className="about__stat-label">Established</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">50K+</span>
              <span className="about__stat-label">Happy Guests</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">12</span>
              <span className="about__stat-label">Awards Won</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">1</span>
              <span className="about__stat-label">Location</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About