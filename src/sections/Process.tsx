import { motion } from 'framer-motion'
import HlsVideo from '../components/HlsVideo'

const MUX_ID_1 = '9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A'
const MUX_URL  = `https://stream.mux.com/${MUX_ID_1}.m3u8`

const STEPS = [
  { num: '01', title: 'Understand',   desc: 'Use AI to rapidly deconstruct complex systems, documentation, and patterns.' },
  { num: '02', title: 'Architect',    desc: 'Design the solution structure before a single line of code is written.' },
  { num: '03', title: 'Build + Debug', desc: 'Leverage AI for real-time debugging and shipping clean code at speed.' },
  { num: '04', title: 'Ship',         desc: 'Deploy fast, iterate in public, learn from every release.' },
]

export default function Process() {
  return (
    <section id="learning" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-light tracking-[0.3em] text-white/30 uppercase mb-5"
        >
          The Workflow
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading italic text-5xl md:text-6xl text-white mb-16 max-w-2xl"
        >
          The AI-Accelerated Workflow
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl overflow-hidden aspect-video"
          >
            <HlsVideo src={MUX_URL} className="opacity-80" />
          </motion.div>

          {/* Steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 py-6 border-b border-white/[0.05] last:border-0 group"
              >
                <span className="font-body font-light text-xs text-white/20 mt-1 w-6 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading italic text-xl text-white mb-1.5 group-hover:text-white/80 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-white/40 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 font-body font-light text-white/30 text-sm leading-relaxed"
            >
              I leverage AI to understand complex systems, debug in real-time, and
              ship high-quality code at the speed of thought. Learning by building
              is my core philosophy.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
