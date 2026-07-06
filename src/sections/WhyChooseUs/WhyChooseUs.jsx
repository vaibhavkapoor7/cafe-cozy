import { motion } from 'framer-motion'
import { FaSeedling, FaLeaf } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuArmchair } from 'react-icons/lu'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { features } from '../../data/features'
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import './WhyChooseUs.css'

const featureIcons = {
  beans: <FaSeedling />,
  leaf: <FaLeaf />,
  barista: <FiUsers />,
  ambience: <LuArmchair />,
}

const WhyChooseUs = () => {
  return (
    <section className="why section" id="why" data-navbar-theme="light">
      <div className="why__container container">

        <SectionTitle
          eyebrow="Why Choose Us"
          title="More Than Just Coffee"
          align="center"
        />

        <motion.div
          className="why__grid"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={staggerItem}>
              <FeatureCard
                icon={featureIcons[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs
