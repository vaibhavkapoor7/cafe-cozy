import './SectionTitle.css'

const SectionTitle = ({ eyebrow, title, align = 'left', light = false }) => {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
    </div>
  )
}

export default SectionTitle