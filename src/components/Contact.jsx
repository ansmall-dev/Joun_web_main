import { useState } from 'react'
import { SITE } from '../data/content.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { t } = useLang()
  const { contact } = t
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const contactItems = [
    { icon: '📍', label: contact.itemLabels.office, value: SITE.address },
    {
      icon: '📞',
      label: contact.itemLabels.phone,
      value: SITE.phone,
      href: `tel:${SITE.phone.replace(/\s/g, '')}`,
    },
    {
      icon: '💬',
      label: contact.itemLabels.sms,
      value: SITE.smsOnly,
      href: `sms:${SITE.smsOnly.replace(/\s/g, '')}`,
    },
    { icon: '✉️', label: contact.itemLabels.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: '🕘', label: contact.itemLabels.hours, value: contact.hours },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    // 허니팟(스팸 방지): 봇이 채우면 조용히 무시
    if (data.get('company')) return

    // F-02: FormSubmit AJAX 엔드포인트로 전송 → info@jounlawyer.com 수신
    setSending(true)
    setError(false)
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section section--alt section--fit" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal>
            <p className="section-label">{contact.label}</p>
            <h2 className="section-title">
              {contact.title.pre}
              <em>{contact.title.em}</em>
            </h2>
            <p className="section-sub">{contact.sub}</p>

            <div className="contact__list">
              {contactItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <div className="contact-item__label">{item.label}</div>
                    <div className="contact-item__value">
                      {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__map">
              <iframe
                src={SITE.mapEmbed}
                title={contact.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ width: '100%', height: '200px', border: 0, display: 'block' }}
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="form">
              {submitted ? (
                <div className="form__success">
                  <div className="form__success-icon">✓</div>
                  <h3 className="form__title">{contact.form.successTitle}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{contact.form.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form__title">{contact.form.title}</h3>

                  {/* FormSubmit 설정 필드 */}
                  <input type="hidden" name="_subject" value="[Joun Lawyers] New Consultation Request" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  {/* 허니팟 필드 — 사람에게는 보이지 않음 */}
                  <div className="form__hp" aria-hidden="true">
                    <label>
                      {contact.form.honeypotLabel}{' '}
                      <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                    </label>
                  </div>

                  <div className="form__row">
                    <div className="form__group">
                      <label className="form__label" htmlFor="f-name">
                        {contact.form.name} <span className="req">*</span>
                      </label>
                      <input className="form__input" id="f-name" name="name" required />
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="f-phone">
                        {contact.form.phone} <span className="req">*</span>
                      </label>
                      <input className="form__input" id="f-phone" name="phone" required />
                    </div>
                  </div>

                  <div className="form__row">
                    <div className="form__group">
                      <label className="form__label" htmlFor="f-email">
                        {contact.form.email}
                      </label>
                      <input className="form__input" id="f-email" name="email" type="email" />
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="f-date">
                        {contact.form.date}
                      </label>
                      <input
                        className="form__input"
                        id="f-date"
                        name="preferredDate"
                        type="datetime-local"
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="f-field">
                      {contact.form.field}
                    </label>
                    <select className="form__select" id="f-field" name="field" defaultValue="">
                      <option value="" disabled>
                        {contact.form.fieldPlaceholder}
                      </option>
                      {contact.form.fields.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="f-message">
                      {contact.form.message} <span className="req">*</span>
                    </label>
                    <textarea
                      className="form__textarea"
                      id="f-message"
                      name="message"
                      required
                      placeholder={contact.form.messagePlaceholder}
                    />
                  </div>

                  <label className="form__consent">
                    <input type="checkbox" required name="consent" />
                    <span>
                      {contact.form.consent} <span className="req">*</span>
                    </span>
                  </label>

                  {error && <p className="form__error">{contact.form.error}</p>}

                  <button type="submit" className="btn btn--primary form__submit" disabled={sending}>
                    {sending ? contact.form.submitting : contact.form.submit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
