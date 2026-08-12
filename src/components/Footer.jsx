import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import maraLogo from '../assets/mara-logo.svg'
import maraNumber from '../assets/mara-number.svg'
import jpLogo from '../assets/jp-logo.svg'

const BADGE_LOGOS = { mara: maraLogo, maraNumber, jp: jpLogo }

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
            {footer.badges.map((b) =>
              b.image ? (
                <div className="footer-badge footer-badge--image" key={b.label}>
                  <img className="footer-badge__img" src={BADGE_LOGOS[b.image]} alt={b.label} />
                </div>
              ) : (
                <div className="footer-badge" key={b.label}>
                  <div className="footer-badge__text">
                    <div className="footer-badge__label">{b.label}</div>
                    <div className="footer-badge__value">{b.value}</div>
                  </div>
                  {b.logo && BADGE_LOGOS[b.logo] && (
                    <img
                      className={`footer-badge__logo ${b.logo === 'mara' ? 'footer-badge__logo--wide' : ''}`}
                      src={BADGE_LOGOS[b.logo]}
                      alt={`${b.label} logo`}
                    />
                  )}
                </div>
              )
            )}
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
