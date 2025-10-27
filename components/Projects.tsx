import Image from 'next/image'

const PROJECTS = [
  {img:'/assets/projects/bms.png', title:'BMS - Inventory & Sales', desc:'Served as a backend Java/Spring Boot developer on an inventory, sales and cash flow management system for a Sri Lankan restaurant chain.'},
  {img:'/assets/projects/fotmailtrack.png', title:'FotMailTrack', desc:'Flutter mobile application for physical letter tracking at University of Sri Jayewardenepura; integrated with React web and Node.js backends.'},
  {img:'/assets/projects/ride-healing.png', title:'Ride Healing', desc:'Flutter developer for an overseas ride-hailing app; contributing to Spring Boot backend.'},
  {img:'/assets/projects/ufsl.png', title:'UFSL Travel App', desc:'Full development and deployment of a Flutter travel app, published to the App Store and Google Play.'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-20 container-wide">
      <h2 className="text-3xl font-bold section-title">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map(p=> (
          <div key={p.title} className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg border border-[var(--cardBorder)]">
            <div className="w-full h-40 relative">
              <Image src={p.img} alt={p.title} fill style={{objectFit:'cover'}} className="rounded-md"/>
            </div>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
