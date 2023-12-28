// components/ResizableDiv.js
'use client'
import { useEffect, useState } from 'react';

const ResizableDiv = () => {
  const initialHeight = 800;
  const [height, setHeight] = useState(initialHeight);
  const [topScroll, setTopScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setTopScroll(scrollTop);
      const newHeight = Math.max(250, initialHeight - scrollTop);
      setHeight(newHeight);
      console.log(newHeight);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className={`bg-blue-500 p-0 w-full z-20 flex flex-col justify-between 
      `
    }
      style={{ height: `${height}px` }}
    >
      {/* <div className=`w-full  flex flex-col``> */}

      {/* </div> */}
      <h1 className='text-[110px] font-bold text-center leading-none'>About</h1>
      <h1 className='text-[110px] font-bold text-center leading-none'>HyPhy Labs</h1>
    </div>
  );
};

export default ResizableDiv;
