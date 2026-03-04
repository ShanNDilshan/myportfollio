import Image from 'next/image'
import { useEffect, useState } from 'react'

const ROLES = [
  'Mobile App Developer',
  'Flutter Specialist',
  'Spring Boot Engineer',
  'Full-Stack Builder',
]

const STATS = [
  { value: '4+', label: 'Years Flutter' },
  { value: '2', label: 'Apps Published' },
  { value: '10+', label: 'Projects Built' },
  { value: '1+', label: 'Years Backend' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center container-wide pt-[80px] pb-16">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* ── Text side ── */}
        <div className="flex-1 order-2 md:order-1">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fadeInUp">
            <span className="badge badge-success">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--success)', animation: 'glowPulse 2s ease-in-out infinite' }}
              />
              Available for hire
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp delay-100"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Shanuka</span>
            <br />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85em' }}>aka</span>{' '}
            <span className="gradient-text">Shan</span>
          </h1>

          {/* Animated role */}
          <div
            className="mt-4 h-9 animate-fadeInUp delay-200"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            <span
              className="text-xl md:text-2xl font-semibold gradient-text-accent"
              style={{
                display: 'inline-block',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              {ROLES[roleIdx]}
            </span>
            <span
              className="ml-0.5 inline-block w-0.5 h-6 align-middle"
              style={{ background: 'var(--primary)', animation: 'blink 1s step-end infinite' }}
            />
          </div>

          {/* Bio */}
          <p
            className="mt-5 text-base md:text-lg leading-relaxed max-w-lg animate-fadeInUp delay-300"
            style={{ color: 'var(--text-muted)' }}
          >
            I build <strong style={{ color: 'var(--text)' }}>production-ready mobile apps</strong> with Flutter and
            Java, and <strong style={{ color: 'var(--text)' }}>scalable backends</strong> with Spring Boot — from
            first commit to App Store launch.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fadeInUp delay-400">
            <a href="#contact" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3.07a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.01-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" /></svg>
              Hire Me
            </a>
            <a href="#projects" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="m8 21 4-4 4 4" /><path d="M12 17v4" /></svg>
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fadeInUp delay-500">
            {STATS.map(s => (
              <div
                key={s.label}
                className="text-center p-3 rounded-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div
                  className="text-2xl font-bold gradient-text-accent"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Photo side ── */}
        <div className="order-1 md:order-2 flex-shrink-0 flex justify-center animate-fadeInUp delay-300">
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-glow"
              style={{
                background: 'conic-gradient(from 0deg, #7c58fc, #06e5d4, #7c58fc)',
                padding: '3px',
                borderRadius: '50%',
                filter: 'blur(1px)',
              }}
            />
            {/* Photo container */}
            <div
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden animate-float"
              style={{
                border: '3px solid transparent',
                background: 'linear-gradient(var(--bg), var(--bg)) padding-box, var(--grad-accent) border-box',
              }}
            >
              <Image
                src="/assets/me/me.jpg"
                alt="Shanuka Dilshan — Mobile App Developer"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Floating badge: Flutter */}
            <div
              className="absolute -bottom-3 -left-6 badge badge-primary animate-float delay-200"
              style={{ animationDuration: '3.5s', zIndex: 10 }}
            >
              📱 Flutter
            </div>
            {/* Floating badge: Spring */}
            <div
              className="absolute -top-3 -right-6 badge badge-cyan animate-float delay-400"
              style={{ animationDuration: '4s', zIndex: 10 }}
            >
              ☕ Spring Boot
            </div>
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center animate-fadeIn delay-600">
        <a
          href="#skills"
          className="flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="text-xs" style={{ fontFamily: 'Sora, sans-serif' }}>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ animation: 'float 1.6s ease-in-out infinite' }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
