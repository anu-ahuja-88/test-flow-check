import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
