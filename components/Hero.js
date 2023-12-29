'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = 1 + - scrollPosition / window.innerHeight;
      setScrollOpacity(opacity);
      const bgColor = `rgba(0, 0, 0, ${1 - opacity})`;
      setBackgroundColor(bgColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id='hero'
        className='w-full h-[100vh] flex items-center fixed top-0'
        style={{ opacity: scrollOpacity, backgroundColor: backgroundColor }}
      >
        <div className='w-full max-w-[1320px] mx-auto'>
          <motion.div className='w-full'
            initial={{ opacity: 0, y: 200, scale: 0.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <h2 className='text-2xl sm:text-7xl font-bold max-w-[700px] text-left'>Connecting the World Through Innovative Artistry</h2>
          </motion.div>
        </div>
      </div >
      {/* <div className='w-full bg-white min-h-[100vh] py-20 relative top-[100vh]'>
        <div className='w-full max-w-[1320px] mx-auto'>
          <h2 className='text-4xl'>About</h2>
          <p className='text-2xl'>
            Hyphy Labs is a cutting-edge movement at the crossroads of quality art, technology, haut couture and Web3, focused on crafting artistic experiences that redefine the essence of creativity in the digital era. Our mission is to create globally resonant encounters, harnessing the innovative power of blockchain and Web3 technologies. Catering to artists, creators, investors, brands, and collectors, we are a hub for quality art, fashion, and technology.
          </p>
        </div>
      </div> */}
    </>
  )
}

export default Hero