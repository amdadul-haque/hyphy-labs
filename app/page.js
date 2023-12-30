import About from '@/components/About'
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
      <AnimatedCursor
        innerSize={8}
        outerSize={17}
        color="0, 189, 233"
        outerAlpha={0.2}
        innerStyle={{
          backgroundColor: "rgb(212, 20, 90)",

          borderRadius: "50%",
          width: "50%",
        }}
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid rgb(212, 20, 90)",
          padding: "20px",
          borderRadius: "50%",
          width: "100px",
        }}

        // showSystemCursor={true}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "li",
          "button",
          ".link",
        ]}
      />
      {/* <Test /> */ }
  {/* <ResizableDiv /> */ }
  {/* <div className='bg-orange-400 h-[100vh] w-full'></div> */ }
  {/* <div className='bg-orange-400 h-[100vh] w-full sticky top-0'></div> */ }
  {/* <div className='bg-green-400 h-[100vh] w-full sticky top-0'></div> */ }
  {/* <div className='bg-teal-500 h-[100vh] w-full sticky top-0'></div> */ }
    </main >
  )
}
