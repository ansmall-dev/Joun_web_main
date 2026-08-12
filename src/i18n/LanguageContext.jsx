import { createContext, useContext, useEffect, useState } from 'react'
import { CONTENT } from '../data/content.js'

// F-08: 영/한 다국어 — 기본 언어는 영어(en), 선택은 localStorage에 유지
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('joun-lang')
    return saved === 'ko' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('joun-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
