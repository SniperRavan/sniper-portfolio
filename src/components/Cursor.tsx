import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const dot  = dotRef.current!
    const ring = ringRef.current!
    let mx = -100, my = -100, rx = -100, ry = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx - 3}px,${my - 3}px)`
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      rx = lerp(rx, mx, 0.1); ry = lerp(ry, my, 0.1)
      ring.style.transform = `translate(${rx - 16}px,${ry - 16}px)`
      raf = requestAnimationFrame(tick)
    }

    const addHover  = () => ring.classList.add('hovered')
    const remHover  = () => ring.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    const bindHover = () => {
      document.querySelectorAll('a,button,[role="button"]').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', remHover)
      })
    }
    bindHover()
    const obs = new MutationObserver(bindHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
