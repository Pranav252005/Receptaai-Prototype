import { useCallback, useRef } from 'react'

export default function useTilt(maxTilt = 12) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      // Tilt OPPOSITE to mouse position
      const rotateX = (y - 0.5) * maxTilt * 2
      const rotateY = (0.5 - x) * maxTilt * 2

      // Green glow on the rising side
      const glowX = x < 0.5 ? '100%' : '0%'
      const glowY = y < 0.5 ? '100%' : '0%'

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
      el.style.boxShadow = `
        0 20px 40px rgba(0, 0, 0, 0.3),
        inset 0 0 0 1px rgba(0, 200, 83, 0.12),
        ${glowX === '0%' ? '-' : ''}12px ${glowY === '0%' ? '-' : ''}12px 30px rgba(0, 200, 83, 0.18)
      `
    },
    [maxTilt],
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.boxShadow = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
