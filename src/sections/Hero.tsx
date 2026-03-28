import { motion } from 'framer-motion'
import { Download, ChevronDown } from 'lucide-react'
import BlurText from '../components/BlurText'

// Cloudfront video placeholder — replace VIDEO_URL with your actual cloudfront URL
const HERO_VIDEO_URL = 'https://your-cloudfront-url.cloudfront.net/hero-bg.mp4'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0" style={{ top: '20%' }}>
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain opacity-30"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {/* Fallback gradient when video not available */}
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] via-transparent to-transparent" />
      </div>

      {/* Ambient glow orbs */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-white/[0.025]"
        style={{ top: '-10%', left: '-15%' }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bg-white/[0.02]"
        style={{ bottom: '10%', right: '-10%' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-full px-4 py-2 mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow" />
          <span className="text-xs font-body font-light text-white/70 tracking-wide">
            Now building with Three.js &amp; AI
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="font-heading italic text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-8">
          <BlurText
            text="Building the Web, One Prompt at a Time"
            delay={0.2}
          />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-body font-light text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          I'm Akash. I don't just write code—I architect experiences using AI to
          bridge the gap between imagination and deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 justify-center"
        >
          <a
            href="#projects"
            className="liquid-glass-strong rounded-full px-7 py-3.5 text-sm font-body font-medium text-white hover:bg-white/[0.08] transition-all duration-300"
          >
            View My Journey
          </a>
          <a
            href="#"
            className="liquid-glass rounded-full px-7 py-3.5 text-sm font-body font-medium text-white/60 hover:text-white flex items-center gap-2 transition-all duration-300"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-xs font-body tracking-widest uppercase">
            scroll
          </span>
          <ChevronDown size={14} className="text-white/25 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
