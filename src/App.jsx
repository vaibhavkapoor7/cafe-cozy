import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import FeaturedCoffee from './sections/FeaturedCoffee/FeaturedCoffee'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCoffee />
    </div>
  )
}

export default App