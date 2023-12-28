'use client'
import Image from 'next/image';
import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Projects = () => {
  const card1 = useParallax({
    translateX: [0, -40, 'easeInQuint'],
  });
  // const card2 = useParallax({
  //   // speed: 10,
  // });
  // const card3 = useParallax({
  //   // speed: -10,
  // });
  return (
    <>
      <div className='w-full bg-white min-h-screen flex items-center py-10 px-5'>
        <div
          className='w-full max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6'
          ref={card1.ref}
        >
          <motion.div
            // ref={card1.ref}
            className='w-full max-w-[400px] rounded-[40px] bg-black flex flex-col justify-center items-center py-10'
            initial={{ opacity: 0, x: -200, y: 200, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <Image src='/card1.jpg' width={300} height={400} />
            <h2 className='uppercase text-5xl font-seconday text-white'>Lazy Ape <br /> Official</h2>
          </motion.div>
          <motion.div
            // ref={card2.ref}
            className='w-full max-w-[400px] rounded-[40px]'

            initial={{ opacity: 0, y: -200, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src='/card2.gif' layout='responsive' className='rounded-[50px] w-full object-cover h-full' />
          </motion.div>
          <motion.div
            // ref={card3.ref}
            className='w-full max-w-[400px]  rounded-[40px] bg-black flex justify-center items-center py-10'
            initial={{ opacity: 0, x: 200, y: 200, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: .5 }}
          >
            <h2 className='uppercase text-5xl font-seconday text-white text-center leading-tight'>
              Lazy Ape <br />
              Official <br />
              2.0 <br />
              Coming <br />
              2024
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects