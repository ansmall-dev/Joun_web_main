import { useEffect, useRef } from 'react'

// active인 동안 컨테이너 안에 Tab 포커스를 가두고,
// Escape 시 onEscape 호출, 비활성화되면 이전 포커스를 복원한다. (접근성 v1.0)
export function useFocusTrap(active, { onEscape } = {}) {
  const ref = useRef(null)
  const onEscapeRef = useRef(onEscape)
  onEscapeRef.current = onEscape

  useEffect(() => {
    if (!active || !ref.current) return
    const container = ref.current
    const previous = document.activeElement

    const focusables = () =>
      [
        ...container.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((el) => !el.disabled && el.getClientRects().length > 0)

    const first = focusables()[0]
    if (first) first.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onEscapeRef.current?.()
        return
      }
      if (e.key !== 'Tab') return
      const els = focusables()
      if (!els.length) return
      const firstEl = els[0]
      const lastEl = els[els.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (previous && typeof previous.focus === 'function') previous.focus()
    }
  }, [active])

  return ref
}
