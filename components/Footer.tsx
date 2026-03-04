export default function Footer() {
  const NAV = ['About', 'Skills', 'Projects']

  return (
    <footer style={{ background: 'rgba(0,0,0,0.25)', borderTop: '1px solid var(--border)' }}>
      {/* Gradient line */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, var(--primary), var(--cyan), transparent)' }} />

      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'var(--grad-accent)' }}
              >
                SD
              </span>
              <span className="font-bold text-white" style={{ fontFamily: 'Sora,sans-serif' }}>Shanuka Dilshan</span>
            </div>
            <p className="text-xs max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Mobile App Developer · Flutter &amp; Spring Boot<br />
              Building apps that reach App Store &amp; Play Store.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h5 className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>Navigation</h5>
            <ul className="flex flex-col gap-2">
              {NAV.map(n => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontFamily: 'Sora,sans-serif' }}>Connect</h5>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/ShanNDilshan', label: 'GitHub', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg> },
                { href: 'https://www.linkedin.com/in/shanndilshan', label: 'LinkedIn', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                { href: 'mailto:shanukanimeshdilshan@gmail.com', label: 'Email', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ color: 'var(--text-muted)', background: 'var(--surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--primary)'
                      ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                      ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
        >
          <span>© {new Date().getFullYear()} Shanuka Dilshan. All rights reserved.</span>
          <span style={{ fontFamily: 'Sora,sans-serif' }}>
            Built with{' '}
            <span className="gradient-text-accent font-semibold">Next.js</span>
            {' '}·{' '}
            <span className="gradient-text-accent font-semibold">TypeScript</span>
            {' '}·{' '}
            <span className="gradient-text-accent font-semibold">Three.js</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
