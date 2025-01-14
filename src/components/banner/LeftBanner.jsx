import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.","Frontend Developer", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 max-lg:pb-5">
      <div className="flex flex-col gap-5">
        <h4 className=" lg:text-lg text-sm font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-2xl lg:text-4xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Md. Delwar Hossain</span>
        </h1>
        <h2 className="text-lg lg:text-2xl font-semibold lg:font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have hands-on experience in web design & development. I excel in designing and maintaining responsive websites with smooth user experience. I am adept at writing clean and efficient code on both the client and server sides.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner