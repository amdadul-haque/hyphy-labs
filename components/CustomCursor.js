'use client'
import React, { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'

const CustomCursor = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsClicked((prevIsClicked) => !prevIsClicked);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const outerStyle = {
    // backgroundColor: isClicked ? "rgb(0,0,0)" : "transparent",
    backgroundColor: "transparent",
    border: "2px solid rgb(0,0,0)",
    padding: "20px",
    borderRadius: "50%",
    width: "100px",
  };

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={17}
      color="0, 189, 233"
      outerAlpha={0.2}
      innerStyle={{
        backgroundColor: "rgb(0,0,0)",
        borderRadius: "50%",
        width: "50%",
      }}
      outerStyle={outerStyle}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "li",
        "button",
        ".link",
      ]}
    />
  )
}

export default CustomCursor