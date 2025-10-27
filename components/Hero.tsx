import Image from 'next/image'

export default function Hero(){
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center container-wide pt-[80px]">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold welcome-gradient">Hi, I'm Shanuka (Shan)</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">I am a Mobile Application Developer with 4 years experience in Flutter and Java, and 1+ years in Spring Boot backend development. I build production-ready apps optimized for App Store and Play Store.</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white glow-btn">Hire Me</a>
          <a href="#projects" className="px-4 py-2 rounded-md border border-[var(--cardBorder)]">View Projects</a>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--cardBorder)]">
          <Image src="/assets/me/me.jpg" alt="Shanuka Dilshan" width={320} height={320} />
        </div>
      </div>
    </section>
  )
}
