import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

// 스크롤 진입 시 0 → 목표값으로 카운트업
function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, start)
  return (
    <div>
      <div className="stat__value">
        {value.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="stat__label">{stat.label}</div>
      <div className="stat__desc">{stat.desc}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useLang()
  const { stats } = t
  const ref = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats section--fit" id="why-joun" ref={ref}>
      <div className="container text-center">
        <Reveal>
          <p className="section-label section-label--center stats__label">{stats.label}</p>
          <h2 className="section-title stats__title">
            {stats.title.pre}
            <em>{stats.title.em}</em>
          </h2>
        </Reveal>
        <div className="stats__grid">
          {stats.items.map((s) => (
            <Stat key={s.label} stat={s} start={start} />
          ))}
        </div>
      </div>
    </section>
  )
}
