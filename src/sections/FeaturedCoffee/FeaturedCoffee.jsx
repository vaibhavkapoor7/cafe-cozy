import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard'
import { coffees } from '../../data/coffees'
import './FeaturedCoffee.css'

const FeaturedCoffee = () => {
  return (
    <section className="featured section" id="featured">
      <div className="featured__container container">

        <SectionTitle
          eyebrow="Our Favorites"
          title="Featured Coffee"
          align="center"
        />

        <div className="featured__grid">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              image={coffee.image}
              featured={coffee.featured}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedCoffee