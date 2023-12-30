import About from '@/components/About'
import CustomCursor from '@/components/CustomCursor'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ResizableDiv from '@/components/ResizableDiv'
import Test from '@/components/Test'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCursor from 'react-animated-cursor'

export default function Home() {
  return (
    <main className='font-primary'>
      <Hero />
      <About />
      <Projects />
      <CustomCursor />
    </main >
  )
}
