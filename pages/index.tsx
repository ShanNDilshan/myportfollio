import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Starfield from '../components/Starfield'

export default function Home(){
  return (
    <>
      <Head>
        <title>Shanuka Dilshan - Mobile App Developer | Flutter & Spring Boot</title>
        <meta name="description" content="Mobile Application Developer with 4 years experience in Flutter and Java. Specialized in App Store and Play Store optimized apps. 1+ years Spring Boot backend development." />
        <meta name="keywords" content="Flutter Developer, Mobile App Developer, Spring Boot, Java Developer, React Native, App Store, Google Play, Shanuka Dilshan" />
        <meta name="author" content="Shanuka Dilshan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shanuka Dilshan - Mobile App Developer" />
        <meta property="og:description" content="Mobile Application Developer specializing in Flutter and Spring Boot. Building production-ready apps for 4+ years." />
        <meta property="og:site_name" content="Shanuka Dilshan Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shanuka Dilshan - Mobile App Developer" />
        <meta name="twitter:description" content="Mobile Application Developer with 4 years Flutter & Java experience" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      
      <div>
        <Starfield />
        <div className="relative z-10">
          <Nav />
          <main className="pt-[65px]">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
