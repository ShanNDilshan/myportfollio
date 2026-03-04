import emailjs from '@emailjs/browser'
import { useState, useRef, FormEvent } from 'react'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

type Toast = { type: 'success' | 'error'; msg: string } | null

const MAX = { name: 80, email: 120, subject: 150, message: 2000 }

function validate(name: string, email: string, subject: string, message: string) {
  if (!name.trim() || name.trim().length > MAX.name) return `Name must be 1–${MAX.name} characters.`
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.'
  if (!subject.trim() || subject.trim().length > MAX.subject) return `Subject must be 1–${MAX.subject} characters.`
  if (!message.trim() || message.trim().length > MAX.message) return `Message must be 1–${MAX.message} characters.`
  return null
}

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState<Toast>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const showToast = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 5000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = e.currentTarget
    const name = (f.elements.namedItem('name') as HTMLInputElement).value
    const email = (f.elements.namedItem('email') as HTMLInputElement).value
    const subject = (f.elements.namedItem('subject') as HTMLInputElement).value
    const message = (f.elements.namedItem('message') as HTMLTextAreaElement).value
    const hp = (f.elements.namedItem('website') as HTMLInputElement).value

    // Honeypot check
    if (hp) return

    const err = validate(name, email, subject, message)
    if (err) { showToast('error', err); return }

    setSending(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.trim().slice(0, MAX.name),
          from_email: email.trim().slice(0, MAX.email),
          subject: subject.trim().slice(0, MAX.subject),
          message: message.trim().slice(0, MAX.message),
        },
        PUBLIC_KEY,
      )
      showToast('success', 'Message sent! I\'ll reply within 24 hours. 🚀')
      f.reset()
    } catch {
      showToast('error', 'Failed to send — please email me directly at shanukanimeshdilshan@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 container-wide">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="badge badge-success mb-4" style={{ fontFamily: 'Sora,sans-serif' }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--success)' }} />
          Open to opportunities
        </span>
        <h2 className="section-title block">Let&apos;s Work Together</h2>
        <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
          Have a project in mind? I&apos;d love to hear about it. Drop me a message or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-4xl mx-auto">
        {/* ── Left: info ── */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
              label: 'Email',
              val: 'shanukanimeshdilshan@gmail.com',
              href: 'mailto:shanukanimeshdilshan@gmail.com',
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
              label: 'LinkedIn',
              val: 'linkedin.com/in/shanndilshan',
              href: 'https://www.linkedin.com/in/shanndilshan',
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>,
              label: 'GitHub',
              val: 'github.com/ShanNDilshan',
              href: 'https://github.com/ShanNDilshan',
            },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 group"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
            >
              <div
                className="p-2 rounded-lg flex-shrink-0"
                style={{ background: 'rgba(124,88,252,0.15)', color: 'var(--primary)' }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>{item.label}</div>
                <div className="text-sm font-medium break-all" style={{ color: 'var(--text)' }}>{item.val}</div>
              </div>
            </a>
          ))}

          {/* Response time */}
          <div
            className="p-4 rounded-xl text-sm"
            style={{ background: 'rgba(6,229,212,0.06)', border: '1px solid rgba(6,229,212,0.18)', color: 'var(--text-muted)' }}
          >
            ⚡ <strong style={{ color: 'var(--cyan)' }}>Typical response time:</strong> within 24 hours
          </div>
        </div>

        {/* ── Right: form ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:col-span-3 flex flex-col gap-4"
          noValidate
        >
          {/* Honeypot – hidden from humans */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, width: 0, height: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>
                Your Name <span style={{ color: 'var(--error)' }}>*</span>
              </label>
              <input
                name="name"
                type="text"
                required
                maxLength={MAX.name}
                placeholder="Shanuka Dilshan"
                className="form-input"
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>
                Email Address <span style={{ color: 'var(--error)' }}>*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                maxLength={MAX.email}
                placeholder="you@company.com"
                className="form-input"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>
              Subject <span style={{ color: 'var(--error)' }}>*</span>
            </label>
            <input
              name="subject"
              type="text"
              required
              maxLength={MAX.subject}
              placeholder="Project enquiry / Freelance / Full-time role"
              className="form-input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>
              Message <span style={{ color: 'var(--error)' }}>*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              maxLength={MAX.message}
              placeholder="Tell me about your project, timeline, and budget..."
              className="form-input"
            />
          </div>

          <button type="submit" disabled={sending} className="btn-primary self-start">
            {sending ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                Sending…
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="animate-toastIn fixed bottom-6 right-6 z-50 flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm"
          style={{
            background: toast.type === 'success' ? 'rgba(16,212,142,0.12)' : 'rgba(240,91,91,0.12)',
            border: `1px solid ${toast.type === 'success' ? 'rgba(16,212,142,0.35)' : 'rgba(240,91,91,0.35)'}`,
            backdropFilter: 'blur(14px)',
          }}
          role="alert"
          aria-live="polite"
        >
          <span className="text-lg mt-0.5">{toast.type === 'success' ? '✅' : '❌'}</span>
          <p className="text-sm leading-snug" style={{ color: 'var(--text)', fontFamily: 'Inter,sans-serif' }}>{toast.msg}</p>
          <button
            onClick={() => setToast(null)}
            className="ml-auto opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--text)' }}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
