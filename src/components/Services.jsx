import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

function ServiceGroup({ title, tag, tagClass, services, cardClass, linkLabel }) {
  return (
    <div className="services__group">
      <div className="services__group-head">
        <h3 className="services__group-title">{title}</h3>
        <span className={`services__group-tag ${tagClass}`}>{tag}</span>
      </div>
      <div className="services__grid">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className={`service-card ${cardClass}`}>
              <div className="service-card__icon" aria-hidden="true">
                {s.icon}
              </div>
              <div>
                <h4 className="service-card__title">{s.title}</h4>
                <p className="service-card__sub">{s.sub}</p>
              </div>
              <p className="service-card__desc">{s.desc}</p>
              <a href="#contact" className="service-card__link">
                {linkLabel}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useLang()
  const { services } = t

  return (
    <section className="section section--alt section--fit" id="services">
      <div className="container text-center">
        <Reveal>
          <p className="section-label section-label--center">{services.label}</p>
          <h2 className="section-title">
            {services.title.pre}
            <em>{services.title.em}</em>
          </h2>
          <p className="section-sub">{services.sub}</p>
        </Reveal>

        <div style={{ textAlign: 'left' }}>
          <ServiceGroup
            title={services.groups.migration.title}
            tag={services.groups.migration.tag}
            tagClass="services__group-tag--migration"
            services={services.migration}
            cardClass=""
            linkLabel={services.linkLabel}
          />
          <ServiceGroup
            title={services.groups.legal.title}
            tag={services.groups.legal.tag}
            tagClass="services__group-tag--legal"
            services={services.legal}
            cardClass="service-card--legal"
            linkLabel={services.linkLabel}
          />
        </div>
      </div>
    </section>
  )
}
