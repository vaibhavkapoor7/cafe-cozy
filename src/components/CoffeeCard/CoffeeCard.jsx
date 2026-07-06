import './CoffeeCard.css'

const CoffeeCard = ({ name, description, price, image, featured }) => {
  return (
    <article className={`coffee-card ${featured ? 'coffee-card--featured' : ''}`}>
      <div className="coffee-card__image-wrapper">
        <img src={image} alt={name} className="coffee-card__image" />
      </div>

      <div className="coffee-card__body">
        <h3 className="coffee-card__name">{name}</h3>
        <p className="coffee-card__description">{description}</p>
        <span className="coffee-card__price">{price}</span>
      </div>
    </article>
  )
}

export default CoffeeCard