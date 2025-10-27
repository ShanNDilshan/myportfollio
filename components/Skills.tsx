import Image from 'next/image'

const SKILLS = [
  'flutter-logo.png','java.png','spring-boot.png','kotlin.png','react.png','reactnative.png','node.png','express.png','firebase.png','docker.png','aws.png','gcp.png','mongodb.png','mysql.png','postgresql.png','html.png','css.png','tailwind.png','figma.png'
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 container-wide">
      <h2 className="text-3xl font-bold section-title">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-4">
        {SKILLS.map((s)=> (
          <div key={s} className="w-20 h-20 bg-[rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-[var(--cardBorder)] hover:scale-105 transition-transform cursor-pointer">
            <Image src={`/assets/skills/${s}`} alt={s} width={48} height={48} />
          </div>
        ))}
      </div>
    </section>
  )
}
