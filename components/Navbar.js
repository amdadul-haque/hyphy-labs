import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full relative top-0 bg-white text-black border-b-2 border-black z-50'>
      <div className='w-full py-2 max-w-[1320px] mx-auto px-3 flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' width={100} height={50} />
        </Link>
        <div className='flex gap-4 items-center'>
          <Link href='/'>
            <Image src='/x-twitter.svg' width={35} height={40} />
          </Link>
          <Link href='/#about' className='text-xl font-bold'> About </Link>
          <Link href='/contact' className='text-xl font-bold'> Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar