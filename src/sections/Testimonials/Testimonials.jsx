import SectionTitle from '../../components/SectionTitle/SectionTitle'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials__container container">

        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Guests Say"
          align="center"
        />

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials