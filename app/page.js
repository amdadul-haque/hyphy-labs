import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ResizableDiv from '@/components/ResizableDiv'
import Test from '@/components/Test'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='font-primary'>
      <Hero />
      <About />
      <Projects />
      {/* <Test /> */}
      {/* <ResizableDiv /> */}
      {/* <div className='bg-orange-400 h-[100vh] w-full'></div> */}
      {/* <div className='bg-orange-400 h-[100vh] w-full sticky top-0'></div> */}
      {/* <div className='bg-green-400 h-[100vh] w-full sticky top-0'></div> */}
      {/* <div className='bg-teal-500 h-[100vh] w-full sticky top-0'></div> */}
    </main>
  )
}
