'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-[50vh] flex items-center'>
      <motion.div className='w-full'
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .5 }}
      >
        <h2 className='text-2xl sm:text-7xl font-bold max-w-[700px] text-center mx-auto'>Connecting the World Through Innovative Artistry</h2>
      </motion.div>
    </div>

  )
}

export default Hero