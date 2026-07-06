import { FaSeedling, FaLeaf } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { LuArmchair } from 'react-icons/lu'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { features } from '../../data/features'
import './WhyChooseUs.css'

const featureIcons = {
  beans: <FaSeedling />,
  leaf: <FaLeaf />,
  barista: <FiUsers />,
  ambience: <LuArmchair />,
}

const WhyChooseUs = () => {
  return (
    <section className="why section" id="why">
      <div className="why__container container">

        <SectionTitle
          eyebrow="Why Choose Us"
          title="More Than Just Coffee"
          align="center"
        />

        <div className="why__grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={featureIcons[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs