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
          <div>
            <Reveal>
              <p className="section-label">{about.label}</p>
              <h2 className="section-title">
                {about.title}
                <em>.</em>
              </h2>
              <p className="about__bio">{about.bio}</p>
              <div className="about__principal">
                <p className="about__principal-name">
                  {about.principal.name}
                  <span className="about__principal-role">{about.principal.role}</span>
                </p>
                <p className="about__principal-credentials">
                  {SITE.marn} · {SITE.jpNumber}
                </p>
                <p className="about__principal-intro">{about.principal.intro}</p>
              </div>
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
