import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

// 익명화된 사례 요약 캐러셀 — 창작 후기 대신 실무 방식을 보여주는 사례로 대체 (v1.0)
export default function Testimonials() {
  const { t } = useLang()
  const { cases } = t
  const [index, setIndex] = useState(0)
  const total = cases.items.length
  const safeIndex = index % total

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const current = cases.items[safeIndex]

  return (
    <section className="section section--fit section--fill" id="cases">
      <div className="container text-center">
        <Reveal>
          <p className="section-label section-label--center">{cases.label}</p>
          <h2 className="section-title">
            {cases.title.pre}
            <em>{cases.title.em}</em>
          </h2>
        </Reveal>

        <div className="testimonials__stage">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prev}
            aria-label={cases.prevAria}
          >
            ←
          </button>

          <article className="testimonial-card case-card" aria-live="polite">
            <div className="case-card__type">{current.caseType}</div>
            <div className="case-card__row">
              <span className="case-card__label">{cases.situationLabel}</span>
              <p className="case-card__text">{current.situation}</p>
            </div>
            <div className="case-card__row">
              <span className="case-card__label">{cases.approachLabel}</span>
              <p className="case-card__text">{current.approach}</p>
            </div>
          </article>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={next}
            aria-label={cases.nextAria}
          >
            →
          </button>

          <div className="testimonials__dots">
            {cases.items.map((item, i) => (
              <button
                key={item.caseType}
                className={`testimonials__dot ${i === safeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={cases.dotAria(i + 1)}
              />
            ))}
          </div>
        </div>

        <p className="cases__disclaimer">{cases.disclaimer}</p>
      </div>
    </section>
  )
}
