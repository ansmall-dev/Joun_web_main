import { useEffect, useState } from 'react'
import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import logo from '../assets/logo.svg'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 드로어가 열려 있는 동안 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const solid = scrolled || drawerOpen

  const langToggle = (
    <div className="header__lang" role="group" aria-label="Language / 언어">
      <button
        className={`header__lang-btn ${lang === 'en' ? 'header__lang-btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="header__lang-divider" aria-hidden="true">
        |
      </span>
      <button
        className={`header__lang-btn ${lang === 'ko' ? 'header__lang-btn--active' : ''}`}
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
      >
        한국어
      </button>
    </div>
  )

  return (
    <>
      <header className={`header ${solid ? 'header--solid' : ''}`}>
        <div className="container header__inner">
          <a href="#top" className="header__brand" aria-label={t.brand.main}>
            <img src={logo} alt={`${SITE.nameEn} logo`} className="header__logo" />
            <span className="header__brand-text">
              <span className="header__brand-ko">{t.brand.main}</span>
              <span className="header__brand-en">{t.brand.sub}</span>
            </span>
          </a>

          <nav className="header__nav" aria-label="Main menu">
            {t.nav.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            {langToggle}
            <a href="#contact" className="btn btn--primary header__cta">
              {t.ctaShort}
            </a>
          </div>

          <button
            className={`header__burger ${drawerOpen ? 'header__burger--open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer ${drawerOpen ? 'drawer--open' : ''}`}>
        {t.nav.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="drawer__link"
            onClick={() => setDrawerOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="drawer__lang">{langToggle}</div>
        <a
          href="#contact"
          className="btn btn--primary drawer__cta"
          onClick={() => setDrawerOpen(false)}
        >
          {t.cta}
        </a>
      </div>
    </>
  )
}
