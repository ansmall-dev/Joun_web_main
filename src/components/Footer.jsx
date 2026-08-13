import { useState } from 'react'
import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import LegalModal from './LegalModal.jsx'
import maraLogo from '../assets/mara-logo.svg'
import maraNumber from '../assets/mara-number.svg'
import jpLogo from '../assets/jp-logo.svg'

const BADGE_LOGOS = { mara: maraLogo, maraNumber, jp: jpLogo }

export default function Footer() {
  const { t } = useLang()
  const { footer } = t
  const year = new Date().getFullYear()
  const [legalDoc, setLegalDoc] = useState(null)

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
            {footer.badges
              .filter((b) => !b.image)
              .map((b) => (
                <div className="footer-badge" key={b.label}>
                  <div className="footer-badge__text">
                    <div className="footer-badge__label">{b.label}</div>
                    <div className="footer-badge__value">{b.value}</div>
                  </div>
                </div>
              ))}
          </div>

          <div className="footer__logos">
            <img className="footer__logo-img footer__logo-img--mara" src={maraLogo} alt="Migration Agents Registration Authority" />
            <img className="footer__logo-img footer__logo-img--marn" src={maraNumber} alt={`Migration Agents Registration Number ${SITE.marn.replace('MARN ', '')}`} />
            <img className="footer__logo-img footer__logo-img--jp" src={jpLogo} alt="Justice of the Peace" />
          </div>
        </div>

        <p className="footer__disclaimer">{footer.disclaimer}</p>

        <div className="footer__bottom">
          <span>
            © {year} {SITE.nameKo} ({SITE.nameEn}). {footer.rights} · {SITE.abn}
          </span>
          <div className="footer__legal">
            <button type="button" onClick={() => setLegalDoc('terms')}>{footer.terms}</button>
            <button type="button" onClick={() => setLegalDoc('privacy')}>{footer.privacy}</button>
            <button type="button" onClick={() => setLegalDoc('conduct')}>{footer.conduct}</button>
          </div>
        </div>
      </div>

      {legalDoc && <LegalModal docKey={legalDoc} onClose={() => setLegalDoc(null)} />}
    </footer>
  )
}
