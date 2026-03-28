import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'

const MUX_ID_2 = 'NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM'
const MUX_URL  = `https://stream.mux.com/${MUX_ID_2}.m3u8`

const STATS = [
  { value: '100%', label: 'AI-Assisted Efficiency',  sub: 'Every project augmented' },
  { value: '24/7', label: 'Learning Cycle',           sub: 'Always in build mode' },
  { value: '3+',   label: 'Production-Ready Projects', sub: 'Shipped & documented' },
  { value: 'Fast', label: 'Learning Velocity',        sub: 'Weeks → days with AI' },
]

function BwVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(MUX_URL)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = MUX_URL
      video.play().catch(() => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: 'grayscale(100%) brightness(0.25) contrast(1.2)' }}
    />
  )
}

function StatCounter({ value, label, sub, index }: {
  value: string; label: string; sub: string; index: number
}) {
  const [counted, setCounted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={() => { setCounted(true); return { opacity: 1, y: 0 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="text-center px-6 py-8 relative"
    >
      <div className="font-heading italic text-6xl md:text-7xl text-white mb-2 leading-none">
        {value}
      </div>
      <div className="font-body font-medium text-white/70 text-sm mb-1">{label}</div>
      <div className="font-body font-light text-white/30 text-xs">{sub}</div>
    </motion.div>
  )
}

export default function Stats() {
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
            By the numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading italic text-5xl md:text-6xl text-white"
          >
            Growth in Motion
          </motion.h2>
        </div>

        {/* Video + Stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-2xl overflow-hidden relative min-h-[420px]"
        >
          {/* BW background video */}
          <BwVideo />

          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

          {/* Stats grid */}
          <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06] h-full">
            {STATS.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
