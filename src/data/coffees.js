import espresso from '../assets/images/coffee-espresso.png'
import flatWhite from '../assets/images/coffee-flat-white.png'
import mocha from '../assets/images/coffee-mocha.png'
import coldBrew from '../assets/images/coffee-cold-brew.png'

export const coffees = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Bold, rich and perfectly balanced.',
    price: '$3.50',
    image: espresso,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Smooth ristretto shots with velvety milk.',
    price: '$4.75',
    image: flatWhite,
    featured: true,
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk.',
    price: '$5.25',
    image: mocha,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Slow-steeped, smooth and refreshing.',
    price: '$4.95',
    image: coldBrew,
  },
]