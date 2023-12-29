'use client'
import Image from 'next/image';
import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import About from './About';

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
      <div className='w-full bg-white h-screen min-h-[90vh] flex items-center py-10 px-5'>
        <div
          className='w-full bg-red max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6'
          ref={card1.ref}
        >
          <div className='hover:scale-105 transition-all duration-300 w-full'>
            <motion.div
              // ref={card1.ref}
              className='w-full max-w-[400px] rounded-[40px] bg-black flex flex-col justify-center items-center py-10 hover:scale-150 transition-all hover:cursor-pointer scale-50'
              initial={{ y: 100 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ duration: .5 }}
            >
              <Image src='/card1.jpg' width={300} height={400} />
              <h2 className='uppercase text-5xl font-seconday text-white'>Lazy Ape <br /> Official</h2>
            </motion.div>
          </div>
          <div className='hover:scale-105 transition-all duration-300 w-full hover:cursor-pointer'>
            <motion.div
              // ref={card2.ref}
              className='w-full max-w-[400px] rounded-[40px] relative hover:scale-150 transition-all h-full'

              initial={{ y: 100 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ duration: .5 }}
            >
              <img src='/card2.gif' layout='responsive' className='rounded-[50px] w-full object-cover h-full' />
              <div className='w-full absolute py-8 bg-black opacity-80 top-[50%] left-0 translate-y-[-50%]'>
                <h2 className='uppercase text-5xl font-seconday text-white text-center leading-tight'>
                  Coming <br />
                  2024
                </h2>
              </div>
            </motion.div>
          </div>
          <div className='hover:scale-105 transition-all duration-300 w-full hover:cursor-pointer'>
            <motion.div
              // ref={card3.ref}
              className='w-full max-w-[400px] rounded-[40px] bg-black flex justify-center items-center py-10 h-full'
              initial={{ y: 100 }}
              whileInView={{ x: 0, y: 0 }}
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
      </div>
    </>
  );
}

export default Projects