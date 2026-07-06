import { useState } from 'react'
import { FiCoffee, FiArrowRight } from 'react-icons/fi'
import { LuLeaf, LuCakeSlice, LuEgg } from 'react-icons/lu'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { menuCategories, menuItems } from '../../data/menu'
import menuImg from '../../assets/images/menu-coffee.png'
import './Menu.css'

const categoryIcons = {
  coffee: <FiCoffee />,
  tea: <LuLeaf />,
  desserts: <LuCakeSlice />,
  brunch: <LuEgg />,
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')

  const items = menuItems[activeCategory]

  return (
    <section className="menu section" id="menu">

      <div className="menu__image-wrapper">
        <img src={menuImg} alt="A freshly prepared coffee" className="menu__image" />
        <a href="#full-menu" className="menu__view-btn">
          View Full Menu
          <FiArrowRight />
        </a>
      </div>

      <div className="menu__container container">

        <SectionTitle
          eyebrow="Our Menu"
          title="Made With Love"
          align="center"
        />

        <div className="menu__layout">

          <div className="menu__tabs">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`menu__tab ${activeCategory === category.id ? 'menu__tab--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="menu__tab-icon">{categoryIcons[category.id]}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="menu__items" style={{ '--menu-rows': Math.ceil(items.length / 2) }}>
            {items.map((item) => (
              <div className="menu__item" key={item.id}>
                <span className="menu__item-name">{item.name}</span>
                <span className="menu__item-dots"></span>
                <span className="menu__item-price">{item.price}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Menu