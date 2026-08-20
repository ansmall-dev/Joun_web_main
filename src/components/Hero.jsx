import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import maraLogo from '../assets/mara-logo.svg'
import jpLogo from '../assets/jp-logo.svg'

export default function Hero() {
  const { t } = useLang()
  const { hero } = t

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__location">{SITE.location}</p>
        <h1 className="hero__title">
          {hero.line1}
          <br />
          {hero.line2.pre}
          <em>{hero.line2.em}</em>
          {hero.line2.post}
        </h1>
        <p className="hero__desc">{hero.desc}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            {hero.ctaPrimary}
          </a>
          <a href="#services" className="btn btn--outline">
            {hero.ctaSecondary}
          </a>
        </div>

        <div className="hero__badges">
          <img className="hero__badge-img hero__badge-img--mara" src={maraLogo} alt="Migration Agents Registration Authority" />
          <span className="hero__badge-divider" aria-hidden="true" />
          <div className="hero__badge-text">
            <span className="hero__badge-label">{hero.badgeLabel}</span>
            <span className="hero__badge-value">{SITE.marn}</span>
          </div>
          <span className="hero__badge-divider" aria-hidden="true" />
          <img className="hero__badge-img hero__badge-img--jp" src={jpLogo} alt="Justice of the Peace" />
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        Scroll
      </div>
    </section>
  )
}
