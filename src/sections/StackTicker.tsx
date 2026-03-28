import { motion } from 'framer-motion'

const STACK = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Three.js',
  'GSAP', 'Supabase', 'Tailwind CSS', 'MongoDB', 'Vite',
  'Git', 'Framer Motion',
]

// Duplicate for seamless loop
const ITEMS = [...STACK, ...STACK]

export default function StackTicker() {
  return (
    <section id="stack" className="py-20 overflow-hidden border-y border-white/[0.05]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <span className="text-xs font-body font-light tracking-[0.3em] text-white/30 uppercase">
          Current Tech Arsenal
        </span>
      </motion.div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="ticker-track">
          {ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-heading italic text-3xl text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap flex items-center gap-8"
            >
              {item}
              <span className="text-white/10 text-base not-italic font-body">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
