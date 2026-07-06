import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials" data-navbar-theme="light">
      <div className="testimonials__container container">

        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Guests Say"
          align="center"
        />

        <motion.div
          className="testimonials__grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
