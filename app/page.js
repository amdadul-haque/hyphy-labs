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
      {/* <div className='bg-fuchsia-400 h-[150vh] w-full'></div> */}
      {/* <About /> */}
      <Hero />
      <div id='about' className='bg-white h-[100vh] w-full text-center text-5xl pt-20'>About</div>
      <div className='bg-white h-[100vh] w-full text-center text-5xl'>Mission</div>
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
