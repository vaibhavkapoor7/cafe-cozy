import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import FeaturedCoffee from './sections/FeaturedCoffee/FeaturedCoffee'
import Menu from './sections/Menu/Menu'
import Gallery from './sections/Gallery/Gallery'
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs'
import Testimonials from './sections/Testimonials/Testimonials'
import Location from './sections/Location/Location'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCoffee />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  )
}

export default App