import { motion } from 'motion/react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1>New Season</h1>
        <p>An exploration of modern luxury</p>
        <button>Explore Collection</button>
      </motion.div>
    </section>
  )
}

export default Hero
