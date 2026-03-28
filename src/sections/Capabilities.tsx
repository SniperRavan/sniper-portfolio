import { motion } from 'framer-motion'

const CAPABILITIES = [
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    desc: 'Concept to UI in record time. I use AI as a co-pilot to compress weeks of exploration into focused build sessions.',
    detail: 'HTML · CSS · React · Vite',
  },
  {
    icon: '🎨',
    title: 'Visual Precision',
    desc: 'Pixel-perfect execution using Canva for asset creation and Tailwind CSS for systematic, scalable design implementation.',
    detail: 'Tailwind · Canva · Framer Motion',
  },
  {
    icon: '🗄️',
    title: 'Data Management',
    desc: 'Handling user inputs, logic flows, and structured data. From JavaScript state to spreadsheet-level organization.',
    detail: 'JS · Excel · Supabase · MongoDB',
  },
  {
    icon: '🚀',
    title: 'Continuous Learning',
    desc: 'Currently mastering Three.js for 3D interfaces and Supabase for real-time backends. Learning in public, shipping in progress.',
    detail: 'Three.js · Supabase · WebGL · GSAP',
  },
]

export default function Capabilities() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-body font-light tracking-[0.3em] text-white/30 uppercase mb-5"
          >
            What I bring
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading italic text-5xl md:text-6xl text-white max-w-xl"
          >
            Core Capabilities
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="liquid-glass-strong rounded-2xl p-8 group cursor-default"
            >
              {/* Icon */}
              <div className="text-3xl mb-6 select-none group-hover:scale-110 transition-transform duration-300 inline-block">
                {cap.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading italic text-2xl text-white mb-3">
                {cap.title}
              </h3>

              {/* Desc */}
              <p className="font-body font-light text-white/40 text-sm leading-relaxed mb-6">
                {cap.desc}
              </p>

              {/* Detail chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {cap.detail.split(' · ').map(d => (
                  <span
                    key={d}
                    className="text-xs font-body font-light text-white/25 tracking-wide"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
