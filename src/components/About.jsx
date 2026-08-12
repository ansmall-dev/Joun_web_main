import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLang()
  const { about } = t

  return (
    <section className="section section--fit" id="about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__portrait-wrap">
            <div className="about__portrait">
              {/* [확인 필요] 대표 프로필 사진 확보 후 <img> 로 교체 */}
              <div className="about__portrait-icon">壽</div>
              <span className="about__portrait-note">{about.portraitNote}</span>
            </div>
            <div className="about__badge">
              <div className="about__badge-label">{about.badgeLabel}</div>
              <div className="about__badge-value">{SITE.marn}</div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="section-label">{about.label}</p>
              <h2 className="section-title">
                {about.title}
                <em>.</em>
              </h2>
              <p className="about__bio">{about.bio}</p>
            </Reveal>
            <div className="about__values">
              {about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div className="value-card">
                    <span className="value-card__num">0{i + 1}</span>
                    <div>
                      <h3 className="value-card__title">{v.title}</h3>
                      <p className="value-card__desc">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
