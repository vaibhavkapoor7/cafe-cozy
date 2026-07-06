import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './TestimonialCard.css'

const TestimonialCard = ({ quote, name, location, rating }) => {
  const initial = name.charAt(0)

  return (
    <article className="testimonial-card">
      <FaQuoteLeft className="testimonial-card__quote-icon" />

      <div className="testimonial-card__stars">
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="testimonial-card__quote">{quote}</p>

      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{initial}</div>
        <div className="testimonial-card__info">
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__location">{location}</span>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard