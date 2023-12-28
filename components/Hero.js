'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div id='hero' className='w-full h-[100vh] flex items-center fixed top-0 bg-orange-200 clear-both '
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
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
    </motion.div>

  )
}

export default Hero