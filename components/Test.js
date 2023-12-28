'use client';

import { Parallax, useParallax } from 'react-scroll-parallax';

export default function Test() {

  const parallax = useParallax({
    translateY: [-100, 100, 'easeInQuint'],
  });
  const parallax2 = useParallax({
    translateY: [100, -500, 'easeInQuint'],
  });
  return (
    <>
      <Parallax
        scale={[1, 0]}
        translateX={['-400px', '0px']}
        rotate={[-180, 0]}
        easing="easeInQuad"
      >
        <div className="h-[100vh]  bg-red-500" />
      </Parallax>
      <div ref={parallax.ref} className='h-[300px] w-96 bg-green-500'></div>
      <div ref={parallax2.ref} className='h-[300px] w-96 bg-green-500'></div>
    </>
  );
}