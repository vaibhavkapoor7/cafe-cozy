import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { galleryImages } from '../../data/gallery'
import { fadeUp, viewportOnce } from '../../lib/motion'
import './Gallery.css'

const DEFAULT_COLS = [1, 1, 1, 1]
const DEFAULT_ROWS = [1, 1, 1]

// One entry per gallery image (in data order), matching its column/row in the
// staggered layout: grow that tile's tracks, shrink the rest.
const HOVER_TARGETS = [
  { cols: [1.6, 1.6, 0.7, 0.7], rows: [1.5, 1.5, 0.6] },
  { cols: [0.7, 0.7, 1.9, 0.7], rows: [1.8, 0.6, 0.6] },
  { cols: [0.7, 0.7, 0.7, 1.9], rows: [1.8, 0.6, 0.6] },
  { cols: [0.7, 0.7, 1.9, 0.7], rows: [0.6, 1.5, 1.5] },
  { cols: [0.7, 0.7, 0.7, 1.9], rows: [0.6, 1.8, 0.6] },
  { cols: [1.6, 1.6, 0.7, 0.7], rows: [0.6, 0.6, 1.8] },
]

const ANIMATION_DURATION = 1200
const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5)
const DESKTOP_QUERY = '(min-width: 901px)'

const Gallery = () => {
  const gridRef = useRef(null)
  const frameRef = useRef(null)
  const currentRef = useRef({ cols: [...DEFAULT_COLS], rows: [...DEFAULT_ROWS] })

  const applyTracks = (cols, rows) => {
    const grid = gridRef.current
    if (!grid) return
    grid.style.gridTemplateColumns = cols.map((v) => `${v}fr`).join(' ')
    grid.style.gridTemplateRows = rows.map((v) => `${v}fr`).join(' ')
  }

  const animateTo = (targetCols, targetRows) => {
    // Below the tablet breakpoint the grid falls back to a simple, uniform
    // CSS layout (see Gallery.css) — skip the JS-driven resize entirely so
    // it doesn't leave stale inline track sizes fighting that layout.
    if (!window.matchMedia(DESKTOP_QUERY).matches) return
    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    const startCols = [...currentRef.current.cols]
    const startRows = [...currentRef.current.rows]
    const startTime = performance.now()

    const step = (now) => {
      const t = Math.min((now - startTime) / ANIMATION_DURATION, 1)
      const eased = easeOutQuint(t)

      const cols = startCols.map((v, i) => v + (targetCols[i] - v) * eased)
      const rows = startRows.map((v, i) => v + (targetRows[i] - v) * eased)

      currentRef.current = { cols, rows }
      applyTracks(cols, rows)

      if (t < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)

    const sync = () => {
      if (mql.matches) {
        currentRef.current = { cols: [...DEFAULT_COLS], rows: [...DEFAULT_ROWS] }
        applyTracks(DEFAULT_COLS, DEFAULT_ROWS)
      } else if (gridRef.current) {
        if (frameRef.current) cancelAnimationFrame(frameRef.current)
        gridRef.current.style.gridTemplateColumns = ''
        gridRef.current.style.gridTemplateRows = ''
      }
    }

    sync()
    mql.addEventListener('change', sync)
    return () => {
      mql.removeEventListener('change', sync)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <section className="gallery section" id="gallery" data-navbar-theme="dark">
      <div className="gallery__container container">

        <motion.div
          className="gallery__intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionTitle
            eyebrow="Gallery"
            title="Moments At Cozy"
            align="left"
            light
          />
          <p className="gallery__text">
            A glimpse into our space, our coffee, and the people who make it special.
          </p>
          <a href="#full-gallery" className="gallery__link">
            View All Gallery
            <FiArrowRight />
          </a>
        </motion.div>

        <motion.div
          className="gallery__grid"
          ref={gridRef}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {galleryImages.map((image, index) => (
            <div
              className={`gallery__item gallery__item--${image.size}`}
              key={image.id}
              onMouseEnter={() => animateTo(HOVER_TARGETS[index].cols, HOVER_TARGETS[index].rows)}
              onMouseLeave={() => animateTo(DEFAULT_COLS, DEFAULT_ROWS)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__image"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Gallery
