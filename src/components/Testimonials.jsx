import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Testimonials() {
  const { t } = useLang()
  const { testimonials } = t
  const [index, setIndex] = useState(0)
  const total = testimonials.items.length
  const safeIndex = index % total

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const current = testimonials.items[safeIndex]

  return (
    <section className="section section--fit" id="testimonials">
      <div className="container text-center">
        <Reveal>
          <p className="section-label section-label--center">{testimonials.label}</p>
          <h2 className="section-title">
            {testimonials.title.pre}
            <em>{testimonials.title.em}</em>
          </h2>
        </Reveal>

        <div className="testimonials__stage">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prev}
            aria-label={testimonials.prevAria}
          >
            ←
          </button>

          <figure className="testimonial-card" aria-live="polite">
            <div className="testimonial-card__stars" aria-label={testimonials.starsAria(current.stars)}>
              {'★'.repeat(current.stars)}
            </div>
            <blockquote className="testimonial-card__quote">{current.quote}</blockquote>
            <figcaption>
              <div className="testimonial-card__author">{current.author}</div>
              <div className="testimonial-card__case">{current.caseType}</div>
            </figcaption>
          </figure>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={next}
            aria-label={testimonials.nextAria}
          >
            →
          </button>

          <div className="testimonials__dots">
            {testimonials.items.map((item, i) => (
              <button
                key={item.author}
                className={`testimonials__dot ${i === safeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={testimonials.dotAria(i + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
