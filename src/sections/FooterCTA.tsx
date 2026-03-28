import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Mail } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="glow-orb w-[700px] h-[400px] bg-white/[0.03]"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass-strong rounded-3xl px-10 md:px-16 py-16 md:py-20 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-body font-light text-white/50 tracking-widest uppercase">
              Open to opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading italic text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
          >
            Ready to build something together?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light text-white/40 text-lg max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Currently looking for opportunities to grow within a team. I bring
            speed, curiosity, and a genuine love for front-end craft.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-2 bg-white text-black font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              <Mail size={14} />
              Let's Talk
            </a>
            <a
              href="https://github.com/SniperRavan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 liquid-glass rounded-full px-7 py-3.5 text-sm font-body font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              <Github size={14} />
              GitHub
              <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 px-2"
        >
          <span className="font-heading italic text-white/20 text-lg">SR</span>

          <div className="flex items-center gap-6">
            {['GitHub', 'Email', 'LinkedIn'].map(link => (
              <a
                key={link}
                href={link === 'GitHub' ? 'https://github.com/SniperRavan' : '#'}
                target={link === 'GitHub' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="font-body font-light text-xs text-white/25 hover:text-white/60 transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          <span className="font-body font-light text-xs text-white/20">
            © 2026 · Built by SniperRavan
          </span>
        </motion.div>
      </div>
    </section>
  )
}
