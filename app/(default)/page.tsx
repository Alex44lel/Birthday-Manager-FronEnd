export const metadata = {
  title: 'Home - Birthday Manager',
  description: 'Birthday reminders with google sheets and google calendar',
  robots:'index',
  viewport:'width=device-width, initial-scale=1.0',
  charset:'UTF-8'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  
  return (
    <>
      <Hero />
      <Zigzag />
      {/* <Features /> */}
      {/* <Testimonials />  May add testimonials in the future*/}
      {/* <Newsletter /> May add newsletter in the future*/}
    </>
  )
}
