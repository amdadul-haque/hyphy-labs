'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {

  const [aboutLayerColor, setAboutLayerColor] = useState(null);
  const [missionLayerColor, setMissionLayerColor] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - 150 - window.innerHeight;
      const opacity = 1 - scrollPosition / window.innerHeight;
      const aboutLayerColorr = `rgba(50, 50, 50, ${1 - opacity})`
      setAboutLayerColor(aboutLayerColorr)


      const missionScrollPosition = window.scrollY - 150 - window.innerHeight * 2;
      const missionOpacity = 1 - missionScrollPosition / window.innerHeight;
      const layerColorr = `rgba(50, 50, 50, ${1 - missionOpacity})`
      setMissionLayerColor(layerColorr)

    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='w-full min-h-screen'>
      </div>
      <div id='about' className='w-full bg-white h-screen min-h-screen py-10 font-tertiary sticky top-0'>
        <div className='w-full h-full absolute top-0 left-0'
          style={{
            backgroundColor: aboutLayerColor,
          }}
        >
        </div>
        <div className='w-full h-full max-w-[1320px] mx-auto flex flex-col justify-center '>
          <div className='flex flex-col md:flex-row justify-between md:items-center gap-10'>
            <motion.div
              className='w-full md:w-3/5'
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5 }}
            >
              <p className='text-[40px] leading-none'>
                Hyphy Labs is a cutting-edge movement at the crossroads of quality art, technology, haut couture and Web3, focused on crafting artistic experiences that redefine the essence of creativity in the digital era. Our mission is to create globally resonant encounters, harnessing the innovative power of blockchain and Web3 technologies. Catering to artists, creators, investors, brands, and collectors, we are a hub for quality art, fashion, and technology.
              </p>
            </motion.div>
            <motion.div className='w-full md:w-2/5 flex justify-center md:justify-end'
              initial={{ x: 100, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: .7 }}
            >
              <Image src='/about.jpg' width={800} height={600} className='w-full object-cover' />
            </motion.div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen min-h-screen bg-white py-10 font-tertiary sticky top-0'
      >
        <div className='w-full h-full absolute top-0 left-0'
          style={{
            backgroundColor: missionLayerColor,
          }}
        >

        </div>
        <div className='w-full h-full max-w-[1320px] mx-auto flex flex-col justify-center '>
          <div className='flex flex-col md:flex-row-reverse justify-between md:items-center gap-10'>
            <motion.div
              className='w-full md:w-3/5'
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5 }}
            >
              <p className='text-[40px] leading-none'>
                We believe in the transformative power of Web3 as a catalyst for revolutionary artistic and fashion expression and community engagement.Viewing Web3 not just as a technology but as the foundation for a collaborative and interconnected future in art and fashion, we are unlocking new realms of potential.Our approach transcends traditional dynamics, fostering co - creation and interaction among all participants.Our goal is to leverage this synergy to shape a future that reimagines the realms of connectivity, creativity, and community.
              </p>
            </motion.div>
            <motion.div className='w-full md:w-2/5 flex justify-center md:justify-start'
              initial={{ x: -100, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: .7 }}
            >
              <Image src='/mission.jpg' width={800} height={600} className='w-full object-cover' />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


