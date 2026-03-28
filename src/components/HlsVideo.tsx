import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import clsx from 'clsx'

interface HlsVideoProps {
  src: string
  className?: string
  poster?: string
  muted?: boolean
  autoPlay?: boolean
  loop?: boolean
  playsInline?: boolean
  style?: React.CSSProperties
}

export default function HlsVideo({
  src,
  className,
  poster,
  muted = true,
  autoPlay = true,
  loop = true,
  playsInline = true,
  style,
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (src.includes('.m3u8') || src.includes('stream.mux.com')) {
      if (Hls.isSupported()) {
        const hls = new Hls({ maxBufferLength: 30, autoStartLoad: true })
        hls.loadSource(src)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => { video.play().catch(() => {}) })
        return () => hls.destroy()
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
        video.play().catch(() => {})
      }
    } else {
      video.src = src
      video.play().catch(() => {})
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={clsx('w-full h-full object-cover', className)}
      style={style}
      poster={poster}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline={playsInline}
    />
  )
}
