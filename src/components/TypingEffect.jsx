import React, { useState, useEffect } from "react";

const fullText = "Fuull Stack Developer";
// Tentukan kecepatan pengetikan (misalnya, 100 milidetik per karakter)
const typingSpeed = 100;

export default function TypingEffect() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    
    const intervalId = setInterval(() => {
    
      if (index < fullText.length) {
       
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="text-[#AAEDEF] text-[5rem]">
      {displayedText}
      
      <span className="cursor">|</span>
    </span>
  );
}
