import Link from 'next/link'
import { useState } from 'react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 h-[65px] z-40 glass-nav">
      <div className="container-wide h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-white font-bold">Shanuka Dilshan</div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="hover:text-[var(--accent)]">About</Link>
          <Link href="#skills" className="hover:text-[var(--accent)]">Skills</Link>
          <Link href="#projects" className="hover:text-[var(--accent)]">Projects</Link>
          <Link href="#contact" className="hover:text-[var(--accent)]">Hire Me</Link>
          <div className="flex gap-3">
            <a href="https://github.com/ShanNDilshan" target="_blank" rel="noreferrer"><img src="/assets/social/GitHub-logo.png" alt="github" className="w-6 h-6"/></a>
            <a href="http://www.linkedin.com/in/shanndilshan" target="_blank" rel="noreferrer"><img src="/assets/social/linkedin.png" alt="linkedin" className="w-6 h-6"/></a>
            <a href="mailto:shanukanimeshdilshan@gmail.com" target="_blank" rel="noreferrer"><img src="/assets/social/email.png" alt="email" className="w-6 h-6"/></a>
          </div>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[rgba(3,0,20,0.6)] backdrop-blur p-4">
          <a href="#about" className="block py-2">About</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#contact" className="block py-2">Hire Me</a>
        </div>
      )}
    </header>
  )
}
