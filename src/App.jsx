import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import { LanguageProvider, useLang } from './i18n/LanguageContext.jsx'

// 키보드 사용자용 본문 바로가기 링크 — 포커스 시에만 표시
function SkipLink() {
  const { t } = useLang()
  return (
    <a href="#main" className="skip-link">
      {t.a11y.skipLink}
    </a>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  )
}
