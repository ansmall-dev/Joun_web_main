import { useLang } from '../i18n/LanguageContext.jsx'

export default function CtaBanner() {
  const { t } = useLang()
  const { ctaBanner } = t

  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2 className="cta-banner__title">
            {ctaBanner.titleLine1.pre}
            <em>{ctaBanner.titleLine1.em}</em>
            {ctaBanner.titleLine1.post}
            <br />
            {ctaBanner.titleLine2}
          </h2>
          <div className="cta-banner__trust">
            {ctaBanner.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <a href="#contact" className="btn btn--gold">
          {ctaBanner.button}
        </a>
      </div>
    </section>
  )
}
