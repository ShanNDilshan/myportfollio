import Image from 'next/image'
import { useState } from 'react'

type Skill = { name: string; icon: string; cat: string }

const SKILLS: Skill[] = [
  // Mobile
  { name: 'Flutter', icon: '/assets/skills/flutter-logo.png', cat: 'Mobile' },
  { name: 'Kotlin', icon: '/assets/skills/kotlin.png', cat: 'Mobile' },
  { name: 'React Native', icon: '/assets/skills/reactnative.png', cat: 'Mobile' },
  // Backend
  { name: 'Java', icon: '/assets/skills/java.png', cat: 'Backend' },
  { name: 'Spring Boot', icon: '/assets/skills/spring-boot.png', cat: 'Backend' },
  { name: 'Node.js', icon: '/assets/skills/node.png', cat: 'Backend' },
  { name: 'Express', icon: '/assets/skills/express.png', cat: 'Backend' },
  // Frontend
  { name: 'React', icon: '/assets/skills/react.png', cat: 'Frontend' },
  { name: 'HTML', icon: '/assets/skills/html.png', cat: 'Frontend' },
  { name: 'CSS', icon: '/assets/skills/css.png', cat: 'Frontend' },
  { name: 'Tailwind', icon: '/assets/skills/tailwind.png', cat: 'Frontend' },
  // Cloud & DevOps
  { name: 'Docker', icon: '/assets/skills/docker.png', cat: 'Cloud' },
  { name: 'AWS', icon: '/assets/skills/aws.png', cat: 'Cloud' },
  { name: 'GCP', icon: '/assets/skills/gcp.png', cat: 'Cloud' },
  { name: 'Firebase', icon: '/assets/skills/firebase.png', cat: 'Cloud' },
  // Databases & Tools
  { name: 'MongoDB', icon: '/assets/skills/mongodb.png', cat: 'Data' },
  { name: 'MySQL', icon: '/assets/skills/mysql.png', cat: 'Data' },
  { name: 'PostgreSQL', icon: '/assets/skills/postgresql.png', cat: 'Data' },
  { name: 'Figma', icon: '/assets/skills/figma.png', cat: 'Data' },
]

const CATS = ['All', 'Mobile', 'Backend', 'Frontend', 'Cloud', 'Data']
const CAT_LABELS: Record<string, string> = {
  All: 'All', Mobile: '📱 Mobile', Backend: '⚙️ Backend',
  Frontend: '🌐 Frontend', Cloud: '☁️ Cloud & DevOps', Data: '🗄️ Data & Tools',
}

export default function Skills() {
  const [active, setActive] = useState('All')

  const shown = active === 'All' ? SKILLS : SKILLS.filter(s => s.cat === active)

  return (
    <section id="skills" className="py-24 container-wide">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="badge badge-primary mb-4" style={{ fontFamily: 'Sora,sans-serif' }}>Tech Stack</span>
        <h2 className="section-title block">Skills &amp; Expertise</h2>
        <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
          A curated toolkit built through real projects — from mobile to cloud.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATS.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`skill-tab badge text-xs cursor-pointer transition-all duration-200 ${active === c ? 'active' : 'badge-primary'}`}
            style={{ padding: '0.4rem 1rem' }}
          >
            {CAT_LABELS[c]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {shown.map((s, i) => (
          <div
            key={s.name}
            className="glow-card flex flex-col items-center gap-2 p-4 cursor-default select-none animate-fadeInUp"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="w-12 h-12 relative flex items-center justify-center">
              <Image
                src={s.icon}
                alt={s.name}
                width={48}
                height={48}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-xs text-center leading-tight" style={{ color: 'var(--text-muted)', fontFamily: 'Inter,sans-serif' }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
