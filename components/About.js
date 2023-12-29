'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className='w-full min-h-screen'>
      </div>
      <motion.div id='about' className='w-full h-screen min-h-screen bg-white relative py-10'
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .5 }}
      >
        <div className='w-full h-full max-w-[1320px] mx-auto flex flex-col justify-center'>
          <h2 className='text-4xl'>About</h2>
          <motion.div
            initial={{ opacity: 0, x: -400, scale: 0.2 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <p className='text-2xl'>
              Hyphy Labs is a cutting-edge movement at the crossroads of quality art, technology, haut couture and Web3, focused on crafting artistic experiences that redefine the essence of creativity in the digital era. Our mission is to create globally resonant encounters, harnessing the innovative power of blockchain and Web3 technologies. Catering to artists, creators, investors, brands, and collectors, we are a hub for quality art, fashion, and technology.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className='w-full h-screen min-h-screen bg-white relative py-10'
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .5 }}
      >
        <div className='w-full h-full max-w-[1320px] mx-auto flex flex-col justify-center'>
          <h2 className='text-4xl'>Mission</h2>
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.2 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <p className='text-2xl'>
              Hyphy Labs is a cutting-edge movement at the crossroads of quality art, technology, haut couture and Web3, focused on crafting artistic experiences that redefine the essence of creativity in the digital era. Our mission is to create globally resonant encounters, harnessing the innovative power of blockchain and Web3 technologies. Catering to artists, creators, investors, brands, and collectors, we are a hub for quality art, fashion, and technology.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default About