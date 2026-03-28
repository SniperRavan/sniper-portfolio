import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const NAV_LINKS = ['Home', 'Projects', 'Stack', 'Learning']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ${
        scrolled ? 'liquid-glass border-b border-white/[0.06]' : ''
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-heading italic text-2xl text-white tracking-tight select-none"
      >
        SR
      </a>

      {/* Center pill nav */}
      <div className="liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1 hidden md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-4 py-1.5 text-sm font-body font-light text-white/70 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
          >
            {link}
          </a>
        ))}
      </div>

      {/* GitHub CTA */}
      <a
        href="https://github.com/SniperRavan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white text-black text-sm font-body font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors duration-200"
      >
        GitHub
        <ArrowUpRight size={14} />
      </a>
    </motion.nav>
  )
}
