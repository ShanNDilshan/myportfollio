import emailjs from '@emailjs/browser'
import { useState } from 'react'

const SERVICE_ID = 'service_4mb8i9q'
const TEMPLATE_ID = 'template_j5c4gdk'
const PUBLIC_KEY = 'wGIOhl8bmqpZgi9iF'

export default function Contact(){
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    }

    try{
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      alert('Message sent — I will reply soon')
      form.reset()
    }catch(err){
      console.error(err)
      alert('Failed to send — please email directly to shanukanimeshdilshan@gmail.com')
    }finally{setSending(false)}
  }

  return (
    <section id="contact" className="py-20 container-wide">
      <h2 className="text-3xl font-bold section-title">Hire Me</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[var(--cardBorder)]" />
          <input name="email" type="email" required placeholder="Your email" className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[var(--cardBorder)]" />
        </div>
        <input name="subject" required placeholder="Subject" className="mt-4 p-3 w-full bg-[rgba(255,255,255,0.02)] rounded border border-[var(--cardBorder)]" />
        <textarea name="message" required placeholder="Message" rows={6} className="mt-4 p-3 w-full bg-[rgba(255,255,255,0.02)] rounded border border-[var(--cardBorder)]"></textarea>
        <div className="mt-4">
          <button type="submit" disabled={sending} className="px-4 py-2 bg-[var(--accent)] text-white rounded glow-btn">{sending? 'Sending...':'Send Message'}</button>
        </div>
      </form>
    </section>
  )
}
