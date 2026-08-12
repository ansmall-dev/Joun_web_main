import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  const { footer } = t
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-ko">{t.brand.main}</div>
            <div className="footer__brand-en">{t.brand.sub}</div>
            <p className="footer__desc">{footer.desc}</p>
          </div>

          <div>
            <h3 className="footer__heading">{footer.servicesHeading}</h3>
            <ul className="footer__links">
              {footer.serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">{footer.firmHeading}</h3>
            <ul className="footer__links">
              {t.nav.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__badges">
            {footer.badges.map((b) => (
              <div className="footer-badge" key={b.label}>
                <div className="footer-badge__label">{b.label}</div>
                <div className="footer-badge__value">{b.value}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="footer__disclaimer">{footer.disclaimer}</p>

        <div className="footer__bottom">
          <span>
            © {year} {SITE.nameKo} ({SITE.nameEn}). {footer.rights}
          </span>
          <div className="footer__legal">
            <a href="#top">{footer.terms}</a>
            <a href="#top">{footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
