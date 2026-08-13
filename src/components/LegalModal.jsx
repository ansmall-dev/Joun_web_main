import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

// 푸터의 Terms / Privacy / Code of Conduct 링크로 열리는 법적 고지 모달.
// docKey: 'terms' | 'privacy' | 'conduct' (content.js의 legal 사전 키)
export default function LegalModal({ docKey, onClose }) {
  const { t } = useLang()
  const bodyRef = useRef(null)
  const doc = t.legal[docKey]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0
  }, [docKey])

  if (!doc) return null

  return (
    <div className="legal-modal" role="dialog" aria-modal="true" aria-label={doc.title} onClick={onClose}>
      <div className="legal-modal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal__header">
          <div>
            <h2 className="legal-modal__title">{doc.title}</h2>
            <p className="legal-modal__updated">
              {t.legal.updatedLabel}: {doc.updated}
            </p>
          </div>
          <button type="button" className="legal-modal__close" aria-label={t.legal.closeAria} onClick={onClose}>
            ×
          </button>
        </div>
        <div className="legal-modal__body" ref={bodyRef}>
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h3>{s.h}</h3>
              {s.ps.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
