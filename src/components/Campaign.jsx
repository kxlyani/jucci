import { motion } from 'framer-motion'
import './Campaign.css'

function Campaign() {
  return (
    <section className="campaign">
      <motion.div
        className="campaign-image"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
          alt="Campaign"
        />
      </motion.div>

      <motion.div
        className="campaign-content"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="campaign-label">Campaign</span>
        <h2>The Art of Modern Elegance</h2>
        <p>
          Rooted in craftsmanship and driven by contemporary expression,
          MARKET explores a vision of fashion that transcends seasons.
          Each piece is designed with intention, confidence, and quiet luxury.
        </p>
        <p>
          This campaign reflects a dialogue between heritage and innovation —
          where silhouettes speak softly, yet leave a lasting impression.
        </p>
      </motion.div>
    </section>
  )
}

export default Campaign
