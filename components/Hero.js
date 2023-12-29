'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 200;
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
        style={{
          // opacity: scrollOpacity,
          backgroundColor: backgroundColor
        }}
      >
        <div className='w-full max-w-[1320px] mx-auto'>
          <motion.div className='w-full'
            initial={{ opacity: 0, y: 200, scale: 0.2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <h2 className='text-2xl sm:text-[102px] font-bold max-w-[1000px] text-left leading-none'>Connecting the World Through Innovative Artistry</h2>
          </motion.div>
        </div>
      </div >
    </>
  )
}

export default Hero