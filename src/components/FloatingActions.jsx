import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'

// 모바일 전용 플로팅 버튼 (전화 · 문자) — F-06
export default function FloatingActions() {
  const { t } = useLang()

  return (
    <div className="floating">
      <a
        href={`tel:${SITE.phone.replace(/\s/g, '')}`}
        className="floating__btn floating__btn--call"
        aria-label={t.floating.callAria}
      >
        📞
      </a>
      <a
        href={`sms:${SITE.smsOnly.replace(/\s/g, '')}`}
        className="floating__btn floating__btn--kakao"
        aria-label={t.floating.smsAria}
      >
        💬
      </a>
    </div>
  )
}
