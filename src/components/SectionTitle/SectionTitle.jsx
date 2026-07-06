import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'
import './SectionTitle.css'

const SectionTitle = ({ eyebrow, title, align = 'left', light = false }) => {
  return (
    <motion.div
      className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
    </motion.div>
  )
}

export default SectionTitle
