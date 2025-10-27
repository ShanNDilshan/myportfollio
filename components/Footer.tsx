export default function Footer(){
  return (
    <footer className="py-10 bg-[rgba(0,0,0,0.12)] border-t border-[var(--cardBorder)]">
      <div className="container-wide flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h4 className="font-bold">Shanuka Dilshan</h4>
          <p className="text-sm text-gray-300">Mobile App Developer (Flutter) • Backend (Spring Boot)</p>
        </div>

        <div className="flex gap-4 items-center">
          <a href="https://github.com/ShanNDilshan" target="_blank" rel="noreferrer"><img src="/assets/social/GitHub-logo.png" alt="github" className="w-6 h-6"/></a>
          <a href="http://www.linkedin.com/in/shanndilshan" target="_blank" rel="noreferrer"><img src="/assets/social/linkedin.png" alt="linkedin" className="w-6 h-6"/></a>
          <a href="mailto:shanukanimeshdilshan@gmail.com"><img src="/assets/social/email.png" alt="email" className="w-6 h-6"/></a>
        </div>

        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Shanuka Dilshan. Built with care.</div>
      </div>
    </footer>
  )
}
