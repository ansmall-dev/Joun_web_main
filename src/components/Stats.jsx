import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

// 조은의 약속 — 정성적 원칙 카드 (기존 숫자 카운터는 근거 미확정으로 제거, v1.0)
export default function Stats() {
  const { t } = useLang()
  const { stats } = t

  return (
    <section className="stats section--fit section--fill" id="why-joun">
      <div className="container text-center">
        <Reveal>
          <p className="section-label section-label--center stats__label">{stats.label}</p>
          <h2 className="section-title stats__title">
            {stats.title.pre}
            <em>{stats.title.em}</em>
          </h2>
        </Reveal>
        <div className="stats__grid">
          {stats.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div>
                <div className="stat__value stat__value--word">{s.value}</div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__desc">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
