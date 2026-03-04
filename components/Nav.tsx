import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Hire Me' },
]

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Email">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`glass-nav fixed top-0 left-0 right-0 h-[68px] z-40 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-wide h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="#about" className="flex items-center gap-2 group" aria-label="Home">
          <span
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'var(--grad-accent)', boxShadow: '0 0 14px rgba(124,88,252,0.5)' }}
          >
            SD
          </span>
          <span className="hidden sm:block font-semibold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
            Shanuka<span className="gradient-text-accent"> Dilshan</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              style={{
                color: active === l.href ? 'white' : 'var(--text-muted)',
                background: active === l.href ? 'rgba(124,88,252,0.12)' : 'transparent',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              {l.label}
              {active === l.href && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: 'var(--primary)' }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          {[
            { href: 'https://github.com/ShanNDilshan', Icon: GitHubIcon },
            { href: 'https://www.linkedin.com/in/shanndilshan', Icon: LinkedInIcon },
            { href: 'mailto:shanukanimeshdilshan@gmail.com', Icon: EmailIcon },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'white'
                  ; (e.currentTarget as HTMLElement).style.background = 'rgba(124,88,252,0.15)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                  ; (e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden animate-slideDown px-4 pb-4"
          style={{ background: 'rgba(4,1,26,0.95)', backdropFilter: 'blur(14px)', borderTop: '1px solid var(--border)' }}
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 text-sm font-medium border-b"
              style={{
                color: active === l.href ? 'white' : 'var(--text-muted)',
                borderColor: 'var(--border)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              {active === l.href && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
              )}
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/ShanNDilshan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/shanndilshan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><LinkedInIcon /></a>
            <a href="mailto:shanukanimeshdilshan@gmail.com" style={{ color: 'var(--text-muted)' }}><EmailIcon /></a>
          </div>
        </div>
      )}
    </header>
  )
}
