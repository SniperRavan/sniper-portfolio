import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    num: '01',
    name: 'Supreme Journey',
    sub: 'Pomodoro Timer',
    desc: 'My first real shipped project. Built to understand time logic, UI state, and the satisfaction of making something that actually works. Simple, functional, honest.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/SniperRavan/supreme-journey',
    align: 'left', // text left, visual right
    gradient: 'from-white/[0.04] to-transparent',
  },
  {
    num: '02',
    name: 'Akash-Varta',
    sub: 'Experimental Chat App',
    desc: 'A deep dive into real-time communication — following a tutorial, watching it break, and learning more from the broken pieces than from any working demo. Still in the repo as proof.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/SniperRavan/Akash-Varta',
    align: 'right', // visual left, text right
    gradient: 'from-transparent to-white/[0.04]',
  },
]

function ProjectVisual({ num, name }: { num: string; name: string }) {
  return (
    <div className="liquid-glass rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group-hover:bg-white/[0.03] transition-colors duration-500">
      {/* Abstract visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-white/[0.06] flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-white/[0.08] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/[0.12]" />
          </div>
        </div>
      </div>
      {/* Number */}
      <span className="absolute top-6 left-6 font-body font-light text-xs text-white/20 tracking-widest">
        {num}
      </span>
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-white pointer-events-none" />
      {/* Name overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-transparent mb-4" />
        <p className="font-heading italic text-xl text-white/40">{name}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body font-light tracking-[0.3em] text-white/30 uppercase mb-5"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading italic text-5xl md:text-6xl text-white mb-20"
        >
          Things I've shipped
        </motion.h2>

        <div className="space-y-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid md:grid-cols-2 gap-8 items-center liquid-glass rounded-2xl p-8 hover:bg-white/[0.03] transition-all duration-500 ${
                  p.align === 'right' ? 'direction-rtl' : ''
                }`}
              >
                {/* Text side */}
                <div className={p.align === 'right' ? 'md:order-2' : ''}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-body font-light text-white/25 tracking-widest block mb-2">
                        {p.num} — {p.sub}
                      </span>
                      <h3 className="font-heading italic text-3xl md:text-4xl text-white">
                        {p.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-2"
                    />
                  </div>

                  <p className="font-body font-light text-white/40 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="liquid-glass rounded-full px-3 py-1 text-xs font-body font-light text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className={p.align === 'right' ? 'md:order-1' : ''}>
                  <ProjectVisual num={p.num} name={p.name} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Honest note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 liquid-glass rounded-2xl px-8 py-5 flex items-center gap-4"
        >
          <span className="text-white/20 text-lg">✦</span>
          <p className="font-body font-light text-white/30 text-sm">
            <span className="text-white/50">Honest note:</span> I'm a fresher. These three projects plus this portfolio are my current body of work. The quality of the code here is the pitch.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
