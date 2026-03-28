import { motion } from 'framer-motion'

const ENTRIES = [
  {
    num: '001',
    date: 'On Code',
    quote: 'Code is a tool; the product is the goal.',
    body: 'Every line written is in service of something a user can feel or touch. Elegant code that ships nothing is less valuable than scrappy code that solves a real problem.',
  },
  {
    num: '002',
    date: 'On Failure',
    quote: 'I embrace the broken projects — they are where the real learning happens.',
    body: 'Akash-Varta broke spectacularly. I learned more about WebSockets, state management, and debugging mindset from that failure than from anything that worked first try.',
  },
  {
    num: '003',
    date: 'On Process',
    quote: 'Documentation and structure are my best friends.',
    body: 'I forget things. So I document obsessively. Every project gets a README. Every decision gets a note. This PRD is proof. Structure is how I compensate for memory — and it makes me a better collaborator.',
  },
]

export default function Logbook() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-body font-light tracking-[0.3em] text-white/30 uppercase mb-5"
            >
              The Logbook
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading italic text-5xl md:text-6xl text-white"
            >
              Developer Philosophy
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light text-white/30 text-sm max-w-xs leading-relaxed"
          >
            The principles I operate by — written honestly, without polish.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="liquid-glass rounded-2xl p-8 md:p-10 grid md:grid-cols-[80px_1fr_1.4fr] gap-6 md:gap-10 group cursor-default transition-all duration-300 hover:border-white/[0.1]"
            >
              {/* Number */}
              <div className="flex flex-row md:flex-col justify-between md:justify-start gap-2">
                <span className="font-body font-light text-xs text-white/20 tracking-widest">
                  {entry.num}
                </span>
                <span className="font-body font-light text-xs text-white/20 md:mt-auto">
                  {entry.date}
                </span>
              </div>

              {/* Quote */}
              <div>
                <span className="text-white/15 font-heading italic text-4xl leading-none select-none">
                  "
                </span>
                <p className="font-heading italic text-xl md:text-2xl text-white/80 leading-snug -mt-2">
                  {entry.quote}
                </p>
              </div>

              {/* Body */}
              <p className="font-body font-light text-white/35 text-sm leading-relaxed self-center">
                {entry.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
