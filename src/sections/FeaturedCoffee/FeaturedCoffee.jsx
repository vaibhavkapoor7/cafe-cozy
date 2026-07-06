import { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard'
import { coffees } from '../../data/coffees'
import './FeaturedCoffee.css'

const FeaturedCoffee = () => {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return

    const scrollAmount = track.clientWidth * 0.6
    track.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const centerCard = (event) => {
    const card = event.currentTarget
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  const blockWheel = (event) => {
    event.preventDefault()
  }

  return (
    <section className="featured section" id="featured">

      <div className="featured__inner container">

        <div className="featured__intro">
          <SectionTitle
            eyebrow="Our Favorites"
            title="Featured Coffee"
            align="left"
          />
          <p className="featured__text">
            Handpicked beans. Expertly brewed. Unforgettable taste.
          </p>

          <div className="featured__controls">
            <button
              className="featured__arrow featured__arrow--left"
              onClick={() => scroll('left')}
              aria-label="Scroll to previous coffees"
            >
              <FiArrowLeft />
            </button>
            <button
              className="featured__arrow featured__arrow--right"
              onClick={() => scroll('right')}
              aria-label="Scroll to next coffees"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          className="featured__track"
          ref={trackRef}
          onWheel={blockWheel}
        >
          {coffees.map((coffee) => (
            <div
              className="featured__slide"
              key={coffee.id}
              onClick={centerCard}
            >
              <CoffeeCard
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
                featured={coffee.featured}
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default FeaturedCoffee